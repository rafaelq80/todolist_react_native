import { useNavigation } from "@react-navigation/native";
import { Image, Text, View } from "react-native";
import Button from "../../components/button/Button";
import { HomePropsStack } from "../../types/HomeStackParam";

export default function Home() {

    const navigation = useNavigation<HomePropsStack>();

    return (

        <View className='flex-1 flex-col items-center justify-center bg-eviolet-100 w-full h-full py-2'>

            <Image
                source={{
                    uri: 'https://i.imgur.com/yUhBUjt.png',
                }}
                className="w-40 h-40 mt-40 mb-3"
            />

            <Text className='text-eviolet-900 text-4xl font-bold'> Todo List Mobile</Text>

            {/* <Text className='text-eviolet-900 text-2xl font-bold'> Organize suas tarefas!</Text > */}

            <View className='flex flex-col items-center justify-center w-full mt-4 py-3'>
                <Button
                    handleClick={() => navigation.navigate('Main', {
                        screen:'Tarefas'
                    })}
                    styles={'w-2/3 my-3 bg-eviolet-700 '}
                    textstyles={'text-white text-xl text-center font-bold'}
                    disabled={false}
                >
                    Entrar
                </Button>
            </ View>

            <View className='flex-1 justify-end mb-3'>
                <Text className='text-eviolet-950 text-base font-bold text-center'> Desenvolvido por Rafael Queiróz</Text>
                <Text className='text-eviolet-950 text-base font-bold text-center'> Copyright: 2024</Text>
            </View >

        </View >
        
    )
}