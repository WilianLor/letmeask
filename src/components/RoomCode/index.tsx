import copyImg from '../../assets/images/copy.svg'
import {
    CodeText,
    CopyImageContainer,
    RoomCodeContainer
} from './styles'

type RoomCode = {
    code: string;
}

const RoomCodeComponent = (props: RoomCode) => {

    const copyRoomCodeToClipboard = () => {
        navigator.clipboard.writeText(props.code)
    }

    return (
        <RoomCodeContainer onClick={copyRoomCodeToClipboard}>
            <CopyImageContainer>
                <img src={copyImg} alt="Copy room code" />
            </CopyImageContainer>
            <CodeText>Sala #{props.code}</CodeText>
        </RoomCodeContainer>
    )
}

export default RoomCodeComponent