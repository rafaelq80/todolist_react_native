import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { Pressable, ScrollView, View } from "react-native";
import { UIActivityIndicator } from "react-native-indicators";
import CardCategorias from "../../../components/cardcategorias/CardCategorias";
import Categoria from "../../../models/Categoria";
import { listar } from "../../../services/Service";
import { CategoriasPropsStack } from "../../../types/CategoriasStackParam";
import { ToastAlerta } from "../../../utils/ToastAlerta";

export default function ListaCategorias() {

  const navigation = useNavigation<CategoriasPropsStack>();

  const [categorias, setCategorias] = useState<Categoria[]>([]);

  async function buscarCategorias() {
    try {
      await listar('/categorias', setCategorias);
    } catch (error: any) {
      ToastAlerta('Erro ao listar as Categorias.', 'erro')
    }
  }

  useEffect(() => {
    buscarCategorias();
  }, [categorias]);

  function abrirForm() {
    navigation.navigate("FormCategorias");
  }

  return (

    <View className="w-full flex-1 flex-col pt-3">

      {categorias.length === 0 && (
        <UIActivityIndicator
          color='#6d28d9'
          size={80}
          style={{
            marginTop: 125,
          }}
        />

      )}

      <ScrollView>
        {categorias.map((categoria) => (
          <CardCategorias key={categoria.id} categoria={categoria} />
        ))}

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

    </View>

  );
}
