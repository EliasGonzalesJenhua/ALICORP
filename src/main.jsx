import React from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';
import { useEffect } from 'react';
import './cinema.js';

const Arrow = ({ down = false }) => (
  <svg aria-hidden="true" viewBox="0 0 24 24" className={down ? 'arrow arrow-down' : 'arrow'} fill="none">
    {down ? <path d="M12 4v15m-6-6 6 6 6-6" /> : <path d="M4 12h15m-6-6 6 6-6 6" />}
  </svg>
);

function App() {
  useEffect(() => { window.initCinema?.(); }, []);
  return (
    <main className="hero" id="inicio">
      <div className="hero-image"><video className="hero-video" autoPlay muted loop playsInline preload="auto" aria-hidden="true"><source src="../Food_on_kitchen_table_ef91921e.mp4" type="video/mp4" /></video></div>
      <div className="hero-shade" />
      <header className="topbar">
        <a className="brand" href="#inicio" aria-label="Alicorp, inicio"><span className="brand-mark">a</span>licorp</a>
        <nav className="main-nav" aria-label="Navegación principal">
          <a href="#nosotros">Nosotros</a><a href="#marcas">Nuestras marcas</a><a href="#innovacion">Innovación</a><a href="#sostenibilidad">Sostenibilidad</a>
        </nav>
        <div className="nav-actions"><button className="language" type="button">PE / ES</button><a className="contact" href="mailto:contacto@alicorp.com.pe">Conversemos</a></div>
      </header>

      <section className="hero-copy" id="nosotros">
        <p className="eyebrow"><span />Transformamos lo cotidiano. Impulsamos el futuro.</p>
        <h1>Alimentamos un<br className="desktop-break" /> mañana mejor.</h1>
        <p className="intro">Detrás de cada día, hay un mundo de posibilidades. Las<br className="desktop-break" /> transformamos en bienestar para ti.</p>
        <div className="buttons"><a className="button button-primary" href="#nosotros">Conoce Alicorp <Arrow /></a><a className="button button-outline" href="#marcas">Explora nuestras marcas <Arrow /></a></div>
      </section>

      <footer className="hero-footer">
        <a className="discover" href="#marcas"><Arrow down />Descubre lo que nos mueve</a>
        <div className="slider" aria-label="Diapositiva 1 de 3"><span className="active"/><span/><span/></div>
        <span className="caption">Ingredientes que inspiran</span>
      </footer>
    </main>
    <section className="essence" id="marcas">
      <div className="essence-inner">
        <div className="essence-heading">
          <p className="essence-eyebrow"><span />Nuestra esencia</p>
          <h2>Somos parte de tu vida.<br /><span>Y del futuro que<br className="essence-mobile-break" /> compartimos.</span></h2>
        </div>
        <div className="essence-copy">
          <p>Comenzamos con aceites y jabones. Hoy, conectamos alimentos, cuidado del hogar y cuidado personal con un mismo propósito: alimentar un mañana mejor.</p>
          <p>Una historia de transformación que crece junto a nuestros colaboradores, consumidores, clientes, proveedores y comunidades.</p>
          <a className="essence-link" href="#nosotros">Descubre nuestra historia <svg aria-hidden="true" viewBox="0 0 24 24" fill="none"><path d="M4 12h15m-6-6 6 6-6 6" /></svg></a>
        </div>
      </div>
    </section>
    <section className="cinema-reel" id="innovacion" aria-label="Selección de películas">
      <div className="cinema-track" data-cinema-track></div>
      <div className="cinema-top-mask" /><div className="cinema-bottom-mask" />
      <div className="cinema-indicator" data-cinema-indicator />
      <div className="cinema-cursor" data-cinema-cursor><span>SCROLL</span></div>
      <div className="cinema-modal" data-cinema-modal aria-hidden="true" />
      <div className="cinema-progress" data-cinema-progress />
    </section>
    <section className="b2b-feature" id="soluciones" aria-labelledby="b2b-title">
      <div className="b2b-inner">
        <div className="b2b-video-wrap" aria-hidden="true"><video autoPlay muted loop playsInline preload="metadata"><source src="/panadero.mp4" type="video/mp4" /></video></div>
        <div className="b2b-content">
          <p className="b2b-eyebrow"><span />03 / Análisis empresarial</p>
          <h2 id="b2b-title">Diversificación y<br />desarrollo<br />de soluciones.</h2>
          <p className="b2b-intro">El portafolio permite identificar una orientación tanto al consumidor final como a clientes empresariales. Desde el análisis, esta estructura requiere adaptar productos, capacidades y canales a necesidades distintas.</p>
          <p className="b2b-support">A través de Insuma, las pymes encuentran surtido, asesoría, capacitación y soporte para desarrollar sus negocios.</p>
          <ul className="b2b-list">
            <li><span>01</span>Consumo masivo: alimentos y cuidado</li>
            <li><span>02</span>Soluciones B2B: gastronomía e industria</li>
            <li><span>03</span>Acuicultura: alimentación balanceada</li>
          </ul>
          <div className="b2b-highlight"><strong>+800</strong><span>productos de distintas categorías y marcas disponibles en Insuma.</span></div>
          <a className="b2b-link" href="https://www.alicorp.com.pe/pe/es/productos/alicorp-b2b" target="_blank" rel="noreferrer">Fuente: soluciones B2B <svg aria-hidden="true" viewBox="0 0 24 24" fill="none"><path d="M4 12h15m-6-6 6 6-6 6" /></svg></a>
        </div>
      </div>
    </section>
  );
}

createRoot(document.getElementById('root')).render(<App />);
