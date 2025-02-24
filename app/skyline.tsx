import { Text, View } from "react-native";
import CodeViewer from "../components/skyline/codeviewer";
import { skylineData } from "../data/skyline/kotlinskylinedata";
import { styles } from '../styles/skyline/skylinestyles';

const Skyline = () => {
  return (
    <View style={styles.container}>
      <CodeViewer code={skylineData} />
    </View>
  );
};

export default Skyline;