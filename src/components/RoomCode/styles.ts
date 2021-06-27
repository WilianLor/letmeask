import styled from 'styled-components'
import colors from '../../styles/colors'

export const RoomCodeContainer = styled.button`
    height: 2.5rem;
    border-radius: .5rem;
    overflow: hidden;
    background: ${colors.white};
    border: 0.0625rem solid ${colors.purple};
    cursor: pointer;
    display: flex;
`

export const CopyImageContainer = styled.div`
    background: ${colors.purple};
    padding: 0.5625rem 0.75rem;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const CodeText = styled.span`
    display: block;
    align-self: center;
    flex: 1;
    padding: 0 1rem 0 0.75rem;
    width: 14.475rem;
    font-size: 0.875rem;
    font-weight: 500;
`