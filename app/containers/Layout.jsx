import Head from 'next/head';

function Layout(props) {
  return (
    <div className="layout">
      <Head>
        <title>Blog Django Next</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className='header'>
        <div className='container flex'>
          <a href="#">Logo</a>
          <nav className='nav'>
            <ul>
              <li>
                <a>Perú</a>
                <a>Dinamarca</a>
                <a>Viajes</a>
                <a>About us</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {props.children}

      <footer>
        <p>All rights reserved.</p>
      </footer>

      <style>
        {`
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
            border: 2px solid red;
          }
          .header {
            padding: 20px 0;
          }
          .nav a {
            padding-left: 20px;
          }
          footer {
            text-align: center;
          }
        `}
      </style>
    </div>
  )
}

export default Layout