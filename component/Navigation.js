import Link from "next/link";

export default function Navigation() {
  return (
    <header className="flex flex-row items-center justify-between bg-blue-600 p-4">
      <div>
        <h1 className="text-4xl text-white shadow-blue-800">Vikash Bharal</h1>
      </div>
      <nav>
        <ul className="flex gap-6 text-white text-lg">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/services">Services</Link>
          </li>
          <li>
            <Link href="/clientcomp">Client Component</Link>
          </li>
          <li>
            <Link href="/servercomp">Server Component</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
