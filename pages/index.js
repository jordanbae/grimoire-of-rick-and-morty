import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="background-image">
        <main className='main-cont'>
          <div className="title-main-cont">
            <h1 id='the-title'>The</h1>
            <h1 id='the-rnm'>Rick and Morty</h1>
            <h1 id='the-bible'>Bible</h1>
          <div className="button_slide slide_left" ><Link href='/browse' style={{ textDecoration: 'none' }}><span className="start-browse"> START BROWSING </span></Link></div>

          </div>
        </main>
        
      </div>
    </>
  );
}
