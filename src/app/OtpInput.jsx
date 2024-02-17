"use client";

import { submitOTP } from "@/actions/submitOTP";
import { useEffect, useRef } from "react";
import { useFormStatus } from "react-dom";

export default function OtpInput() {
	const inputWrapperRef = useRef([]);

	useEffect(() => {
		const inputs = inputWrapperRef.current.children;

		inputs[0].focus();

		function handleInput(e) {
			const target = e.target;

			target.value = e.data;

			if (target.value) {
				target.nextElementSibling?.focus();
			}
		}

		function handleDelete(e) {
			const target = e.target;

			if (e.key === "Backspace") {
				target.value = "";
				target.previousElementSibling?.focus();
			} else if (e.key === "ArrowLeft") {
				target.previousElementSibling?.focus();
			} else if (e.key === "ArrowRight") {
				target.nextElementSibling?.focus();
			}
		}

		for (const input of inputs) {
			input.addEventListener("input", handleInput);
			input.addEventListener("keydown", handleDelete);
		}

		return () => {
			for (const input of inputs) {
				input.removeEventListener("input", handleInput);
				input.removeEventListener("keydown", handleDelete);
			}
		};
	}, []);

	return (
		<form
			action={async (formData) => {
				await submitOTP(formData);
			}}
		>
			<div ref={inputWrapperRef} className="flex gap-4 h-16 w-full my-6">
				<input
					type="number"
					required
					name="digit1"
					className="[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none text-center border border-black min-w-0 rounded-md text-3xl"
				/>
				<input
					type="number"
					required
					name="digit2"
					className="[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none text-center border border-black min-w-0 rounded-md text-3xl"
				/>
				<input
					type="number"
					required
					name="digit3"
					className="[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none text-center border border-black min-w-0 rounded-md text-3xl"
				/>
				<input
					type="number"
					required
					name="digit4"
					className="[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none text-center border border-black min-w-0 rounded-md text-3xl"
				/>
			</div>

			<SubmitButton />
		</form>
	);
}

function SubmitButton() {
	const { pending } = useFormStatus();

	return (
		<button
			type="submit"
			disabled={pending}
			className={`${
				pending ? "bg-opacity-70" : "bg-opacity-100 active:scale-95"
			} bg-black text-white p-3 w-full rounded-md flex justify-center items-center`}
		>
			{pending ? <Loading /> : "Submit"}
		</button>
	);
}

function Loading() {
	return (
		<div className="inline-block h-6 w-6 rounded-full border-[3px] border-white border-t-blue-400 animate-spin"></div>
	);
}
