import Head from 'next/head';
import Link from 'next/link';

function Layout(props) {
  return (
    <div className="layout gris-nordico">
      <Head>
        <title>Blog Sobre Cultura Inca Peruana</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className='header'>
        <div className='container flex'>
          <Link href="/" className='logo terracota-natural'>NordAndes</Link>
          <nav className='nav'>
            <ul>
              <li>
                <Link href="/" className='terracota-natural'>Perú</Link>
                <Link href="/" className='terracota-natural'>Viajes</Link>
                <Link href="/" className='terracota-natural'>About us</Link>
                <Link href="/" className='terracota-natural'>About us</Link>
                <Link href="/" className='terracota-natural'>About us</Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {props.children}

      <footer className=''>
        <p>All rights reserved.</p>
      </footer>

      <style global jsx>
        {`
          .terracota-natural {
            color: #A0522D;
          }
          .oro-andino {
            color: #FFC300;
          }
          .rojo-inca {
            color: #D72638;
          }
          .azul-fjord {
            color: #264653;
          }
          .gris-nordico {
            background: #ececec; 
          }
          .blanco-hueso {
            color: #F5F5DC;
          }
          a {
            text-decoration: none;
          }
          body {
            margin: 0;
            font-family: Helvetica;
          }
          ul {
            margin: 0;
            padding: 0;
          }
          li {
            list-style-type: none;    
          }
          .container {
            max-width: 1200px;
            width: 94%;
            margin: auto;
          }
          .flex {
            display: flex;
            justify-content: space-between;
            align-items: center;
          }
          .layout {
          }
          .header {
            padding: 20px 0;
            background: white;
          }
          .logo {
            font-weight: bold;
            font-size: 20px;
          }
          .nav a {
            padding-left: 20px;
          }
          footer {
            text-align: center;
            background: white;
            padding: 20px;
          }
          footer p {
            margin: 0;
          }
        `}
      </style>
    </div>
  )
}

export default Layout