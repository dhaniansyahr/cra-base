import ReactDOM from "react-dom/client";
import "./styles/index.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { themeConfig as config } from "./constants/config";
import { hexToHsl } from "./utils/colors";
import { camelToKebab } from "./utils/string";
import { Providers } from "./providers";
import { BrowserRouter, RouterProvider, Routes } from "react-router-dom";
import { getRoutes } from "./routes";
import UserLayout from "./layouts/UserLayout";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <HelmetProvider>
    <Helmet>
      <title>{config.meta.title}</title>

      <meta
        name="description"
        content={config.meta.description}
        data-rh="true"
      />

      {/* Facebook, Whatsapp meta tags */}
      <meta name="og:url" content={config.meta.url} />
      <meta name="og:title" content={config.meta.title} />
      <meta name="og:description" content={config.meta.description} />
      <meta name="og:image" content={config.meta.url} />
      <meta name="og:image:width" content="100" />
      <meta name="og:image:height" content="100" />

      {/* Twitter meta tags */}
      <meta name="twitter:url" content={config.meta.url} />
      <meta name="twitter:title" content={config.meta.title} />
      <meta name="twitter:description" content={config.meta.description} />
      <meta name="twitter:image" content={config.meta.url} />
      <meta name="twitter:image:width" content="100" />
      <meta name="twitter:image:height" content="100" />
    </Helmet>
    <style>
      {`
        :root {
          ${Object.entries(config.theme.root)
            .filter(([, value]) => !!value)
            .map(([key, value]) => {
              let v = "";
              if (key === "gradient") {
                return;
              }

              if (key === "radius") {
                v = value as string;
              } else {
                const { h, s, l } = hexToHsl(value as string);
                v = `${h} ${s}% ${l}%`;
              }

              return `--${camelToKebab(key)}: ${v};`;
            })
            .join("\n")}
          }
            
          .dark {
          ${Object.entries(config.theme.dark)
            .filter(([, value]) => !!value)
            .map(([key, value]) => {
              let v = "";
              if (key === "gradient") {
                return;
              }

              if (key === "radius") {
                v = value as string;
              } else {
                const { h, s, l } = hexToHsl(value as string);
                v = `${h} ${s}% ${l}%`;
              }

              return `--${camelToKebab(key)}: ${v};`;
            })
            .join("\n")}
          }
        `}
    </style>
    <Providers config={config}>
      <BrowserRouter>
        <UserLayout>
          <Routes>{getRoutes()}</Routes>
        </UserLayout>
      </BrowserRouter>
    </Providers>
  </HelmetProvider>
);
