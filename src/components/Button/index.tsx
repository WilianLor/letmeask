import {ButtonHTMLAttributes} from "react";

import {
    ButtonContainer
} from './styles'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    isOutlined?: boolean;
}

const Button = ({isOutlined = false, ...props}: ButtonProps) => {
    return (
        <ButtonContainer 
            className={`Button ${isOutlined ? 'outlined' : ''}`} 
            {...props}
        />
    )
}

export default Button