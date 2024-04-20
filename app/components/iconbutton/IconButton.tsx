/* /components/Button.tsx  */
import { FontAwesome5, MaterialCommunityIcons } from '@expo/vector-icons';
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
  return (
    <TouchableOpacity
      onPress={props?.handleClick}
      className={`${props.styles} px-2 py-2 hover:bg-violet-800 font-medium hover:ring-2 hover:border-2 border-2 border-transparent hover:border-violet-950 hover:ring-violet-800 active:ring-4 active:bg-violet-900 active:text-white`}
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