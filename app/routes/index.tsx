import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "react-native";
import HomeStackRoutes from "./HomeStackRoutes";
import TabRoutes from "./TabRoutes";

export default function Routes() {
    return (
        <NavigationContainer>
            <StatusBar backgroundColor="#ffffff" barStyle="dark-content" />
            {/* <HomeStackRoutes /> */}
            <TabRoutes/>
        </NavigationContainer>
    )
}