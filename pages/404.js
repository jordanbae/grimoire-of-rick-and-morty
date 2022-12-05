import Link from "next/link"

export default function customError() {
    return (
        <div className="e404-bg">
            <div className="e-message-cont">
                <p className="e-message-1">
                    ERROR 404
                </p>
                <p className="e-message-2">
                    You came to the right place but wrong dimension.
                </p>
                <p className="e-message-3">
                    This <span>portal </span>will take you back.
                </p>
                
                <Link href='/browse'><img className='e-portal' src='https://media.tenor.com/BgR83Df82t0AAAAi/portal-rick-and-morty.gif'/> </Link>
            </div>
        </div>
    )
}

//