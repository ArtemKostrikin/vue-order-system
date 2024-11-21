// auth.ts (for handling JWT)
export const setToken = (token: string): void => {
  localStorage.setItem('jwt', token);
};

export const getToken = (): string | null => {
  return localStorage.getItem('jwt');
};

export const removeToken = (): void => {
  localStorage.removeItem('jwt');
};
