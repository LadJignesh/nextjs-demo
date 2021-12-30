import Link from 'next/link';
import Image
 from 'next/image';
const Navbar = () => {
    return ( 
        <nav>
            <div className="logo">
                {/* <Image src="/logo.jpg" width={77} height={67}/> */}
                <h3>My first Next.js website</h3>
            </div>
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/ninjas">Ninja Listing</Link>
        </nav>
     );
}
 
export default Navbar;