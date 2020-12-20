import Head from "next/head";
import { useRouter } from "next/router";
function Home() {
  const router = useRouter();
  const handleClick = (e) => {
    e.preventDefault();
    router.push("pokemon");
  };
  return (
    <>
      <Head>
        <title>My next project</title>
      </Head>
      <div>Welcome Explorer</div>
      <button onClick={handleClick}>Click me!</button>
    </>
  );
}

export default Home;
