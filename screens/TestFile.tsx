import React from "react";
import { View, Text } from "react-native";
import {  StyleSheet, Button, TouchableOpacity } from 'react-native';


const TestLayout = () => {
    return (
        <View
            style = {{
                flexDirection: "row",
            }}
        >
            <View>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => {
                        alert('Library');
                      }}
                    >
                <Text >Library</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => {
                        alert('Dictionary');
                      }}
                    >
                <Text >Dictionary</Text>
                </TouchableOpacity>
            </View>
            <View>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => {
                        alert('Thesaurus');
                      }}
                    >
                <Text style={styles.btnText}>Thesaurus</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => {
                        alert('Settings');
                      }}
                    >
                <Text style={styles.btnText}>Settings</Text>
                </TouchableOpacity>
            </View>
        </View>
        
    );
};

const styles = StyleSheet.create({ 
    button: {
    alignItems: "center",
    backgroundColor: "orange",
    borderRadius: 15,
    padding: 30,
    margin: 10
  },
    btnText: {
    color: "green",
  }
})
export default TestLayout;