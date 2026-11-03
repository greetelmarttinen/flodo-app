import styles from "@/styles/styles";
import { useState } from "react";
import { Keyboard, Text, TextInput, TouchableWithoutFeedback, View } from "react-native";

export default function ToDos() {

    // astetataan tyhjä state todo:lle
    const [todo, setTodo] = useState("");

    // state todo-listalle/taulukolle, joka on aluksi tyhjä
    const [todos, setTodos] = useState<string[]>([]);

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.container}>
                <Text style={styles.headerText}>
                    To Do's
                </Text>

                <TextInput
                    style={styles.input}
                    placeholder="Add To Do"
                    placeholderTextColor={"black"}
                    textAlign="center"
                    value={todo}
                    onChangeText={setTodo}
                />

            </View>
        </TouchableWithoutFeedback>
    )
}