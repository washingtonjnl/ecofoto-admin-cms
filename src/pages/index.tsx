import Head from 'next/head';
import Link from 'next/link';
import { useRef } from 'react';
import { SubmitHandler, FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import { useRouter } from 'next/router';

import api from '@/services/api';

import Input from '@/components/Form/Input';
import { Container } from '@ps/Home';

interface FormData {
  email: string;
  password: string;
}

const Home: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const router = useRouter();

  const handleAuthenticate: SubmitHandler<FormData> = async data => {
    let formData = new FormData();

    formData.append('email', data.email);
    formData.append('password', data.password);

    try {
      const response = await api.post('login', formData);
      // console.log(response.data);
      router.push('/app');
    } catch (err) {
      alert('A combinação email/senha informada é inválida');
      console.log({ message: err.message });
    }
  };

  return (
    <Container>
      <Head>
        <title>Ecofoto - Login Administrativo</title>
      </Head>
      <h1>Administração do Ecofoto</h1>
      <h2>Faça login com seu email e senha:</h2>
      <Form ref={formRef} onSubmit={handleAuthenticate}>
        <Input name="email" label="Seu email:" type="email" />
        <Input name="password" label="Sua senha:" type="password" />

        <button type="submit">Entrar</button>
      </Form>
      <Link href="/cadastro">
        <a>Não tem uma conta? Cadastre-se clicando aqui</a>
      </Link>
      <Link href="/recuperacao-de-senha">
        <a>Caso tenha esquecido sua senha, clique aqui</a>
      </Link>
    </Container>
  );
};
export default Home;
