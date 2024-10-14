import './style.css'

import vk from './../../img/icons/vk.svg';
import gitHub from './../../img/icons/gitHub.svg';
import telegram from './../../img/icons/telegram.svg';

function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__wrapper">
                    <ul className="social">
                        <li className="social__item"><a href="https://vk.com/azunyann"><img src={vk} alt="Link" /></a></li>
                        <li className="social__item"><a href="https://github.com/WhisperingDreamer"><img src={gitHub} alt="Link" /></a></li>
                        <li style={{width: 35}} className="social__item"><a href="https://t.me/Navia_best"><img src={telegram} alt="Link" /></a></li>
                    </ul>
                    <div className="socials">
                        <p>Socials</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;
