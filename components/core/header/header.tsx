import React from "react"
import { Container, Logo } from "components/core"
import Link from "next/link"

export const Header = () => {
	return (
		<header className="flex justify-center items-center h-16">
			<Container className="flex items-center justify-between gap-8">
				<div>
					<Logo />
				</div>

				<ul className="flex items-center gap-8 font-medium text-sm">
					<li className="text-primary relative before:absolute before:w-4 before:h-[2px] before:bg-primary before:-bottom-2 before:left-1/2">
						<Link href="/">Why Use My BillBook?</Link>
					</li>
					<li>
						<Link href="/">Who is it For?</Link>
					</li>
					<li>
						<Link href="/">Online Store</Link>
					</li>
					<li>
						<Link href="/">Pricing</Link>
					</li>
					<li>
						<Link href="/">FAQs</Link>
					</li>
				</ul>
			</Container>
		</header>
	)
}
