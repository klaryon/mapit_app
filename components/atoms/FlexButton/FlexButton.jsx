import { TouchableOpacity, Text } from "react-native";
import styles from "./styles";
const FlexButton = ({ title = "", onPress, type = "primary" }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={type === "primary" ? styles.buttonPrimary : styles.buttonSecondary}
    >
      <Text
        style={
          type === "primary"
            ? styles.buttonPrimaryText
            : styles.buttonSecondaryText
        }
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};
export default FlexButton;
