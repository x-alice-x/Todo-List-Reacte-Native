import React, {useState} from "react";
import {View, StyleSheet, Text} from "react-native";
import {Button, CheckBox} from "react-native-elements";

export default function Task(props) {
    const [isDone, setIsDone] = useState(false)
    return (
        <View style={styles.taskContainer}>
            <CheckBox style={styles.checkbox} checked={isDone} onPress={() => setIsDone(!isDone)} checkedColor={props.task.color} />
            {/*<View style={styles.textContainer}>*/}
            <Text style={styles.text}>{props.task.name}</Text>
            {/*</View>*/}
        </View>
    )
}

const styles = StyleSheet.create({
    taskContainer: {
        // shadowColor: "#000000",
        // shadowOffset: {
        //     width: 0,
        //     height: 1,
        // },
        // shadowOpacity: 0.20,
        // shadowRadius: 1.41,
        borderWidth: 1,
        borderColor: '#E2E8F0',
        paddingVertical: 10,
        paddingRight: 20,
        borderRadius: 8,
        marginBottom: 12,
        flexDirection: 'row',
        alignItems: 'center',
    },
    checkbox: {
        marginRight: 8
    },
    textContainer: {
        flexDirection: 'row',
        // flexWrap: 'wrap'
    },
})