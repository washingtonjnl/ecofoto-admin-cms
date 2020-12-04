import Head from 'next/head';

import { Container } from '@ps/Home';

const Home: React.FC = () => {
  return (
    <Container>
      <Head>
        <title>Next.js Boilerplate</title>
      </Head>
      <h1>Next.js Boilerplate</h1>
      <p>This is a Homepage of this Next.js application.</p>
    </Container>
  );
};
export default Home;
