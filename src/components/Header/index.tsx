import React, { useCallback } from 'react';
import { FiArrowLeft, FiPlus, FiPower } from 'react-icons/fi';
import { useRouter } from 'next/router';

import { signOut } from '@/utils/auth';

import { Container } from './styles';

interface HeaderProps {
  userName: string;
}

const Header: React.FC<HeaderProps> = ({ userName }) => {
  const router = useRouter();

  const handleSignOut = useCallback(() => {
    signOut();
    router.push('/');
  }, []);

  return (
    <Container>
      <h1>{`Olá, ${userName}`}</h1>
      <div>
        {router.pathname === '/app/cadastro' ? (
          <button onClick={() => router.back()}>
            <FiArrowLeft size={18} />
            Voltar
          </button>
        ) : (
          <button onClick={() => router.push('/app/cadastro')}>
            <FiPlus size={18} />
            Cadastrar Administrador
          </button>
        )}
        <button onClick={handleSignOut}>
          <FiPower size={18} />
          Sair
        </button>
      </div>
    </Container>
  );
};

export default Header;
