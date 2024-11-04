import Ionicons from '@expo/vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import { Pressable, Text, View } from "react-native";
import Tarefa from "../../models/Tarefa";
import { TarefasPropsStack } from "../../types/TarefasStackParam";

interface CardTarefaProps {
    tarefa: Tarefa
}

export default function CardTarefas({ tarefa }: CardTarefaProps) {

    const navigation = useNavigation<TarefasPropsStack>();

    return (

        <View 
            key={`card-${tarefa.id}`}
            className="w-[90%] m-4 p-2 flex items-center justify-center flex-col
                        bg-eviolet-100 rounded-2xl shadow-lg shadow-black"
        >

            <View className="w-full my-2 flex items-start justify-center flex-col">

                <Text className="p-2 text-2xl font-bold text-black">
                    {tarefa.nome}
                </Text>
                <Text className="p-2 text-xl text-black">
                    Descrição: {tarefa.descricao}
                </Text>
                <Text className="p-2 text-xl text-black">
                    Responsável: {tarefa.responsavel}
                </Text>

                <Text className="p-2 text-xl text-black">
                    Data: {new Intl.DateTimeFormat('pt-BR', {
                        dateStyle: 'short',
                        timeZone: 'America/Sao_Paulo',
                    }).format(new Date(tarefa.data ? tarefa.data : ''))}
                </Text>

                <View className="flex flex-row justify-start">
                    {tarefa.status == true ?
                        <Ionicons
                            name='time'
                            size={24}
                            color={'#1e40af'}
                            style={{
                                paddingTop: 2,
                            }}
                        />
                        :
                        <Ionicons
                            name='stop'
                            size={24}
                            color={'#dc2626'}
                            style={{
                                paddingTop: 2,
                            }}
                        />
                    }

                    <Text className={tarefa.status == true ?
                        "text-xl font-bold text-blue-800" :
                        "text-xl font-bold text-red-600"}
                    >
                        {tarefa.status == true ? "Em Andamento" : "Não Iniciada"}
                    </Text>
                </View>

                <Text className="p-2 text-xl text-black">
                    Categoria: {tarefa.categoria?.descricao}
                </Text>

            </View>

            <View className="w-full m-2 flex-1 flex-row justify-center">

                <Pressable
                    onPress={() => navigation.navigate("FormTarefas", {
                        id: `${tarefa.id}`
                    })}
                    className='bg-blue-600 rounded-full p-3 flex justify-center mx-2'
                >
                    <Ionicons
                        name='create'
                        size={24}
                        color={'#ffffff'}
                    />
                </Pressable>

                <Pressable
                    onPress={() => navigation.navigate("DeletarTarefas", {
                        id: `${tarefa.id}`
                    })}
                    className='bg-red-600 rounded-full p-3 flex justify-center mx-2'
                >
                    <Ionicons
                        name='trash'
                        size={24}
                        color={'#ffffff'}
                    />
                </Pressable>

            </View>

        </View>

    )
}