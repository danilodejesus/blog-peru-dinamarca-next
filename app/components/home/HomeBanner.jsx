function HomeBanner() {
  return (
    <div className="home-banner bl">
      <div className="container">
        <h1 className="azul-fjord">
          Bienvenidos a un Encuentro entre Culturas y Energías 🇵🇪🇩🇰
        </h1>

        <p>
          En este blog, exploramos las conexiones entre dos mundos fascinantes: Perú y Dinamarca, desde la perspectiva única de quienes viven el choque y la fusión de estas culturas todos los días. Aquí encontrarás reflexiones, historias y conocimientos sobre temas que nos unen de manera inesperada: el sonido, la energía y el magnetismo.
          <br/><br/>
          Desde los misterios de las antiguas culturas peruanas hasta la innovación sostenible danesa, descubriremos juntos cómo estas fuerzas invisibles moldean nuestra vida, nuestra historia y nuestro futuro.
          <br/><br/>
          Acompáñanos en este viaje por la ciencia, la tradición y el arte de dos naciones vibrantes, mientras desentrañamos lo que nos hace resonar como humanidad. 🌍✨
        </p>
      </div>
      
      <style>
        {`
          .home-banner {
            padding: 20px 0;
          }
          .home-banner h1 {
            font-size: 30px;
          }
          .home-banner p {
            max-width: 700px;
          }
        `}
      </style>
    </div>
  )

}

export default HomeBanner