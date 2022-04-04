import { mergeClasses } from "helpers"
import React, { ChangeEvent, ComponentPropsWithRef, FC } from "react"
import { C } from "types/common"

type P = ComponentPropsWithRef<"input"> & {
	label?: string
	helperText?: string
	iconStyle?: string
	iconPosition?: "left" | "right"
	icon: () => JSX.Element
	validator?: (val: string) => boolean
	showRequiredStar?: boolean
}

export const InputWithIcon: C<P> = ({
	label,
	className = "",
	required = true,
	helperText,
	onChange,
	validator,
	icon: Icon,
	iconPosition = "left",
	iconStyle = "",
	showRequiredStar = true,
	...props
}) => {
	function handleChange(e: ChangeEvent<HTMLInputElement>) {
		if (onChange) {
			if (!validator) return onChange(e)
			if (validator(e.target.value)) onChange(e)
		}
	}

	return (
		<div className="flex flex-col gap-2 text-slate-500">
			{label && (
				<label
					htmlFor={label}
					className="max-w-max text-sm cursor-pointer select-none"
				>
					{label}
					{required && showRequiredStar && " *"}
				</label>
			)}

			<span className="relative">
				<span
					className={mergeClasses({
						classes: [
							"absolute flex h-full cursor-pointer w-12 select-none items-center justify-center pointer-events-none",
							iconPosition === "left"
								? "left-0 rounded-l-md"
								: "right-0 rounded-r-md",
							iconStyle,
						],
					})}
				>
					<Icon />
				</span>

				<input
					name={label}
					id={label}
					maxLength={50}
					className={mergeClasses({
						classes: [
							"h-12 w-full rounded-md border border-slate-200 p-4 disabled:cursor-not-allowed disabled:opacity-70",
							iconPosition === "left" ? "pl-16" : "pr-16",
							className,
						],
					})}
					required={required}
					onChange={handleChange}
					{...props}
				/>
			</span>

			{helperText && <span className="select-none text-sm">{helperText}</span>}
		</div>
	)
}
