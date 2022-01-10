import React, {useState} from "react";
import {View, Text, Image, TouchableOpacity} from 'react-native'
import { TouchableNativeFeedback } from "react-native-web";


export default class Member extends React.Component {
    constructor(props){
        super(props)
        this.state = {
       
        }

    }

    render() {
        const {name, id_student, birth, avatar, id} = this.props.member
        return (
            <TouchableOpacity 
            style={{width: '48%', alignItems: 'center', borderWidth: 0.75, margin: '1%', padding: 15}}
            onPress={() => this.props.GetInfo(id)}
            >
                <Image style={{width: 150, height: 150}} source={{ uri: avatar}}></Image>
                <Text style={{textAlign: 'center', fontWeight: 'bold'}}>{name}</Text>
                <Text>MSSV: {id_student}</Text>
                <Text>Năm Sinh: {birth}</Text>
            </TouchableOpacity>
        )

        
    }
} 