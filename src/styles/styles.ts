import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        backgroundColor: "lightpink",
        flex: 1,
        justifyContent: "flex-start",
    },
    headerContainer: {
        width: "100%",
        alignItems: "center",
        paddingTop: 20,
        paddingBottom: 10,
    },
    headerText: {
        fontSize: 25,
        fontWeight: "bold"
    },
    pageContent: {
        flex: 1,
        alignItems: "center",
        width: "100%",
    },
    input: {
        height: 40,
        width: 250,
        margin: 12,
        borderWidth: 1,
        borderRadius: 10,
        padding: 10
    },
    button: {
        backgroundColor: "#a3b18a",
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 20,
        justifyContent: "center",
        fontWeight: "bold"
    },
    todoArray: {
        textAlign: "left",
        fontSize: 17
    },
    todoRow: {
        flexDirection: "row",
        alignItems: "center"
    }
})