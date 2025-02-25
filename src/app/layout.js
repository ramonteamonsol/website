import "./../styles/globals.css";
import Layout from "@/components/common/Layout";

export const metadata = {
  title: "Ramon - Il tuo sito ufficiale",
  description: "Benvenuto su Ramon, il sito ufficiale!",
  icons: "./favicon.webp",
  openGraph: {
    title: "Ramon - He's not a hero. He's not a villain. He's f_cking Ramon",
    description: "He's not a hero. He's not a villain. He's f_cking Ramon 🚀",
    url: "https://www.ramon.meme/",
    siteName: "Ramon",
    images: [
      {
        url: "https://www.ramon.meme/preview.jpg",
        width: 1200,
        height: 630,
        alt: "Ramon Preview",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ramon - Il tuo sito ufficiale",
    description: "Scopri tutto su Ramon! 🚀",
    images: ["https://www.ramon.meme/preview.jpg"],
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Layout >{children}</Layout>
      </body>
    </html>
  );
}
