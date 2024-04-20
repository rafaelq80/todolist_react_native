import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";

export type TabParam = {
    Tarefas: undefined;
    Categorias: undefined;
    Perfil: undefined;
};

export type propsTab = BottomTabNavigationProp<TabParam>