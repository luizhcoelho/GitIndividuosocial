import Image from 'next/image'
import React from 'react'
import styles from '../../styles/Home.module.scss'
import Link from 'next/link'


function CorpoPrincipal() {
    return (
        <div >
            <div className={styles.video}>
                <iframe classNmae="containerheadbody" max-width="1990" max-height="9490" src="https://www.youtube.com/embed/qhzUHWqXaXE" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" ></iframe>
            </div>

            <div className={styles.menuSecundario}>
                <div className="card" >
                    <Link href="/componentes/Tubenew">
                        <h1 >Tube News</h1>
                    </Link>
                    
                    <Link href="/componentes/Tubenew">
                        <a ><Image src="/Tumb Tube New.jpg"  alt="#indivíduossociais"   width="400"  height="250" /></a>
                    </Link>
                </div>

                <div className="card" >
                    <Link href="/componentes/MoveisIndividuais">
                        <h1 >Móveis Individuais</h1>
                    </Link>
                    
                    <Link href="/componentes/MoveisIndividuais">
                        <a ><Image src="/Tumb Moveis Individuais.jpg"  alt="#individuossociais"   width="400"  height="250" /></a>
                    </Link>
                </div>
            </div>


            <div className={styles.menuSecundario}>

                <div className="card" >
                    <Link href="/Cotidiano/Cotidiano">
                        <h1>Cotidiano do Individuo</h1>
                    </Link> 
                    
                    <Link href="/componentes/Cotidiano">
                        <a > <Image src="/Tumb Cotidiano do Individuo.jpg"  alt="indivíduossociais"   width="400"  height="250" /> </a>
                    </Link>
                </div>

                <div className="card" >
                    <Link href="/componentes/cursos">
                        <h1>Cursos para o social</h1>
                    </Link>
                        
                    <Link href="/componentes/cursos">
                        <a> <Image   src="/Tumb Cursos para o social.jpg"  alt="individuossociais"   width="400"  height="250" /></a>
                    </Link>
                </div>

            </div>


            <button className={styles.novidades}>
            
                <h1 className="titulonews" >Global News Later</h1>
                                
                <div >

                    <div className={styles.card}>
                        <a className={styles.imagems} href="https://goo.gl/maps/HZqNz8c3doY9gDex7" target="_blank">
                        <Image src="/Tumb News Later.jpg"  alt="#individuosocial"   width="200"  height="110" />
                            <p className={styles.bloco}>
                            <h1 className={styles.h11}><Image src="/youtube.svg"  alt="youtube Icon"   width="26"  height="26" title="YouTube" /> Titulo dos posts</h1>
                                <blockquote className={styles.bloco}>
                                    
                                    Descrição de todo o conteudo com avaliação e maximo de 
                                    imagens e logica possivel, de forma engajar as pessoas a
                                    permanecer mais tempo na pagina possivel.
                                </blockquote>
                            </p>
                        </a>
                    </div>

                    
                    
                    <div className={styles.card}>
                        <a className={styles.imagems} href="https://goo.gl/maps/HZqNz8c3doY9gDex7" target="_blank">
                        <Image src="/Tumb News Later.jpg"  alt="#individuosocial"   width="200"  height="110" />
                            <p className={styles.bloco}>
                            <h1 className={styles.h11}><Image src="/Blogger.svg"  alt="youtube Icon"   width="26"  height="26" title="YouTube" /> Titulo dos posts</h1>
                                <blockquote className={styles.bloco}>
                                    
                                    Descrição de todo o conteudo com avaliação e maximo de 
                                    imagens e logica possivel, de forma engajar as pessoas a
                                    permanecer mais tempo na pagina possivel.
                                </blockquote>
                            </p>
                        </a>
                    </div>
                    
                    <div className={styles.card}>
                        <a className={styles.imagems} href="https://goo.gl/maps/HZqNz8c3doY9gDex7" target="_blank">
                        <Image src="/Tumb News Later.jpg"  alt="#individuosocial"   width="200"  height="110" />
                            <p className={styles.bloco}>
                            <h1 className={styles.h11}><Image src="/facebook.svg"  alt="youtube Icon"   width="26"  height="26" title="YouTube" /> Titulo dos posts</h1>
                                <blockquote className={styles.bloco}>
                                    
                                    Descrição de todo o conteudo com avaliação e maximo de 
                                    imagens e logica possivel, de forma engajar as pessoas a
                                    permanecer mais tempo na pagina possivel.
                                </blockquote>
                            </p>
                        </a>
                    </div>
                    
                    <div className={styles.card}>
                        <a className={styles.imagems} href="https://goo.gl/maps/HZqNz8c3doY9gDex7" target="_blank">
                        <Image src="/Tumb News Later.jpg"  alt="#individuosocial"   width="200"  height="110" />
                            <p className={styles.bloco}>
                            <h1 className={styles.h11}><Image src="/instagram.svg"  alt="youtube Icon"   width="26"  height="26" title="YouTube" /> Titulo dos posts</h1>
                                <blockquote className={styles.bloco}>
                                    
                                    Descrição de todo o conteudo com avaliação e maximo de 
                                    imagens e logica possivel, de forma engajar as pessoas a
                                    permanecer mais tempo na pagina possivel.
                                </blockquote>
                            </p>
                        </a>
                    </div>

                </div>
            </button>
        </div>
    )
}

export default CorpoPrincipal