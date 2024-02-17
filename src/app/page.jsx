import OtpInput from "./OtpInput";

export default function Home() {
	return (
		<main className="grid place-items-center h-dvh bg-slate-200">
			<div className="bg-white rounded-xl shadow-lg p-6 w-80">
				<h1 className="text-2xl font-medium">Enter OTP</h1>
				<p>Enter the OTP sent to your mobile number</p>
				<OtpInput />
			</div>
		</main>
	);
}
