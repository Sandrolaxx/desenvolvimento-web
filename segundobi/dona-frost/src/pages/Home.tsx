import { useState } from "react";
import ChefHat from "../assets/chef_hat.svg";
import Close from "../assets/close.svg";
import Logo from "../assets/logo.svg";
import Menu from "../assets/menu.svg";
import RectangleOne from "../assets/Rectangle 13.png";
import RectangleTwo from "../assets/Rectangle 14.png";
import Button from "../components/Button";
import "../styles/header.css";
import "../styles/hero.css";
import "../styles/utility.css";
import "../styles/solution.css";

export default function Home() {
    const [showMobileMenu, setShowMobileMenu] = useState(false);

    return (
        <main>
            <header className="container py-sm">
                <nav className="flex items-center justify-between">
                    <img src={Logo} alt="Logo DonaFrost" width={220} height={80} />

                    {/* Desktop */}
                    <div className="desktop-only">
                        <ul className="flex gap-1">
                            <li>
                                <a href="#hero">Home</a>
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
                                            <a href="#hero">Home</a>
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
                                        <li>
                                            <a className="reverse-color" href="#">Login</a>
                                        </li>
                                    </ul>
                                    <span onClick={() => setShowMobileMenu(!showMobileMenu)} className="btn-wrapper">
                                        <img src={Close} alt="ícone fechar menu" width={24} height={24} />
                                    </span>
                                </div>
                            </div>
                            :
                            <span onClick={() => setShowMobileMenu(!showMobileMenu)} className="btn-wrapper" >
                                <img src={Menu} alt="ícone menu" width={24} height={24} />
                            </span>
                        }
                    </div>


                </nav>
            </header>

            <section id="hero">
                <span className="desktop-only">
                    <img src={RectangleTwo} alt="Retangulo dois da tela inicial cor azul" />
                </span>
                <img src={RectangleOne} alt="Retangulo um da tela inicial cor azul" />
                <div className="container content">
                    <p className="desktop-only">
                        Olá
                    </p>
                    <h1>
                        Uma solução que irá te entregar X
                    </h1>
                    <p>
                        Você sabe que, para alcançar o sucesso, é fundamental
                        ter parceiros que te impulsionem a ir mais longe.
                    </p>
                    <div className="flex gap-1">
                        <span>
                            <Button text="Cadastre-se" />
                        </span>
                        <span className="desktop-only">
                            <Button text="Veja Mais" secondary />
                        </span>
                    </div>
                </div>
            </section>

            <section className="container" id="solution">
                <header>
                    <span>
                        <h2>Soluções</h2>
                        <span className="desktop-only">
                            <h2>Sob medida para você</h2>
                        </span>
                    </span>
                    <p>
                        Inovação é com a gente! A <strong>DonaFrost</strong> já
                        conquistou diversos clientes, seja você mais um deles,
                        veja tudo que pode ganhar com nossos serviços.
                    </p>
                </header>
                <section className="even-columns">
                    <div className="card">
                        <span>
                            <img src={ChefHat} alt="Chapeu de Chef" />
                        </span>
                        <div>
                            <h3>Produto Vencedor</h3>
                            <p>Ideia matadora, nosso time já ganhou diversos eventos de inovação com nosso produto, entre eles podemos citar o CityFarm da FAG e Startup Garage.</p>
                            <hr />
                        </div>
                    </div>
                </section>
            </section>

        </main>
    )
}