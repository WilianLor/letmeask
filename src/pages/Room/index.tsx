import logoImg from "../../assets/images/logo.svg";
import Button from "../../components/Button";
import RoomCode from "../../components/RoomCode";
import { useParams } from "react-router-dom";
import Question from "../../components/Question/index";

import Twitch from "../../assets/images/twitch.svg";
import Youtube from "../../assets/images/youtube.svg";

import {
  Form,
  FormFooter,
  Header,
  HeaderContent,
  HeaderImage,
  LoginContent,
  LoginLink,
  MainContent,
  PageRoomContent,
  Player,
  PlayerContent,
  QuestionList,
  RoomCodeContainer,
  RoomTitle,
  RoomTitleFlag,
  RoomTitleText,
  TextArea,
  UserImage,
  UserInfo,
  UserName
} from "./styles";

import { FormEvent, useState } from "react";
import useAuth from "../../hooks/useAuth";
import { database } from "../../services/firebase";
import useRoom from "../../hooks/useRoom";

type RoomParams = {
  id: string;
};

const Room = () => {
  const { user, signInWithGoogle } = useAuth();
  const params = useParams<RoomParams>();
  const roomId = params.id;
  const { questions, title, channelLink, streamOption } = useRoom(roomId);

  const [newQuestion, setNewQuestion] = useState("");

  const handleSendQuestion = async (event: FormEvent) => {
    event.preventDefault();
    if (newQuestion.trim() === "") {
      return;
    }

    if (!user) {
      throw new Error("You must be logged in");
    }

    const question = {
      content: newQuestion,
      author: {
        name: user.name,
        avatar: user.avatar,
      },
      isHighlighted: false,
      isAnswered: false,
    };

    await database.ref(`rooms/${roomId}/questions`).push(question);

    setNewQuestion("");
  };

  const handleLikeQuestion = async (
    questionId: string,
    likeId: string | undefined
  ) => {
    if (likeId) {
      await database
        .ref(`rooms/${roomId}/questions/${questionId}/likes/${likeId}`)
        .remove();
    } else {
      await database.ref(`rooms/${roomId}/questions/${questionId}/likes`).push({
        authorId: user?.id,
      });
    }
  };

  const handleLogin = async () => {
    if (!user) {
      await signInWithGoogle();
    }
  };

  return (
    <PageRoomContent>
      <Header>
        <HeaderContent>
          <HeaderImage src={logoImg} alt="Letaskme" />
          <RoomCodeContainer>
            <RoomCode code={roomId} />
          </RoomCodeContainer>
        </HeaderContent>
      </Header>
      <MainContent>
        <RoomTitle>
          <RoomTitleText>
            Sala {title}{" "}
            {streamOption === "twitch" ? (
              <img src={Twitch} alt="Twitch" />
            ) : (
              <img src={Youtube} alt="Youtube" />
            )}
          </RoomTitleText>
          {questions.length > 0 && <RoomTitleFlag>{questions.length} pergunats</RoomTitleFlag>}
        </RoomTitle>
        <PlayerContent>
          <Player
            title="player"
            src={
              streamOption === "twitch"
                ? `https://player.twitch.tv/?channel=${channelLink}&parent=letmeask-fe3b5.web.app`
                : `https://www.youtube.com/embed/live_stream?channel=${channelLink}`
            }
          ></Player>
        </PlayerContent>
        <Form onSubmit={handleSendQuestion}>
          <TextArea
            value={newQuestion}
            placeholder="O que você quer perguntar?"
            onChange={(event) => setNewQuestion(event.target.value)}
          />
          <FormFooter>
            {user ? (
              <UserInfo className="user-info">
                <UserImage src={user.avatar} alt={user.name} />
                <UserName>{user.name}</UserName>
              </UserInfo>
            ) : (
              <LoginContent>
                Para enviar uma pergunta,{" "}
                <LoginLink onClick={handleLogin}>faça seu login</LoginLink>.
              </LoginContent>
            )}
            <Button type="submit" disabled={!user || newQuestion.trim() === ""}>
              Enviar pergunta
            </Button>
          </FormFooter>
        </Form>
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
                <button
                  className={`like-button ${question.likeId ? "liked" : ""}`}
                  type="button"
                  aria-label="Marcar como gostei"
                  onClick={() =>
                    handleLikeQuestion(question.id, question.likeId)
                  }
                >
                  {question.likeCount > 0 && <span>{question.likeCount}</span>}
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7 22H4C3.46957 22 2.96086 21.7893 2.58579 21.4142C2.21071 21.0391 2 20.5304 2 20V13C2 12.4696 2.21071 11.9609 2.58579 11.5858C2.96086 11.2107 3.46957 11 4 11H7M14 9V5C14 4.20435 13.6839 3.44129 13.1213 2.87868C12.5587 2.31607 11.7956 2 11 2L7 11V22H18.28C18.7623 22.0055 19.2304 21.8364 19.5979 21.524C19.9654 21.2116 20.2077 20.7769 20.28 20.3L21.66 11.3C21.7035 11.0134 21.6842 10.7207 21.6033 10.4423C21.5225 10.1638 21.3821 9.90629 21.1919 9.68751C21.0016 9.46873 20.7661 9.29393 20.5016 9.17522C20.2371 9.0565 19.9499 8.99672 19.66 9H14Z"
                      stroke="#737380"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              )}
            </Question>
          ))}
        </QuestionList>
      </MainContent>
    </PageRoomContent>
  );
};

export default Room;
