import React, { useState, useEffect } from "react";
import {
    View,
    Text,
    StyleSheet,
    FlatList,
    RefreshControl,
    TouchableOpacity,
    TextInput,
    CheckBox
} from "react-native";
import { ListItem } from "react-native-elements";

// Import Axios
import axios from "axios"

import { Entypo } from '@expo/vector-icons';
import { alignContent, justifyItems, justifySelf, marginLeft, right } from "styled-system";

const ToDo = () => {
    //init 

    //Init State
    const [toDo, setToDo] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [newToDo, setNewToDo] = useState('')

    // Create LifeCycle
    //Function Exception
    useEffect(() => {
        getToDo()
    }, [])

    // Create Function to fetch
    const getToDo = () => {
        setIsLoading(true)
        axios
            .get("https://api.kontenbase.com/query/api/v1/81520347-5cd3-4a01-b141-3a5d3f2ec090/project-todo?$sort[created_At]=1")
            .then((res) => {
                setToDo(res)
                setIsLoading(false)
            })
            .catch(() => {
                alert("Error FETCH data")
                setIsLoading(false)
            })
    }

    const addToDo = () => {
        setIsLoading(true)
        axios
            .post("https://api.kontenbase.com/query/api/v1/81520347-5cd3-4a01-b141-3a5d3f2ec090/project-todo", { Task: newToDo })
            .then(() => {
                getToDo()
                setNewToDo('')
                setIsLoading(false)
            })
            .catch((err) => {
                console.log(err);
                alert("Error POST data")
                setIsLoading(false)
            })
    }

    const editToDo = (id, check) => {
        setIsLoading(true)
        axios
            .patch("https://api.kontenbase.com/query/api/v1/81520347-5cd3-4a01-b141-3a5d3f2ec090/project-todo/" + id, { check })
            .then(() => {
                getToDo()
                setIsLoading(false)
            })
            .catch((err) => {
                alert("Error PATCH data")
                setIsLoading(false)
            })
    }

    const delteToDo = (id) => {
        setIsLoading(true)
        axios
            .delete("https://api.kontenbase.com/query/api/v1/81520347-5cd3-4a01-b141-3a5d3f2ec090/project-todo/" + id)
            .then(() => {
                getToDo()
                setIsLoading(false)
            })
            .catch(() => {
                alert("Error DELETE data")
                setIsLoading(false)
            })
    }

    const _renderItem = ({ item }) => {
        return (
            <ListItem
                style={style.item}
                key={item._id.toString()}
            >
                <ListItem.Content style={style.content}  >

                    <View style={style.icon}>
                        <TouchableOpacity
                            onPress={() => delteToDo(item._id.toString())}
                        >
                            <Entypo name="squared-cross" size={30} color="#e26d5c" />
                        </TouchableOpacity>
                    </View>

                    <CheckBox
                        value={item.check}
                        onValueChange={() => editToDo(item._id.toString(), !item.check)}
                        style={style.check}
                    />

                    <Text style={style.text}>
                        {item.Task}
                    </Text>

                </ListItem.Content>
            </ListItem>
        )
    }

    return (
        <View style={style.container}>
            <Text style={style.sectionTitle}>
                TODO LIST
            </Text>

            <FlatList
                data={toDo.data}
                renderItem={_renderItem}
                keyExtractor={(item) => item._id.toString()}
                refreshControl={
                    <RefreshControl refreshing={isLoading} onRefresh={getToDo} />
                }
            />
            <View style={style.writeTaskWrapper}>
                <TextInput
                    style={style.input}
                    placeholder="What To Do"
                    value={newToDo}
                    onChangeText={newToDo => setNewToDo(newToDo)}
                />

                <TouchableOpacity onPress={addToDo}>
                    <View style={style.addWrapper}>
                        <Text style={style.addTodo}>+</Text>
                    </View>

                </TouchableOpacity>
            </View>
        </View>
    );
};

export default ToDo;

const style = StyleSheet.create({
    container: {
        backgroundColor: '#ffe1a8',
        padding: 16,
        flex: 1,
    },
    sectionTitle: {
        marginBottom: 20,
        fontSize: 24,
        fontWeight: 700,
        color: '#472d30',
    },
    item: {
        backgroundColor: "#FFF",
        padding: 5,
        borderRadius: 10,
        display: "flex",
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "space-between",
        marginVertical: 2.5,
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
    writeTaskWrapper: {
        top: 6,
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
    },
    icon: {
        marginHorizontal: 10,
    },
    text: {
        textAlignVertical: "top",
        maxWidth: "80%",
    },
    check: {
        width: 24,
        height: 24,
        backgroundColor: "#aa5551",
        borderRadius: 5,
        marginRight: 15,
    },
    content: {
        flexDirection: "row",
        alignItems: "center",
        flexWrap: "wrap",
    },
});
