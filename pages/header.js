import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <>
      {/* <nav className="nav-con">
                <ul className="nav-list">
                    <li>
                        <Link href='/'>HOME</Link>
                    </li>
                    <li>
                        <Link href='/browse'>Browse</Link>
                    </li>
                    <li>
                        <Link href='/about'>ABOUT</Link>
                    </li>


                </ul>
            </nav> */}

      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container">
          <a className="navbar-brand" href="#">
            Navbar
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav ms-auto">
              <Link className="nav-link" aria-current="page" href="/">
                Home
              </Link>
              <Link className="nav-link" href="/browse">
                Browse
              </Link>
              <Link className="nav-link" href="/about">
                About
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
