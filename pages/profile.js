import Link from "next/link";
import Image from "next/image";
import Head from "next/head";

export default function Profile() {
  return (
    <div className="container">
      <Head>
        <title>Profile Page</title>
      </Head>
      <h1 className="title">
        <a> Profile Page </a>
      </h1>
      <Image
        src="/images/photo.jpg" // Route of the image file
        height={144} // Desired size with correct aspect ratio
        width={144} // Desired size with correct aspect ratio
        alt="fotografia"
      />
      <h2>
        <Link href="/">
          <a>Home Page</a>
        </Link>
      </h2>
    </div>
  );
}
