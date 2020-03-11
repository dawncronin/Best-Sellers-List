import React, {Component} from "react"
import { StyleSheet, Text, View, FlatList} from "react-native"
import fetchBooks from "./api"
import BookItem from "./bookItem"

export default class SimpleList extends Component {

    constructor() {
        super()
        this.state = {
            data: [
            ]
        }
    }

    componentDidMount() {
       fetchBooks().then(res => {
           this.setState({data: res})
       })
    }

    renderItem = (data) => {
        console.log(data)
        return <BookItem coverURL={data.item.book_image} title={data.item.title} author={data.item.author}/>
    }


    render() {
        return (
            <View style={styles.container}>
                <FlatList data={this.state.data} renderItem={this.renderItem}/>
            </View>
        )}
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "gray",
        width: "100%"
    },
    row: {
        fontSize: 14,
        padding:42,
        borderWidth: 1,
        borderColor: "white",
    }
})