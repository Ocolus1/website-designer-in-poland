import React, { useState, useEffect } from 'react';

function Newsletter() {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [message, setMessage] = useState('');
	const [success, setSuccess] = useState('');
	const [error, setError] = useState('');
	const [loading, setLoading] = useState(false);

	const handleSubmit = () => {
		setLoading(true);
		setSuccess('');
		setLoading('');

		if (!name && !email && !message) {
			setError('All fields are required');
			return;
		}

		let data = {
			name: name,
			email: email,
			message: message,
		};

		fetch('https://submit-form.com/2KaifsAAB', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Accept: 'application/json',
			},
			body: JSON.stringify(data),
		})
			.then(function (response) {
				if (response.ok) {
					setSuccess('Form submitted successfully');
				} else {
					setError('Network response was not ok. Please try again.');
				}
			})
			.catch(function (error) {
				alert(
					'There was a problem submitting your form. Please try again.'
				);
				console.error('Error:', error);
			});

		setLoading(false);
	};

	return (
		<section className="cta__section max-w-4xl mx-auto py-24 px-5 lg:px-0">
			<div
				className=" bg-white p-10 rounded-2xl
        mx-auto flex flex-col gap-y-5 justify-center items-center"
			>
				{success && (
					<p className="text-green-700 text-2xl">{success}</p>
				)}
				{error && <p className="text-red-700 text-2xl">{error}</p>}
				<h3 className="text-2xl md:text-3xl lg:text-4xl font-bold max-w-xl mx-auto text-black text-center">
					Don&apos;t Wait till it&apos;s urgent. Contact Us Now!
				</h3>
				<div className="input-form max-w-2xl mx-auto w-full gap-y-2 items-center justify-center lg:justify-start gap-x-1 lg:gap-x-5 mt-7">
					<div className="lg:flex my-5 gap-x-1 lg:gap-x-5">
						<div className="w-full">
							<input
								type="text"
								placeholder="Name *"
								value={name}
								onChange={(e) => setName(e.target.value)}
								className="py-2 px-5 mb-5 lg:py-3 bg-[#fcfcfc] placeholder:text-sm  placeholder:text-black/50 rounded-lg w-full focus:outline-none ring-1 ring-[#0A071B] focus:ring-2 focus:ring-[#0A071B]"
								required
							/>
						</div>
						<div className="w-full">
							<input
								type="email"
								placeholder="Email *"
								value={email}
								onChange={(e) => setEmail(e.target.value)}
								className="py-2 px-5 lg:py-3 bg-[#fcfcfc] placeholder:text-sm placeholder:text-black/50 rounded-lg w-full focus:outline-none ring-1 ring-[#0A071B] focus:ring-2 focus:ring-[#0A071B]"
								required
							/>
						</div>
					</div>
					<div className="w-full">
						<textarea
							placeholder="Message *"
							value={message}
							onChange={(e) => setMessage(e.target.value)}
							className="py-2 px-5 lg:py-3 bg-[#fcfcfc] placeholder:text-sm placeholder:text-black/50 rounded-lg w-full focus:outline-none ring-1 ring-[#0A071B] focus:ring-2 focus:ring-[#0A071B]"
							required
						/>
					</div>
					<button
						onClick={handleSubmit}
						className="bg-[#304EE6] text-white w-full my-4 md:w-1/2 hover:shadow-lg hover:drop-shadow transition duration-200 lg:w-1/3 font-semibold text-sm md:text-base lg:text-base rounded-lg py-2 px-5 lg:py-3"
					>
						{loading ? 'Loading....' : 'Send Message'}
					</button>
				</div>
			</div>
		</section>
	);
}

export default Newsletter;
