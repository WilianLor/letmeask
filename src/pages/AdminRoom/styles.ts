import styled from 'styled-components'
import colors from '../../styles/colors'

export const PageAdminRoomContent = styled.div`

`

export const Header = styled.header`
    padding: 1.5rem;
    border-bottom: 0.0625rem solid ${colors.lightGray}
`

export const HeaderContent = styled.div`
    max-width: 70rem;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 720px) {
        gap: 1rem;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`

export const HeaderImage = styled.img`
    max-height: 2.8125rem;
`

export const RoomCodeContainer = styled.div`
    display: flex;
    gap: 1rem;

    button {
        height: 2.5rem;
    }
`

export const MainContent = styled.main`
    max-width: 50rem;
    margin: 0 auto;

    @media (max-width: 720px) {
        max-width: 100vw;
    }
`

export const QuestionList = styled.div`
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;

    @media (max-width: 720px) {
        width: 90%;
        margin-left: 5%;
    }
`

export const RoomTitle = styled.div`
    margin: 0.5rem 0 1.5rem;
    display: flex;
    align-items: center;
`

export const RoomTitleText = styled.h1`
    font-family: 'Poppins', sans-serif;
    font-size: 1.5rem;
    color: ${colors.text};
    display: flex;
    align-items: center;
    justify-content: center;

    gap: 0.5rem;
`

export const RoomTitleFlag = styled.span`
    margin-left: 1rem;
    background: ${colors.pink};
    border-radius: 9999px;
    padding: 0.5rem 1rem;
    color: ${colors.white};
    font-weight: 500;
    font-size: 0.875rem;
`

export const PlayerContent = styled.div`
    margin-bottom: 1.875rem;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const Player = styled.iframe`
    height: 22.5rem;
    width: 39.8125rem;

    @media (max-width: 480px) {
        height: 11.25rem;
        width: 19.90625rem;
    }
`

export const Form = styled.form`

`

export const TextArea = styled.textarea`
    width: 100%;
    border: 0;
    padding: 1rem;
    border-radius: .5rem;
    background: ${colors.input};
    box-shadow: 0 0.125rem 0.75rem ${colors.shadow};
    resize: vertical;
    min-height: 8.125rem;

    @media (max-width: 720px) {
        width: 90%;
        margin-left: 5%;
    }
`

export const FormFooter = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 1rem;

    @media (max-width: 720px) {
        flex-direction: column;
        gap: 1rem;
    }
`

export const LoginContent = styled.span`
    font-size: 0.875rem;
    color: ${colors.gray};
    font-weight: 500;
`

export const LoginLink = styled.button`
    background: transparent;
    border: 0;
    color: ${colors.purple};
    text-decoration: underline;
    font-size: 0.875rem;
    font-weight: 500;
    cursor: pointer;
`

export const UserInfo = styled.div`
    display: flex;
    align-items: center;
`

export const UserImage = styled.img`
    width: 0.5rem;
    height: 0.5rem;
    border-radius: 50%;
`

export const UserName = styled.span`
    margin-left: 0.5rem;
    color: ${colors.text};
    font-weight: 500;
    font-size: 0.875rem;
`