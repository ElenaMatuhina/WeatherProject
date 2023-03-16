import { FooterWrapper } from './styles';

function Footer() {
  return <FooterWrapper>©{new Date().getFullYear()} Weather</FooterWrapper>;
}

export { Footer };
