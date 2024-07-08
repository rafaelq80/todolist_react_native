import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ListaCategorias from "../views/categorias/listacategorias";
import { StackCategoriasParam } from "../types/CategoriasStackParam";
import FormCategoria from "../views/categorias/formcategoria";
import DeletarCategoria from "../views/categorias/deletarcategoria";


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
            <Stack.Screen name="FormCategorias" component={FormCategoria} />
            <Stack.Screen name="DeletarCategorias" component={DeletarCategoria} />
        </Stack.Navigator>
    )
}
