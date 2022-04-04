import React from "react"

type P = {}

export const PlansCards = () => {
	return (
		<div className="grid grid-cols-3 gap-4">
			{/* SILVER PLAN */}
			<div className="flex flex-col border border-gray-200 rounded-lg">
				<div className="flex flex-col px-5 py-6 gap-3">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 24 24"
						width="24"
						height="24"
						className="w-6 h-6"
					>
						<path fill="none" d="M0 0h24v24H0z" />
						<path
							fill="#485EB0"
							d="M2 19h20v2H2v-2zM2 5l5 3 5-6 5 6 5-3v12H2V5z"
						/>
					</svg>

					<span className="font-semibold text-xl">Silver Plan</span>

					<span className="flex items-center gap-2 font-medium">
						<span className="line-through">₹ 1299</span>
						<span className="text-3xl font-semibold text-[#485EB0]">₹ 799</span>
						<span>/ year</span>
					</span>
				</div>

				<div className="bg-[#EDEFF7] text-[#485EB0] flex gap-4 justify-center items-center h-14 w-full">
					<svg
						className="w-7"
						viewBox="0 0 13 12"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M0 1C0 0.447715 0.447715 0 1 0H11C11.5523 0 12 0.447715 12 1V8C12 8.55228 11.5523 9 11 9H1C0.447715 9 0 8.55228 0 8V1Z"
							fill="#EDEFF7"
						/>
						<path
							fillRule="evenodd"
							clipRule="evenodd"
							d="M11 1H1L1 8H11V1ZM1 0C0.447715 0 0 0.447715 0 1V8C0 8.55228 0.447715 9 1 9H11C11.5523 9 12 8.55228 12 8V1C12 0.447715 11.5523 0 11 0H1Z"
							fill="currentColor"
						/>
						<path
							d="M0 10.3C0 10.1343 0.134315 10 0.3 10H11.7C11.8657 10 12 10.1343 12 10.3V10.7C12 10.8657 11.8657 11 11.7 11H0.3C0.134315 11 0 10.8657 0 10.7V10.3Z"
							fill="currentColor"
						/>
						<path
							d="M8 5C8 4.44772 8.44772 4 9 4H12C12.5523 4 13 4.44772 13 5V11C13 11.5523 12.5523 12 12 12H9C8.44772 12 8 11.5523 8 11V5Z"
							fill="#EDEFF7"
						/>
						<path
							fillRule="evenodd"
							clipRule="evenodd"
							d="M12 5H9V11H12V5ZM9 4C8.44772 4 8 4.44772 8 5V11C8 11.5523 8.44772 12 9 12H12C12.5523 12 13 11.5523 13 11V5C13 4.44772 12.5523 4 12 4H9Z"
							fill="currentColor"
						/>
					</svg>

					<span className="font-medium">Mobile + Desktop</span>
				</div>

				<ul className="px-5 py-8 gap-2 flex flex-col">
					<li className="flex items-center gap-3">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-5 w-5 text-green-400"
							viewBox="0 0 20 20"
							fill="currentColor"
						>
							<path
								fillRule="evenodd"
								d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
								clipRule="evenodd"
							/>
						</svg>
						<span>Unlimited Stock Adjustments</span>
					</li>

					<li className="flex items-center gap-3">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-5 w-5 text-green-400"
							viewBox="0 0 20 20"
							fill="currentColor"
						>
							<path
								fillRule="evenodd"
								d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
								clipRule="evenodd"
							/>
						</svg>
						<span>GST Reports, Profit & Loss Report</span>
					</li>

					<li className="flex items-center gap-3">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-5 w-5 text-green-400"
							viewBox="0 0 20 20"
							fill="currentColor"
						>
							<path
								fillRule="evenodd"
								d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
								clipRule="evenodd"
							/>
						</svg>

						<span>Remove MyBillBook logo from Invoice</span>
					</li>

					<li className="flex items-center gap-3">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-5 w-5 text-green-400"
							viewBox="0 0 20 20"
							fill="currentColor"
						>
							<path
								fillRule="evenodd"
								d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
								clipRule="evenodd"
							/>
						</svg>
						<span>Only Mobile device supported</span>
					</li>

					<li className="flex items-center gap-3">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-5 w-5 text-green-400"
							viewBox="0 0 20 20"
							fill="currentColor"
						>
							<path
								fillRule="evenodd"
								d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
								clipRule="evenodd"
							/>
						</svg>
						<span>+5 more features</span>
					</li>
				</ul>
			</div>

			{/* GOLD PLAN */}
			<div className="flex flex-col border border-[#DBA249] bg-[#fffaf3] rounded-lg relative">
				<div className="absolute right-4 top-0 transform -translate-y-1/2 bg-[#ED513F] text-white px-4 rounded-2xl text-sm py-1">
					Most Popular
				</div>

				<div className="flex flex-col px-5 py-6 gap-3">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 24 24"
						width="24"
						height="24"
						className="w-6 h-6"
					>
						<path fill="none" d="M0 0h24v24H0z" />
						<path
							fill="#DBA249"
							d="M2 19h20v2H2v-2zM2 5l5 3 5-6 5 6 5-3v12H2V5z"
						/>
					</svg>

					<span className="font-semibold text-xl">Gold Plan</span>

					<span className="flex items-center gap-2 font-medium">
						<span className="line-through">₹ 2599</span>
						<span className="text-3xl font-semibold text-[#DBA249]">
							₹ 1799
						</span>
						<span>/ year</span>
					</span>
				</div>

				<div className="bg-[#F8E9D3] text-[#DBA249] flex gap-4 justify-center items-center h-14 w-full">
					<svg
						className="w-7"
						viewBox="0 0 13 12"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M0 1C0 0.447715 0.447715 0 1 0H11C11.5523 0 12 0.447715 12 1V8C12 8.55228 11.5523 9 11 9H1C0.447715 9 0 8.55228 0 8V1Z"
							fill="#EDEFF7"
						/>
						<path
							fillRule="evenodd"
							clipRule="evenodd"
							d="M11 1H1L1 8H11V1ZM1 0C0.447715 0 0 0.447715 0 1V8C0 8.55228 0.447715 9 1 9H11C11.5523 9 12 8.55228 12 8V1C12 0.447715 11.5523 0 11 0H1Z"
							fill="currentColor"
						/>
						<path
							d="M0 10.3C0 10.1343 0.134315 10 0.3 10H11.7C11.8657 10 12 10.1343 12 10.3V10.7C12 10.8657 11.8657 11 11.7 11H0.3C0.134315 11 0 10.8657 0 10.7V10.3Z"
							fill="currentColor"
						/>
						<path
							d="M8 5C8 4.44772 8.44772 4 9 4H12C12.5523 4 13 4.44772 13 5V11C13 11.5523 12.5523 12 12 12H9C8.44772 12 8 11.5523 8 11V5Z"
							fill="#EDEFF7"
						/>
						<path
							fillRule="evenodd"
							clipRule="evenodd"
							d="M12 5H9V11H12V5ZM9 4C8.44772 4 8 4.44772 8 5V11C8 11.5523 8.44772 12 9 12H12C12.5523 12 13 11.5523 13 11V5C13 4.44772 12.5523 4 12 4H9Z"
							fill="currentColor"
						/>
					</svg>

					<span className="font-medium">Mobile + Desktop</span>
				</div>

				<ul className="px-5 py-8 gap-2 flex flex-col">
					<li className="flex items-center gap-3">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-5 w-5 text-green-400"
							viewBox="0 0 20 20"
							fill="currentColor"
						>
							<path
								fillRule="evenodd"
								d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
								clipRule="evenodd"
							/>
						</svg>
						<span>All Silver Features</span>
					</li>

					<li className="flex items-center gap-3">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-5 w-5 text-green-400"
							viewBox="0 0 20 20"
							fill="currentColor"
						>
							<path
								fillRule="evenodd"
								d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
								clipRule="evenodd"
							/>
						</svg>
						<span>
							Add <span className="font-semibold">upto 5 Staff</span> to My
							BillBook
						</span>
					</li>

					<li className="flex items-center gap-3">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-5 w-5 text-green-400"
							viewBox="0 0 20 20"
							fill="currentColor"
						>
							<path
								fillRule="evenodd"
								d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
								clipRule="evenodd"
							/>
						</svg>

						<span>Unlimited Mobile + Desktop Logins</span>
					</li>
				</ul>
			</div>

			{/* DIAMOND PLAN */}
			<div className="flex flex-col border border-gray-200 rounded-lg">
				<div className="flex flex-col px-5 py-6 gap-3">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 24 24"
						width="24"
						height="24"
						className="w-6 h-6"
					>
						<path fill="none" d="M0 0h24v24H0z" />
						<path
							fill="#D95A0D"
							d="M2 19h20v2H2v-2zM2 5l5 3 5-6 5 6 5-3v12H2V5z"
						/>
					</svg>

					<span className="font-semibold text-xl">Diamond Plan</span>

					<span className="flex items-center gap-2 font-medium">
						<span className="line-through">₹ 4599</span>
						<span className="text-3xl font-semibold text-[#D95A0D]">
							₹ 3500
						</span>
						<span>/ year</span>
					</span>
				</div>

				<div className="bg-[#FBEFE8] text-[#D95A0D] flex gap-4 justify-center items-center h-14 w-full">
					<svg
						className="w-7"
						viewBox="0 0 13 12"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M0 1C0 0.447715 0.447715 0 1 0H11C11.5523 0 12 0.447715 12 1V8C12 8.55228 11.5523 9 11 9H1C0.447715 9 0 8.55228 0 8V1Z"
							fill="#EDEFF7"
						/>
						<path
							fillRule="evenodd"
							clipRule="evenodd"
							d="M11 1H1L1 8H11V1ZM1 0C0.447715 0 0 0.447715 0 1V8C0 8.55228 0.447715 9 1 9H11C11.5523 9 12 8.55228 12 8V1C12 0.447715 11.5523 0 11 0H1Z"
							fill="currentColor"
						/>
						<path
							d="M0 10.3C0 10.1343 0.134315 10 0.3 10H11.7C11.8657 10 12 10.1343 12 10.3V10.7C12 10.8657 11.8657 11 11.7 11H0.3C0.134315 11 0 10.8657 0 10.7V10.3Z"
							fill="currentColor"
						/>
						<path
							d="M8 5C8 4.44772 8.44772 4 9 4H12C12.5523 4 13 4.44772 13 5V11C13 11.5523 12.5523 12 12 12H9C8.44772 12 8 11.5523 8 11V5Z"
							fill="#EDEFF7"
						/>
						<path
							fillRule="evenodd"
							clipRule="evenodd"
							d="M12 5H9V11H12V5ZM9 4C8.44772 4 8 4.44772 8 5V11C8 11.5523 8.44772 12 9 12H12C12.5523 12 13 11.5523 13 11V5C13 4.44772 12.5523 4 12 4H9Z"
							fill="currentColor"
						/>
					</svg>

					<span className="font-medium">Mobile + Desktop</span>
				</div>

				<ul className="px-5 py-8 gap-2 flex flex-col">
					<li className="flex items-center gap-3">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-5 w-5 text-green-400"
							viewBox="0 0 20 20"
							fill="currentColor"
						>
							<path
								fillRule="evenodd"
								d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
								clipRule="evenodd"
							/>
						</svg>
						<span>All Gold & Silver Features</span>
					</li>

					<li className="flex items-center gap-3">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-5 w-5 text-green-400"
							viewBox="0 0 20 20"
							fill="currentColor"
						>
							<path
								fillRule="evenodd"
								d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
								clipRule="evenodd"
							/>
						</svg>
						<span>
							Add <span className="font-semibold">unlimited staff</span> to My
							BillBook
						</span>
					</li>
				</ul>
			</div>
		</div>
	)
}
