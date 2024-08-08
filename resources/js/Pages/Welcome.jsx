import { Link } from "@inertiajs/react";
export default function Welcome() {
  return (
      <>
          <div>
            <head>
            <h2>HELLO WORLD !</h2>
            </head>
            <div><Link href="/login">Login</Link> <Link href="/register">Register</Link></div>
          </div>
      </>
  );
}
