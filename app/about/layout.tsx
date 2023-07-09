import Link from "next/link";

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <h1 className="title">About us</h1>
      <ul>
        <li>
          <Link href="/about/contacts">Contact us</Link>
        </li>
        <li>
          <Link href="/about/team">Team</Link>
        </li>
      </ul>
      {children}
    </div>
  );
}
