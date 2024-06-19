import Link from "next/link";

export default function Nav() {
  return (
    <div>
      <div className="h-24 text-base tracking-widest text-center justify-center container items-center flex md:justify-between">
        <Link className="hidden md:inline-block" href={'/'}>BRIAN WONG'S BLOG</Link>
        <Link href={'/'} className="text-base md:text-[17px]">BRIAN WONG GROWTH VENTURES</Link>
        <p></p>
      </div>
    </div>
  );
}
