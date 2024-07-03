import { useNavigation } from "@react-navigation/native";
import { Text, View } from "react-native";
import Categoria from "../../models/Categoria";
import { CategoriasPropsStack } from "../../types/CategoriasStackParam";
import IconButton from "../iconbutton/IconButton";

interface CardCategoriaProps {
    categoria: Categoria
}

export default function CardCategorias({ categoria }: CardCategoriaProps) {

    const navigation = useNavigation<CategoriasPropsStack>();

    return (

        <View className="w-11/12 my-3 mx-5 p-2 flex items-center justify-center flex-col
                        bg-eviolet-100 rounded-2xl shadow-lg shadow-black">

            <View className="w-full flex flex-row">

                <View className="w-4/5 items-center justify-start flex-row">

                    <Text className="p-2 text-2xl font-semibold text-black justify-start">
                        {categoria.descricao}
                    </Text>
                </View>

                <View className="w-1/5 items-end justify-end flex-row">

                    <IconButton
                        icon="pencil"
                        iconcolor='white'
                        iconsize={24}
                        handleClick={() => navigation.navigate("FormCategorias", {
                            id: `${categoria.id}`
                        })}
                        styles={'my-2 w-12 ml-3 bg-blue-700 rounded-2xl'}
                    />

                    <IconButton
                        icon="delete"
                        iconcolor='white'
                        iconsize={24}
                        handleClick={() => navigation.navigate("DeletarCategorias", {
                            id: `${categoria.id}`
                        })}
                        styles={'my-2 w-12 ml-3 bg-red-600 rounded-2xl'}
                    />
                </View>
            </View>

        </View>

    )
}