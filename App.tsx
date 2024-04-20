import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import NavBar from './app/components/navbar';
import Routes from './app/routes';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function App() {
  return (
    <SafeAreaView className='flex-1'>
      <Routes />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
