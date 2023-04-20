import { RiShutDownLine } from 'react-icons/ri'
import { Container, Logout, Profile } from "./styles";

export function Header() {
  return (
    <Container>
      <Profile to="/profile">
        <img
          src="https://github.com/oluanperes.png"
          alt="Foto do usuário"
        />

        <div>
          <span>Bem vindo,</span>
          <strong>Luan Peres</strong>
        </div>
      </Profile>

      <Logout>
        <RiShutDownLine />
      </Logout>
    </Container>
  )
}