import Link from "next/link"

export default function FirstPost() {
  return (
    <>
      <h1>first post</h1>
      <h2>
        <Link href="/">
          back to home
        </Link>
      </h2>
    </>
  )
}
