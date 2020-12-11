import Head from 'next/head';
import Link from 'next/link';
import { useRef } from 'react';
import { SubmitHandler, FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import { useRouter } from 'next/router';

import api from '@/services/api';

import Input from '@/components/Form/Input';
import { signIn } from '@/utils/auth';

import { Container, Main } from '@ps/Home';

interface FormData {
  email: string;
  password: string;
}

const Home: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const router = useRouter();

  const handleAuthenticate: SubmitHandler<FormData> = async data => {
    const authorized = await signIn(data);
    authorized && router.push('/app');
  };

  return (
    <>
      <Head>
        <title>Ecofoto - Login Administrativo</title>
      </Head>
      <Container>
        <Main>
          <h1>Administração do Ecofoto</h1>
          <h2>Faça login com seu email e senha:</h2>
          <Form ref={formRef} onSubmit={handleAuthenticate}>
            <Input name="email" label="Seu email:" type="email" />
            <Input name="password" label="Sua senha:" type="password" />

            <button type="submit">Entrar</button>
          </Form>
          <Link href="/recuperacao-de-senha">
            <a>Caso tenha esquecido ou queira trocar sua senha, clique aqui</a>
          </Link>
        </Main>
      </Container>
    </>
  );
};
export default Home;
