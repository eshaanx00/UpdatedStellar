import React, { Component } from 'react'
import {
    Text,
    View,
    SafeAreaView,
    StyleSheet,
    Platform,
    StatusBar
}from 'react-native';

export default class DailyPictureScreen extends Component {
    render() {
        return (
            <View>
                <SafeAreaView style={styles.safeViewStyle}></SafeAreaView>
            <Text style={styles.textStyle}>This is Daily Picture to be continued</Text>
            </View>
        )
    }
}

const styles= StyleSheet.create({
    safeViewStyle:{
        marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
    },textStyle:{
        textAlign:'center'
    }
})