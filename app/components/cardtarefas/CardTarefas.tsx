import { useNavigation } from "@react-navigation/native";
import { Text, View } from "react-native";
import Tarefa from "../../models/Tarefa";
import { TarefasPropsStack } from "../../types/TarefasStackParam";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import IconButton from "../iconbutton/IconButton";

interface CardTarefaProps {
    tarefa: Tarefa
}

export default function CardTarefas({ tarefa }: CardTarefaProps) {

    const navigation = useNavigation<TarefasPropsStack>();

    return (

        <View className="w-11/12 m-5 p-2 flex items-center justify-center flex-col
                        bg-eviolet-100 rounded-2xl shadow-lg shadow-black">

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

                <Text className={tarefa.status == true ?
                    "p-2 text-xl font-bold text-blue-900" :
                    "p-2 text-xl font-bold text-red-600"}
                >
                    {tarefa.status == true ?
                        <MaterialCommunityIcons
                            name="clock"
                            size={24}
                        />
                        :
                        <MaterialCommunityIcons
                            name="stop-circle"
                            size={24}
                        />
                    }
                    {tarefa.status == true ? "Em Andamento" : "Não Iniciada"}
                </Text>

                <Text className="p-2 text-xl text-black">
                    Categoria: {tarefa.categoria?.descricao}
                </Text>

            </View>

            <View className="w-full my-2 py-2 flex-1 flex-row justify-center">

                <IconButton
                    icon="pencil"
                    iconcolor='white'
                    iconsize={24}
                    handleClick={() => navigation.navigate("FormTarefas", {
                        id: `${tarefa.id}`
                    })}
                    styles={'w-16 mx-2 bg-blue-700 rounded-2xl'}
                />

                <IconButton
                    icon="delete"
                    iconcolor='white'
                    iconsize={24}
                    handleClick={() => navigation.navigate("DeletarTarefas", {
                        id: `${tarefa.id}`
                    })}
                    styles={'w-16 mx-2 bg-red-600 rounded-2xl'}
                />

            </View>

        </View>

    )
}