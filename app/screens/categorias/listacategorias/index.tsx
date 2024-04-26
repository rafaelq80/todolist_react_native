import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { Alert, ScrollView, View } from "react-native";
import CardCategorias from "../../../components/cardcategorias/CardCategorias";
import IconButton from "../../../components/iconbutton/IconButton";
import Categoria from "../../../models/Categoria";
import { listar } from "../../../services/Service";
import { CategoriasPropsStack } from "../../../types/CategoriasStackParam";

export default function ListaCategorias() {

  const navigation = useNavigation<CategoriasPropsStack>();

  const [categorias, setCategorias] = useState<Categoria[]>([]);

  async function buscarCategorias() {
    try {
      await listar('/categorias', setCategorias);
    } catch (error: any) {
      Alert.alert('Erro ao listar as Categorias.')
    }
  }

  useEffect(() => {
    buscarCategorias();
  }, [categorias]);

  function open() {
    //navigation.navigate("FormTarefas");
    console.log("Form Categorias")
  }

  return (

    <>
      <ScrollView>

        {categorias.map((categoria) => (
          <CardCategorias key={categoria.id} categoria={categoria} />

        ))}

      </ScrollView>

      <View className="absolute bottom-7 right-7">
        <IconButton
          styles={"w-12 ml-5 bg-violet-600 rounded-2xl"}
          icon={"plus"}
          iconcolor={"white"}
          iconsize={28}
          handleClick={() => { }}
        />
      </View>


    </>

  );
}
