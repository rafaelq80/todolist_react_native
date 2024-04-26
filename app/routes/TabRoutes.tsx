import { FontAwesome5 } from "@expo/vector-icons";
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
                        backgroundColor: '#6750A4',
                        height: 60,

                    },
                    tabBarLabelStyle: {
                        color: '#ffffff',
                        fontSize: 16,
                    },
                    tabBarActiveBackgroundColor: '#663399',
                }}
            >
                <Tab.Screen
                    name="Tarefas"
                    component={TarefasStackRoutes}
                    options={{
                        tabBarIcon: () => <FontAwesome5
                            name="tasks"
                            color='#ffffff'
                            size={18}
                        />
                    }}
                />
                <Tab.Screen
                    name="Categorias"
                    component={CategoriasStackRoutes}
                    options={{
                        tabBarIcon: () => <FontAwesome5
                            name="star"
                            color='#ffffff'
                            size={18}
                        />
                    }}
                />
                <Tab.Screen
                    name="Perfil"
                    component={Perfil}
                    options={{
                        tabBarIcon: () => <FontAwesome5
                            name="user-alt"
                            color='#ffffff'
                            size={18}
                        />
                    }}
                />
            </Tab.Navigator>

        </>
    )
}
