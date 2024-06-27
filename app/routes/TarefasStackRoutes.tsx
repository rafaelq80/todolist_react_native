import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ListaTarefas from "../screens/tarefas/listatarefas";
import { StackTarefasParam } from "../types/TarefasStackParam";
import FormTarefa from "../screens/tarefas/formtarefa/FormTarefa";


const Stack = createNativeStackNavigator<StackTarefasParam>();

export default function TarefasStackRoutes() {
    return (
        <Stack.Navigator
            initialRouteName="ListarTarefas"
            screenOptions={{
                headerShown: true,
            }}
        >
            <Stack.Screen name="ListarTarefas" component={ListaTarefas} 
                options={{
                    headerShown: false,
                  }}
            />
            <Stack.Screen name="FormTarefas" component={FormTarefa} 
                 options={{
                    title: 'Tarefa',
                    headerStyle: {
                      backgroundColor: '#ffffff',
                    },
                    headerTintColor: '#4c1d95',
                    headerTitleStyle: {
                          fontSize: 24,
                      color: "#4c1d95",
                    },
                  }}
            />
            {/* <Stack.Screen name="DeletarTarefas" component={DeletarTarefa} /> */}
        </Stack.Navigator>
    )
}
