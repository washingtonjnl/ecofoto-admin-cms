import { useEffect, useRef, useState } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { SubmitHandler, FormHandles } from '@unform/core';
import { Form } from '@unform/web';

import { isAuthenticated } from '@/utils/auth';
import api from '@/services/api';

import Input from '@/components/Form/Input';
import Header from '@/components/Header';

import { Container, Main, NotAuthorized } from '@ps/Home';

interface FormData {
  name: string;
  email: string;
  password: string;
}

interface User {
  name: string;
  email: string;
}

const Home: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const router = useRouter();

  const [authorized, setAuthorized] = useState<boolean>();
  const [user, setUser] = useState<User>();

  useEffect(() => {
    const { auth, user } = isAuthenticated();
    setAuthorized(auth);
    setUser(user);
    if (!auth) {
      router.push('/');
    }
  }, []);

  const handleAuthenticate: SubmitHandler<FormData> = async data => {
    let formData = new FormData();

    formData.append('name', data.name);
    formData.append('email', data.email);
    formData.append('password', data.password);

    try {
      await api.put('administradores', formData);
      alert('Administrador cadastrado');
      router.push('/app');
    } catch (err) {
      alert('O cadastro falhou. Cheque os dados enviados e tente novamente');
      console.log({ message: err.message });
    }
  };

  return (
    <>
      <Head>
        <title>Ecofoto - Cadastro Administrativo</title>
      </Head>
      {authorized ? (
        <Container>
          <Header userName={user.name} />
          <Main>
            <h1>Cadastre um novo administrador</h1>
            <h2>Cadastre ela(e) com o nome, email e senha:</h2>
            <Form ref={formRef} onSubmit={handleAuthenticate}>
              <Input name="name" label="Nome:" type="text" />
              <Input name="email" label="Email:" type="email" />
              <Input
                name="password"
                label="Senha temporária:"
                type="password"
              />
              <small>
                <b>Obs:</b> Insira uma senha simples e oriente que ela(e) troque
                para uma senha de preferência quando acessar a plataforma.
              </small>

              <button type="submit">Cadastrar</button>
            </Form>
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
