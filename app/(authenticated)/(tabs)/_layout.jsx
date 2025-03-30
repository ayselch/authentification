import { Tabs } from "expo-router";
import  AntDesign  from "react-native-vector-icons/AntDesign"
import  Entypo  from "react-native-vector-icons/Entypo"
import  Feather from "react-native-vector-icons/Feather"


export default function TavLayout() {
  return (
    <Tabs screenOptions={{headerShown:false, tabBarActiveTintColor:'#405187'}}>
      <Tabs.Screen name="index"
        options={{
          title: 'home',
          tabBarIcon: ({ color }) => <AntDesign size={25} name="home" color={color} />
        }}
      />
      <Tabs.Screen name="news"
        options={{
          title: "News",
          tabBarIcon: ({ color }) => <Entypo size={25} name="news" color={color} />

        }}
      />
       <Tabs.Screen name="settings"
        options={{
          title: "Settings",
          tabBarIcon: ({ color }) => <Feather size={25} name="settings" color={color} />

        }}
      />




    </Tabs>)
}
