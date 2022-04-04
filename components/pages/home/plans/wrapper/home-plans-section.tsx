import React from "react"
import Image from "next/image"
import Guarantee from "assets/guarantee.webp"
import { Container } from "components/core"
import { PlansCards } from "../card"

export const Plans = () => {
	return (
		<section className="flex justify-center">
			<Container className="flex flex-col py-8 gap-10">
				<div className="flex justify-between items-center">
					<div className="flex flex-col gap-2">
						<h2 className="text-4xl">
							Now try all benefits of My BillBook app
						</h2>
						<p className="text-3xl font-semibold text-primary">
							Free for 14 days
						</p>
					</div>

					<div>
						<Image
							src={Guarantee}
							height={100}
							width={95}
							alt="30 days money back guarantee"
						/>
					</div>
				</div>

				<PlansCards />
			</Container>
		</section>
	)
}
