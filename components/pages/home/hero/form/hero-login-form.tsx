import React, { FormEvent, useState } from "react"
import { Input, InputWithIcon } from "components/core"

const MobileNumberIcon = () => <>+91</>

export const LoginForm = () => {
	const [phone, setPhone] = useState("")
	const [otp, setOtp] = useState("")
	const [fetchedOtp, setFetchedOtp] = useState("")
	const [otpVerified, setOtpVerified] = useState(false)

	function handleSubmit(e: FormEvent) {
		e.preventDefault()
		// TODO: implement auth system
	}

	async function handleSendOtp() {
		const response = await fetch("https://niobooks.in/api/web/request_otp", {
			method: "POST",
			headers: {
				accept: "application/json",
				"content-type": "application/json",
				// "client": "web",
			},
			body: JSON.stringify({
				mobile_number: phone,
			}),
		})
		const data = await response.json()
		console.log({ data })
	}

	const phoneValidator = (value: string) => +value > 4 || value === ""
	const otpValidator = (value: string) => +value > 0 || value === ""

	return (
		<form
			onSubmit={handleSubmit}
			className="px-12 py-14 border-2 border-[#e7e1dc] rounded-lg flex gap-8 flex-col bg-white min-w-[400px]"
		>
			<h3 className="font-medium text-2xl">Login to myBillBook</h3>

			<div className="flex flex-col gap-6">
				<InputWithIcon
					maxLength={10}
					value={phone}
					onChange={(e) => setPhone(e.target.value)}
					iconStyle="bg-gray-100"
					label="Enter Mobile Number"
					icon={MobileNumberIcon}
					validator={phoneValidator}
				/>
				<Input
					value={otp}
					maxLength={6}
					onChange={(e) => setOtp(e.target.value)}
					label="Enter OTP"
					validator={otpValidator}
					disabled={!!!fetchedOtp}
					placeholder="One Time Password"
				/>

				{fetchedOtp && otpVerified ? (
					<button
						type="submit"
						className="bg-[#9DA7B7] rounded-md py-3 text-white font-medium"
					>
						Login
					</button>
				) : (
					<button
						onClick={handleSendOtp}
						type="button"
						disabled={phone.length < 10}
						className="bg-[#9DA7B7] rounded-md py-3 text-white font-medium disabled:opacity-70 disabled:cursor-not-allowed"
					>
						Request OTP
					</button>
				)}
			</div>
		</form>
	)
}
