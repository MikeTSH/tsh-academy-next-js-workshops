export type LoginCredentials = {
  username: string;
  password: string;
};

export type LoginResult = {
  token: string;
};

export const postLogin = async ({ username, password }: LoginCredentials): Promise<LoginResult> => {
  const loginResponse = await fetch(`${process.env.NEXT_PUBLIC_API_URL}auth/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      username,
      password,
    }),
  }).then((res) => res.json());

  if (!loginResponse?.token) {
    throw new Error("Couldn't log in");
  }

  return loginResponse;
};
