/* /components/Button.tsx  */
import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

interface Props {
  children: React.ReactNode;
  handleClick?: () => void;
  styles: string;
  textstyles: string;
  disabled?: boolean;
}

const Button = (props:Props) => {
    return (
        <TouchableOpacity
        onPress={props?.handleClick}
        className={`${props.styles} px-4 py-2 rounded-3xl hover:bg-violet-800 font-medium hover:ring-2 hover:border-2 border-2 border-transparent hover:border-violet-950 hover:ring-violet-800 active:ring-4 active:bg-violet-900 active:text-white`}
        disabled={props?.disabled}
        >
           <Text className={`${props.textstyles}`}>{props.children}</Text>
        </TouchableOpacity>
    )
}

export default Button