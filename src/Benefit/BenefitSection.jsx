import React from 'react';
import money from '../assets/money.svg';
import box from '../assets/box.svg';
import heart from '../assets/heart.svg';
import globe from '../assets/globe.svg';
import benefitImag from '../assets/benefitImg.svg';

function BenefitSection() {
	const benefitSectionData = [
		{
			image: money,
			title: 'Save time & Reduce cost',
			description:
				'Hiring ProductDesignerInPoland helps you save time and reduce cost on fees',
		},
		{
			image: box,
			title: 'Supafast!',
			description:
				'Get designs delivered to you within 48 hours depending on complexity.',
		},
		{
			image: heart,
			title: 'Till Work Is Done',
			description:
				'We ensure that we revise and iterate on your work till it meets your needs',
		},
		{
			image: globe,
			title: 'And even after',
			description:
				'You can retain our services after work is done for a fixed monthly fee',
		},
	];
	return (
		<section className="cta__section max-w-4xl mx-auto py-8 px-5 lg:px-0 mt-12">
			<h2 className="text-center text-5xl my-5 font-bold">Features</h2>
			<div className="max-w-5xl mx-auto py-10 grid md:grid-cols-2 gap-y-10 md:gap-y-10 lg:py-14 px-10">
				{benefitSectionData.map((item, index) => (
					<div
						key={index}
						className="flex flex-col gap-y-5 items-start justify-between"
					>
						<div>
							<img src={item.image} alt="" />
						</div>
						<div className="flex max-w-xs mx-0 flex-col gap-y-2 items-start justify-start">
							<h2 className="font-bold text-xl text-black">
								{item.title}
							</h2>
							<p className="font-medium text-sm text-slate-400/80">
								{item.description}
							</p>
						</div>
					</div>
				))}
			</div>
		</section>
	);
}

export default BenefitSection;
