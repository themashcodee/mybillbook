import React from "react"
import type { NextPage } from "next"
import { Header, Head } from "components/core"
import { Hero } from "components/pages/home"

const Home: NextPage = () => {
	return (
		<>
			<Head />

			<main className="flex flex-col w-full">
				<Header />
				<Hero />
			</main>
		</>
	)
}

export default Home
