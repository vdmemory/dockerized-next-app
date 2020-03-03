import Link from "next/link";

const Home = () => {
  return (
    <div>
      <h1>This is Home Page</h1>
      <Link href="\about">
        <button>About</button>
      </Link>
      <h2>в адресной строке /gb/, /ua/ или /ru/</h2>
      <Link href="/gb/">
        <button>GB</button>
      </Link>
      <Link href="/us/">
        <button>US</button>
      </Link>
      <Link href="/ru/">
        <button>RU</button>
      </Link>
      <Link href="/ua/">
        <button>UA</button>
      </Link>
    </div>
  );
};

export default Home;
