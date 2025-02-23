import { useState, useEffect } from 'react';
import { Alert } from 'react-native';

// Define available colors
const colors: string[] = ['red', 'blue', 'green', 'orange'];

const useSimonGame = () => {
  const [sequence, setSequence] = useState<string[]>([]);
  const [userSequence, setUserSequence] = useState<string[]>([]);
  const [isUserTurn, setIsUserTurn] = useState<boolean>(false);
  const [level, setLevel] = useState<number>(0);
  const [activeColor, setActiveColor] = useState<string | null>(null);

  useEffect(() => {
    startGame();
  }, []);

  const startGame = (): void => {
    setSequence([]);
    setUserSequence([]);
    setLevel(0);
    addColorToSequence([]);
  };

  const addColorToSequence = (prevSequence: string[] = sequence): void => {
    const randomColor: string = colors[Math.floor(Math.random() * colors.length)];
    const newSequence: string[] = [...prevSequence, randomColor];
    setSequence(newSequence);
    setLevel(newSequence.length);
    playSequence(newSequence);
  };

  const playSequence = async (seq: string[]): Promise<void> => {
    setIsUserTurn(false);
    for (let i = 0; i < seq.length; i++) {
      await new Promise<void>((resolve) => {
        setTimeout(() => {
          setActiveColor(seq[i]);
          setTimeout(() => {
            setActiveColor(null);
            resolve();
          }, 500);
        }, 500);
      });
    }
    setIsUserTurn(true);
    setUserSequence([]);
  };

  const handleUserPress = (color: string): void => {
    if (!isUserTurn) return;
    const newUserSequence = [...userSequence, color];
    setUserSequence(newUserSequence);

    const currentIndex = newUserSequence.length - 1;
    if (newUserSequence[currentIndex] !== sequence[currentIndex]) {
      Alert.alert('Game Over', 'You pressed the wrong button!', [
        { text: 'Restart', onPress: () => startGame() },
      ]);
      return;
    }

    if (newUserSequence.length === sequence.length) {
      setTimeout(() => {
        addColorToSequence(sequence);
      }, 1000);
    }
  };

  return {
    colors,
    level,
    activeColor,
    handleUserPress,
  };
};

export default useSimonGame;
