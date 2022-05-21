import React, { Component } from "react";
import {View,Text,StyleSheet,Image,TouchableOpacity} from "react-native";
import {RFValue} from 'react-native-responsive-fontsize'
import Ionicons from 'react-native-vector-icons/Ionicons'

export default class PostCard extends Component {
    constructor(props){
        super(props);
        this.state={
          light_theme:true,
          post_id:this.props.post.key,
          post_data:this.props.post.value
        }
    }

    render(){
        return(
          <TouchableOpacity style={styles.container} onPress={()=>{
            this.props.navigation.navigate("StoryScreen", {story:this.props.story})
          }}>
            <View style={styles.container}>
                <View style={styles.cardContainer}>
                    <View>
                        <View>
                            <Image>
                            style = {styles.profileImage}
                            /*source={require('../assets/profile_img.png')}
                            </Image>
                        </View>
                        <View>
                            <Text style={styles.authorNameText}>{this.props.post.author}</Text>
                        </View>
                    </View>
                    <Image style = {styles.postImage}  source={require('../assets/post.jpeg')}></Image>
                    <View>
                        <Text style = {styles.captionText}>
                            {this.props.post.caption}
                        </Text>
                    </View>
                    <View style ={styles.actionContainer}>
                        <View style={styles.likeButton}>
                            <Ionicons name={'heart'} size={RFValue(30)} color={'white'}/>
                            <Text style = {styles.likeText}>5,531</Text>
                        </View>
                    </View>
                </View>
            </View>
          </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
      },
      cardContainer: {
        margin: RFValue(13),
        backgroundColor: "#2f345d",
        borderRadius: RFValue(20)
      },
      profileImage: {
        resizeMode: "contain",
        width: "95%",
        alignSelf: "center",
        height: RFValue(250)
      },
      titleContainer: {
        paddingLeft: RFValue(20),
        justifyContent: "center"
      },
      storyTitleText: {
        fontSize: RFValue(25),
        color: "white"
      },
      authorNameText: {
        fontSize: RFValue(18),
        color: "white"
      },
      captionText: {
        fontFamily: "Bubblegum-Sans",
        fontSize: 13,
        color: "white",
        paddingTop: RFValue(10)
      },
      actionContainer: {
        justifyContent: "center",
        alignItems: "center",
        padding: RFValue(10)
      },
      likeButton: {
        width: RFValue(160),
        height: RFValue(40),
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        backgroundColor: "#eb3948",
        borderRadius: RFValue(30)
      },
      likeText: {
        color: "white",
        fontSize: RFValue(25),
        marginLeft: RFValue(5)
      }
})