import React from "react"
import { Container } from "components/core"
import { LoginForm } from "../form"
import ISOImage from "assets/iso-certified.webp"
import Image from "next/image"

export const Hero = () => {
	return (
		<section className="bg-[#FBF7F4] flex justify-center">
			<Container className="flex gap-4 py-12 justify-between">
				<div className="flex flex-col h-full">
					<div className="h-full flex flex-col gap-6 justify-center">
						<div className="flex flex-col gap-2">
							<h1 className="text-5xl font-semibold">
								Simple GST Billing & Stock Management
							</h1>
							<h2 className="text-3xl">software for your business</h2>
						</div>

						<h3 className="text-lg font-medium">Atma Nirbhar Vyapaari bane</h3>
					</div>

					<div className="shrink-0 flex gap-12">
						<p>Made with ❤️ in India</p>
						<p className="flex items-center gap-2">
							<Image
								src={ISOImage}
								alt="iso certified"
								width={25}
								height={20}
							/>
							ISO Certified
						</p>
					</div>
				</div>

				<LoginForm />
			</Container>
		</section>
	)
}
