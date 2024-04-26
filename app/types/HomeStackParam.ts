import { NavigatorScreenParams } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { TabParam } from "./TabParam";

export type HomeStackParam = {
    Main: NavigatorScreenParams<TabParam>;
    Home: undefined;
};

export type homePropsStack = NativeStackNavigationProp<HomeStackParam>