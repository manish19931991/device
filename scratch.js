import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import { LivePlayer } from "react-native-live-stream";
import { Feather } from "react-native-vector-icons"
import Tabs from '../navigation/Tab';
const Scratch = (props) => {
    return (
        <View style={{ flex: 1 }}>
            <View style={styles.container}>
                <View style={styles.hearder_container}>
                    <Text style={styles.hearder_txt}>WhatsApp</Text>
                    <View style={styles.icon_container}>
                        <TouchableOpacity>
                            <Image
                                resizeMode='contain'
                                source={require("../google/search.png")} />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Image
                                style={styles.icon}
                                resizeMode='contain'
                                source={require("../google/dot.png")} />
                        </TouchableOpacity>
                    </View>
                </View>

            </View>
            <View
                style={{ flex: 1 }}
            >
                <Tabs/>
            </View>
        </View>

    )
}

export default Scratch

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#0e806a",
        paddingTop: 20,
        paddingBottom: 20,
    },
    hearder_container: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginHorizontal: 16
    },
    hearder_txt: {
        color: "white",
        fontSize: 20,
        fontWeight: "600"
    },
    icon_container: {
        flexDirection: "row",
        alignItems: "center",
    },
    icon: {
        marginLeft: 20
    }
})