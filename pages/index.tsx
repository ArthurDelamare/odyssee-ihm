import { NextPage } from "next";
import styles from "../styles/login.module.css";

const Login: NextPage = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <h1 className={styles.title}>Odyssée</h1>
        <input
          className={styles.input}
          type="text"
          placeholder="Identifiant"
          id="login"
        />
        <input
          className={styles.input}
          type="text"
          placeholder="Mot de passe"
          id="password"
        />
        <a className={styles.text}>Créer un compte</a>
        <a className={styles.text + " " + styles.forget}>Mot de passe oublié</a>
      </div>
    </div>
  );
};
export default Login;
