import Link from "next/link";
import Head from "next/head";
import Layout from "../../components/layout";

export default function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>First Post</title>
      </Head>
      <h1>first post</h1>
      <h2>
        <Link href="/">
          back to home
        </Link>
      </h2>
    </Layout>
  )
}
