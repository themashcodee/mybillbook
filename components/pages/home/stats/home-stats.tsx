import { Container } from "components/core"
import React from "react"

type P = {}

export const Stats = () => {
	return (
		<section className="flex w-full justify-center">
			<Container className="flex justify-between gap-12 items-center py-20">
				<div className="flex flex-col gap-3 items-center">
					<p className="text-primary font-semibold text-4xl">1,00,000+</p>
					<p>Businesses Trust us</p>
				</div>
				<div className="flex flex-col gap-3 items-center">
					<p className="text-primary font-semibold text-4xl">30,00,000+</p>
					<p>Invoice created</p>
				</div>
				<div className="flex flex-col gap-3 items-center">
					<p className="text-primary font-semibold text-4xl">1,00,000+</p>
					<p>Citied & Towns in India</p>
				</div>
				<div className="flex flex-col gap-3 items-center">
					<p className="text-primary font-semibold text-4xl flex gap-2 items-center">
						<span>4.5</span>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-10 w-10"
							viewBox="0 0 20 20"
							fill="currentColor"
						>
							<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
						</svg>
					</p>
					<p>Rating on Google Play</p>
				</div>
			</Container>
		</section>
	)
}
