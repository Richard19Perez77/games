import { Text, View } from "react-native";
import CodeViewer from "../components/skyline/codeviewer";
import { skylineData } from "../data/skyline/kotlinskylinedata";
import { styles } from '../styles/skyline/skylinestyles';

const Skyline = () => {
  console.log("Skyline Data:", skylineData); // Debug log
  return (
    <View style={styles.container}>
      <Text>DEBUG: {skylineData ? "Data Loaded" : "No Data"}</Text>
      <CodeViewer code={skylineData} />
    </View>
  );
};

export default Skyline;