import './globals.css';
import './style.scss';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BurgerMenu from '@/components/BurgerMenu';

const Layout = ({ children }) => {
  return (
    <html lang="ru">
      <head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter&family=Manrope:wght@200..800&family=Montserrat&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter&family=Manrope:wght@200..800&family=Montserrat:wght@800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <header>
          <div className="container">
            <Header />
          </div>
        </header>
        <main className="layout-main">
          <div className="container">{children}</div>
        </main>
        {/*<footer style={{ background: '#0C4C01' }}>*/}
        {/*  <div className="container">*/}
        {/*    <Footer />*/}
        {/*  </div>*/}
        {/*</footer>*/}
      </body>
    </html>
  );
};

export default Layout;
