import Image from 'next/image'

import styles from '../styles/Home.module.scss'
import Link from 'next/link'
import Head from 'next/head';
import Header from '../pages/componentes/Header'
import Footer from '../pages/componentes/Footer'
import CorpoPrincipal from '../pages/componentes/CorpoPrincipal'



function Home() {
  //<!-- O head esta dentro de _app.js, pois foi a unica forma que consegui fazer o favicom funcionar -->
    return (
 
       
    
        <body>
            <header>
                <Header/>
            </header>
    
                
                    <CorpoPrincipal/>
                



               
            <footer>
                <Footer/>
            </footer>
        </body>

    )
}

export default Home
