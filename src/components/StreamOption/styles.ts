import styled from "styled-components";
import colors from '../../styles/colors'

export const StreamOptionButton = styled.button`
    padding: 0.3125rem;
    border-radius: .5rem;
    border: 0;
    transition: .2s;
    background-color: ${colors.background};
    cursor: pointer;

    &.twitch:hover {
        background-color: ${colors.twitch};
    }

    &.youtube:hover {
        background-color: ${colors.youtube};
    }

    &.twitch.selected {
        background-color: ${colors.twitch};
    }

    &.youtube.selected {
        background-color: ${colors.youtube};
    }
`