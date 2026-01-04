import { useMutation } from '@tanstack/react-query';
import { login, register } from '@/services/auth';
import { useRouter } from 'next/navigation';

export function useLogin() {
  const router = useRouter();

  return useMutation({
    mutationFn: login,
    onSuccess: (data) => {
      // Set storage and cookies
      localStorage.setItem('token', data?.data.token);
      document.cookie = `token=${data?.data.token}; path=/;`;
      document.cookie = `email=${data?.data.user.email}; path=/;`;

      console.log('Login successful:', data);

      router.push('/dashboard');
    },
    onError: (error) => {
      console.error('Login failed:', error);
    },
  });
}

export function useRegister() {
  const router = useRouter();

  return useMutation({
    mutationFn: register,
    onSuccess: (data) => {
      console.log('Registration successful:', data);
      router.push('/login');
    },
    onError: (error) => {
      console.error('Registration failed:', error);
    },
  });
}
