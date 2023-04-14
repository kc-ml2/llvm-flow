import styles from './Footer.module.scss'
import github from '@/images/github.png'
import insta from '@/images/insta.png'
import linkedin from '@/images/linkedin.png'
import facebook from '@/images/facebook.png'
import logo from '@/images/footer_logo.png'

const Footer = () => {
  return (
    <footer className={styles.Footer}>
      <section className={styles.container}>
        <section className={styles.one}>
          <div>
            <img src={logo} width="74" height="20.82" /> | Machine Learning Lab
          </div>
        </section>
        <section className={styles.two}>
          <div>© KC-ML2.All rights reserved.</div>
        </section>
        <section className={styles.three}>
          <div>
            <a
              href="https://github.com/kc-ml2"
              target="_blank"
              rel="noreferrer"
            >
              <img src={github} alt="github" width="24" height="24"></img>
            </a>
            <a
              href="https://www.linkedin.com/company/kc-ml2/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={linkedin} alt="github" width="24" height="24"></img>
            </a>
            <a
              href="https://www.facebook.com/KCML2/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={facebook} alt="github" width="24" height="24"></img>
            </a>
            <a
              href="https://www.instagram.com/ml2_machinelearninglab/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={insta} alt="github" width="24" height="24"></img>
            </a>
          </div>
        </section>
      </section>
    </footer>
  )
}

export default Footer
