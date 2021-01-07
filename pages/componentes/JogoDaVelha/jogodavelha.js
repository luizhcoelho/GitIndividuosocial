import Image from 'next/image'
import React from 'react'
import styles from '../../../styles/Home.module.scss'
import Header from '../Header'
import Footer from '../Footer'
import Head from 'next/head'
import tictic from './tictactoe.js'



function jogodavelha() {
  return (
    <html>      
    
            
        <Head>
            <meta charset="utf-8"/>
            <title>Bolinha Amarela - Tutorial YouTube - Filipe Alves</title>

        </Head> 
        < noscript > Você precisa habilitar o JavaScript para executar este aplicativo. </ noscript >
        <body>

        <tictic/>

	    </body>

    </html>
  )
}

export default jogodavelha;