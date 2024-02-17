import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <>
      <div>
        <nav>
          <div className="navbar-container">
            <div className="navbar-logo">
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className="dark:invert"
              width={100}
              height={24}
              priority
            />
            </div>
            <ul className="navbar-menu">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/about">About</Link>
              </li>
              <li>
                <Link href="/blog">Blogs</Link>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </>
  );
}
