import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { Pressable, ScrollView, View } from "react-native";
import { UIActivityIndicator } from "react-native-indicators";
import CardTarefas from "../../../components/cardtarefas/CardTarefas";
import Tarefa from "../../../models/Tarefa";
import { listar } from "../../../services/Service";
import { TarefasPropsStack } from "../../../types/TarefasStackParam";
import { ToastAlerta } from "../../../utils/ToastAlerta";

export default function ListaTarefas() {

  const navigation = useNavigation<TarefasPropsStack>();

  const [tarefas, setTarefas] = useState<Tarefa[]>([]);

  async function buscarTarefas() {
    try {
      await listar('/tarefas', setTarefas);
    } catch (error: any) {
      ToastAlerta('Tarefas não Encontradas.', 'erro')
      console.log(error)
    }
  }

  useEffect(() => {
    buscarTarefas();
  }, [tarefas]);

  function abrirForm() {
    navigation.navigate("FormTarefas");
  }

  return (

    <View className="w-full flex-1 flex-col">

      {tarefas.length === 0 && (
        <UIActivityIndicator
          color='#6d28d9'
          size={80}
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        />

      )}

      <ScrollView>

        <View className="flex justify-center items-center">
          {tarefas.sort((a, b) => +new Date(b.data) - +new Date(a.data)).map((tarefa) => (
            <CardTarefas key={tarefa.id} tarefa={tarefa} />
          ))}
        </View>
      </ScrollView>

      <View className="absolute bottom-7 right-5">
        <Pressable
          onPress={() => abrirForm()}
          className='bg-eviolet-800 rounded-full p-4 flex justify-center mx-1'
        >
          <Ionicons
            name='add'
            size={24}
            color={'#ffffff'}
          />
        </Pressable>
      </View>

    </View >

  );
}
