import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';
import ToastManager from 'toastify-react-native';
import Routes from './src/routes';

export default function App() {
  
  return (

    <SafeAreaView className='flex-1'>
      <ToastManager />
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
