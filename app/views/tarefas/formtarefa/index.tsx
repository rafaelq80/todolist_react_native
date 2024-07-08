import RNDateTimePicker, { DateTimePickerEvent } from '@react-native-community/datetimepicker';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { NativeSyntheticEvent, Pressable, Switch, SwitchChangeEvent, Text, TextInput, TextInputChangeEventData, View } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import { UIActivityIndicator } from 'react-native-indicators';
import Categoria from '../../../models/Categoria';
import Tarefa from '../../../models/Tarefa';
import { atualizar, cadastrar, listar } from '../../../services/Service';
import { styles } from '../../../styles/TarefasStyles';
import { TarefasPropsStack } from "../../../types/TarefasStackParam";
import { ToastAlerta } from '../../../utils/ToastAlerta';
import { Ionicons } from '@expo/vector-icons';

export default function FormTarefa() {

    const [isLoading, setIsLoading] = useState<boolean>(false)

    const agora = new Date()

    const navigation = useNavigation<TarefasPropsStack>();

    const params: RouteProp<{ params: { id: string } }, 'params'> = useRoute();

    const id: string = params.params?.id;

    const [changeCategoria, setChangeCategoria] = useState<boolean>(false)

    const [showDate, setShowDate] = useState<boolean>(false);

    const [categorias, setCategorias] = useState<Categoria[]>([])

    const [categoria, setCategoria] = useState<Categoria>({
        id: 0,
        descricao: '',
    })

    const [tarefa, setTarefa] = useState<Tarefa>({
        id: 0,
        nome: '',
        descricao: '',
        responsavel: '',
        data: agora,
        status: false,
        categoria: null
    })

    async function buscarTarefaPorId(id: string) {
        try {
            await listar(`/tarefas/${id}`, setTarefa)
        } catch (error: any) {
            ToastAlerta('Tarefa não Encontrada.', 'erro')
        }
    }

    async function buscarCategorias() {
        try {
            await listar('/categorias', setCategorias);
        } catch (error: any) {
            ToastAlerta('Categorias não Encontradas.', 'erro')
        }
    }

    useEffect(() => {
        buscarCategorias()

        if (id !== undefined) {
            buscarTarefaPorId(id)
        }

    }, [id])

    useEffect(() => {
        setTarefa({
            ...tarefa,
            categoria: categoria
        })

    }, [categoria])

    function atualizarStatus(e: SwitchChangeEvent, name: string) {
        setTarefa({
            ...tarefa,
            [name]: e.nativeEvent.value
        });
    }

    function atualizarData(e: DateTimePickerEvent, name: string) {

        setShowDate(false)

        setTarefa({
            ...tarefa,
            [name]: new Date(e.nativeEvent.timestamp)
        });
    }

    function atualizarEstado(e: NativeSyntheticEvent<TextInputChangeEventData>, name: string) {

        setTarefa({
            ...tarefa,
            [name]: e.nativeEvent.text
        });

    }

    function atualizarCategoria(categoria: Categoria) {

        setCategoria({
            id: categoria.id,
            descricao: categoria.descricao
        });

        setChangeCategoria(true)
    }

    async function gerarNovaTarefa() {

        setIsLoading(true)

        if (id !== undefined) {

            try {
                await atualizar(`/tarefas`, tarefa, setTarefa);

                ToastAlerta('Tarefa atualizada!', 'sucesso')

            } catch (error: any) {
                ToastAlerta('Erro ao Atualizar.', 'erro')
            }

        } else {
            try {
                await cadastrar(`/tarefas`, tarefa, setTarefa)

                ToastAlerta('Tarefa cadastrada!', 'sucesso');

            } catch (error: any) {
                ToastAlerta('Erro ao cadastrar.', 'erro');
            }
        }

        setIsLoading(false)
        retornar()

    }

    function retornar() {
        navigation.navigate("ListarTarefas")
    }

    function formatarData(data: Date) {

        return new Intl.DateTimeFormat('pt-BR', {
            dateStyle: 'short',
            timeZone: 'America/Sao_Paulo',
        }).format(data)
    }

    console.log(JSON.stringify(tarefa))

    return (

        <View className='flex-1 flex-col w-full'>

            {isLoading ?
                <UIActivityIndicator
                    color='#6d28d9'
                    size={80}
                />

                :

                <View className='flex flex-col items-center justify-center w-full my-4'>

                    <Text className='text-3xl font-semibold text-eviolet-900 py-3'>{id ? 'Editar Tarefa' : 'Cadastrar Tarefa'}</Text>

                    <TextInput
                        className='w-11/12 my-2 px-4 py-2 rounded-3xl border-1 border-transparent 
                                   text-xl text-black bg-eviolet-100'
                        placeholder='Tarefa'
                        value={tarefa.nome}
                        onChange={(e) => atualizarEstado(e, 'nome')}
                    />

                    <TextInput
                        className='w-11/12 my-2 px-4 py-2 rounded-3xl border-1 border-transparent 
                                   text-xl text-black bg-eviolet-100'
                        placeholder='Descrição'
                        value={tarefa.descricao}
                        onChange={(e) => atualizarEstado(e, 'descricao')}
                    />

                    <TextInput
                        className='w-11/12 my-2 px-4 py-2 rounded-3xl border-1 border-transparent 
                                   text-xl text-black bg-eviolet-100'
                        placeholder='Responsável'
                        value={tarefa.responsavel}
                        onChange={(e) => atualizarEstado(e, 'responsavel')}
                    />

                    <TextInput
                        className='w-11/12 my-2 px-4 py-2 rounded-3xl border-1 border-transparent 
                                   text-xl text-black bg-eviolet-100'
                        placeholder='Data'
                        value={formatarData(new Date(tarefa.data))}
                        editable
                        onPressIn={() => setShowDate(true)}
                    />

                    {showDate && (
                        <RNDateTimePicker
                            mode='date'
                            timeZoneName={'America/Sao_Paulo'}
                            locale="pt-BR"
                            value={new Date(tarefa.data)}
                            onChange={(e) => atualizarData(e, 'data')}
                        />
                    )}

                    <View className='w-11/12 my-2 px-4 py-2 flex flex-row items-center justify-start'>
                        <Text
                            className='text-xl text-black'
                        >
                            Em andamento:
                        </Text>
                        <Switch
                            thumbColor={'#7c3aed'}
                            trackColor={{ true: '#c4b5fd', false: '#ddd6fe' }}
                            value={tarefa.status}
                            onChange={(e) => atualizarStatus(e, 'status')}
                        />
                    </View>

                    <Dropdown
                        style={styles.selectInput}
                        placeholderStyle={styles.placeholder}
                        selectedTextStyle={styles.placeholder}
                        itemTextStyle={styles.placeholder}
                        itemContainerStyle={styles.container}
                        data={categorias}
                        search={false}
                        maxHeight={300}
                        labelField="descricao"
                        valueField="id"
                        placeholder='Selecione uma Categoria'
                        value={categoria}
                        onChange={(value) => atualizarCategoria(value)}
                    />

                    <View className='w-11/12 my-4 py-4 flex flex-row items-center justify-center'>

                        <Pressable
                            onPress={() => gerarNovaTarefa()}
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