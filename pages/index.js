import Head from "next/head";
import { getSortedPostsData } from "../lib/posts";

export default function Main({ allPostsData }) {
  return (
    <div className="container">
      <Head>
        <title>titolo</title>
      </Head>
      <section>
        <p>[Your Self Introduction]</p>
      </section>
      <section>
        <h2>Blog</h2>
        <ul>
          {allPostsData.map(({ id, date, title }) => (
            <li key={id}>
              {title}
              <br />
              {id}
              <br />
              {date}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}
