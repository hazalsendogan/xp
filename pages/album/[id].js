import React from "react";
import Link from "next/link"
import styles from "../../styles/Albums.module.css"
const Album = ({ albums }) => {
  return (
    <section className={styles.section}>
      {albums.map((album) => (
        <div className="window" key={album.id}>
          <div class="window-body">
            <p> {album.title}</p>
          </div>
          <div class="status-bar">
            <Link class="status-bar-field" href="/">See Photos</Link>
          </div>
        </div>
      ))}
    </section>
  );
};
export async function getServerSideProps(context) {
  // params contains the post `id`.
  // If the route is like /posts/1, then params.id is 1
  const { id } = context.params;
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/albums?userId=${Number(id)}`
  );
  const albums = await res.json();

  console.log(albums);
  // Pass post data to the page via props
  return { props: { albums } };
}

export default Album;
