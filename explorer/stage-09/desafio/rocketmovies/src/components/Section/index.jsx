import { Container } from './styles';
import { Button } from '../Button';
import { BsPlusLg } from 'react-icons/bs'

export function Section({ title, children }) {
  return (
    <Container>
      <div>
        <h2>{title}</h2>
        <Button
          icon={BsPlusLg}
          title={"Adicionar filme"}
        />
      </div>

      {children}
    </Container>

  );
}