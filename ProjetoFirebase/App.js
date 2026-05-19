
import { NavigationContainer } from "@react-navigation/native"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { createStackNavigator } from "@react-navigation/stack"

import Entypo from '@expo/vector-icons/Entypo';

import Login from "./Screens/Login";
import Home from "./Screens/Home";
import AddProdutos from "./Screens/AddProduto";

function TabNavigate(){
  const Tab = createBottomTabNavigator();
  return(
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home}/>
    </Tab.Navigator>
  )
}
export default function App() {

  const Stack = createStackNavigator();
  
  return(
    <NavigationContainer>

      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Login" component={Login}/>
        <Stack.Screen name="Home" component={TabNavigate}/>
        <Stack.Screen name="AddProdutos" component={AddProdutos}/>
      </Stack.Navigator>

    </NavigationContainer>
  )
}