import { Ionicons } from "@expo/vector-icons";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import * as Font from "expo-font";
import React, { useCallback, useState } from "react";
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
  const [loading, setLoading] = useState(true);
  const [fontLoaded, setFontLoaded] = useState(false);

  useFocusEffect(
    useCallback(() => {
      async function loadFonts() {
        await Font.loadAsync({
          Ionicons: require("@expo/vector-icons/build/vendor/react-native-vector-icons/Fonts/Ionicons.ttf"),
        });
        setFontLoaded(true);
      }
      loadFonts();
      buscarTarefas();
    }, [])
  );

  async function buscarTarefas() {
    setLoading(true);
    try {
      await listar('/tarefas', setTarefas);
    } catch (error: any) {
      ToastAlerta('Tarefas não encontradas.', 'erro');
    } finally {
      setLoading(false);
    }
  }

  function abrirForm() {
    navigation.navigate("FormTarefas");
  }

  if (!fontLoaded) {
    return <UIActivityIndicator color='#6d28d9' size={80} />;
  }

  return (
    <View className="w-full flex-1 flex-col">
      {loading ? (
        <UIActivityIndicator color='#6d28d9' size={80} />
      ) : (
        <ScrollView contentContainerStyle={{ flexDirection: 'column-reverse', alignItems: 'center' }} >
          {tarefas
            .sort((a, b) => +new Date(b.data) - +new Date(a.data)) // Ordenação correta
            .map((tarefa) => (
              <CardTarefas key={`tarefa-${tarefa.id}`} tarefa={tarefa} />
            ))}
        </ScrollView>
      )}

      <View className="absolute bottom-7 right-5">
        <Pressable onPress={abrirForm} className='bg-eviolet-800 rounded-full p-4 flex justify-center mx-1'>
          <Ionicons name='add' size={24} color={'#ffffff'} />
        </Pressable>
      </View>
    </View>
  );
}
