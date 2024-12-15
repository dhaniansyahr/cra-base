import React from "react";
import { TConfig } from "./constants/config";
import { ConfigProvider } from "./store/config";
import { Toaster } from "./components/ui/toaster";

interface TAnalysticProps {
  config: TConfig;
}

export const Analytics = ({ config }: TAnalysticProps) => {
  return (
    <>
      <script
        src={`https://www.googletagmanager.com/gtag/js?id=${config.analytic.google}`}
      />

      <script>
        {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${config.analytic.google}', {
            page_path: window.location.pathname,
            });
            `}
      </script>

      <script id="tiktok-analytics">
        {`
            !function (w, d, t) {
              w.TiktokAnalyticsObject=t;var ttq=w[t]=w[t]||[];ttq.methods=["page","track","identify","instances","debug","on","off","once","ready","alias","group","enableCookie","disableCookie"],ttq.setAndDefer=function(t,e){t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}};for(var i=0;i<ttq.methods.length;i++)ttq.setAndDefer(ttq,ttq.methods[i]);ttq.instance=function(t){for(var e=ttq._i[t]||[],n=0;n<ttq.methods.length;n++)ttq.setAndDefer(e,ttq.methods[n]);return e},ttq.load=function(e,n){var i="https://analytics.tiktok.com/i18n/pixel/events.js";ttq._i=ttq._i||{},ttq._i[e]=[],ttq._i[e]._u=i,ttq._t=ttq._t||{},ttq._t[e]=+new Date,ttq._o=ttq._o||{},ttq._o[e]=n||{};var o=document.createElement("script");o.type="text/javascript",o.async=!0,o.src=i+"?sdkid="+e+"&lib="+t;var a=document.getElementsByTagName("script")[0];a.parentNode.insertBefore(o,a)};
              ttq.load('${config.analytic.tiktok}');
              ttq.page();
            }(window, document, 'ttq');
          `}
      </script>

      <script id="facebook-analytics">
        {`
          !function(f,b,e,v,n,t,s){
            if(f.fbq)return;n=f.fbq=function(){
              n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)
            };
              
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script','https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '${config.analytic.facebook}');
            fbq('track', 'PageView');
          `}
      </script>

      <noscript>
        <img
          width={1}
          height={1}
          style={{ display: "none" }}
          src={`https://www.facebook.com/tr?id=${config.analytic.facebook}&ev=PageView&noscript=1`}
          alt="Facebook Pixel"
        />
      </noscript>
    </>
  );
};

interface TProvidersProps {
  children: React.ReactNode;
  config: TConfig;
}

export function Providers({ children, config }: TProvidersProps) {
  return (
    <ConfigProvider config={config}>
      {children}
      <Toaster position="top-right" richColors />
    </ConfigProvider>
  );
}
