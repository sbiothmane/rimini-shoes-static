import { Inter } from "next/font/google";
import "./globals.css";

// Load the Inter font with specific weights and styles if needed
const inter = Inter({ subsets: ["latin"], weight: ["400", "700"] }); // Customize weights if needed

export const metadata = {
  title: "Rimini - Chaussures Marocaines",
  description: "Découvrez les meilleures chaussures marocaines avec Rimini.",
  openGraph: {
    title: "Rimini - Chaussures Marocaines",
    description: "Découvrez les meilleures chaussures marocaines avec Rimini.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <head>
        {/* Meta tags for SEO and social sharing */}
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content={metadata.description} />
        <meta property="og:title" content={metadata.openGraph.title} />
        <meta property="og:description" content={metadata.openGraph.description} />
        <meta property="og:type" content={metadata.openGraph.type} />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
