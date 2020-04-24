import { createStackNavigator } from "react-navigation-stack";

import RestaurantScreen from "../screens/Restaurants";

const RestaurantsScreenStacks = createStackNavigator({
  Restaurants: {
    screen: RestaurantScreen,
    navigationOptions: () => ({
      title: "Restaurantes",
    }),
  },
});

export default RestaurantsScreenStacks;
