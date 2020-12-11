import { useCallback, useEffect, useState } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';

import { isAuthenticated, signOut } from '@/utils/auth';

import Header from '@/components/Header';

import { Container, Main, NotAuthorized } from '@ps/Dashboard';

interface User {
  name: string;
  email: string;
}

const Home: React.FC = () => {
  const router = useRouter();
  const [authorized, setAuthorized] = useState<boolean>();
  const [user, setUser] = useState<User>();

  const handleSignOut = useCallback(() => {
    signOut();
    router.push('/');
  }, []);

  useEffect(() => {
    const { auth, user } = isAuthenticated();
    setAuthorized(auth);
    setUser(user);
    if (!auth) {
      router.push('/');
    }
  }, []);

  return (
    <>
      <Head>
        <title>Ecofoto - Central Administrativa</title>
      </Head>
      {authorized ? (
        <Container>
          <Header userName={user.name} />
          <Main>
            <h1>Central Administrativa do Ecofoto - Área Logada</h1>
            <h2>
              Esta área ainda está sendo desenvolvida. Previsão de conclusão:
              <b> 18/12/2020</b>
            </h2>
          </Main>
        </Container>
      ) : (
        <NotAuthorized>
          <h1>Você não está autenticado. Redirecionando para login...</h1>
        </NotAuthorized>
      )}
    </>
  );
};
export default Home;
