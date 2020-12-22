import Image from 'next/image'
import React from 'react'
import styles from '../styles/Home.module.scss'
import Link from 'next/link'

function Home() {
  return (
    <div>
        <head>
            <title> Indivíduo Social - Hub Social Medias </title>
            <meta name="author" content="Indíviduo Social"></meta>
            <meta name="description" content="Blog, Blogger, Vlog, Tecnologias, Cursos, Noticias, Programação, Psciologia, 
            Historia, Games, Youtube, Youtuber, Social Media, Individuo Social, Indivíduo Social, Individuosocial, indivíduosocial"></meta>
            <meta name="keywords" content="Indíviduo Social, Individuo Social, Indivíduosocial,individuosocial, Programação, 
            Tecnologia, Móveis Planejados, Social, Indíviduo, Cursos, CSS, HTML, Java, Github, Youtube, Facebook, Next.js, React, 
            Blog,Blogger,individuosocial.com.br, Promob, Corel Draw, Photophop, Camtasia, Manutenção"></meta>
            

        </head>

        <header className={styles.cabeca} >
           <a href="http://www.individuosocial.com.br" className={styles.a}>
                <Image  src="/Logo Individuo Social.svg"  alt="Logo individuosocial Icon"   width="195"  height="70" />
                </a>  
                <main>
                    <nav>
                        <ul className={styles.menuPrincipal}>
                            <li>
                                <a href="http://www.individuosocial.com.br">
                                    Tube News
                                </a>
                            </li>   

                            <li>
                                <a href="http://www.individuosocial.com.br">
                                    Cotidiano do Indivíduo
                                </a>
                            </li> 

                            <li>
                                <a href="http://www.individuosocial.com.br">
                                    Móveis Individuais
                                </a>
                            </li> 

                            <li>
                                <a href="http://www.individuosocial.com.br">
                                    Cursos para o social
                                </a>
                            </li> 
                        </ul>
                    </nav>
                </main>
            
            <nav>
                <ul className={styles.menu}>
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
                
            </nav>

        </header>
        
        <body className={styles.corpo}>
        
            <iframe scrolling="no" frameBorder="0" name="um" src="/CorpoPrincipal" width="100%" height="100%"></iframe>   
                
       </body>    



       
        
        <footer className={styles.footer}>

            <p>- 2020 - 2021 - Tecnologias: <a href="https://nodejs.org/en/">Node.js</a> - <a href="https://github.com/luizhcoelho">GitHub</a> - <a href="https://vercel.com/luizhcoelho/git-individuosocial">Vercel</a> -
             <a href="https://cloud.mongodb.com/v2/5fd7e6847395192b8f15b1cd#clusters">MongoDB</a> - <a href="https://icon-icons.com">Icon-Icon</a> -  Feito por <a href="https://individuosocial.com.br" alt="indivíduosocial">Indivíduo Social</a> -</p>

        </footer>
        
        

    </div>
    )
}

export default Home
