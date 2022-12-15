import { getNextInternalQuery } from "next/dist/server/request-meta";
import { getURL } from "next/dist/shared/lib/utils";
import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import UserDetail from "./UserDetail";

export default function User({ user }) {
  return (
    <div>
      <UserDetail user={user} />
    </div>
  );
}
export async function getServerSideProps(context) {
  // params contains the post `id`.
  // If the route is like /posts/1, then params.id is 1
  const { id } = context.params;
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  const user = await res.json();

  console.log(user);
  // Pass post data to the page via props
  return { props: { user } };
}
