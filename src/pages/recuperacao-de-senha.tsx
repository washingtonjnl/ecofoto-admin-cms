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
  email: string;
}

const Home: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const router = useRouter();

  const handleAuthenticate: SubmitHandler<FormData> = async data => {
    if (data.email) {
      alert(
        'Enviamos um email para você. Siga as instruções para recuperar sua senha',
      );
      router.push('/');
    } else {
      alert('O email enviado é inválido');
    }

    // try {
    //   const response = await api.post('login', data);
    //   alert(
    //     'Enviamos um email para você. Siga as instruções para recuperar sua senha',
    //   );
    //   console.log(response.data);
    // } catch (err) {
    //   alert('A combinação email/senha informada é inválida');
    //   console.log({ message: err.message });
    // }
  };

  return (
    <Container>
      <Head>
        <title>Ecofoto - Recuperação de Senha Administrativa</title>
      </Head>
      <h1>Administração do Ecofoto</h1>
      <h2>Preencha o formulário abaixo para recuperar sua senha:</h2>
      <Form ref={formRef} onSubmit={handleAuthenticate}>
        <Input name="email" label="Seu email:" type="email" />

        <button type="submit">Recuperar Senha</button>
      </Form>
      <Link href="/">
        <a>Clique aqui para fazer login</a>
      </Link>
    </Container>
  );
};
export default Home;
