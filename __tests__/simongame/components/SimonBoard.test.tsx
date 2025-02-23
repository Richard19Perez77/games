import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import SimonBoard from '../../../components/simon/SimonBoard';

// unit tests for SimonBoard
describe('SimonBoard Component', () => {
  const colors = ['red', 'blue', 'green', 'orange'];
  const handleUserPress = jest.fn(); // Mock function

  it('renders all color buttons', () => {
    const { getAllByRole } = render(
      <SimonBoard colors={colors} activeColor={null} handleUserPress={handleUserPress} />
    );

    // Expect 4 buttons to exist (one for each color)
    const buttons = getAllByRole('button');
    expect(buttons).toHaveLength(colors.length);
  });

  it('applies active style to the correct button', () => {
    const { getByTestId } = render(
      <SimonBoard colors={colors} activeColor="blue" handleUserPress={handleUserPress} />
    );

    // Find the active button
    const activeButton = getByTestId('button-blue');

    // Expect it to have active styling
    expect(activeButton.props.style).toContainEqual(expect.objectContaining({ opacity: 0.6 }));
  });

  it('calls handleUserPress when a button is pressed', () => {
    const { getByTestId } = render(
      <SimonBoard colors={colors} activeColor={null} handleUserPress={handleUserPress} />
    );

    const button = getByTestId('button-red');

    // Simulate a press
    fireEvent.press(button);

    // Ensure the handler was called with 'red'
    expect(handleUserPress).toHaveBeenCalledWith('red');
  });
});
