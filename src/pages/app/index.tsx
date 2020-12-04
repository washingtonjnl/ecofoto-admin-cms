import Head from 'next/head';
import Link from 'next/link';

import { Container } from '@ps/Dashboard';

const Home: React.FC = () => {
  return (
    <Container>
      <Head>
        <title>Ecofoto - Central Administrativa</title>
      </Head>
      <h1>Central Administrativa do Ecofoto - Área Logada</h1>
      <h2>
        Esta área ainda está sendo desenvolvida. Previsão de conclusão:
        <b> 18/12/2020</b>
      </h2>

      <Link href="/">
        <a>Sair da minha conta</a>
      </Link>
    </Container>
  );
};
export default Home;
