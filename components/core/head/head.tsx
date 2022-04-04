import React from "react"
import NextHead from "next/head"
import { C } from "types/common"

type P = {
	title?: string
}

export const Head: C<P> = ({ title }) => {
	return (
		<NextHead>
			<title>Flobiz Internship Assignment {title && `| ${title}`}</title>
			<meta
				name="description"
				content="Flowbiz Internship Assignment for frontend role"
			/>
			<link rel="icon" href="/favicon.png" />
		</NextHead>
	)
}
