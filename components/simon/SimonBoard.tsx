import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { styles } from '../../styles/simon/simonstyles';

interface SimonBoardProps {
  colors: string[];
  activeColor: string | null;
  handleUserPress: (color: string) => void;
}

const SimonBoard: React.FC<SimonBoardProps> = ({ colors, activeColor, handleUserPress }) => {
  return (
    <View style={styles.board}>
      {colors.map((color) => (
        <TouchableOpacity
          key={color}
          style={[
            styles.button,
            { backgroundColor: color === 'orange' ? '#CC6600' : color }, // Darker orange for visibility
            activeColor === color && styles.activeButton,
          ]}
          onPress={() => handleUserPress(color)}
          activeOpacity={0.6}
        />
      ))}
    </View>
  );
};

export default SimonBoard;
