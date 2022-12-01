import Image from "next/image"
import Link from "next/link"

export default function Header() {
    return(
        <>
            <nav className="nav-con">
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
            </nav>
        </>
    )
}