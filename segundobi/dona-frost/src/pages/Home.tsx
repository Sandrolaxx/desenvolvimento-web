import "../styles/home.css";
import "../styles/utility.css";
import "../styles/header.css";
import "../styles/hero.css";
import "../styles/solution.css";
import "../styles/testimonials.css";
import Logo from "../assets/logo.svg"
import { useState } from "react";
import Close from "../assets/close.svg";
import Menu from "../assets/menu.svg";
import Button from "../components/Button";
import RectangleOne from "../assets/images/rectangleOne.png"
import RectangleTwo from "../assets/images/rectangleTwo.png"
import Bolt from "../assets/bolt.svg";
import Chef from "../assets/chef.svg";
import Moped from "../assets/moped.svg";
import EllonMa from "../assets/images/ellon-ma.png";
import RyanGosling from "../assets/images/ryan.png";
import PDiddy from "../assets/images/diddy.jpg";
import Star from "../assets/star.svg";
import StarOuter from "../assets/starouter.svg";

export function Home() {
    const [showMobileMenu, setShowMobileMenu] = useState(false);

    return (
        <>
            <header className="container py-sm">
                <nav className="flex items-center justify-between">
                    <img src={Logo} alt="Logo MarliSabores" width={220} height={80} />
                    <div className="desktop-only">
                        <ul className="flex gap-1">
                            <li>
                                <a href="#">Home</a>
                            </li>
                            <li>
                                <a href="#solution">Soluções</a>
                            </li>
                            <li>
                                <a href="#testimonials">Depoimentos</a>
                            </li>
                            <li>
                                <a href="#pricing">Preços</a>
                            </li>
                            <li>
                                <a href="#contact">Contato</a>
                            </li>
                        </ul>
                    </div>
                    <div className="desktop-only">
                        <div className="flex items-center">
                            <a className="reverse-color ml-lg" href="">Login</a>
                            <Button text="Cadastre-se" />
                        </div>
                    </div>
                    <div className="mobile-menu">
                        {showMobileMenu ?
                            <div className="mobile-menu-content">
                                <div className="container flex">
                                    <ul>
                                        <li>
                                            <a onClick={() => setShowMobileMenu(false)} href="#">Home</a>
                                        </li>
                                        <li>
                                            <a onClick={() => setShowMobileMenu(false)} href="#solution">Soluções</a>
                                        </li>
                                        <li>
                                            <a onClick={() => setShowMobileMenu(false)} href="#testimonials">Depoimentos</a>
                                        </li>
                                        <li>
                                            <a onClick={() => setShowMobileMenu(false)} href="#pricing">Preços</a>
                                        </li>
                                        <li>
                                            <a onClick={() => setShowMobileMenu(false)} href="#contact">Contato</a>
                                        </li>
                                        <li>
                                            <a onClick={() => setShowMobileMenu(false)} href="#" className="reverse-color" >Login</a>
                                        </li>
                                    </ul>
                                    <span onClick={() => setShowMobileMenu(!showMobileMenu)} className="btn-wrapper close-icon">
                                        <img src={Close} alt="ícone fechar menu" width={24} height={24} />
                                    </span>
                                </div>
                            </div>
                            :
                            <span onClick={() => setShowMobileMenu(!showMobileMenu)} className="btn-wrapper menu-icon" >
                                <img src={Menu} alt="ícone menu" width={24} height={24} />
                            </span>
                        }
                    </div>

                </nav>
            </header>
            <section id="hero">
                <span className="desktop-only">
                    <img src={RectangleTwo} alt="Imagem retângulo dois" />
                </span>
                <img src={RectangleOne} alt="Imagem retângulo um" />
                <div className="container content">
                    <p className="desktop-only">
                        Olá
                    </p>
                    <h1>
                        Tenha um café da manhã inesquecível com nossos produtos
                    </h1>
                    <p>
                        Você sabe que, para alcançar o sucesso, é fundamental
                        ter café da manhã delicioso.
                    </p>
                    <div className="flex gap-1">
                        <Button text="Cadastre-se" />
                        <span className="desktop-only">
                            <Button text="Veja mais" secondary />
                        </span>
                    </div>
                </div>
            </section>
            <section id="solution">
                <header>
                    <span>
                        <h2>Soluções</h2>
                        <span className="desktop-only">
                            <h2>
                                Sob medida para você
                            </h2>
                        </span>
                    </span>
                    <p>
                        Inovação é com a gente! A <strong>MarliSabores </strong>
                        já conquistou diversos clientes, seja você mais um deles,
                        veja tudo que pode ganhar com nossos serviços.
                    </p>
                </header>
                <section className="even-columns">
                    <div className="card">
                        <span>
                            <img src={Bolt} alt="ícone campeão" width={64} height={64} />
                        </span>
                        <div>
                            <h3>
                                Seu pedido feito em 5 min
                            </h3>
                            <p>
                                Ideia matadora, nosso time já ganhou diversos eventos de inovação com nosso produto, entre eles podemos citar o CityFarm da FAG e Startup Garage.
                            </p>
                            <hr />
                        </div>
                    </div>
                    <div className="card">
                        <span>
                            <img src={Chef} alt="ícone campeão" width={64} height={64} />
                        </span>
                        <div>
                            <h3>
                                Feito por uma chef de cozinha
                            </h3>
                            <p>
                                Ideia matadora, nosso time já ganhou diversos eventos de inovação com nosso produto, entre eles podemos citar o CityFarm da FAG e Startup Garage.
                            </p>
                            <hr />
                        </div>
                    </div>
                    <div className="card">
                        <span>
                            <img src={Moped} alt="ícone campeão" width={64} height={64} />
                        </span>
                        <div>
                            <h3>
                                Entrega mais rápida da cidade
                            </h3>
                            <p>
                                Ideia matadora, nosso time já ganhou diversos eventos de inovação com nosso produto, entre eles podemos citar o CityFarm da FAG e Startup Garage.
                            </p>
                            <hr />
                        </div>
                    </div>
                </section>
            </section>
            <section id="testimonials">
                <header>
                    <span>
                        <p className="desktop-only">
                            Conselho de quem conhece
                        </p>
                        <h1>
                            Cada cliente importa
                        </h1>
                    </span>
                    <p>
                        Quem já pediu nossas cucas e paẽs mudou de vida, acompanhe abaixo os testemunhos de quem já comprou e aprovou.
                    </p>
                </header>
                <section className="carousel">
                    <div className="carousel-content">
                        <div className="carousel-card">
                            <img src={EllonMa} alt="Ellon Ma" />
                            <span>
                                <p>
                                    A cuca de chocolate mudou minha vida, antes estava sendo
                                    perseguido pelo partido comunista chinês, porém depois
                                    de comprar uma cuca ganhei créditos sociais.
                                </p>
                            </span>
                            <span>
                                <img src={StarOuter} alt="Estrelha completa" />
                                <img src={StarOuter} alt="Estrelha completa" />
                                <img src={StarOuter} alt="Estrelha completa" />
                                <img src={StarOuter} alt="Estrelha completa" />
                                <img src={Star} alt="Estrelha completa" />
                            </span>
                            <span>
                                <p>Ellon Ma</p>
                                <p>CEO BING CHILLING</p>
                            </span>
                        </div>
                        <div className="carousel-card">
                            <img src={RyanGosling} alt="Ellon Ma" />
                            <span>
                                <p>
                                    Sempre como uma cuca de abacaxi com vinho antes do trabalho,
                                    calibro a mão para poder fazer as filmagens,
                                    esse é o segredo de um bom ator e de um grande filme.
                                </p>
                            </span>
                            <span>
                                <img src={StarOuter} alt="Estrelha completa" />
                                <img src={StarOuter} alt="Estrelha completa" />
                                <img src={StarOuter} alt="Estrelha completa" />
                                <img src={StarOuter} alt="Estrelha completa" />
                                <img src={Star} alt="Estrelha completa" />
                            </span>
                            <span>
                                <p>Ryan Gosling</p>
                                <p>Ator FlixNet</p>
                            </span>
                        </div>
                        <div className="carousel-card">
                            <img src={PDiddy} alt="Ellon Ma" />
                            <span>
                                <p>
                                    Minhas festas começaram a bombar quando
                                    comecei a fazer open de cuca, pessoal simplesmente
                                    ficava louco.
                                </p>
                            </span>
                            <span>
                                <img src={StarOuter} alt="Estrelha completa" />
                                <img src={StarOuter} alt="Estrelha completa" />
                                <img src={StarOuter} alt="Estrelha completa" />
                                <img src={StarOuter} alt="Estrelha completa" />
                                <img src={Star} alt="Estrelha completa" />
                            </span>
                            <span>
                                <p>Renato Aragão</p>
                                <p>Promoter de Festas</p>
                            </span>
                        </div>
                    </div>
                    <div className="carousel-content">
                        <div className="carousel-card">
                            <img src={EllonMa} alt="Ellon Ma" />
                            <span>
                                <p>
                                    A cuca de chocolate mudou minha vida, antes estava sendo
                                    perseguido pelo partido comunista chinês, porém depois
                                    de comprar uma cuca ganhei créditos sociais.
                                </p>
                            </span>
                            <span>
                                <img src={StarOuter} alt="Estrelha completa" />
                                <img src={StarOuter} alt="Estrelha completa" />
                                <img src={StarOuter} alt="Estrelha completa" />
                                <img src={StarOuter} alt="Estrelha completa" />
                                <img src={Star} alt="Estrelha completa" />
                            </span>
                            <span>
                                <p>Ellon Ma</p>
                                <p>CEO BING CHILLING</p>
                            </span>
                        </div>
                        <div className="carousel-card">
                            <img src={RyanGosling} alt="Ellon Ma" />
                            <span>
                                <p>
                                    Sempre como uma cuca de abacaxi com vinho antes do trabalho,
                                    calibro a mão para poder fazer as filmagens,
                                    esse é o segredo de um bom ator e de um grande filme.
                                </p>
                            </span>
                            <span>
                                <img src={StarOuter} alt="Estrelha completa" />
                                <img src={StarOuter} alt="Estrelha completa" />
                                <img src={StarOuter} alt="Estrelha completa" />
                                <img src={StarOuter} alt="Estrelha completa" />
                                <img src={Star} alt="Estrelha completa" />
                            </span>
                            <span>
                                <p>Ryan Gosling</p>
                                <p>Ator FlixNet</p>
                            </span>
                        </div>
                        <div className="carousel-card">
                            <img src={PDiddy} alt="Ellon Ma" />
                            <span>
                                <p>
                                    Minhas festas começaram a bombar quando
                                    comecei a fazer open de cuca, pessoal simplesmente
                                    ficava louco.
                                </p>
                            </span>
                            <span>
                                <img src={StarOuter} alt="Estrelha completa" />
                                <img src={StarOuter} alt="Estrelha completa" />
                                <img src={StarOuter} alt="Estrelha completa" />
                                <img src={StarOuter} alt="Estrelha completa" />
                                <img src={Star} alt="Estrelha completa" />
                            </span>
                            <span>
                                <p>Renato Aragão</p>
                                <p>Promoter de Festas</p>
                            </span>
                        </div>
                    </div>
                </section>
            </section>
        </>
    )
}