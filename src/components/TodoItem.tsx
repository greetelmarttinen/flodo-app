import styles from "@/styles/styles";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { Pressable, Text, View } from "react-native";
import { IconButton, Menu } from "react-native-paper";


// tyypitetään todo olio
export type Todo = {
    id: string;
    text: string;
    done: boolean;
};

// tyypitetään komponentin propsit
type Props = {
    item: Todo;
    onToggle: (id: string) => void;
    onDelete: (id: string) => void;
};


export default function TodoItem({ item, onToggle, onDelete }: Props) {

    // määritellään valikko stateen ja asetetaan alkuarvoksi, ettei valikkoa näy
    const [menuVisible, setMenuVisible] = useState(false);

    return (
        <View style={styles.todoItem}>
            <Pressable
                onPress={() => onToggle(item.id)}
                style={{ flex: 1, flexDirection: "row", alignItems: "center", gap: 10, padding: 8 }}
            >
                <Ionicons
                    name={item.done ? "checkbox" : "square-outline"}
                    size={26}
                    color="black"
                />
                <Text
                    style={{
                        color: item.done ? "#999" : "black",
                        textDecorationLine: item.done ? "line-through" : "none",
                    }}
                >
                    {item.text}
                </Text>
            </Pressable>
            <Menu
                visible={menuVisible}
                onDismiss={() => setMenuVisible(false)}
                anchor={
                    <IconButton icon="dots-vertical" onPress={() => setMenuVisible(true)} />
                }
            >
                <Menu.Item
                    title="Delete"
                    onPress={() => {
                        setMenuVisible(false);
                        onDelete(item.id);
                    }}
                />

            </Menu>
        </View>
    )

}