﻿import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ListaTarefas from "../screens/tarefas/listatarefas";
import { StackTarefasParam } from "../types/TarefasStackParam";
import FormTarefa from "../screens/tarefas/formtarefa";
import DeletarTarefa from "../screens/tarefas/deletartarefa";


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
            <Stack.Screen name="FormTarefas" component={FormTarefa} />
            <Stack.Screen name="DeletarTarefas" component={DeletarTarefa} />
        </Stack.Navigator>
    )
}
