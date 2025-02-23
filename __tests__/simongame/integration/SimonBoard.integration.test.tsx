import React, { useState } from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import SimonBoard from '../../../components/simon/SimonBoard';

const TestWrapper = () => {
  const colors = ['red', 'blue', 'green', 'orange'];
  const [activeColor, setActiveColor] = useState<string | null>(null);

  return (
    <SimonBoard colors={colors} activeColor={activeColor} handleUserPress={setActiveColor} />
  );
};

describe('SimonBoard Integration', () => {
  it('updates the active color when a button is pressed', () => {
    const { getByTestId, rerender } = render(<TestWrapper />);

    // Simulate pressing the blue button
    fireEvent.press(getByTestId('button-blue'));

    // Rerender with updated state
    rerender(<TestWrapper />);

    // Expect activeColor to be 'blue' (checked by updated styling)
    expect(getByTestId('button-blue').props.style).toContainEqual(expect.objectContaining({ opacity: 0.6 }));
  });
});
