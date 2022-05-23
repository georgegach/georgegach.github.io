import '../styles/index.css'
import { useEffect } from 'react'
import Script from 'next/script'
import * as gtag from '../lib/gtag'
import { useRouter } from 'next/router'



const MyApp = ({ Component, pageProps }) => {
  const router = useRouter()

  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url)
      // fbq.pageview()
    }
    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

  return (
    <>
      {/* Global Site Tag (gtag.js) - Google Analytics */}
      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`}
      />
      <Script
        strategy="lazyOnload"
      >{`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${gtag.GA_TRACKING_ID}', {
              page_path: window.location.pathname,              
              page_url: window.location.href,
            });
          `}
      </Script>
      


      <Component {...pageProps} />
    </>
  )
}


export default MyApp
