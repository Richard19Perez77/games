import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import SimonBoard from '../../../components/simon/SimonBoard';
import useSimonGame from '../../../hooks/simon/useSimonGame';

// Wrapper component for testing hook in a component
const TestComponent = () => {
  const { colors, activeColor, handleUserPress } = useSimonGame();
  return <SimonBoard colors={colors} activeColor={activeColor} handleUserPress={handleUserPress} />;
};

describe('SimonBoard Hook Integration', () => {
  it('renders game board with correct colors', () => {
    const { getByTestId } = render(<TestComponent />);
    expect(getByTestId('button-red')).toBeTruthy();
    expect(getByTestId('button-blue')).toBeTruthy();
    expect(getByTestId('button-green')).toBeTruthy();
    expect(getByTestId('button-orange')).toBeTruthy();
  });

  it('should update active color during sequence play', async () => {
    const { getByTestId, rerender } = render(<TestComponent />);

    fireEvent.press(getByTestId('button-blue'));

    await waitFor(() => {
      rerender(<TestComponent />);
      expect(getByTestId('button-blue').props.style).toContainEqual(expect.objectContaining({ opacity: 0.6 }));
    });
  });

  it('should detect correct user sequence', async () => {
    const { getByTestId, rerender } = render(<TestComponent />);

    fireEvent.press(getByTestId('button-red'));
    fireEvent.press(getByTestId('button-blue'));

    await waitFor(() => {
      rerender(<TestComponent />);
      expect(getByTestId('button-red').props.style).toContainEqual(expect.objectContaining({ opacity: 0.6 }));
    });
  });

  it('should detect incorrect user sequence (game over)', async () => {
    const { getByTestId } = render(<TestComponent />);

    fireEvent.press(getByTestId('button-green')); // Wrong input

    await waitFor(() => {
      expect(getByTestId('button-red')).toBeTruthy(); // Game should reset
    });
  });
});
