import logoImg from "../../assets/images/logo.svg";
import Button from "../../components/Button";
import RoomCode from "../../components/RoomCode";
import { useHistory, useParams } from "react-router-dom";
import Question from "../../components/Question/index";
import deleteImg from '../../assets/images/delete.svg';
import CheckImg from '../../assets/images/check.svg';
import answerImg from '../../assets/images/answer.svg';

import Twitch from '../../assets/images/twitch.svg';
import Youtube from '../../assets/images/youtube.svg'

import { 
  Header,
  HeaderContent,
  HeaderImage,
  MainContent,
  PageAdminRoomContent,
  QuestionList,
  RoomCodeContainer,
  RoomTitle,
  RoomTitleFlag,
  RoomTitleText,
} from "./styles";
import useRoom from "../../hooks/useRoom";
import { database } from "../../services/firebase";

type RoomParams = {
  id: string;
};

const AdminRoom = () => {
  const history = useHistory()
  const params = useParams<RoomParams>();
  const roomId = params.id;
  const { questions, title, streamOption } = useRoom(roomId);

  const handleDeleteQuestion = async (questionId: string) => {
    if(window.confirm('Tem certeza que você deseja excluir essa pergunta?')){
      await database.ref(`rooms/${roomId}/questions/${questionId}`).remove();
    }
  }

  const handleEndRoom = async () => {
    if(window.confirm('Tem certeza que você deseja excluir essa sala?')){
    await database.ref(`rooms/${roomId}`).update({
      endedAt: new Date(),
    })

    history.push('/')
    }
  }

  const handleCheckQuestAsAnswered = async (questionId: string) => {
    await database.ref(`rooms/${roomId}/questions/${questionId}`).update({
      isAnswered: true
    });
  }

  const handleHighlightQuestion = async (questionId: string) => {
    await database.ref(`rooms/${roomId}/questions/${questionId}`).update({
      isHighlighted: true
    });
  }

  return (
    <PageAdminRoomContent>
      <Header>
        <HeaderContent>
          <HeaderImage src={logoImg} alt="Letaskme" />
          <RoomCodeContainer>
            <RoomCode code={roomId} />
            <Button isOutlined onClick={handleEndRoom}>Encerrar sala</Button>
          </RoomCodeContainer>
        </HeaderContent>
      </Header>
      <MainContent>
        <RoomTitle>
        <RoomTitleText>Sala {title} {streamOption === 'twitch' ? <img src={Twitch} alt="Twitch"/> : <img src={Youtube} alt="Youtube"/>}</RoomTitleText>
          {questions.length > 0 && <RoomTitleFlag>{questions.length} pergunats</RoomTitleFlag>}
        </RoomTitle>
        <QuestionList>
          {questions.map((question) => (
            <Question 
              key={question.id}
              content={question.content} 
              author={question.author} 
              isHighlighted={question.isHighlighted}
              isAnswered={question.isAnswered}
            >
              {!question.isAnswered && (
                <>
                  <button
                  type="button"
                  onClick={() => handleCheckQuestAsAnswered(question.id)}
                  >
                    <img src={CheckImg} alt='Marcar pergunta como respondida' />
                  </button>
                  <button
                    type="button"
                    onClick={() => handleHighlightQuestion(question.id)}
                  >
                    <img src={answerImg} alt='Dar destauqe à pergunta' />
                  </button>
                </>
              )}
              <button
                type="button"
                onClick={() => handleDeleteQuestion(question.id)}
              >
                <img src={deleteImg} alt='Deletar pergunta' />
              </button>
            </Question>
          ))}
        </QuestionList>
      </MainContent>
    </PageAdminRoomContent>
  );
};

export default AdminRoom;
