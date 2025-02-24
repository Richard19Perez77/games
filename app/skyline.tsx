import { View } from "react-native";
import CodeViewer from "../components/skyline/codeviewer";
import { skylineData } from "../data/skyline/kotlinskylinedata";

const Skyline = () => {
  console.log("Skyline Data:", skylineData); // Debug log
  return (
    <View>
      <CodeViewer code={skylineData} />
    </View>
  );
};

export default Skyline;