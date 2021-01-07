import Image from 'next/image'
import React from 'react'
import styles from '../../styles/Home.module.scss'

function Header() {
  return (
   
    <div className="grid-container">
        <div className="logo">
            <a href="http://www.individuosocial.com.br" >
                <Image className="Image" src="/Logo Individuo Social.svg"  alt="Logo individuosocial Icon"   width="195"  height="70" title="Home Indivíduo Social" />
            </a>
        </div>
        <div className="TubeNews">
            <a href="https://www.youtube.com/playlist?list=PLq5su_5bRC2OYpGSe8oQnnNG41VriT9Kp">
                Tube News
            </a>
        </div>
        <div className="Cotidiano-do-Indivíduo">
            <a href="https://portifolio.individuosocial.com.br">
                Cotidiano do Indivíduo
            </a></div>
        <div className="Móveis-Individuais">
            <a href="https://inspiracoes.individuosocial.com.br">
                Móveis Individuais
            </a></div>
        <div className="Cursos-para-o-social">
            <a href="https://youtube.com/playlist?list=PL5v3eZVeo7CvztG7HN40Jk40Kl-e3z1D_">
                Cursos para o social
            </a></div>
        <div className="iconsociais-1">
            <div className="whatsappico">
                <a href="https://chat.whatsapp.com/IVrLKCeb5KUGAULVGvWvCd" target="_blank">
                    <Image src="/whatsapp.svg"  alt="whatsapp Icon"   width="26"  height="26" title="Whatsapp" />
                </a></div>
            <div className="facebookico">
                <a href="https://www.facebook.com/IndividuoSocial" target="_blank">
                    <Image src="/facebook.svg"  alt="facebook Icon"   width="26"  height="26" title="FaceBook @IndividuoSocial" />
                </a></div>
            <div className="instagramico">
                <a href="https://www.instagram.com/individuosocial/" target="_blank">
                    <Image src="/instagram.svg"  alt="minstagram Icon"   width="26"  height="26" title="Instagram @IndividuoSocial" />
                </a></div>
            <div className="youtubeico">
                <a href="https://www.youtube.com/channel/UCnXNCenEARk-Z2lFKeHBASw/featured?view_as=subscriber" target="_blank">
                    <Image src="/youtube.svg"  alt="youtube Icon"   width="26"  height="26" title="YouTube @Indivíduo Social"/>
                </a></div>
        </div>
        <div className="iconsociais-2">
            <div className="blogger">
                <a href="https://individuosocialbr.blogspot.com/" target="_blank">
                    <Image src="/Blogger.svg"  alt="Blogger Icon"   width="26"  height="26" title="Blogger"  />
                </a></div>

            <div className="telefoneico">
                <a href="tel: 032991083770" target="https://chat.whatsapp.com/IVrLKCeb5KUGAULVGvWvCd">
                    <Image src="/telefone.svg"  alt="Telefone Icon"   width="26"  height="26" title="Telefone: (32) 99108-3770"  />
                </a></div>
            <div className="emailico">
                <a href="mailto:luizhenriqueslacerda@hotmail.com" target="_blank">
                    <Image src="/email.svg"  alt="Email Icon"   width="26l"  height="26" title="E-Mail: individuosocialbr@gmail.com" />
                </a></div>
            <div className="localizacaoico">
                <a href="https://goo.gl/maps/HZqNz8c3doY9gDex7" target="_blank">
                    <Image src="/Localização.svg"  alt="Localização Icon"   width="26"  height="26" title="Localização Google Maps"  />
                </a></div>
        </div>
  </div>
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
    /*<div className="gridsys" >
        <header className="gridheader">
             <div className="flex-container">   
                <div className="flex-items">
                    <a href="http://www.individuosocial.com.br" >
                            <Image  src="/Logo Individuo Social.svg"  alt="Logo individuosocial Icon"   width="195"  height="70" />
                    </a>  

                </div>

                <div className="flex-items">
                    <a>YoutubeNews</a>
                    <a>YoutubeNews</a>
                </div>

                <div className="flex-items">
                    <a>YoutubeNews</a>
                    <a>YoutubeNews</a>
                </div>

                <div className="flex-items">

                    <ul className={styles.contatos}>
                            <li>
                                <a href="https://chat.whatsapp.com/IVrLKCeb5KUGAULVGvWvCd" target="_blank">
                                    <Image src="/whatsapp.svg"  alt="whatsapp Icon"   width="26"  height="26" title="Whatsapp" />
                                </a>
                            </li>           

                            <li>
                                <a href="https://www.facebook.com/IndividuoSocial" target="_blank">
                                    <Image src="/facebook.svg"  alt="facebook Icon"   width="26"  height="26" title="FaceBook @IndividuoSocial" />
                                </a>
                            </li>

                            <li>
                                <a href="https://www.instagram.com/individuosocial/" target="_blank">
                                    <Image src="/instagram.svg"  alt="minstagram Icon"   width="26"  height="26" title="Instagram @IndividuoSocial" />
                                </a>
                            </li>

                            <li>
                                <a href="https://www.youtube.com/channel/UCnXNCenEARk-Z2lFKeHBASw/featured?view_as=subscriber" target="_blank">
                                    <Image src="/youtube.svg"  alt="youtube Icon"   width="26"  height="26" title="YouTube @Indivíduo Social"/>
                                </a>
                            </li>

                            <li>
                                <a href="https://individuosocialbr.blogspot.com/" target="_blank">
                                    <Image src="/Blogger.svg"  alt="Blogger Icon"   width="26"  height="26" title="Blogger"  />
                                </a>
                            </li>
                            
                            <li>
                                <a href="https://chat.whatsapp.com/IVrLKCeb5KUGAULVGvWvCd" target="_blank">
                                    <Image src="/telefone.svg"  alt="Telefone Icon"   width="26"  height="26" title="Telefone: (32) 99108-3770"  />
                                </a>
                            </li>

                            <li>
                                <a href="/" target="_blank">
                                    <Image src="/email.svg"  alt="Email Icon"   width="26l"  height="26" title="E-Mail: individuosocialbr@gmail.com" />
                                </a>
                            </li>

                            <li>
                                <a href="https://goo.gl/maps/HZqNz8c3doY9gDex7" target="_blank">
                                    <Image src="/Localização.svg"  alt="Localização Icon"   width="26"  height="26" title="Localização Google Maps"  />
                                </a>
                            </li>
                    </ul>
            
                </div>
            </div>
        </header>
        
       
       
        

    </div>
    */)
}

export default Header