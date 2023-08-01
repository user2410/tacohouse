export interface AuthState {
  token: string | null;
  username: string | null;
  email: string | null;
  
  isAuth: boolean;
  isSigningIn: boolean;

  error: any;
}