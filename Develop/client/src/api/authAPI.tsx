import { UserLogin } from "../interfaces/UserLogin";

const login = async (userInfo: UserLogin) => {
  try {
    const response = await fetch('/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userInfo),
    });

    if (!response.ok) {
      const errorMessage = await response.text();
      throw new Error(`Network response was not ok: ${response.status} - ${errorMessage}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('There was a problem with the login request:', error);
    throw error;
  }
};

export { login };