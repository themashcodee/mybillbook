import React, { ComponentPropsWithoutRef, ComponentPropsWithRef } from "react"
import Image from "next/image"
import { C } from "types/common"
import logo from "assets/logo.webp"
import { mergeClasses } from "helpers"

type P = ComponentPropsWithoutRef<"div">

export const Logo: C<P> = ({ className = "" }) => {
	console.log(logo)

	return (
		<div
			className={mergeClasses({
				classes: ["w-36", className],
			})}
		>
			<Image src={logo} layout="responsive" alt="logo image" />
		</div>
	)
}
