﻿import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { Text, View } from "react-native";
import { UIActivityIndicator } from "react-native-indicators";
import IconButton from "../../../components/iconbutton/IconButton";
import Tarefa from "../../../models/Tarefa";
import { deletar, listar } from "../../../services/Service";
import { TarefasPropsStack } from "../../../types/TarefasStackParam";
import { ToastAlerta } from "../../../utils/ToastAlerta";

export default function DeletarTarefa() {

    const [isLoading, setIsLoading] = useState<boolean>(false)

    const navigation = useNavigation<TarefasPropsStack>();

    const [tarefa, setTarefa] = useState<Tarefa>({} as Tarefa)

    const params: RouteProp<{ params: { id: string } }, 'params'> = useRoute();

    const id: string = params.params?.id;

    async function buscarPorId(id: string) {
        try {
            await listar(`/tarefas/${id}`, setTarefa)
        } catch (error: any) {
            ToastAlerta('Tarefa não encontrada!', 'erro')

        }
    }

    useEffect(() => {
        if (id !== undefined) {
            buscarPorId(id)
        }
    }, [id])

    async function deletarTarefa() {
        setIsLoading(true)

        try {
            await deletar(`/tarefas/${id}`)

            ToastAlerta('Tarefa Excluída!', 'sucesso')

        } catch (error) {
            ToastAlerta('Erro ao Excluir a Tarefa', 'erro')
        }

        setIsLoading(false)
        retornar()
    }

    function retornar() {
        navigation.navigate("ListarTarefas")
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
                        <Text className="p-2 text-2xl font-bold text-black">Você deseja excluir a tarefa?</Text>
                        <Text className="p-2 text-xl font-bold text-black">{tarefa.nome}</Text>
                        <Text className="p-2 text-xl text-black">{tarefa.responsavel}</Text>
                    </View>

                    <View className='flex flex-row items-center justify-center w-full mt-2 py-2'>
                        <IconButton
                            icon="check"
                            iconcolor='white'
                            iconsize={24}
                            handleClick={() => deletarTarefa()}
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

