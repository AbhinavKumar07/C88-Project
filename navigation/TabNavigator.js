import {Component, React} from 'react'
import {CreateBottomTabNavigator} from '@react-navigaton/bottom-tabs'
import Ionicons from 'react-native-vector-icons'
import TabNavigator from './TabNavigator'

import Feed from '../screens/Feed'
import CreatePost from '../screens/CreatePost'
import { render } from 'react-dom'

const Tab = CreateBottomTabNavigator();

export default class CreateBottomTabNavigator extends Component {
    constructor(props){
        super(props)
        this.state({
            light_theme : 'true'
        })
    }

    componentDidMount() {
        let theme;
        firebase
          .database()
          .ref("/users/" + firebase.auth().currentUser.uid)
          .on("value", function (snapshot) {
            theme = snapshot.val().current_theme;
          });
        this.setState({ light_theme: theme === "light" ? true : false });
      }

    render(){
        return(
            <TabNavigator>
                screenOptions = {({ route }) => ({
                    TabBarIcon : ({ focused, bar, size}) => {
                        let iconName;
                        if (route.Name === "Feed") {
                            iconName = focused ? 'book' : 'book-outline' 
                        } else if (route.Name === "CreatePost") {
                            iconName = focused ? 'create' : 'create-outline'
                        }
                        return <Ionicons name={iconName} color={color} size = {size}></Ionicons>
                    }
                })}
                tabBarOptions ={{
                    activeBarColor : 'blue',
                    inactiveBarColor : 'grey'
                }}
    
                <Tab.Screen name='Feed' component={Feed} />
                <Tab.Screen name='CreatePost' component={CreatePost} />
            </TabNavigator>
        )
    }
}
