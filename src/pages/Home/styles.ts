import styled from 'styled-components'
import Button from '../../components/Button'
import colors from '../../styles/colors'

export const HomePageContainer = styled.div`
    display: flex;
    align-items: stretch;
    height: 100vh;

    @media (max-width: 720px) {
        flex-direction: column;
    }
`

export const LogoContainer = styled.aside`
    flex: 7;

    background: ${colors.purple};
    color: ${colors.white};
    display: flex;
    flex-direction: column;
    justify-content: center;

    padding: 7.5rem 5rem;
`

export const Logo = styled.img`
    max-width: 20rem;
`

export const LogoTextTitle = styled.strong`
    font: 700 2.25rem 'Poppins', sans-serif;
    line-height: 2.625rem;
    margin-top: 1rem;
`

export const LogoText = styled.p`
    font-size: 1.5rem;
    line-height: 2rem;
    margin-top: 1rem;
    color: ${colors.background};
`

export const Main = styled.main`
    flex: 8;
    padding: 0 2rem;
    display: flex;
    align-items: center;
    justify-content:center;

    @media (max-width: 720px) {
        padding-top: 3rem;
        padding-bottom: 3rem;
    }
`

export const MainContent = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 20rem;
    align-items: stretch;
    text-align: center;
`

export const AnotherLogo = styled.img`
    align-self: center;
`

export const CreateRoomButton = styled.button`
    margin-top: 4rem;
    height: 3.125rem;
    border-radius: 0.5rem;
    font-weight: 500;
    background-color: ${colors.googleRed};

    color: ${colors.white};
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    border: 0;

    transition: 0.2s;

    &:hover {
        opacity: 0.9;
    }
`

export const GoogleLogo = styled.img`
    margin-right: 0.5rem;
`

export const Separator = styled.div`
    font-size: 0.875rem;
    color: ${colors.darkGray};

    margin: 2rem 0;
    display: flex;
    align-items: center;

    &::before {
        content: '';
        flex: 1;
        height: 0.0625rem;
        background: ${colors.darkGray};
        margin-right: 1rem;
    }

    &::after {
        content: '';
        flex: 1;
        height: 0.0625rem;
        background: ${colors.darkGray};
        margin-left: 1rem;
    }
`
export const Form = styled.form` 

`

export const ButtonSend = styled(Button)`
    width: 100%;
    margin-top: 1rem;
`

export const Input = styled.input`
    width: 100%;
    height: 3.125rem;
    border-radius: 0.5rem;
    padding: 0 1rem;
    background: ${colors.white};
    border: 0.0625rem solid ${colors.darkGray};
    margin-top: 1rem;
`