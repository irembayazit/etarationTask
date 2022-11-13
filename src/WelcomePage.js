import { Component } from "react";
import { View } from "react-native";
import RNBootSplash from "react-native-bootsplash";

export default class WelcomePage extends Component {

    componentDidMount() {
        RNBootSplash.hide();
    }

    render(){
        return(
            <View style={{flex:1, alignItems:"center", justifyContent:"center"}}>
                <Text>Welcome Page</Text>
            </View>
        )
    }
}