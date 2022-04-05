import React from "react"
import type { NextPage } from "next"
import { Header, Head, Footer } from "components/core"
import { Hero, Stats, Plans } from "components/pages/home"

const Home: NextPage = () => {
	return (
		<>
			<Head />

			<main className="flex flex-col w-full">
				<Header />
				<Hero />
				<Stats />
				<Plans />
				<Footer />
			</main>
		</>
	)
}

export default Home
