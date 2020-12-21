import Image from 'next/image'
import React from 'react'
import styles from '../styles/Home.module.scss'
import Link from 'next/link'


function CorpoPrincipal() {
  return (
   <div className={styles.corpo}>

   

        <div>
            <iframe width="990" height="490" src="https://www.youtube.com/embed/qhzUHWqXaXE" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>


         <div>

            <ul2 className={styles.menuSocundario}>

                <li>

                    <Link href="/Tubenew">
                        <h1>Tube News</h1>
                    </Link>
                    <Link href="/Tubenew">
                        <a><Image src="/Tumb Tube New.jpg"  alt="#indivíduossociais"   width="400"  height="250" /></a>
                    </Link>
                    
                </li>

                <li>
                    <Link href="/MoveisIndividuais">
                        <h1>Móveis Individuais</h1></Link>
                        <Link href="/MoveisIndividuais">
                        <a><Image src="/Tumb Moveis Individuais.jpg"  alt="#individuossociais"   width="400"  height="250" /></a>
                        </Link>
                </li>

                <li>
                <Link href="/Cotidiano">
                    <h1>Cotidiano do Individuo</h1></Link>
                    <Link href="/Cotidiano">
                        <a> <Image src="/Tumb Cotidiano do Individuo.jpg"  alt="indivíduossociais"   width="400"  height="250" /> </a>
                    
                    </Link>
                </li>

                <li>
                <Link href="/cursos">
                    <h1>Cursos para o social</h1></Link>
                    <Link href="/cursos"><a> <Image src="/Tumb Cursos para o social.jpg"  alt="individuossociais"   width="400"  height="250" /></a>
                </Link>
                
                    
                </li>

            </ul2>


        </div>



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
      
    </div>

                    

    
    )
}

export default CorpoPrincipal