import React, { useEffect, useState } from 'react';

export default function ProgressRing({
	progress,
	label = 'STRONG MATCH',
	size = 120,
	strokeWidth = 4,
	textFont = 'text-3xl',
	progressTextColor = 'text-white',
	labelTextFont = 'text-sm',
	labelTextColor = 'text-white',
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
					<circle
						cx={center}
						cy={center}
						r={radius}
						fill="transparent"
						stroke="currentColor"
						strokeWidth={strokeWidth}
						className="text-gray-800"
					/>
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
					<defs>
						<linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
							<stop offset="0%" stopColor="#3B82F6" />
							<stop offset="100%" stopColor="#10B981" />
						</linearGradient>
					</defs>
				</svg>
				<div className="absolute inset-0 flex items-center justify-center">
					<span className={`${textFont} font-bold ${progressTextColor}`}>
						{currentProgress}%
					</span>
				</div>
			</div>
			<span className={`mt-2 ${labelTextFont} font-semibold tracking-wider ${labelTextColor}`}>
				{label}
			</span>
		</div>
	);
}
