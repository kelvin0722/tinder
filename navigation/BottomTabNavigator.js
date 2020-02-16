import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import * as Icon from "@expo/vector-icons";

import TabBarIcon from "../components/TabBarIcon";

import HomeScreen from "../screens/Home";
import TopPickScreen from "../screens/TopPick";
import MessagesScreen from "../screens/Messages";
import ProfileScreen from "../screens/Profile";

const BottomTab = createBottomTabNavigator();
const INITIAL_ROUTE_NAME = "Home";

export default function BottomTabNavigator({ navigation, route }) {
  navigation.setOptions({ headerShown: false });

  return (
    <BottomTab.Navigator initialRouteName={INITIAL_ROUTE_NAME}>
      <BottomTab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: "Home",
          tabBarIcon: ({ focused }) => (
            <TabBarIcon
              focused={focused}
              name="fire"
              Icon={Icon.MaterialCommunityIcons}
            />
          )
        }}
      />
      <BottomTab.Screen
        name="TopPicks"
        component={TopPickScreen}
        options={{
          title: "TopPicks",
          tabBarIcon: ({ focused }) => (
            <TabBarIcon
              focused={focused}
              name="diamond"
              Icon={Icon.FontAwesome}
            />
          )
        }}
      />
      <BottomTab.Screen
        name="Messages"
        component={MessagesScreen}
        options={{
          title: "Messages",
          tabBarIcon: ({ focused }) => (
            <TabBarIcon
              focused={focused}
              name="commenting-o"
              Icon={Icon.FontAwesome}
            />
          )
        }}
      />
      <BottomTab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          title: "Profile",
          tabBarIcon: ({ focused }) => (
            <TabBarIcon focused={focused} name="user" Icon={Icon.Feather} />
          )
        }}
      />
    </BottomTab.Navigator>
  );
}
