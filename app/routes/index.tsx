import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "react-native";
import TabRoutes from "./TabRoutes";

export default function Routes() {
    return (
        <NavigationContainer>
            <StatusBar backgroundColor="#ffffff" barStyle="dark-content" />
            {/* <HomeStackRoutes /> */}
            <TabRoutes />
        </NavigationContainer>
    )
}