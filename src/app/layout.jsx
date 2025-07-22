import './globals.css';
import './style.scss';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

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
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/images/favicons/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/images/favicons/favicon-16x16.png"
        />
        <link rel="shortcut icon" href="/images/favicons/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/images/favicons/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="/images/favicons/android-chrome-192x192.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="512x512"
          href="/images/favicons/android-chrome-512x512.png"
        />
        <title>Заборы в Белгороде</title>
      </head>
      <body>
        <header>
          <Header />
        </header>
        <main className="layout-main">
          <div className="container">{children}</div>
        </main>
        <footer style={{ background: '#0C4C01' }}>
          <div className="container">
            <Footer />
          </div>
        </footer>
      </body>
    </html>
  );
};

export default Layout;
