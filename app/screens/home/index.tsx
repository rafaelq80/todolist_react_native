import { Image, Text, View } from "react-native";
import Button from "../../components/button/Button";

export default function Home() {

    return (

        <View className='flex-1 flex-col items-center justify-center bg-gray-200 w-full h-full py-2'>

            <Image
                source={{
                    uri: 'https://i.imgur.com/0oXaYVi.png',
                }}
                className="w-36 h-36 mt-40 mb-3"
            />

            <Text className='text-violet-600 text-4xl font-bold'> Todo List Mobile</Text>

            <Text className='text-violet-600 text-2xl font-bold'> Adicione suas tarefas!</Text >

            <View className='flex flex-col items-center justify-center w-full mt-2 py-3'>
                <Button
                    handleClick={() => { }}
                    styles={'w-2/3 my-3 bg-violet-600 '}
                    textstyles={'text-white text-xl text-center font-bold'}
                    disabled={false}
                >
                    Entrar
                </Button>
            </ View>

            <View className='flex-1 justify-end mb-3'>
                <Text className='text-violet-600 text-base font-bold text-center'> Desenvolvido por Rafael Queiróz</Text>
                <Text className='text-violet-600 text-base font-bold text-center'> Copyright: 2024</Text>
            </View >

        </View >
        
    )
}