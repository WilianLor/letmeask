import React, { FormEvent, useState } from "react";
import useAuth from "../../hooks/useAuth";
import { useHistory } from "react-router-dom";

import {
  AnotherLogo,
  ButtonSend,
  Form,
  Input,
  Logo,
  LogoContainer,
  LogoText,
  LogoTextTitle,
  Main,
  MainContent,
  NewRoomPageContainer,
  Label,
  LinkContent,
  LinkTo,
  MainContentTitle,
  StreamOptions
} from "./styles";

import logoImg from "../../assets/images/logo.svg";
import illustrationImg from "../../assets/images/illustration.svg";
import { database } from "../../services/firebase";
import StreamOption from "../../components/StreamOption";

const NewRoom: React.FC = () => {
  const history = useHistory();

  const { user } = useAuth();

  const [newRoom, setNewRoom] = useState("");
  const [streamOption, setStreamOption] = useState("");
  const [channelLink, setChannelLink] = useState("");

  const handleCreateRoom = async (event: FormEvent) => {
    event.preventDefault();

    if (streamOption.trim() === "") {
      return;
    }

    if(channelLink.trim() === "") {
      return;
    }

    if (newRoom.trim() === "") {
      return;
    }

    const roomRef = database.ref("rooms");

    const length = channelLink.split('/').length

    const channel = channelLink.split('/')[length - 1];

    const firebaseRoom = await roomRef.push({
      title: newRoom,
      authorId: user?.id,
      channelLink: channel,
      streamOption: streamOption
    });

    history.push(`/admin/rooms/${firebaseRoom.key}`);
  };

  return (
    <NewRoomPageContainer>
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
          <MainContentTitle>Criar uma nova sala</MainContentTitle>
          <Form onSubmit={handleCreateRoom}>
            <Label>Onde você está realizando esta live?</Label>
            <StreamOptions>
              <StreamOption option="twitch"  type="button" selected={streamOption === 'twitch'} onClick={() => streamOption === 'twitch' ? setStreamOption("") : setStreamOption('twitch')}/>
              <StreamOption option="youtube" type="button" selected={streamOption === 'youtube'} onClick={() => streamOption === 'youtube' ? setStreamOption("") : setStreamOption('youtube')}/>
            </StreamOptions>
            <Input
              type="url"
              value={channelLink}
              placeholder="Link do canal"
              onChange={(event) => setChannelLink(event.target.value)}
            />
            <Input
              type="text"
              value={newRoom}
              placeholder="Nome da sala"
              onChange={(event) => setNewRoom(event.target.value)}
            />
            <ButtonSend type="submit" id="send-Send">
              Criar sala
            </ButtonSend>
          </Form>
          <LinkContent>
            Quer entrar em uma sala existente? <LinkTo to="/">clique aqui</LinkTo>
          </LinkContent>
        </MainContent>
      </Main>
    </NewRoomPageContainer>
  );
};

export default NewRoom;
