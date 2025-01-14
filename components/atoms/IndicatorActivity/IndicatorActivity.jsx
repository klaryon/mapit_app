import { ActivityIndicator, View } from "react-native";
import styles from "./styles";
const IndicatorActivity = ({
  size = 0,
  color = "",
  testID = "activity-indicator",
}) => {
  return (
    <View style={styles.indicator}>
      <ActivityIndicator size={size} color={color} testID={testID} />
    </View>
  );
};
export default IndicatorActivity;
