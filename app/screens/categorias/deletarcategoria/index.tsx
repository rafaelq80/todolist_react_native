import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { Alert, Text, View } from "react-native";
import IconButton from "../../../components/iconbutton/IconButton";
import Tarefa from "../../../models/Tarefa";
import { deletar, listar } from "../../../services/Service";
import { ToastAlerta } from "../../../utils/ToastAlerta";
import { UIActivityIndicator } from "react-native-indicators";
import Categoria from "../../../models/Categoria";
import { CategoriasPropsStack } from "../../../types/CategoriasStackParam";

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
            ToastAlerta('Erro ao Excluir a Categoria', 'erro')
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
                    />

                 :

                <View className="w-11/12 m-5 p-2 bg-slate-200 rounded-2xl shadow-lg shadow-black">
                    <View className="w-full my-2 flex items-start justify-center flex-col">
                        <Text className="p-2 text-2xl font-bold text-black">Você deseja excluir a categoria?</Text>
                        <Text className="p-2 text-xl font-bold text-black">{categoria.descricao}</Text>
                    </View>

                    <View className='flex flex-row items-center justify-center w-full mt-2 py-2'>
                        <IconButton
                            icon="check"
                            iconcolor='white'
                            iconsize={24}
                            handleClick={() => deletarCategoria()}
                            styles={'w-16 mx-2 bg-green-600 rounded-xl'}
                        />
                        <IconButton
                            icon="cancel"
                            iconcolor='white'
                            iconsize={24}
                            handleClick={() => retornar()}
                            styles={'w-16 mx-2 bg-red-600 rounded-xl'}
                        />
                    </View>
                </View>
            }
        </View>
    )
}

