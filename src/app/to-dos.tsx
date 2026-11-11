import PageContainer from "@/components/PageContainer";
import PageHeader from "@/components/PageHeader";
import styles from "@/styles/styles";
import { useState } from "react";
import { FlatList, Keyboard, Pressable, Text, TextInput, TouchableWithoutFeedback, View } from "react-native";


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
        <PageContainer>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={styles.pageContent}>
                    <PageHeader title="To Do's"></PageHeader>

                    <View>
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

                </View>
            </TouchableWithoutFeedback>
        </PageContainer>
    )
}