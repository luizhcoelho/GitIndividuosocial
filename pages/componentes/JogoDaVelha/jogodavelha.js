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
    
            
            <title>Bolinha Amarela - Tutorial YouTube - Filipe Alves</title>


        <body>

        <tictic/>

	    </body>

    </html>
  )
}

export default jogodavelha;