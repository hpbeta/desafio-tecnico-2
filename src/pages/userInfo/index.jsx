import {
  Container,
  ContainerFollowers,
  ContainerInfo,
  Main,
  MessageError,
} from "./styles";

export function UserInfo({ userInfo, error }) {
  return (
    <Main>
      {Object.keys(userInfo).length > 0 && (
        <Container>
          {
            <ContainerInfo>
              <img src={userInfo.avatar_url} alt="" />
              <p>{userInfo.name}</p>

              <p>{userInfo.bio}</p>
              <ContainerFollowers>
                <p>Followers: {userInfo.followers} </p>
                <p>Following: {userInfo.following}</p>
              </ContainerFollowers>
            </ContainerInfo>
          }
        </Container>
      )}
      {error && <MessageError>{error}</MessageError>}
    </Main>
  );
}
