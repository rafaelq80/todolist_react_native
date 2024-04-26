﻿import { Image, Text, View } from 'react-native';
import IconButton from '../iconbutton/IconButton';
import { useNavigation } from '@react-navigation/native';
import { homePropsStack } from '../../types/HomeStackParam';

export default function NavBar() {

    const navigation = useNavigation<homePropsStack>();
    
    return (
        <View className='w-full h-1/6 flex flex-col items-center justify-center bg-violet-600'>

            <View className='w-fit h-4/6 flex flex-row items-center justify-between gap-x-3'>
                <Image
                    source={{
                        uri: 'https://i.imgur.com/pjuPoU8.png',
                    }}
                    className="w-20 h-20 rounded-full"
                />
                <Text className='text-white text-3xl font-bold'>
                    Seja Bem Vinde!
                </Text>

                <IconButton
                    icon="logout"
                    iconcolor='white'
                    iconsize={28}
                    handleClick={() => navigation.navigate('Home')}
                    styles={'w-12 ml-5 bg-violet-600'}
                ></IconButton>

            </View>

        </View>
    )
}
