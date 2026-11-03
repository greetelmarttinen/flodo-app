import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        backgroundColor: "lightpink",
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    headerText: {
        fontSize: 25,
        fontWeight: "bold"
    },
    input: {
        height: 40,
        width: 250,
        margin: 12,
        borderWidth: 1,
        borderRadius: 10,
        padding: 10
    },
    todoArray: {
        textAlign: "left",
        fontSize: 17
    }
})