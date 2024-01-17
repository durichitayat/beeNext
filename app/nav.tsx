import Navbar from './navbar';
// import { auth } from './api/auth/[...nextauth]';

export default async function Nav() {
  // const session = await auth();
  return <Navbar user="{session?.user}" /> //user={session?.user} />;
}
