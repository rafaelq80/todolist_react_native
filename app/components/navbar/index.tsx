import { Text, View, Image } from 'react-native';
import { Userpic } from 'react-native-userpic';
import IconButton from '../iconbutton/IconButton';

export default function NavBar() {

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
                    handleClick={() => { }}
                    styles={'w-12 ml-5 bg-violet-600'}
                ></IconButton>

            </View>

        </View>
    )
}
