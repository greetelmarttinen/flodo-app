import styles from "@/styles/styles";
import { useState } from "react";
import { FlatList, Keyboard, Pressable, Text, TextInput, TouchableWithoutFeedback, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";


export default function ToDos() {

    // astetataan tyhjä state todo:lle
    const [todo, setTodo] = useState("");

    // state todo-listalle/taulukolle, joka on aluksi tyhjä
    const [todos, setTodos] = useState<string[]>([]);

    // add -painike
    const addButton = () => {
        setTodos([...todos, todo]);
        setTodo("");
    }

    return (
        <SafeAreaView style={styles.container}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={styles.container}>
                    <Text style={styles.headerText}>
                        To Do's
                    </Text>

                    <View style={styles.todoRow}>
                        <TextInput
                            style={styles.input}
                            placeholder="Add To Do"
                            placeholderTextColor={"black"}
                            textAlign="center"
                            value={todo}
                            onChangeText={setTodo}
                        />
                        <Pressable onPress={addButton}>
                            <Text style={styles.button}>
                                +
                            </Text>
                        </Pressable>
                    </View>

                    <FlatList
                        data={todos}
                        renderItem={({ item }) =>
                            <Text style={styles.todoArray}>
                                {item}
                            </Text>}
                    />



                </View>
            </TouchableWithoutFeedback>
        </SafeAreaView>
    )
}