import styles from './Footer.module.css'

export default function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        Made by Daniel Hiebert with help from Yuri Verbowski and Sean Burman <img src="/netliheart.svg" alt="Netlify Logo" className={styles.logo} /> 
      </footer>
    </>
  )
}
