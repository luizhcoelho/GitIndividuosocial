import Image from 'next/image'
import React from 'react'
import styles from '../../styles/Home.module.scss'

function Header() {
  return (
   
    <div class="grid-container">
        <div class="logo">
            <a href="http://www.individuosocial.com.br" >
                <Image class="Image" src="/Logo Individuo Social.svg"  alt="Logo individuosocial Icon"   width="195"  height="70" title="Home Indivíduo Social" />
            </a>
        </div>
        <div class="TubeNews">
            <a href="../componentes/Tubenew">
                Tube News
            </a>
        </div>
        <div class="Cotidiano-do-Indivíduo">
            <a href="../componentes/Cotidiano">
                Cotidiano do Indivíduo
            </a></div>
        <div class="Móveis-Individuais">
            <a href="../componentes/MoveisIndividuais">
                Móveis Individuais
            </a></div>
        <div class="Cursos-para-o-social">
            <a href="../componentes/cursos">
                Cursos para o social
            </a></div>
        <div class="iconsociais-1">
            <div class="whatsappico">
                <a href="https://chat.whatsapp.com/IVrLKCeb5KUGAULVGvWvCd" target="_blank">
                    <Image src="/whatsapp.svg"  alt="whatsapp Icon"   width="26"  height="26" title="Whatsapp" />
                </a></div>
            <div class="facebookico">
                <a href="https://www.facebook.com/IndividuoSocial" target="_blank">
                    <Image src="/facebook.svg"  alt="facebook Icon"   width="26"  height="26" title="FaceBook @IndividuoSocial" />
                </a></div>
            <div class="instagramico">
                <a href="https://www.instagram.com/individuosocial/" target="_blank">
                    <Image src="/instagram.svg"  alt="minstagram Icon"   width="26"  height="26" title="Instagram @IndividuoSocial" />
                </a></div>
            <div class="youtubeico">
                <a href="https://www.youtube.com/channel/UCnXNCenEARk-Z2lFKeHBASw/featured?view_as=subscriber" target="_blank">
                    <Image src="/youtube.svg"  alt="youtube Icon"   width="26"  height="26" title="YouTube @Indivíduo Social"/>
                </a></div>
        </div>
        <div class="iconsociais-2">
            <div class="blogger">
                <a href="https://individuosocialbr.blogspot.com/" target="_blank">
                    <Image src="/Blogger.svg"  alt="Blogger Icon"   width="26"  height="26" title="Blogger"  />
                </a></div>

            <div class="telefoneico">
                <a href="tel: 032991083770" target="https://chat.whatsapp.com/IVrLKCeb5KUGAULVGvWvCd">
                    <Image src="/telefone.svg"  alt="Telefone Icon"   width="26"  height="26" title="Telefone: (32) 99108-3770"  />
                </a></div>
            <div class="emailico">
                <a href="mailto:luizhenriqueslacerda@hotmail.com" target="_blank">
                    <Image src="/email.svg"  alt="Email Icon"   width="26l"  height="26" title="E-Mail: individuosocialbr@gmail.com" />
                </a></div>
            <div class="localizacaoico">
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