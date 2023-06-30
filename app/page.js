import Image from "next/image";
import Link from "next/link";
import React from "react";

const Home = () => {
  return (
    <div>
      <div>
        <Image src="" width={300} height={300} />
      </div>
      <div>
        <h1>Hello</h1>
        <h3>About Me</h3>
        <p>
          I'm a paragraph. Click here to add your own text and edit me. I’m a
          great place for you to tell a story and let your users know a little
          more about you.
        </p>
        <Link href="/resume">Resume</Link>
        <Link href="/projects">Projects</Link>
      </div>
    </div>
  );
};

export default Home;
