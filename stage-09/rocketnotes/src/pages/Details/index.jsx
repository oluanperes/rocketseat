import { Container, Links, Content } from './styles';

import { Header } from '../../components/Header';
import { Button } from '../../components/Button';
import { Section } from '../../components/Section';
import { Tag } from '../../components/Tag';
import { ButtonText } from '../../components/ButtonText';

export function Details() {
  return (
    <Container>
      <Header />
      <main>
        <Content>
          <ButtonText title="Excluir nota" />

          <h1>Introdução ao React</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, beatae distinctio. Consequatur esse iste mollitia fugit tenetur veniam perspiciatis veritatis alias, eum error cupiditate, molestiae ex culpa ipsa nulla! Reiciendis!
          </p>
          <Section title="Links úteis">
            <Links>
              <li><a href='#'>https://wwww.rocketseat.com.br/</a></li>
              <li><a href='#'>https://wwww.rocketseat.com.br/</a></li>
            </Links>
          </Section>

          <Section title="Marcadores">
            <Tag title="express" />
            <Tag title="nodeJS" />
          </Section>

          <Button title="Login" loading />
        </Content>
      </main>
    </Container>
  )
}