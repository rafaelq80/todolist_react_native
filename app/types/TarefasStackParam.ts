import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export type StackTarefasParam = {
    ListarTarefas: undefined;
    FormTarefas?: {
        id: string;
    };
    DeletarTarefas: {
        id: string;
    };
};

export type TarefasPropsStack = NativeStackNavigationProp<StackTarefasParam>