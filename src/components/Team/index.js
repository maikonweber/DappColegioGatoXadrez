import Link from "next/link"
import Style from "./style.module.css"
function Team({img}) {
    return (
        <div className={Style.container}>
            <h1 className={Style.title}>Our Team</h1>
           <div className={Style.cont}>
                <div className={Style.left}>
                    <div className={Style.contImage}>
                        <img src="/people.png" alt="26565"/>
                    </div>
                </div>
                <div className={Style.right}>
                    <strong className={Style.titleName}>Julia Martins</strong>
                    <p className={Style.text}>
                         It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.
                    </p>
                    <div className={Style.tabsCont}>
                        <p className={Style.tabs}/>
                        <p className={Style.tabs}/>
                        <p className={Style.tabs}/>
                    </div>
                </div>
           </div>
           <img className={Style.bg} src="/bg.png" alt="26565"/>
           
        </div>
    )
}

export default Team
