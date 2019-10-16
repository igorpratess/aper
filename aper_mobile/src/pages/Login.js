import React from 'react';
import { View, StyleSheet, Text, TextInput, TouchableOpacity } from "react-native";

export default function Login() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Achados, Perdidos</Text>
            <Text style={styles.text}>&#38; Roubados</Text>
            <TextInput placeholder="Email" style={styles.input} placeholderTextColor="black"></TextInput>
            <TextInput placeholder="Senha" style={styles.input} placeholderTextColor="black"></TextInput>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Entrar</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#03a9f4",
        padding: 30
    },
    text: {
        fontSize: 18,
        fontFamily: "monospace",
    },
    input: {
        height: 48,
        alignSelf: "stretch",
        backgroundColor: "#d8cdcd",
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 6,
        marginTop: 10,
        paddingHorizontal: 15
    },
    button: {
        height: 48,
        alignSelf: "stretch",
        backgroundColor: "black",
        borderRadius: 6,
        marginTop: 20,
        justifyContent: "center",
        alignItems: "center"
    },
    buttonText: {
        color: "white",
        fontSize: 15,
    }
})