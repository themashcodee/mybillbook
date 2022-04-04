import { twMerge } from "tailwind-merge"

type P = {
	classes: string[]
	ignore?: string
}

/**
 *
 * This function merge tailwind classes and solve specificity issue overriding tailwind classes. If you don't want to merge a class then pass it to ignore param.
 *
 * @param classes These are the classes that have to be merged
 * @param ignore These are the classes that have not to be merged
 * @returns Merged classes
 */
export const mergeClasses = ({ classes, ignore = "" }: P) => {
	const mergedClasses = twMerge(...classes)
	return `${mergedClasses} ${ignore}`
}
