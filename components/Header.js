import { signIn, signOut, useSession } from "next-auth/client";

const Header = () => {

  const [session] = useSession();

  if (session) {
    console.log(session);
  }

  return (
    <header className="masthead mb-auto">
      <div className="inner">
        <h3 className="masthead-brand">Dawnsoft</h3>
        <nav className="nav nav-masthead justify-content-center">
          <a className="nav-link active" href="#">Home</a>
          <a className="nav-link" href="#">Features</a>
          <a className="nav-link" href="#">Contact</a>
          {
            !session && <button className="btn btn-outline-primary mx-2" onClick={() => {signIn()}}>Login</button>
          }
          {
            session && <button className="btn btn-outline-primary mx-2" onClick={() => {signOut()}}>Logout</button>
          }
          
        </nav>        
      </div>
    </header>
  )
}

export default Header;