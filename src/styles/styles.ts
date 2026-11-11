import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        backgroundColor: "#DAD7CD",
        flex: 1,
        justifyContent: "flex-start",
    },
    headerContainer: {
        width: "100%",
        alignItems: "center",
        paddingTop: 40,
        paddingBottom: 25,
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
        borderColor: "gray",
        padding: 10,
        boxShadow: 'inset -2px -2px 5px rgba(0, 0, 0, 0.25)',
    },
    button: {
        backgroundColor: "#a3b18a",
        borderRadius: 10,
        borderWidth: 1,
        borderColor: "#8d9a78",
        paddingVertical: 10,
        paddingHorizontal: 20,
        boxShadow: 'inset -2px -2px 5px rgba(0, 0, 0, 0.25)',
        justifyContent: "center",
        fontWeight: "bold",
        fontSize: 18
    },
    todoArray: {
        textAlign: "left",
        fontSize: 17
    },
    todoRow: {
        flexDirection: "row",
        alignItems: "center"
    },
    todoItem: {
        flexDirection: "row",
        alignItems: "center",
    },
    timerRow: {
        flexDirection: "row",
        alignItems: "center",
        gap: 15,
        marginTop: 50
    }
})