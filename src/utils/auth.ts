import api from '@/services/api';

interface SignInData {
  email: string;
  password: string;
}

interface User {
  name: string;
  email: string;
}

export const signIn = async ({ email, password }: SignInData) => {
  let formData = new FormData();

  formData.append('email', email);
  formData.append('password', password);

  try {
    const response = await api.post('login', formData);
    const user = JSON.stringify(response.data);
    localStorage.setItem('@Ecofoto:user', user);
    return true;
  } catch (err) {
    alert('A combinação email/senha informada é inválida');
    console.log({ message: err.message });
    return false;
  }
};

export const signOut = () => {
  localStorage.removeItem('@Ecofoto:user');
  return;
};

export const isAuthenticated = () => {
  const user: User = JSON.parse(localStorage.getItem('@Ecofoto:user'));

  if (user) {
    return { auth: true, user };
  } else {
    return { auth: false };
  }
};
