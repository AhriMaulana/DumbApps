import { StatusBar } from "expo-status-bar";
import { Center } from "native-base";
import React, {useState} from "react";
import {
    View,
    StyleSheet,
    Text,
    Platform,
    KeyboardAvoidingView,
    TextInput,
    TouchableOpacity,
} from "react-native";
import { zIndex } from "styled-system";
import Task from "./task";

export default function Todo() {
    const [task, setTask] = useState();
    const [taskItems, setTaskItems] = useState([])

    const handleAddTask = () => {
        setTaskItems([...taskItems, task])
        setTask(null);
    };

    const completeTask = (index) => {
        let itemCopy = [...taskItems];
        itemCopy.splice(index, 1);
        setTaskItems(itemCopy);
    };

    return (
        <View style={styles.container}>
            <View style={styles.taskWrapper}>
                <Text style={styles.sectionTitle}>TODO LIST</Text>
                <View style={styles.items}>
                    {taskItems.map((item, index) => {
                        return (
                            <TouchableOpacity key={index} onPress={() => completeTask(index)}>
                                <Task text={item} />
                            </TouchableOpacity>
                        )
                    })}
                </View>
            </View>
            <KeyboardAvoidingView behavior={Platform.OS === "android" ? "padding" : "height"}
                style={styles.writeTaskWrapper}
            >
                <TextInput
                    style={styles.input} placeholder={"What To Do"}
                    value={task}
                    onChangeText={(text) => setTask(text)}
                /> 
                <TouchableOpacity onPress={() => handleAddTask()}>
                    <View style={styles.addWrapper}>
                        <Text style={styles.addTodo}>+</Text>
                    </View>
                </TouchableOpacity>
            </KeyboardAvoidingView>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffe1a8',
    },
    taskWrapper: {
        paddingTop: 30,
        paddingHorizontal: 40,
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: 700,
        color: '#472d30',
    },
    items: {
        marginTop: 30,
    },
    writeTaskWrapper: {
        position: "absolute",
        bottom: 60,
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
    },
    input: {
        paddingHorizontal: 20,
        paddingVertical: 20,
        maxWidth: 250,
        borderRadius: 60,
        backgroundColor: "#e26d5c",
        width: 250,
        color: '#472d30',
        fontWeight: 600,
    },
    addWrapper: {
        width: 60,
        height: 60,
        backgroundColor: "#e26d5c",
        borderRadius: 60,
        alignItems: "center",
        justifyContent: "center"
    },
    addTodo: {
        color: '#ffe1a8',
        fontSize: 30,
        fontWeight: 800,
        alignContent: "center",
        alignItems: "center"
    },
})