import './index.css';
import { Image } from '../../assets';

const Footer = () => (
    <>
        <div className='footer-container'>
            <div className='footer-content'>
                <div className="footer-section">
                    <div className='footer-logo'>
                        PUFI
                    </div>
                </div>
                <div className="footer-section footer-border">
                    <div className='footer-item'>
                        PUFI RAIN
                    </div>
                    <div className='footer-item'>
                        PUFI PUFF
                    </div>
                    <div className='footer-item'>
                        PUFI CART
                    </div>
                    <div className='footer-item'>
                        PUFI NAP
                    </div>
                </div>
                <div className="footer-section footer-border">
                    <div className='footer-item'>
                        CONTACTO
                    </div>
                    <div className='footer-item'>
                        AYUDA
                    </div>
                    <div className='footer-item'>
                        CÓMO COMPRAR
                    </div>
                    <div className='footer-item'>
                        TÉRMINOS Y CONDICIONES
                    </div>
                </div>
                <div className="footer-section footer-border">
                    <div className='footer-item'>
                        compra 100% segura
                    </div>
                    <img src={Image.security} width={100} />
                </div>
                <div className="footer-section">
                    <div className='footer-item'>
                        SIGUENOS EN
                    </div>
                    <div>
                        <a href='https://facebook.com' target="_blank"><img className="rs-logo" src={Image.facebook} width={25} /></a>
                        <a href='https://twitter.com' target="_blank"><img className="rs-logo" src={Image.twitter} width={25} /></a>
                        <a href='https://instagram.com' target="_blank"><img className="rs-logo" src={Image.instagram} width={25} /></a>
                    </div>
                </div>
            </div>
        </div>
        <div className="footer-section-copyright">
            <div className='footer-copyright'>
                Pufy Copyright 2017 - Todos los derechos reservados
            </div>
        </div>
    </>
);

export default Footer;