import { StylesProvider } from "@chakra-ui/react"
import Link from "next/link"
import Style from "./style.module.css"

function Footer({ id,img, title, text }) {
    return (
        <div id={id && id} className={Style.container}>
            <div className={Style.cont}>
                <div className={Style.left}>
                    <img className={Style.logo} src="/logo.png" />
                    <ul className={Style.list}>
                        <li className={Style.itemList}>
                            <Link href="/">
                            <a className={Style.itemListLink} target="_blank" href="https://instagram.com/naganoconsultoria?utm_medium=copy_link">
                                <>
                                    <img src="/um.svg" />
                                    @naganoconsultoria
                                </>
                            </a>
                            </Link>
                        </li>
                        <li className={Style.itemList}>
                            <Link href="/">
                                <>
                                    <img src="/dois.svg" />
                                    (11) 2639-0006
                                    0800-035-3737
                                </>
                                    
                            </Link>
                        </li>
                        <Link href="https://api.whatsapp.com/send/?phone=5511950647974&text=Ola!!!&app_absent=0">
                        <li className={Style.itemListWa}>
                       
                          
                                <img className={Style.wapp} src="/what.app.png" />
                                
                              
            
                            
                            <span> (11) 95064-7974 </span>
                        </li>
                        </Link><li className={Style.itemList}>
                            <Link href="/">
                                <>
                                    <img src="/cinco.svg" />
                                    atendimento@naganoconsultoria.com.br
                                </>
                            </Link>
                        </li>
                        {/* <li className={Style.itemList}>
                            <Link href="/">
                                <>
                                    <img src="/tres.svg" />
                                    @naganocnsultoria02
                                </>
                            </Link>
                        </li> */}
                    </ul>
                </div>
                {/* <div  className={Style.midlle}>
                    <ul className={Style.list}>
                        <li className={Style.itemList}>
                            <Link href="/">
                                <>
                                    <img src="/dois.svg" />
                                    (11) 2639-0006
                                </>
                            </Link>
                        </li>
                        <li className={Style.itemList}>
                            <Link href="/">
                                <>
                                    <img src="/quatro.svg" />
                                    @naganocnsultoria02
                                </>
                            </Link>
                        </li>
                        <li className={Style.itemList}>
                            <Link href="/">
                                <>
                                    <img src="/cinco.svg" />
                                    atendimento@naganoconsultoria.com.br
                                </>
                            </Link>
                        </li>
                    </ul>
                </div > */}
                {/* <div className={Style.right}>
                    <ul className={Style.list}>
                        <li className={Style.itemList}>
                            <Link href="/">
                                <>
                                    <img src="/um.svg" />
                                    @naganocnsultoria02
                                </>
                            </Link>
                        </li>
                        <li className={Style.itemList}>
                            <Link href="/">
                                <>
                                    <img src="/tres.svg" />
                                    @naganocnsultoria02
                                </>
                            </Link>
                        </li>
                    </ul>
                </div> */}
            </div>
            <button className={Style.button}>©2021 por Nagano Soluções Financeiras</button>
        </div>
    )
}

export default Footer
