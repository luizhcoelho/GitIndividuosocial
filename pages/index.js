import Image from 'next/image'
import React from 'react'
import styles from '../styles/Home.module.scss'

function Home() {
  return (
    <div>
        <header className={styles.cabeca} >
            
            <Image href="/" src="/Logo Individuo Social.svg"  alt="me"   width="195"  height="70" class="top-right" />
            
                <main>
                    <nav>
                        <ul className={styles.menuPrincipal}>
                            <li>
                                <a href="http://www.individuosocial.com.br">
                                    Tube News
                                </a>
                            </li>   

                            <li>
                                <a href="www.individuosocial.com.br">
                                    Cotidiano do Indivíduo
                                </a>
                            </li> 

                            <li>
                                <a href="www.individuosocial.com.br">
                                    Móveis Individuais
                                </a>
                            </li> 

                            <li>
                                <a href="www.individuosocial.com.br">
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
                        <Image src="/facebook.svg"  alt="facebook Icon"   width="26"  height="26" title="FaceBook" />
                        </a>
                    </li>

                    <li>
                        <a href="https://www.instagram.com/individuosocial/" target="_blank">
                        <Image src="/instagram.svg"  alt="minstagram Icon"   width="26"  height="26" title="Instagram" />
                        </a>
                    </li>

                    <li>
                        <a href="https://www.youtube.com/channel/UCnXNCenEARk-Z2lFKeHBASw/featured?view_as=subscriber" target="_blank">
                        <Image src="/youtube.svg"  alt="youtube Icon"   width="26"  height="26" title="YouTube" />
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
                        <a href="individuosocialbr@gmail.com" target="_blank">
                        <Image src="/email.svg"  alt="Email Icon"   width="26l"  height="26" title="E-Mail:" />
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
            <iframe width="870" height="490" src="https://www.youtube.com/embed/tWrGkMn9lHM" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>



            <h1>Tube New</h1>
            <Image src="/Tumb Tube New.jpg"  alt="me"   width="400"  height="250" />
            <h1>Moveis Individuais</h1>
            <Image src="/Tumb Moveis Individuais.jpg"  alt="me"   width="400"  height="250" />
            <h1>Cotidiano do Individuo</h1>
            <Image src="/Tumb Cotidiano do Individuo.jpg"  alt="me"   width="400"  height="250" />
            <h1>Cursos para o social</h1>
            <Image src="/Tumb Cursos para o social.jpg"  alt="me"   width="400"  height="250" />
            <h1>Global News Later</h1>
            <Image src="/Tumb News Later.jpg"  alt="me"   width="200"  height="110" />
        </body>    
        
        <footer className={styles.footer}>

            <p>2020 - Node.js - GitHub - Vercel - Feito por Indivíduo Social</p>

        </footer>



    </div>
    )
}

export default Home
