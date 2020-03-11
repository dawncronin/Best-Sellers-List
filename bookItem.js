import React, {Component} from "react"

import {View, Text, Image, ListView, StyleSheet} from "react-native"

export default class BookItem extends Component {


    render() {
        return (
            <View style={styles.bookitem}>
                <Image style={styles.cover} source={this.props.coverURL}/>
                <View sytle={styles.info}>
                    <Text style={styles.title}>{this.props.title}</Text>
                    <Text style={styles.author}>{this.props.author}</Text>
                </View>
            </View>

        )
    }
}

const styles = StyleSheet.create({
    bookItem: {
        flexDirection: "row",
        padding: 5,
        height: 175,
        width: "100%",
    },
    cover: {
        height: 150,
        resizeMode: "contain",
        flex: 1,
    },
    info: {
        flex: 3

    },
    author: {

    },
    title: {

    }



})