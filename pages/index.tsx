import React from "react"
import type { NextPage } from "next"
import { Header, Head } from "components/core"

const Home: NextPage = () => {
	return (
		<>
			<Head />

			<main className="flex flex-col w-full">
				<Header />
			</main>
		</>
	)
}

export default Home
