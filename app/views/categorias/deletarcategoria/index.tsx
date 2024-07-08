import { Ionicons } from "@expo/vector-icons";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { Pressable, ScrollView, Text, View } from "react-native";
import { UIActivityIndicator } from "react-native-indicators";
import Categoria from "../../../models/Categoria";
import { deletar, listar } from "../../../services/Service";
import { CategoriasPropsStack } from "../../../types/CategoriasStackParam";
import { ToastAlerta } from "../../../utils/ToastAlerta";

export default function DeletarCategoria() {

    const [isLoading, setIsLoading] = useState<boolean>(false)

    const navigation = useNavigation<CategoriasPropsStack>();

    const [categoria, setCategoria] = useState<Categoria>({} as Categoria)

    const params: RouteProp<{ params: { id: string } }, 'params'> = useRoute();

    const id: string = params.params?.id;

    async function buscarPorId(id: string) {
        try {
            await listar(`/categorias/${id}`, setCategoria)
        } catch (error: any) {
            ToastAlerta('Categoria não encontrada!', 'erro')

        }
    }

    useEffect(() => {
        if (id !== undefined) {
            buscarPorId(id)
        }
    }, [id])

    async function deletarCategoria() {
        setIsLoading(true)

        try {
            await deletar(`/categorias/${id}`)

            ToastAlerta('Categoria Excluída!', 'sucesso')

        } catch (error) {
            ToastAlerta('Erro ao Excluir', 'erro')
        }

        setIsLoading(false)
        retornar()
    }

    function retornar() {
        navigation.navigate("ListarCategorias")
    }

    return (


        <View className="w-full flex-1 flex-col">
            {isLoading ?
                <UIActivityIndicator
                    color='#6d28d9'
                    size={80}
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                />

                :
                <ScrollView>
                    <View className="w-[90%] m-4 p-2 bg-eviolet-100 rounded-2xl shadow-lg shadow-black">
                        <View className="w-full my-2 flex items-start justify-center flex-col">
                            <Text className="p-2 text-2xl font-bold text-black">Você deseja excluir a categoria?</Text>
                            <Text className="p-2 text-xl font-bold text-black">{categoria.descricao}</Text>
                        </View>

                        <View className='flex flex-row items-center justify-center w-full mt-2 py-2'>
                            <Pressable
                                onPress={() => deletarCategoria()}
                                className='bg-green-600 rounded-full p-3 flex justify-center mx-2'
                            >
                                <Ionicons
                                    name='checkmark'
                                    size={24}
                                    color={'#ffffff'}
                                />
                            </Pressable>

                            <Pressable
                                onPress={() => retornar()}
                                className='bg-red-600 rounded-full p-3 flex justify-center mx-2'
                            >
                                <Ionicons
                                    name='close'
                                    size={24}
                                    color={'#ffffff'}
                                />
                            </Pressable>
                        </View>
                    </View>
                </ScrollView>
            }
        </View>

    )
}

