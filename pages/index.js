import Image from 'next/image'
import React from 'react'
import styles from '../styles/Home.module.scss'

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
           <a href="http://www.individuosocial.com.br" >
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
            <div>
                        <iframe width="990" height="490" src="https://www.youtube.com/embed/qhzUHWqXaXE" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
            

            <div>

                <ul2 className={styles.menuSocundario}>

                    <li>
                       <a href="https://goo.gl/maps/HZqNz8c3doY9gDex7" target="_blank">
                        <h1>Tube News</h1>
                        <Image src="/Tumb Tube New.jpg"  alt="#indivíduossociais"   width="400"  height="250" />
                        </a>
                    </li>

                    <li>
                         <a href="https://goo.gl/maps/HZqNz8c3doY9gDex7" target="_blank">
                        <h1>Moveis Individuais</h1>
                        <Image src="/Tumb Moveis Individuais.jpg"  alt="#individuossociais"   width="400"  height="250" />
                        </a>
                    </li>

                    <li>
                       <a href="https://goo.gl/maps/HZqNz8c3doY9gDex7" target="_blank">
                        <h1>Cotidiano do Individuo</h1>
                        <Image src="/Tumb Cotidiano do Individuo.jpg"  alt="indivíduossociais"   width="400"  height="250" />
                        </a>

                    </li>

                    <li>
                       <a href="https://goo.gl/maps/HZqNz8c3doY9gDex7" target="_blank">
                        <h1>Cursos para o social</h1>
                        <Image src="/Tumb Cursos para o social.jpg"  alt="individuossociais"   width="400"  height="250" />  
                        </a>  
                    </li>

                </ul2>

  
            </div>


        </body>    



        <button className={styles.button}>
        <h1>Global News Later</h1>
                               
                <ul3 className={styles.ul3}>

                <li3>
                    <a href="https://goo.gl/maps/HZqNz8c3doY9gDex7" target="_blank">
                        <p>
                            <Image src="/Tumb News Later.jpg"  alt="#individuosocial"   width="200"  height="110" />
                            
                            <blockquote>

                            
                                <h1><Image src="/youtube.svg"  alt="youtube Icon"   width="26"  height="26" title="YouTube" />Titulo dos posts</h1>
                                Descrição de todo o conteudo com avaliação e maximo de 
                                imagens e logica possivel, de forma engajar as pessoas a
                                permanecer mais tempo na pagina possivel.
                            </blockquote>
                        </p>
                    </a>
                    </li3>

                    <li3>
                    <a href="https://goo.gl/maps/HZqNz8c3doY9gDex7" target="_blank">
                        <p>
                            <Image src="/Tumb News Later.jpg"  alt="Individuo Social"   width="200"  height="110" />
                            
                            <blockquote>

                            
                                <h1><Image src="/whatsapp.svg"  alt="whatsapp Icon"   width="26"  height="26" title="Whatsapp" />Titulo dos posts</h1>
                                Descrição de todo o conteudo com avaliação e maximo de 
                                imagens e logica possivel, de forma engajar as pessoas a
                                permanecer mais tempo na pagina possivel.
                            </blockquote>
                        </p>
                    </a>
                    </li3>

                    <li3>
                    <a href="https://goo.gl/maps/HZqNz8c3doY9gDex7" target="_blank">
                        <p>
                            <Image src="/Tumb News Later.jpg"  alt="Indivíduo Social"   width="200"  height="110" />
                            
                            <blockquote>

                            
                                <h1><Image src="/instagram.svg"  alt="minstagram Icon"   width="26"  height="26" title="Instagram" />Titulo dos posts</h1>
                                Descrição de todo o conteudo com avaliação e maximo de 
                                imagens e logica possivel, de forma engajar as pessoas a
                                permanecer mais tempo na pagina possivel.
                            </blockquote>
                        </p>
                    </a>
                    </li3>


                    <li3>
                    <a href="https://goo.gl/maps/HZqNz8c3doY9gDex7" target="_blank">
                        <p>
                            <Image src="/Tumb News Later.jpg"  alt="Indivíduos Sociais"   width="200"  height="110" />
                            
                            <blockquote>

                            
                                <h1><Image src="/facebook.svg"  alt="facebook Icon"   width="26"  height="26" title="FaceBook" />Titulo dos posts</h1>
                                Descrição de todo o conteudo com avaliação e maximo de 
                                imagens e logica possivel, de forma engajar as pessoas a
                                permanecer mais tempo na pagina possivel.
                            </blockquote>
                        </p>
                    </a>
                    </li3>

                </ul3>
                


            </button>
        
        <footer className={styles.footer}>

            <p>- 2020 - Tecnologias: <a href="https://nodejs.org/en/">Node.js</a> - <a href="https://github.com/luizhcoelho">GitHub</a> - <a href="https://vercel.com/luizhcoelho/git-individuosocial">Vercel</a> -
             <a href="https://cloud.mongodb.com/v2/5fd7e6847395192b8f15b1cd#clusters">MongoDB</a> - <a href="https://icon-icons.com">Icon-Icon</a> -  Feito por <a href="https://individuosocial.com.br" alt="indivíduosocial">Indivíduo Social</a> -</p>

        </footer>
        
        

    </div>
    )
}

export default Home
