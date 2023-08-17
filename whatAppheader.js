import { View, Text,Image } from 'react-native'
import React from 'react'
import { ScratchCard } from "@thalesness/react-native-canvas-scratch-card";
const WhatAppheader = (props) => {
  return (
    // <View style={{width: 300, height: 300, alignSelf:"center",marginTop:100}}>
           <ScratchCard strokeWidth={40} fillColor={"gray"} 
           bgImage={{
            filename:`ic_launcher.png`,
            directory: `best of luck`
           }}
       />
           
        // </View>
  )
}

export default WhatAppheader
