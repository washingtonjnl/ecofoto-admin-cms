import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useRef } from 'react';
import { SubmitHandler, FormHandles } from '@unform/core';
import { Form } from '@unform/web';

import api from '@/services/api';

import Input from '@/components/Form/Input';
import { Container } from '@ps/Home';

interface FormData {
  name: string;
  email: string;
  password: string;
}

const Home: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const router = useRouter();

  const handleAuthenticate: SubmitHandler<FormData> = async data => {
    let formData = new FormData();

    formData.append('name', data.name);
    formData.append('email', data.email);
    formData.append('password', data.password);

    try {
      const response = await api.put('administradores', formData);
      alert('Administrador cadastrado');
      router.push('/');
    } catch (err) {
      alert('O cadastro falhou. Cheque os dados enviados e tente novamente');
      console.log({ message: err.message });
    }
  };

  return (
    <Container>
      <Head>
        <title>Ecofoto - Cadastro Administrativo</title>
      </Head>
      <h1>Administração do Ecofoto</h1>
      <h2>Cadastre-se com seu nome, email e senha:</h2>
      <Form ref={formRef} onSubmit={handleAuthenticate}>
        <Input name="name" label="Seu nome:" type="text" />
        <Input name="email" label="Seu email:" type="email" />
        <Input name="password" label="Sua senha:" type="password" />

        <button type="submit">Cadastrar</button>
      </Form>
      <Link href="/">
        <a>Já tem uma conta? Faça login clicando aqui</a>
      </Link>
    </Container>
  );
};
export default Home;
