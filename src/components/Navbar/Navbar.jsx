

import styles from './Navbar.module.css'; 

function Navbar() {
  return (
    <header className={styles.header}>
      <div className='container'>
        <div className='row'>
          <div className={styles.logoContainer}>
{        /*   <img src="assets/img/public/logo.svg" alt="Logo" />*/}        
      <a href="#">mangcoding Store</a>
          </div>
          <nav>
            <ul>
              <li>
                <a href="#" className={styles.active}>
                  Home
                </a>
              </li>
              <li>
                <a href="#">Course</a>
              </li>
              <li>
                <a href="#">About us</a>
              </li>
              <li>
                <a href="#">Article</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </nav>
          <div className={styles.authContainer}>
            <a href="#" className={styles.login}>
              Log in
            </a>
            <a href="#" className={styles.register}>
              Register
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
