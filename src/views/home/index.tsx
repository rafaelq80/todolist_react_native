import { useNavigation } from "@react-navigation/native";
import { Image, Pressable, Text, View } from "react-native";
import { HomePropsStack } from "../../types/HomeStackParam";

export default function Home() {

    const navigation = useNavigation<HomePropsStack>();
    
    return (

        <View className='flex-1 flex-col items-center justify-center bg-eviolet-100 w-full h-full py-2'>

            <Image
                source={{
                    uri: 'https://i.imgur.com/yfr3ybD.png',
                }}
                className="w-40 h-40 mt-40 rounded-full mb-3"
            />

            <Text className='text-eviolet-900 text-3xl font-bold'>Todo List App</Text>

            <Text className='text-eviolet-900 text-xl font-bold'>Mantenha suas tarefas organizadas!</Text >

            <View className='flex flex-col items-center justify-center w-full mt-4 py-3'>
                <Pressable
                    onPress={() => navigation.navigate('Main', {
                        screen: 'Tarefas'
                    })}
                    className='w-2/3 my-3 rounded-2xl bg-eviolet-700 text-white text-xl text-center font-bold'
                >
                    <Text
                        className='text-white text-xl text-center font-bold py-2'
                    >
                        Entrar
                    </Text>
                </Pressable>
                
            </ View>

            <View className='flex-1 justify-end mb-3'>
                <Text className='text-eviolet-950 text-base font-bold text-center'> Desenvolvido por Rafael Queiróz</Text>
                <Text className='text-eviolet-950 text-base font-bold text-center'> Copyright: 2024</Text>
            </View >

        </View >

    )
}