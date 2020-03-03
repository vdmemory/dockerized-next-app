import Link from "next/link";

const About = () => {
  return (
    <div>
      <h1>This is our About Page</h1>
      <Link href="\">
        <button>Home</button>
      </Link>
    </div>
  );
};

export default About;
