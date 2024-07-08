import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { Image, Pressable, Text, View } from 'react-native';
import { HomePropsStack } from '../../types/HomeStackParam';

export default function NavBar() {

    const navigation = useNavigation<HomePropsStack>();

    return (
        <View className='w-full h-1/6 flex flex-col items-center justify-center bg-eviolet-700'>

            <View className='w-fit h-4/6 flex flex-row items-center justify-between gap-x-12'>
               
                <Image
                    source={{
                        uri: 'https://i.imgur.com/yfr3ybD.png',
                    }}
                    className="w-20 h-20 rounded-full"
                />

                <Text className='text-white text-3xl font-bold'>
                    Seja Bem Vinde!
                </Text>

                <Pressable
                    onPress={() => navigation.navigate('Home')}
                    className='flex justify-center'
                >
                    <Ionicons
                        name='exit'
                        size={32}
                        color={'#ddcdff'}
                    />
                </Pressable>

            </View>

        </View>
    )
}
