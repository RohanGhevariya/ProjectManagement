import { View, Text, Touchable } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'

export default function CommonButton({ onPress, title, bgColor, textColor, disabled }) {
    return (
        <TouchableOpacity
        disabled={disabled}
            style={{
                backgroundColor: bgColor,
                justifyContent: 'center',
                alignItems: 'center',
                width:'85%',
                height:50,
                alignSelf:'center',
                borderRadius:10,
                marginTop:40
            }}
            onPress={()=>{
                onPress();
            }}
        >
            <Text style={{
                color: textColor,
                fontSize:20,
                fontWeight:'600'
            }}
            >{title}</Text>
        </TouchableOpacity>
    )
}