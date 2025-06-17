import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import styles from "./NotFoundPage.module.css";

export default function NotFoundPage() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/");
    }, 7000);
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className={styles.container}>
      <h1 className={styles.glitch}>404</h1>
      <p className={styles.errorText}>
        <span className={styles.errorCode}>ERROR</span>: YOU'VE ENTERED THE VOID
      </p>
      <p className={styles.recovery}>Initializing recovery protocol...</p>
      <p className={styles.timer}>You will be teleported back to safety in 7 seconds.</p>

      <div className={styles.terminal}>
        <pre>
{`> loading...
> scanning memory...
> page integrity: FAILED
> fallback: HOME_PAGE`}
        </pre>
      </div>
    </div>
  );
}
