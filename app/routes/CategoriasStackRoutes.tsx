import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ListaCategorias from "../screens/categorias/listacategorias";
import { StackCategoriasParam } from "../types/CategoriasStackParam";


const Stack = createNativeStackNavigator<StackCategoriasParam>();

export default function CategoriasStackRoutes() {
    return (
        <Stack.Navigator
            initialRouteName="ListarCategorias"
            screenOptions={{
                headerShown: false,
            }}
        >
            <Stack.Screen name="ListarCategorias" component={ListaCategorias} />
        </Stack.Navigator>
    )
}
