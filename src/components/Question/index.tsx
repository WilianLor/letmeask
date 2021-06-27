import { ReactNode } from 'react'
import {
    QuestionContainer,
    Footer,
    ContentDiv,
    UserInfo,
    ContentText,
    UserImage,
    UserName
} from './styles'
import cs from 'classnames'

type QuestionProps = {
    content: string;
    author: {
        name: string;
        avatar: string;
    }
    children?: ReactNode;
    isAnswered?: boolean;
    isHighlighted?: boolean;
}

const Question = ({
    content,
    author,
    children,
    isAnswered = false,
    isHighlighted = false,
}: QuestionProps) => {
    return (
        <QuestionContainer className={cs('question',
                { answered : isAnswered },
                { highlighted : isHighlighted && !isAnswered }
            )
        }>
            <ContentText>{content}</ContentText>
            <Footer>
                <UserInfo className="user-info">
                    <UserImage src={author.avatar} alt={author.name} />
                    <UserName>{author.name}</UserName>
                </UserInfo>
                <ContentDiv>
                    {children}
                </ContentDiv>
            </Footer>
        </QuestionContainer>
    )
}

export default Question