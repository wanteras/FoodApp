import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import {NavigationContainer} from "@react-navigation/native"
import Tabs from './navigation/tabs'
import {Restaurant, OrderDelivery, Home} from './screens';
import {COLORS, icons} from "../constants"

const Stack = createStackNavigator();

const App = () => {

return (

  <NavigationContainer>

     <Stack.Navigator screenOptions = {{
        headerMode: 'none'
     }}
     initialRouteName = {"Home"}>
        <Stack.Screen name = "Home" component = {Tabs}/>
        <Stack.Screen name = "Restaurant" component = {Restaurant}/>
        <Stack.Screen name = "OrderDelivery" component = {OrderDelivery}/> 

    </Stack.Navigator>
  </NavigationContainer>


);


}

export default  App;