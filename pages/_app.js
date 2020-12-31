import '../styles/Home.module.scss';
import '../styles/_RodapeCss.scss';
import '../styles/_CabecalhoCss.scss';
import '../styles/_CorpoPcss.scss';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  
  return (
      <layout>
        <Head>
          <link rel="icon" type="image/png" sizes="144x144" href="favicon.png" />
             < meta charset="UTF-8"/>
            <title> Indivíduo Social - Hub Social Medias </title>
            <meta name="author" content="Indíviduo Social"></meta>
            <meta name="description" content="Indivíduo Social é Blog, Blogger, Vlog, Tecnologias, Cursos, Noticias, Programação, Psciologia, 
            Historia, Games, Youtube, Youtuber, Social Media, Individuo Social, Individuosocial, indivíduosocial"></meta>
            <meta name="keywords" content="Indíviduo Social, Individuo Social, Social, Indíviduo, Indivíduosocial,individuosocial, Programação, 
            Tecnologia, Móveis Planejados, Designer, Designer Grafico, Diagramação, Social, Indíviduo, Cursos, CSS, HTML, Java, Github, Youtube, Facebook, Next.js, React, 
            Blog,Blogger,individuosocial.com.br, Promob, Corel Draw, Photophop, Camtasia, Manutenção, Cursos Online, Noticias, Marketing Digital, Curso Online Gratuitos, MoveisPlanejados "></meta>
        </Head>
        <Component {...pageProps} />
      </layout>
  ); 
}
export default MyApp