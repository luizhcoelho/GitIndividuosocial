import Image from 'next/image'
import React from 'react'
import styles from '../../styles/Home.module.scss'
import Header from './Header'
import Footer from './Footer'

function Cotidiano() {
  return (
    <div className={styles.CorpoCursos}>
       
       
           <html className={styles.normalize}>

        <head></head>
               
            <div >
                    <header>
                        <Header/>
                    </header>
                    
                    <body >
                        
                    <h1>Cotidiano do Individuo</h1>

                    </body>    
                    
                    <footer>
                        <Footer/>
                    </footer>
            </div>
            

    </html>
        

    </div>
    )
}

export default Cotidiano