import './index.css';
import styles from './App.module.scss';
import heroBg from './images/bg-intro-desktop.svg';
import open from './images/icon-api.svg';
import budgeting from './images/icon-budgeting.svg';
import facebook from './images/icon-facebook.svg';
import instagram from './images/icon-instagram.svg';
import onboarding from './images/icon-onboarding.svg';
import online from './images/icon-online.svg';
import pinterest from './images/icon-pinterest.svg';
import twitter from './images/icon-twitter.svg';
import youtube from './images/icon-youtube.svg';
import confetti from './images/image-confetti.jpg';
import money from './images/image-currency.jpg';
import heroImage from './images/image-mockups.png';
import plane from './images/image-plane.jpg';
import treat from './images/image-restaurant.jpg';
import logo from './images/logo.svg';

function App() {
  return (
    <>
      <header className={styles.navBar}>
        <div>
          <img src={logo} alt="logo" />
        </div>

        <nav>
          <ul className={styles.navLink}>
            <li>
              <a href="/#">Home</a>
            </li>
            <li>
              <a href="/#">About</a>
            </li>
            <li>
              <a href="/#">Contact</a>
            </li>
            <li>
              <a href="/#">Blog</a>
            </li>
            <li>
              <a href="/#">Careers</a>
            </li>
          </ul>
        </nav>
        <div className={styles.navRight}>
          <button>Request Invite</button>
        </div>
      </header>

      <main>
        <section className={styles.heroSection}>
          <div className={styles.heroTextBox}>
            <h1> Next generation digital banking</h1>
            <p>
              Take your financial life online. Your Easybank account will be a
              one-stop-shop for spending, saving, budgeting, investing, and much
              more.
            </p>
            <button> Request Invite</button>
          </div>
          <div className={styles.heroImageBox}>
            <img className={styles.iphones} src={heroImage} alt="phones" />
            <img className={styles.heroBg} src={heroBg} alt="background" />
          </div>
        </section>
        <section className={styles.aboutSection}>
          <div className={styles.aboutTitleBox}>
            <h2>Why choose Easybank?</h2>
            <p>
              We leverage Open Banking to turn your bank account into your
              financial hub. Control your finances like never before.
            </p>
          </div>
          <div className={styles.aboutInfoBox}>
            <div>
              <img src={online} alt="online banking icon" />
              <h3>Online Banking</h3>
              <p>
                Our modern web and mobile applications allow you to keep track
                of your finances wherever you are in the world.
              </p>
            </div>
            <div>
              <img src={budgeting} alt="budgeting icon" />
              <h3>Simple Budgeting</h3>
              <p>
                See exactly where your money goes each month. Receive
                notifications when you’re close to hitting your limits.
              </p>
            </div>
            <div>
              <img src={onboarding} alt="onboarding icon" />
              <h3> Fast Onboarding</h3>
              <p>
                We don’t do branches. Open your account in minutes online and
                start taking control of your finances right away.
              </p>
            </div>
            <div>
              <img src={open} alt="open api icon" />
              <h3> Open API</h3>
              <p>
                Manage your savings, investments, pension, and much more from
                one account. Tracking your money has never been easier.
              </p>
            </div>
          </div>
        </section>
        <section className={styles.articleSection}>
          <h2>Latest Articles</h2>
          <div className={styles.articles}>
            <div>
              <img src={money} alt="money" />
              <div>
                <p className={styles.articleAuthor}>By Claire Robinson</p>
                <h6>Receive money in any currency with no fees</h6>
                <p>
                  The world is getting smaller and we're becoming more mobile.
                  So why should you be forced to only receive money in a single
                  …
                </p>
              </div>
            </div>
            <div>
              <img src={treat} alt="treat" />
              <div>
                <p className={styles.articleAuthor}> By Wilson Hutton</p>
                <h6> Treat yourself without worrying about money</h6>
                <p>
                  Our simple budgeting feature allows you to separate out your
                  spending and set realistic limits each month. That means you …
                </p>
              </div>
            </div>
            <div>
              <img src={plane} alt="plane" />
              <div>
                <p className={styles.articleAuthor}> By Wilson Hutton</p>
                <h6> Take your Easybank card wherever you go</h6>
                <p>
                  We want you to enjoy your travels. This is why we don’t charge
                  any fees on purchases while you’re abroad. We’ll even show you
                  …
                </p>
              </div>
            </div>
            <div>
              <img src={confetti} alt="confetti" />
              <div>
                <p className={styles.articleAuthor}> By Claire Robinsonn</p>
                <h6> Our invite-only Beta accounts are now live!</h6>
                <p>
                  After a lot of hard work by the whole team, we’re excited to
                  launch our closed beta. It’s easy to request an invite through
                  the site ...
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer>
        <div>
          <img src={logo} alt="logo" />
          <div className={styles.socials}>
            <img src={facebook} alt="facebook" />
            <img src={youtube} alt="youtube" />
            <img src={twitter} alt="twitter" />
            <img src={pinterest} alt="pinterest" />
            <img src={instagram} alt="insta" />
          </div>
        </div>
        <div>
          <ul>
            <li>
              <a href="/#">About Us</a>{' '}
            </li>
            <li>
              <a href="/#">Contact</a>{' '}
            </li>
            <li>
              <a href="/#">Blog</a>{' '}
            </li>
          </ul>
        </div>
        <div>
          <ul>
            <li>
              <a href="/#">Careers</a>{' '}
            </li>
            <li>
              <a href="/#">Support</a>{' '}
            </li>
            <li>
              <a href="/#">Privacy Policy</a>{' '}
            </li>
          </ul>
        </div>
        <div className={styles.buttonDiv}>
          <button>Request Invite</button>
          <p>&copy; Easybank. All Rights Reserved</p>
        </div>
      </footer>
    </>
  );
}

export default App;
