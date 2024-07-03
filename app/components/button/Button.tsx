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
        className={`${props.styles} px-4 py-2 rounded-3xl hover:bg-eviolet-700 font-medium hover:ring-2 hover:border-2 border-2 border-transparent hover:border-eviolet-900 hover:ring-eviolet-900 active:ring-4 active:bg-eviolet-900 active:text-white`}
        disabled={props?.disabled}
        >
           <Text className={`${props.textstyles}`}>{props.children}</Text>
        </TouchableOpacity>
    )
}

export default Button