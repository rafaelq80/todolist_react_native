import { MaterialCommunityIcons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';

interface Props {
  handleClick?: () => void;
  styles: string;
  disabled?: boolean;
  icon: any;
  iconcolor: string;
  iconsize: number;
}

const IconButton = (props: Props) => {

  const estilos = `px-2 py-2 hover:bg-violet-800 font-medium                           
                   active:text-white justify-center items-center`
  return (
    <TouchableOpacity
      onPress={props?.handleClick}
      className={`${props.styles} ${estilos}`}
      disabled={props?.disabled}
    >
      <MaterialCommunityIcons
        name={props.icon}
        color={props.iconcolor}
        size={props.iconsize}
      />
    </TouchableOpacity>
  )
}

export default IconButton