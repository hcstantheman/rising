import type { AppProps } from 'next/app';
import '../styles/globals.sass'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


export default function MyApp({ Component, pageProps }: AppProps){
  return <Component {...pageProps} />
}


