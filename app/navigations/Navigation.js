import React from "react";
import { Icon } from "react-native-elements";
import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";
import RestaurantsScreenStacks from "./RestaurantsStack";
import TopListScreenStacks from "./TopListStacks";
import SearchScreenStacks from "./SearchStacks";
import AccountScreenStack from "./AccountStack";

const NavigationStacks = createBottomTabNavigator({
  Restaurants: {
    screen: RestaurantsScreenStacks,
    navigationOptions: () => ({
      tabBarLabel: "Restaurantes",
      tabBarIcon: ({ tintColor }) => (
        <Icon
          type="material-community"
          name="compass-outline"
          size={22}
          color={tintColor}
        />
      ),
    }),
  },
  TopList: {
    screen: TopListScreenStacks,
    navigationOptions: () => (
      {
        tabBarLabel: "Ranking",
        tabBarIcon: ({ tintColor }) => (
          <Icon
            type="material-community"
            name="star-outline"
            size={22}
            color={tintColor}
          />
        )
      }
    )
  },
  SearchScreen: {
    screen: SearchScreenStacks,
    navigationOptions: () => (
      {
        tabBarLabel: "Search",
        tabBarIcon: ({ tintColor }) => (
          <Icon
            type="material-community"
            name="magnify"
            size={22}
            color={tintColor}
          />
        )
      }
    )
  },
  Account: {
    screen: AccountScreenStack,
    navigationOptions: () => (
      {
        tabBarLabel: "Account",
        tabBarIcon: ({ tintColor }) => (
          <Icon
            type="material-community"
            name="home-outline"
            size={22}
            color={tintColor}
          />
        )
      }
    )
  }
},
{
  initialRouteName: "Restaurants",
  order: ["Restaurants", "TopList", "SearchScreen", "Account"],
  tabBarOptions:{
    inactiveTintColor: "#646464",
    activeTintColor: "#5BC991"
  }
}
);

export default createAppContainer(NavigationStacks);
