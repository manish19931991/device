import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useState } from 'react';
const data = [
    { id: 1, txt: "Category Name1 " },
    { id: 2, txt: "Category Name2" },
    { id: 3, txt: "Category Name3 " },
    { id: 4, txt: "Category Name4" },
]
const Devices = (props) => {
    const [categoryGet, setCategoryGet] = useState(false);
    const [Selected, setSelected] = useState("");
    return (
        <View style={{ flex: 1, marginTop: 50 }}>
            <TouchableOpacity style={{ backgroundColor: "blue", marginHorizontal: 50, height: 50, borderRadius: 10 }}
                onPress={() => setCategoryGet(!categoryGet)}>
                <Text style={{ margin: 10, color: "white", fontSize: 20 }}>
                    {Selected ? Selected : "Select Category"}
                </Text>
            </TouchableOpacity>
            {categoryGet && (
                <View style={{ height: 200, backgroundColor: "red", marginHorizontal: 50, borderRadius: 10 }}>
                    {data.map((item, index) => {
                        return (

                            <TouchableOpacity
                                // key={index}
                                activeOpacity={0.6}
                                onPress={() => {
                                    setCategoryGet(!categoryGet);
                                    setSelected(item.txt);
                                }}
                            >
                                <Text style={{ margin: 10, color: "white", fontSize: 20 }}>{item.txt}</Text>
                                {data.length == item.id ? (null) : (<View style={{ height: 1, backgroundColor: "black" }}></View>)}
                                {/* {data.length -1  == index ? (null) : (<View style={{ height: 1, backgroundColor: "black" }}></View>)} */}
                            </TouchableOpacity>
                        );
                    })}

                </View>
            )}
        </View>

    )
}

export default Devices
