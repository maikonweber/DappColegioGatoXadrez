import react from 'react';
import Link from "next/link"
import Style from "./style.module.css"
import { FaBars } from "react-icons/fa"
import { IoClose } from "react-icons/io5"

function Topbar({ image }) {

    function toggleMobile(){
        let mobile = document.querySelector("#mobile")
        mobile.classList.toggle(Style.active)
    }
    return (
        <>
            <div className={Style.container} id="navbar">
                <nav className={Style.nav}>
                    <Link href="/"><img src="/logo.png" alt="Logo Nagano consultoria." /></Link>
                    <div className={Style.cont}>
                        <div className={Style.contLink} >
                            <Link href="/"><span className={Style.text}>Home</span></Link>
                            <Link href="/#about"><span className={Style.text}>Sobre Nós</span></Link>
                            <Link href="/#contact"><span className={Style.text}>Contatos</span></Link>
                        </div>
                    </div>

                </nav>

                    <button className={Style.btnBars} onClick={toggleMobile}><FaBars /></button>
            </div>
            <div  className={Style.navMobile}>
                    <div id="mobile" className={Style.contLinkMobile} >
                        <div className={Style.divContLink} onClick={()=>{
                            toggleMobile()
                        }}><Link href="/" ><span className={Style.text}>Home</span></Link></div>
                        <div className={Style.divContLink} onClick={()=>{
                            toggleMobile()
                        }}><Link href="/#about" onClick={()=>{
                            toggleMobile()
                        }}><span className={Style.text}>Sobre Nós</span></Link></div>
                        <div className={Style.divContLink} onClick={()=>{
                            toggleMobile()
                        }}><Link href="/#contact" onClick={()=>{
                            toggleMobile()
                        }}><span className={Style.text}>Contatos</span></Link></div>
                    </div>
                </div>
        </>
    )
}

export default Topbar
