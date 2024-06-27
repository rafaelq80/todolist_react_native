import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { Alert, ScrollView, View } from "react-native";
import CardTarefas from "../../../components/cardtarefas/CardTarefas";
import IconButton from "../../../components/iconbutton/IconButton";
import Tarefa from "../../../models/Tarefa";
import { listar } from "../../../services/Service";
import { tarefasPropsStack } from "../../../types/TarefasStackParam";

export default function ListaTarefas() {

  const navigation = useNavigation<tarefasPropsStack>();

  const [tarefas, setTarefas] = useState<Tarefa[]>([]);

  async function buscarTarefas() {
    try {
      await listar('/tarefas', setTarefas);
    } catch (error: any) {
      Alert.alert('Erro ao listar as Tarefas.')
      console.log(error)
    }
  }

  useEffect(() => {
    buscarTarefas();
  }, [tarefas]);

  function open() {
    navigation.navigate("FormTarefas");
    //console.log("Form Tarefas")
  }

  return (

    <>
      <ScrollView>

        {tarefas.sort((a, b) => +new Date(b.data) - +new Date(a.data)).map((tarefa) => (
          <CardTarefas key={tarefa.id} tarefa={tarefa} />

        ))}

      </ScrollView>

      <View className="absolute bottom-7 right-7">
        <IconButton
          styles={"w-12 ml-5 bg-violet-600 rounded-2xl"}
          icon={"plus"}
          iconcolor={"white"}
          iconsize={28}
          handleClick={() => open()}
        />
      </View>


    </>

  );
}
