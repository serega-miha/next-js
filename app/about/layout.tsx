import Link from "next/link";
import './page.css'

export default function AboutLayout({
   children, 
} :{
    children: React.ReactNode;

}) {
    return <div>
        <h1>About us</h1>
        <ul className="links">
            <li><Link className="link" href='/about/contacts'>Contacts</Link></li>
            <li><Link className="link" href='/about/team'>Team</Link></li>
        </ul>
        {children}
    </div>
}