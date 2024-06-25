import { signIn } from "next-auth/react";
import styles from "./loginPage.module.css";
import Navbar from "@/components/navbar/Navbar";

const LoginPage = () => {
  const handleSignIn = async (provider) => {
    await signIn(provider, { callbackUrl: "/" }); // Replace "/dashboard" with your desired callback URL
  };
  
  return (
    
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.socialButton} onClick={() => handleSignIn("google")}>
          Sign in with Google
        </div>
        <div className={styles.socialButton}>Sign in with Github</div>
        <div className={styles.socialButton}>Sign in with Facebook</div>
      </div>
    </div>
  );
};

export default LoginPage;
