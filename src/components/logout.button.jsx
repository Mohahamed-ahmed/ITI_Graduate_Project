'use client';
import { useRouter } from "next/navigation";
import { useLogout } from "@/hooks/use-auth";

export default function LogoutButton({ className }) {
  const router = useRouter();
  const { mutate: logoutMutation } = useLogout();

  const logoutHandler = () => {
    logoutMutation();
    router.push('/login');
  };

  return (
    <button
      onClick={logoutHandler}
      className={className}
    >
      Logout
    </button>
  );
}
