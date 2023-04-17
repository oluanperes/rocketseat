import { Container } from './styles';
import { Tag } from '../../components/Tag';
import { Rating } from '../Rating';

export function Note({ data, ...rest }) {
  return (
    <Container {...rest}>
      <h2>{data.title}</h2>

      <Rating grade={data.rating} isBigSize={false} />

      <div className='description'>
        <span className='text'>
          {data.description}
        </span>
      </div>

      {
        data.tags &&
        <footer>
          {
            data.tags.map(tag => <Tag key={tag.id} title={tag.name} />)
          }
        </footer>
      }
    </Container>
  );
}