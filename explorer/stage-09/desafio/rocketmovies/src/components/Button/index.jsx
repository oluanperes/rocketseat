import { Container } from "./styles";

export function Button({icon: Icon, title, loading, ...rest }) {
  return (
    <Container
      type="button"
      disabled={loading}
      {...rest}
    >
      {Icon && <Icon size={20} />}
      {loading ? 'Carregando...' : title}
    </Container>
  );
}