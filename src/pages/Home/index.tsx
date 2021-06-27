import React, { FormEvent, useState } from "react";
import { useHistory } from "react-router-dom";

import illustrationImg from "../../assets/images/illustration.svg";
import logoImg from "../../assets/images/logo.svg";
import googleIconImage from "../../assets/images/google-icon.svg";

import {
  AnotherLogo,
  ButtonSend,
  CreateRoomButton,
  Form,
  GoogleLogo,
  HomePageContainer,
  Input,
  Logo,
  LogoContainer,
  LogoText,
  LogoTextTitle,
  Main,
  MainContent,
  Separator
} from "./styles";

import useAuth from "../../hooks/useAuth";
import { database } from "../../services/firebase";

const Home: React.FC = () => {
  const [roomCode, setRoomCode] = useState("");

  const history = useHistory();
  const { user, signInWithGoogle } = useAuth();

  const handleCreateRoom = async () => {
    if (!user) {
      await signInWithGoogle();
    }

    history.push("/rooms/new");
  };

  const handleJoinRoom = async (event: FormEvent) => {
    event.preventDefault();

    if (roomCode.trim() === "") {
      return;
    }

    const roomRef = await database.ref(`rooms/${roomCode}`).get();

    if (!roomRef.exists()) {
      alert("Room does not exists.");
      return;
    }

    if (roomRef.val().endedAt) {
      alert("Room already closed.");
      return;
    }

    history.push(`/rooms/${roomCode}`);
  };

  return (
    <HomePageContainer>
      <LogoContainer>
        <Logo
          src={illustrationImg}
          alt="Ilustração simbolizando perguntas e resposta"
        />
        <LogoTextTitle>Crie salas de Q&A ao-vivo</LogoTextTitle>
        <LogoText>Tire as dúvidas da sua audiência em tempo-real</LogoText>
      </LogoContainer>
      <Main>
        <MainContent>
          <AnotherLogo src={logoImg} alt="Letmeask" />
          <CreateRoomButton className="create-room" onClick={() => handleCreateRoom()}>
            <GoogleLogo src={googleIconImage} alt="Logo do Google" />
            Crie sua sala com o Google
          </CreateRoomButton>
          <Separator>ou entre em uma sala</Separator>
          <Form onSubmit={handleJoinRoom}>
            <Input
              type="text"
              placeholder="Digite o código da sala"
              onChange={(event) => setRoomCode(event.target.value)}
            />
            <ButtonSend type="submit" id="send-button">Entrar na sala</ButtonSend>
          </Form>
        </MainContent>
      </Main>
    </HomePageContainer>
  );
};

export default Home;
