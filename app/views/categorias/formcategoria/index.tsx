import { Ionicons } from '@expo/vector-icons';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { NativeSyntheticEvent, Pressable, Text, TextInput, TextInputChangeEventData, View } from 'react-native';
import { UIActivityIndicator } from 'react-native-indicators';
import Categoria from '../../../models/Categoria';
import { atualizar, cadastrar, listar } from '../../../services/Service';
import { CategoriasPropsStack } from '../../../types/CategoriasStackParam';
import { ToastAlerta } from '../../../utils/ToastAlerta';

export default function FormCategoria() {

    const [isLoading, setIsLoading] = useState<boolean>(false)

    const navigation = useNavigation<CategoriasPropsStack>();

    const params: RouteProp<{ params: { id: string } }, 'params'> = useRoute();

    const id: string = params.params?.id;

    const [categoria, setCategoria] = useState<Categoria>({
        id: 0,
        descricao: '',
    })

    async function buscarCategoriaPorId(id: string) {
        try {
            await listar(`/categorias/${id}`, setCategoria)
        } catch (error: any) {
            ToastAlerta('Categoria não encontrada.', 'erro')
        }
    }

    useEffect(() => {
        if (id !== undefined) {
            buscarCategoriaPorId(id)
        }

    }, [id])

    function atualizarEstado(e: NativeSyntheticEvent<TextInputChangeEventData>, name: string) {

        setCategoria({
            ...categoria,
            [name]: e.nativeEvent.text
        });

    }

    async function gerarNovaCategoria() {

        setIsLoading(true)

        if (id !== undefined) {

            try {
                await atualizar(`/categorias`, categoria, setCategoria);

                ToastAlerta('Categoria Atualizada!', 'sucesso')

            } catch (error: any) {
                ToastAlerta('Erro ao Atualizar.', 'erro')
            }

        } else {
            try {
                await cadastrar(`/categorias`, categoria, setCategoria)

                ToastAlerta('Categoria Cadastrada!', 'sucesso');

            } catch (error: any) {
                ToastAlerta('Erro ao Cadastrar.', 'erro');
            }
        }

        setIsLoading(false)
        retornar()

    }

    function retornar() {
        navigation.navigate("ListarCategorias")
    }

    console.log(JSON.stringify(categoria))

    return (

        <View className='flex-1 flex-col w-full'>

            {isLoading ?
                <UIActivityIndicator
                    color='#6d28d9'
                    size={80}
                />

                :

                <View className='flex flex-col items-center justify-center w-full my-4'>
                    
                    <Text className='text-3xl font-semibold text-eviolet-900 py-3'>{id ? 'Editar Categoria' : 'Cadastrar Categoria'}</Text>
                    
                    <TextInput
                        className='w-11/12 my-2 px-4 py-2 rounded-3xl border-1 border-transparent 
                                   text-xl text-black bg-eviolet-100'
                        placeholder='Categoria'
                        value={categoria.descricao}
                        onChange={(e) => atualizarEstado(e, 'descricao')}
                    />

                    <View className='w-11/12 my-4 py-4 flex flex-row items-center justify-center'>
                        
                    <Pressable
                            onPress={() => gerarNovaCategoria()}
                            className='bg-green-600 rounded-full p-3 flex justify-center mx-2'
                        >
                            <Ionicons
                                name='save'
                                size={24}
                                color={'#ffffff'}
                            />
                        </Pressable>

                        <Pressable
                            onPress={() => retornar()}
                            className='bg-red-600 rounded-full p-3 flex justify-center mx-2'
                        >
                            <Ionicons
                                name='close'
                                size={24}
                                color={'#ffffff'}
                            />
                        </Pressable>
                    </View>

                </View>
            }
        </View>
    )
}