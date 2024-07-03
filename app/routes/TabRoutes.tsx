import { FontAwesome, FontAwesome5 } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import NavBar from "../components/navbar";
import Perfil from "../screens/perfil";
import { TabParam } from "../types/TabParam";
import CategoriasStackRoutes from "./CategoriasStackRoutes";
import TarefasStackRoutes from "./TarefasStackRoutes";

const Tab = createBottomTabNavigator<TabParam>();

export default function TabRoutes() {

    return (
        <>
            <NavBar />
            <Tab.Navigator
                initialRouteName="Tarefas"
                screenOptions={{

                    headerShown: false,
                    tabBarStyle: {
                        backgroundColor: '#8000ff',
                        borderTopColor: 'transparent',
                        height: 64,
                    },
                    tabBarLabelStyle: {
                        fontSize: 16,
                        paddingBottom: 4,
                        fontWeight: "500",
                    },
                    tabBarInactiveTintColor: "#ddcdff",
                    tabBarActiveTintColor: "#ffffff",
                }}
            >
                <Tab.Screen
                    name="Tarefas"
                    component={TarefasStackRoutes}
                    options={{
                        headerShadowVisible: false,
                        tabBarIcon: ({ focused }) => <FontAwesome5
                            name="clipboard-list"
                            size={24}
                            color={focused ? '#ffffff' : '#ddcdff'}
                            filter= 'brightness(1)'
                        />,
                    }}
                />
                <Tab.Screen
                    name="Categorias"
                    component={CategoriasStackRoutes}
                    options={{
                        tabBarIcon: ({ focused }) => <FontAwesome
                            name="star"
                            size={24}
                            color={focused ? '#ffffff' : '#ddcdff'}
                            filter= 'brightness(1)'
                        />
                    }}
                />
                {/* <Tab.Screen
                    name="Perfil"
                    component={Perfil}
                    options={{
                        tabBarIcon: ({ focused }) => <FontAwesome5
                            name="user-alt"
                            size={24}
                            color={focused ? '#ffffff' : '#818cf8'}
                            filter= 'brightness(1)'
                        />
                    }}
                /> */}
            </Tab.Navigator>

        </>
    )
}
