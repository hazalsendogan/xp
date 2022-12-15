import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home({ users }) {
  return (
    <div className="wrapper">
      <Head>
        <title>Create Next App</title>
      </Head>

      <section className={styles.section}>
        {users.map((user) => (
          <div className="window" key={user.id}>
            <div className="title-bar">
              <div className="title-bar-text">{user.username}</div>
            </div>
            <div className="window-body">
              <p>{user.name}</p>
              <p>{user.email}</p>
            </div>
            <div className="status-bar">
              <Link className="status-bar-field" href={`/user/${user.id}`}>See Detail</Link>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
export async function getServerSideProps() {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await res.json();

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      users,
    },
  };
}
