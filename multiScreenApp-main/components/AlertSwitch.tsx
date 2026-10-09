import { Ionicons } from "@expo/vector-icons";
import { Pressable, StyleSheet, Switch, Text, View } from "react-native";

interface AlertRowProps{
    label: string;
    description?: string;
    enabled: boolean;
    onToggle: (value: boolean) => void;
    type: "switch" | "button";
}



export default function AlertRow({label,description,enabled,onToggle,type}:AlertRowProps) {

  const control =
   (type === "switch") ?(
      <Switch
      value={enabled}
      onValueChange={onToggle}
      />
    ):
     (
      <Pressable onPress={() => onToggle(!enabled)}>
        <Ionicons name="notifications" size={24} color={enabled ? "green" : "gray"} />
      </Pressable>)
    


  return (
    <View style={styles.row}>
      <View style={styles.textBlock}>
        <Text style={styles.label}>{label}</Text>
      {description && <Text style={styles.description}>{description}</Text>}
      </View>

      {control}

   
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#E7EBEE",
  },
  textBlock: { flex: 1, paddingRight: 12 },
  label: { fontSize: 16, fontWeight: "500" },
  description: { fontSize: 13, color: "#57636E", marginTop: 2 },
});