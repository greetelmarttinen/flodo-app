import styles from "@/styles/styles";
import { useState } from "react";
import { Text, View } from "react-native";

export default function ToDos() {

    // astetataan tyhjä state todo:lle
    const [todo, setTodo] = useState("");

    // state todo-listalle/taulukolle, joka on aluksi tyhjä
    const [todos, setTodos] = useState<string[]>([]);

    return (
        <View style={styles.container}>
            <Text style={styles.headerText}>To Do's</Text>
        </View>
    )
}