export type AuthUser = {
  email: string;
};

export type AuthSession = {
  user: AuthUser | null;
  isGuest: boolean;
};

const MOCK_EMAIL = "user@test.com";
const MOCK_PASSWORD = "password123";

const SESSION_KEY = "hushlush_auth";

export async function login(
  email: string,
  password: string,
): Promise<AuthSession> {
  await new Promise((resolve) => setTimeout(resolve, 700));

  if (email.trim().toLowerCase() !== MOCK_EMAIL || password !== MOCK_PASSWORD) {
    throw new Error("Invalid email or password.");
  }

  const session: AuthSession = {
    user: {
      email: MOCK_EMAIL,
    },
    isGuest: false,
  };

  localStorage.setItem(SESSION_KEY, JSON.stringify(session));

  return session;
}

export async function loginAsGuest(): Promise<AuthSession> {
  await new Promise((resolve) => setTimeout(resolve, 500));

  const session: AuthSession = {
    user: null,
    isGuest: true,
  };

  localStorage.setItem(SESSION_KEY, JSON.stringify(session));

  return session;
}

export function getSession(): AuthSession | null {
  const storedSession = localStorage.getItem(SESSION_KEY);

  if (!storedSession) {
    return null;
  }

  try {
    return JSON.parse(storedSession) as AuthSession;
  } catch {
    localStorage.removeItem(SESSION_KEY);
    return null;
  }
}

export function logout(): void {
  localStorage.removeItem(SESSION_KEY);
}
