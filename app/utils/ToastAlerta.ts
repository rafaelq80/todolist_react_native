import { Toast } from "toastify-react-native";


export function ToastAlerta(mensagem: string, tipo: string) {
    switch (tipo) {

        case 'sucesso':
            Toast.success(mensagem, 'top');
            break;

        case 'erro':
            Toast.error(mensagem, 'center');
            break;
        
        case 'info':
        default:
            Toast.info(mensagem, 'center');
            break;
    }
}