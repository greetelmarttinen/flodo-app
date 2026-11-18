import PageContainer from "@/components/PageContainer";
import PageHeader from "@/components/PageHeader";
import TodoItem, { Todo } from "@/components/TodoItem";
import styles from "@/styles/styles";
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Haptics from "expo-haptics";
import { useEffect, useState } from "react";
import { FlatList, Keyboard, Pressable, Text, TextInput, TouchableWithoutFeedback, View } from "react-native";

export default function ToDos() {

    // astetataan tyhjä state todo:lle
    const [todo, setTodo] = useState("");

    // state todo-listalle
    const [todos, setTodos] = useState<Todo[]>([]);

    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        const loadTodos = async () => {
            try {
                const savedTodos = await AsyncStorage.getItem("todos");
                // console.log("Ladatut tehtävät:", savedTodos);

                if (savedTodos !== null) {
                    setTodos(JSON.parse(savedTodos));
                }
            } catch (error) {
                console.log("Error loading todos:", error);
            } finally {
                setIsLoaded(true);
            }
        };
        loadTodos();
    }, []);

    useEffect(() => {
        if (!isLoaded) {
            return;
        }

        const savedTodos = async () => {
            try {
                await AsyncStorage.setItem("todos", JSON.stringify(todos));
                // console.log("Tallennetut tehtävät:", todos)
            } catch (error) {
                console.log("Error saving todos:", error);
            }
        };
        savedTodos();
    }, [todos, isLoaded]);

    // add -painike
    const addButton = () => {
        if (!todo.trim()) {
            return;
        }

        setTodos([...todos, { id: Date.now().toString(), text: todo, done: false }]);
        setTodo("");
    }

    const toggleTodo = (id: string) => {
        setTodos(todos.map(t => t.id === id ? { ...t, done: !t.done } : t));
    }

    // tehty to do siirretän listan loppuun
    const sortedTodos = [...todos].sort((a, b) => Number(a.done) - Number(b.done));

    const deleteTodo = (id: string) => {
        setTodos(todos.filter(t => t.id !== id));
    }

    return (
        <PageContainer>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={styles.pageContent}>
                    <PageHeader title="To Do's"></PageHeader>

                    <View style={{ flex: 1, gap: 7 }}>
                        <View style={styles.todoRow}>
                            <TextInput
                                style={styles.input}
                                placeholder="Add To Do"
                                placeholderTextColor={"gray"}
                                textAlign="start"
                                value={todo}
                                onChangeText={setTodo}
                            />
                            <Pressable onPress={() => {
                                Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
                                addButton();
                            }}>
                                <Text style={styles.button}>
                                    +
                                </Text>
                            </Pressable>
                        </View>

                        <FlatList
                            style={styles.todoList}
                            // contentContainerStyle={{ paddingBottom: 67 }}
                            data={sortedTodos}
                            keyExtractor={(item) => item.id}
                            renderItem={({ item }) => (
                                <TodoItem item={item} onToggle={toggleTodo} onDelete={deleteTodo} />
                            )}
                        />

                    </View>

                </View>
            </TouchableWithoutFeedback>
        </PageContainer>
    )
}