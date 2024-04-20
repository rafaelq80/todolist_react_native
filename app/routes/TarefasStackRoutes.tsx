import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ListaTarefas from "../screens/tarefas/listatarefas";
import { StackTarefasParam } from "../types/TarefasStackParam";


const Stack = createNativeStackNavigator<StackTarefasParam>();

export default function TarefasStackRoutes() {
    return (
        <Stack.Navigator
            initialRouteName="ListarTarefas"
            screenOptions={{
                headerShown: false,
            }}
        >
            <Stack.Screen name="ListarTarefas" component={ListaTarefas} />
        </Stack.Navigator>
    )
}
