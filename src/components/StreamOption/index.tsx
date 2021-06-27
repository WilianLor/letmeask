import {
    StreamOptionButton
} from './styles'
import { ButtonHTMLAttributes } from 'react'

import Twitch from '../../assets/images/twitch.svg'
import Youtube from '../../assets/images/youtube.svg'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    option: 'twitch' | 'youtube';
    selected?: boolean;
}

const StreamOption = (props: ButtonProps) => {
    return (
        <StreamOptionButton className={`stream-option-button ${props.option} ${props.selected && 'selected'}`}  {...props}>
            {props.option === 'twitch' ?
                <img src={Twitch} alt='Twitch' /> :
                <img src={Youtube} alt="Youtube" />
            }
        </StreamOptionButton>
    )
}

export default StreamOption