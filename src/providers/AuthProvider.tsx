import type { Session, User } from "@supabase/supabase-js";
import type React from "react";
import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useReducer,
} from "react";
import { supabase } from "../configs/supabase";

interface AuthState {
  session: Session | null;
  user: User | null;
  loading: boolean;
}

type AuthAction =
  | { type: "SET_SESSION"; payload: Session | null }
  | { type: "SET_LOADING"; payload: boolean };

interface AuthContextType extends AuthState {}

const initialState: AuthState = {
  session: null,
  user: null,
  loading: true,
};

function authReducer(state: AuthState, action: AuthAction): AuthState {
  switch (action.type) {
    case "SET_SESSION":
      return {
        ...state,
        session: action.payload,
        user: action.payload?.user ?? null,
      };
    case "SET_LOADING":
      return {
        ...state,
        loading: action.payload,
      };
    default:
      return state;
  }
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  useEffect(() => {
    // Get initial session
    supabase.auth.getSession().then(({ data: { session } }) => {
      dispatch({ type: "SET_SESSION", payload: session });
      dispatch({ type: "SET_LOADING", payload: false });
    });

    // Listen for auth changes
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      dispatch({ type: "SET_SESSION", payload: session });
      dispatch({ type: "SET_LOADING", payload: false });
    });

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  const value = useMemo(
    () => ({
      session: state.session,
      user: state.user,
      loading: state.loading,
    }),
    [state.session, state.user, state.loading],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
