import type { NextPage } from "next"
import Head from "next/head"

const Home: NextPage = () => {
	return (
		<>
			<Head>
				<title>Flobiz Internship Assignment</title>
				<meta
					name="description"
					content="Flowbiz Internship Assignment for frontend role"
				/>
				<link rel="icon" href="/favicon.png" />
			</Head>

			<main className="p-12">
				<h1 className="font-bold text-3xl">Hello Flowbiz</h1>
			</main>
		</>
	)
}

export default Home
