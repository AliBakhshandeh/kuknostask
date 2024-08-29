import { ReactNode, useEffect } from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

interface GuestGuardProps {
  children: ReactNode;
}

const GuestGuard = ({ children }: GuestGuardProps) => {
  const navigate = useNavigate();
  const [cookies] = useCookies(["walletId", "walletTransactions"]);
  console.log();
  const isAuthenticated =
    !!cookies.walletId && cookies.walletTransactions !== undefined;

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/dashboard");
    }
  }, [isAuthenticated, navigate]);

  if (isAuthenticated) {
    return null;
  }

  return <>{children}</>;
};

export default GuestGuard;
