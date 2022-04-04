import React, { ComponentPropsWithoutRef } from "react"
import { mergeClasses } from "helpers"
import { C } from "types/common"

type P = ComponentPropsWithoutRef<"div">

export const Container: C<P> = ({ className = "", children }) => {
	return (
		<div
			className={mergeClasses({
				classes: ["w-full max-w-[1280px] px-8", className],
			})}
		>
			{children}
		</div>
	)
}
