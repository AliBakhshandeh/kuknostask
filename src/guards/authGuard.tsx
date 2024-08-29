import { ReactNode, useEffect } from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

interface AuthGuardProps {
  children: ReactNode;
}

const AuthGuard = ({ children }: AuthGuardProps) => {
  const navigate = useNavigate();
  const [cookies, _, removeCookie] = useCookies([
    "walletId",
    "walletTransactions",
  ]);

  const isAuthenticated =
    !!cookies.walletId && cookies.walletTransactions !== undefined;

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/");
      removeCookie("walletTransactions");
      removeCookie("walletId");
    }
  }, [isAuthenticated, navigate]);

  if (!isAuthenticated) {
    return null;
  }

  return <>{children}</>;
};

export default AuthGuard;
