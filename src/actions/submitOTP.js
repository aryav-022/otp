"use server";

export async function submitOTP(formData) {
	"use server";

	await new Promise((resolve) => setTimeout(resolve, 1000));

	try {
		const digit1 = formData.get("digit1");
		const digit2 = formData.get("digit2");
		const digit3 = formData.get("digit3");
		const digit4 = formData.get("digit4");

		const otp = Number(digit1 + digit2 + digit3 + digit4);

		console.log(otp);
	} catch (err) {
		console.error(err);
	}
}
