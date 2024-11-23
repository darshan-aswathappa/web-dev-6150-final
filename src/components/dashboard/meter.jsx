import React, { useEffect, useState } from 'react';

export default function ProgressRing({
	progress = 98,
	label = 'STRONG MATCH',
	size = 120,
	strokeWidth = 4,
}) {
	const [currentProgress, setCurrentProgress] = useState(0);

	useEffect(() => {
		const timer = setTimeout(() => {
			setCurrentProgress(progress);
		}, 100);
		return () => clearTimeout(timer);
	}, [progress]);

	const center = size / 2;
	const radius = (size - strokeWidth) / 2;
	const circumference = 2 * Math.PI * radius;
	const strokeDashoffset =
		circumference - (currentProgress / 100) * circumference;

	return (
		<div className="flex flex-col items-center justify-center">
			<div className="relative" style={{ width: size, height: size }}>
				<svg className="-rotate-90" width={size} height={size}>
					{/* Background circle */}
					<circle
						cx={center}
						cy={center}
						r={radius}
						fill="transparent"
						stroke="currentColor"
						strokeWidth={strokeWidth}
						className="text-gray-800"
					/>
					{/* Progress circle */}
					<circle
						cx={center}
						cy={center}
						r={radius}
						fill="transparent"
						stroke="url(#gradient)"
						strokeWidth={strokeWidth}
						strokeDasharray={circumference}
						strokeDashoffset={strokeDashoffset}
						className="transition-[stroke-dashoffset] duration-1000 ease-out"
						strokeLinecap="round"
					/>
					{/* Gradient Definition */}
					<defs>
						<linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
							<stop offset="0%" stopColor="#3B82F6" />
							<stop offset="100%" stopColor="#10B981" />
						</linearGradient>
					</defs>
				</svg>
				{/* Centered Text */}
				<div className="absolute inset-0 flex items-center justify-center">
					<span className="text-3xl font-bold text-white">
						{currentProgress}%
					</span>
				</div>
			</div>
			{/* Label */}
			<span className="mt-2 text-sm font-semibold tracking-wider text-white">
				{label}
			</span>
		</div>
	);
}
