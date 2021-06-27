import styled from 'styled-components'
import colors from '../../styles/colors'

export const ButtonContainer = styled.button`
    height: 3.125rem;
    border-radius: .5rem;
    font-weight: 500;
    background-color: ${colors.purple};
    color: ${colors.white};
    padding: 0 2rem;

    display: flex;
    justify-content: center;
    align-items: center;

    cursor: pointer;
    border: 0;

    transition: .2s;

    &:hover {
        opacity: 0.9;
    }

    &.outlined {
        background: ${colors.white};
        border: 0.0625rem solid ${colors.purple};
        color: ${colors.purple};
        transition: .2s;
        
        &:hover {
            color: ${colors.white};
            background: ${colors.purple}
        }
    }

    &:disabled {
        opacity: 0.6;
        cursor: not-allowed;
    }
`