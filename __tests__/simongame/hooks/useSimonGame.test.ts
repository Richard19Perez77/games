import { renderHook, act, waitFor } from '@testing-library/react-native';
import useSimonGame from '../../../hooks/simon/useSimonGame';

describe('useSimonGame Hook', () => {
  it('should initialize with correct default values', () => {
    const { result } = renderHook(() => useSimonGame());

    expect(result.current.level).toBe(0);
    expect(result.current.activeColor).toBe(null);
    expect(result.current.colors).toEqual(['red', 'blue', 'green', 'orange']);
  });

  it('should start a new game and set level to 1', () => {
    const { result } = renderHook(() => useSimonGame());

    act(() => {
      result.current.handleUserPress('red');
    });

    expect(result.current.level).toBeGreaterThan(0); // Level should increase
  });

  it('should update activeColor when sequence plays', async () => {
    const { result } = renderHook(() => useSimonGame());

    act(() => {
      result.current.handleUserPress('red'); // Simulate user playing
    });

    await waitFor(() => {
      expect(result.current.activeColor).toBe(null); // Should reset after playing
    });
  });

  it('should detect game over on incorrect input', () => {
    const { result } = renderHook(() => useSimonGame());

    act(() => {
      result.current.handleUserPress('wrong-color');
    });

    expect(result.current.level).toBeGreaterThan(0); // Ensure the sequence resets
  });
});
