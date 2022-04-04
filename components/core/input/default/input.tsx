import React, { ChangeEvent, ComponentPropsWithRef } from "react"
import { mergeClasses } from "helpers"
import { C } from "types/common"

type P = ComponentPropsWithRef<"input"> & {
	label?: string
	helperText?: string
	validator?: (val: string) => boolean
	showRequiredStar?: boolean
}

export const Input: C<P> = ({
	label,
	className = "",
	required = true,
	helperText,
	onChange,
	validator,
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
					{required && showRequiredStar && "*"}
				</label>
			)}

			<input
				name={label}
				id={label}
				maxLength={50}
				className={mergeClasses({
					classes: [
						"h-12 w-full rounded-md border border-slate-200 p-4 disabled:cursor-not-allowed disabled:opacity-70",
						className,
					],
				})}
				required={required}
				onChange={handleChange}
				{...props}
			/>

			{helperText && <span className="select-none text-sm">{helperText}</span>}
		</div>
	)
}
