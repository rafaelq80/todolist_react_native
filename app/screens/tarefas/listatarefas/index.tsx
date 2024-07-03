import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { ScrollView, View } from "react-native";
import { UIActivityIndicator } from "react-native-indicators";
import CardTarefas from "../../../components/cardtarefas/CardTarefas";
import IconButton from "../../../components/iconbutton/IconButton";
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
      ToastAlerta('Erro ao listar as Tarefas.', 'erro')
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
            marginTop: 125,
          }}
        />

      )}

      <ScrollView>
        {tarefas.sort((a, b) => +new Date(b.data) - +new Date(a.data)).map((tarefa) => (
          <CardTarefas key={tarefa.id} tarefa={tarefa} />
        ))}
      </ScrollView>

      <View className="absolute bottom-7 right-7">
        <IconButton
          styles={"w-12 ml-5 bg-eviolet-700 rounded-2xl"}
          icon={"plus"}
          iconcolor={"white"}
          iconsize={28}
          handleClick={() => abrirForm()}
        />
      </View>

    </View >

  );
}
