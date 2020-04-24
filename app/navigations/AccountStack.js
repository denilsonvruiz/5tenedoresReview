import { createStackNavigator } from "react-navigation-stack";

import AccountScreen from "../screens/MyAccount";

const MyAccountStacks = createStackNavigator({
  MyAccount: {
    screen: AccountScreen,
    navigationOptions: () => ({
      title: "Tu cuenta bro",
    }),
  },
});

export default MyAccountStacks;
