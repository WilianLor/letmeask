import styled from "styled-components";
import colors from '../../styles/colors'

export const QuestionContainer = styled.div`
  background: ${colors.input};
  border-radius: .5rem;
  box-shadow: 0 0.125rem 0.75rem ${colors.shadow};
  padding: 1.5rem;

  & + .question {
    margin-top: .5rem;
  }

  &.highlighted {
    background-color: ${colors.grayBackground};
    border: 0.0625rem solid ${colors.purple};

    footer .user-info span {
      color: ${colors.text};
    }
  }

  &.answered {
    background-color: ${colors.darkBackground};
  }
`;

export const Footer = styled.footer`
  color: ${colors.text};

  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1.5rem;

  button {
    border: 0;
    background: transparent;
    cursor: pointer;
    transition: 0.2s filter;

    &.like-button {
      display: flex;
      align-items: flex-end;
      color: ${colors.gray};
      gap: .5rem;

      &.liked {
        color: ${colors.purple};

        svg path {
          stroke: ${colors.purple};
        }
      }
    }

    &:hover {
      filter: brightness(0.7);
    }
  }
`;

export const UserInfo = styled.div`
  display: flex;
  align-items: center;
`;

export const UserImage = styled.img`
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
`

export const UserName = styled.span`
    margin-left: .5rem;
    color: ${colors.gray};
    font-size: 0.875rem;
`

export const ContentText = styled.p`
    color: ${colors.text};
    word-wrap: break-word;
`

export const ContentDiv = styled.div`
  display: flex;
  gap: 1rem;
`;