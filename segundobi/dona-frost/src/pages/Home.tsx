import "../styles/home.css";
import "../styles/utility.css";
import "../styles/header.css";
import "../styles/hero.css";
import Logo from "../assets/logo.svg"
import { useState } from "react";
import Close from "../assets/close.svg";
import Menu from "../assets/menu.svg";
import Button from "../components/Button";
import RectangleOne from "../assets/images/rectangleOne.png"
import RectangleTwo from "../assets/images/rectangleTwo.png"

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
                        ter parceiros que te impulsionem a ir mais longe.
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

            </section>
        </>
    )
}