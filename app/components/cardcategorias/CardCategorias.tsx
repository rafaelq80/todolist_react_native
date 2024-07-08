import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { Pressable, Text, View } from "react-native";
import Categoria from "../../models/Categoria";
import { CategoriasPropsStack } from "../../types/CategoriasStackParam";

interface CardCategoriaProps {
    categoria: Categoria
}

export default function CardCategorias({ categoria }: CardCategoriaProps) {

    const navigation = useNavigation<CategoriasPropsStack>();

    return (

        <View className="w-[90%] my-3 mx-4 p-2 flex items-center justify-center flex-col
                        bg-eviolet-100 rounded-2xl shadow-lg shadow-black">

            <View className="w-full flex flex-row">

                <View className="w-4/5 items-center justify-start flex-row">

                    <Text className="p-2 text-2xl font-semibold text-black justify-start">
                        {categoria.descricao}
                    </Text>
                </View>

                <View className="w-1/5 items-end justify-end flex-row">

                <Pressable
                    onPress={() => navigation.navigate("FormCategorias", {
                        id: `${categoria.id}`
                    })}
                    className='bg-blue-600 rounded-full p-3 flex justify-center mx-1'
                >
                    <Ionicons
                        name='create'
                        size={24}
                        color={'#ffffff'}
                    />
                </Pressable>

                <Pressable
                    onPress={() => navigation.navigate("DeletarCategorias", {
                        id: `${categoria.id}`
                    })}
                    className='bg-red-600 rounded-full p-3 flex justify-center mx-1'
                >
                    <Ionicons
                        name='trash'
                        size={24}
                        color={'#ffffff'}
                    />
                </Pressable>
                
                </View>
            </View>

        </View>

    )
}