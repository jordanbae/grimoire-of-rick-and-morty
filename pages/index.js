import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>The Rick and Morty Bible</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      <div className="background-image">
        <main className="main-cont">
          <div className="title-main-cont">
            <h1 id="the-title">The</h1>
            <h1 id="the-rnm">Rick and Morty</h1>
            <h1 id="the-bible">Bible</h1>
            <div className="button_slide slide_left">
              <Link href="/browse" style={{ textDecoration: "none" }}>
                <span className="start-browse"> START BROWSING </span>
              </Link>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
