export type AppNavigationProp = CompositeNavigationProp<
  DrawerNavigationProp<DrawerParamList>,
  CompositeNavigationProp<
    BottomTabNavigationProp<BottomTabParamList>,
    NativeStackNavigationProp<HomeStackParamList>
  >
>;

export type BottomTabParamList = {
  Home: NavigatorScreenParams<HomeStackParamList>;
};

export type DrawerParamList = {
  BottomTabStack: NavigatorScreenParams<BottomTabParamList>;
  CartScreen: undefined;
  OrdersScreen: undefined;
};

export type HomeStackParamList = {
  CartScreen: undefined;
  Home: undefined;
  OrdersScreen: undefined;
  Profile: undefined;
};
