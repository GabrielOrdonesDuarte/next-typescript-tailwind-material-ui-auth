import { signIn, signOut, useSession } from 'next-auth/client';

const Home: any = () => {
  const [session] = useSession();

  return (
    <>
      <a href="/pagina1">Ir para pagina 1</a>
      <br></br>
      <br></br>
      <br></br>
      {!session && (
        <>
          Not signed in <br />
          <button onClick={() => signIn('auth0')}>Sign in</button>
        </>
      )}
      {session && (
        <>
          Signed in as {session.user.email} <br />
          <button onClick={() => signOut()}>Sign out</button>
        </>
      )}
    </>
  );
};

export default Home;
