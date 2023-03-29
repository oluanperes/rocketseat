import { Container, Brand, ContainerProfile, Profile } from "./styles";
import { Input } from '../../components/Input';

export function Header() {
  return (
    <Container>
      <Brand>
        <h1>RocketMovies</h1>
      </Brand>

      <Input placeholder="Pesquisar pelo tiíulo" />

      <ContainerProfile>

        <div>
          <strong>Luan Peres</strong>
          <a>sair</a>
        </div>
        <Profile to="/profile">
          <img
            src="https://github.com/oluanperes.png"
            alt="Foto do usuário"
          />
        </Profile>
      </ContainerProfile>
    </Container>
  );
}