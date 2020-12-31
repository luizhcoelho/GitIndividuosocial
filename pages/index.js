import Image from 'next/image'
import React from 'react'
import styles from '../styles/Home.module.scss'
import Link from 'next/link'
import Header from '../pages/componentes/Header'
import Footer from '../pages/componentes/Footer'
import CorpoPrincipal from '../pages/componentes/CorpoPrincipal'



function Home() {
  //<!-- O head esta dentro de _app.js, pois foi a unica forma que consegui fazer o favicom funcionar -->
    return (
    <html className={styles.normalize}>

        <head></head>
               
            <div >
                    <header>
                        <Header/>
                    </header>
                    
                    <body >
                        
                        <CorpoPrincipal/>

                    </body>    
                    
                    <footer>

                            
                        <Footer/>
                    </footer>
            </div>
            

    </html>
    )
}

export default Home
