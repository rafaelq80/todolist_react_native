import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { Alert, NativeSyntheticEvent, ScrollView, Switch, SwitchChangeEvent, Text, TextInput, TextInputChangeEventData, View } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import IconButton from '../../../components/iconbutton/IconButton';
import Categoria from '../../../models/Categoria';
import Tarefa from '../../../models/Tarefa';
import { atualizar, cadastrar, listar } from '../../../services/Service';
import { styles } from '../../../styles/TarefasStyles';
import { tarefasPropsStack } from "../../../types/TarefasStackParam";

export default function FormTarefa() {

    const navigation = useNavigation<tarefasPropsStack>();

    const params: RouteProp<{ params: { id: string } }, 'params'> = useRoute();

    const id: string = params.params?.id;

    const [changeCategoria, setChangeCategoria] = useState<boolean>(false)

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
        data: new Date(),
        status: false,
        categoria: null
    })

    const [showDate, setShowDate] = useState<boolean>(false);

    async function buscarTarefaPorId(id: string) {
        await listar(`/tarefas/${id}`, setTarefa)
    }

    async function buscarCategorias() {
        try {
            await listar('/categorias', setCategorias);
        } catch (error: any) {
            Alert.alert('Erro ao listar as Categorias.')
            console.log(error)
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

        if (id !== undefined) {

            try {
                await atualizar(`/tarefas`, tarefa, setTarefa);

                Alert.alert('Tarefa atualizada!', 'sucesso')

            } catch (error: any) {
                Alert.alert('Erro ao atualizar a Tarefa', 'erro')
            }

        } else {
            try {
                await cadastrar(`/tarefas`, tarefa, setTarefa)

                Alert.alert('Tarefa cadastrado!', 'sucesso');

            } catch (error: any) {
                Alert.alert('Erro ao cadastrar a Tarefa', 'erro');
                console.log(JSON.stringify(error));
            }
        }

        retornar()

    }

    function retornar() {
        navigation.navigate("ListarTarefas")
    }

    function formatarData(data: Date) {
        return new Intl.DateTimeFormat('pt-BR', {
            dateStyle: 'short',
            timeZone: 'America/Sao_Paulo',
        }).format(new Date(data))
    }

    //console.log(JSON.stringify(tarefa))
    //console.log(JSON.stringify(categorias))

    return (

        <>

            <ScrollView>

                <View className='flex-1 flex-col items-center justify-center w-full h-full py-2 mt-4'>

                    <TextInput
                        className='w-11/12 my-2 px-4 py-2 rounded-3xl border-1 border-transparent 
                                   text-xl text-black bg-violet-200'
                        placeholder='Tarefa'
                        value={tarefa.nome}
                        onChange={(e) => atualizarEstado(e, 'nome')}
                    />

                    <TextInput
                        className='w-11/12 my-2 px-4 py-2 rounded-3xl border-1 border-transparent 
                                   text-xl text-black bg-violet-200'
                        placeholder='Descrição'
                        value={tarefa.descricao}
                        onChange={(e) => atualizarEstado(e, 'descricao')}
                    />

                    <TextInput
                        className='w-11/12 my-2 px-4 py-2 rounded-3xl border-1 border-transparent 
                                   text-xl text-black bg-violet-200'
                        placeholder='Responsável'
                        value={tarefa.responsavel}
                        onChange={(e) => atualizarEstado(e, 'responsavel')}
                    />

                    <TextInput
                        className='w-11/12 my-2 px-4 py-2 rounded-3xl border-1 border-transparent 
                                   text-xl text-black bg-violet-200'
                        placeholder='Data'
                        value={formatarData(tarefa.data)}
                        editable
                        onFocus={() => setShowDate(true)}
                    />

                    {React.useMemo(() => {
                        return showDate &&
                            <DateTimePickerModal
                                className='w-11/12 my-2 px-4 py-2 rounded-3xl border-1 border-transparent 
                                   text-xl text-black bg-violet-300'
                                isVisible={showDate}
                                mode="date"
                                locale='pt_BR'
                                date={new Date(tarefa.data)}
                                onConfirm={(date) => {
                                    setShowDate(false)
                                    setTarefa({
                                        ...tarefa,
                                        data: new Date(date)
                                    });

                                }}
                                onCancel={() => setShowDate(false)}
                            />
                    }, [showDate])}

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
                        searchPlaceholder="Search..."
                        value={categoria}
                        onChange={(value) => atualizarCategoria(value)}
                    />

                    <View className='flex flex-col items-center justify-center w-full mt-2 py-3'>
                        <IconButton
                            icon="content-save"
                            iconcolor='white'
                            iconsize={24}
                            handleClick={() => gerarNovaTarefa()}
                            styles={'w-16 ml-3 bg-violet-600 rounded-xl'}
                        />
                    </View>
                </View>
            </ScrollView>

        </>
    )
}