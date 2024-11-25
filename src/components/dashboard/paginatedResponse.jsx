import React, { useCallback, useEffect, useRef, useState } from 'react';
import clipText from '../../lib/textClipper';
import { Badge } from '@/components/ui/badge';
import { BadgeCheck, BadgeX, Book, TimerIcon } from 'lucide-react';
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from '@/components/ui/tooltip';
import ProgressRing from '../../components/dashboard/meter';
import { Link } from 'react-router-dom';

const PaginatedRecommendations = ({
	recommendations,
	sortedRecommendations,
}) => {
	const [visibleItems, setVisibleItems] = useState(8);
	const observerRef = useRef(null);

	const loadMoreItems = useCallback(() => {
		if (visibleItems < recommendations.length) {
			setVisibleItems(prev => prev + 10);
		}
	}, [visibleItems, recommendations]);

	const handleObserver = useCallback(
		entries => {
			const target = entries[0];
			if (target.isIntersecting) {
				loadMoreItems();
			}
		},
		[loadMoreItems]
	);

	useEffect(() => {
		const observer = new IntersectionObserver(handleObserver, {
			root: null,
			rootMargin: '200px',
			threshold: 0.1,
		});

		if (observerRef.current) {
			observer.observe(observerRef.current);
		}

		return () => {
			if (observerRef.current) {
				observer.unobserve(observerRef.current);
			}
		};
	}, [handleObserver]);

	return (
		<div>
			<div className="flex justify-end mb-4"></div>
			<div className="flex flex-col gap-y-2">
				{sortedRecommendations.slice(0, visibleItems).map(item => (
					<Link
						key={item._id}
						to={`/dashboard/${item._id}`}
						style={{ color: 'inherit', textDecoration: 'inherit' }}
					>
						<div className="bg-white rounded-md flex justify-between relative">
							<div className="p-4 flex-1">
								<div className="flex flex-col">
									<div className="flex justify-between">
										<div className="left-side">
											<div className="space-x-3">
												<Badge variant="secondary">
													<Book className="w-3 mr-1" />
													{item.name} - {item.number}
												</Badge>
												<Badge variant="outline">
													<TimerIcon className="w-3 mr-1" />
													{item.credits} Hours
												</Badge>
											</div>
											<div>
												<h1 className="font-bold text-xl pt-2 hidden md:block">
													{item.subjectName}
												</h1>
											</div>
										</div>
										<div className="xl:hidden flex flex-col items-center justify-center">
											<Badge
												variant={getButtonVariant(item.rank)}
												className="shadow-none mb-2"
											>
												{item.rank}% - {getLabel(item.rank)}
											</Badge>
										</div>
									</div>
								</div>
								<div>
									<h1 className="font-bold text-xl pt-2 md:hidden">
										{clipText(item.subjectName, 4)}
									</h1>
									<p className="text-sm text-justify md:hidden">
										{clipText(item.description, 20)}
									</p>
									<p className="hidden md:block text-sm text-justify">
										{clipText(item.description, 50)}
									</p>
								</div>
								<div className="flex space-x-2">
									<TooltipProvider>
										<Tooltip>
											<TooltipTrigger>
												{item.hasPreReq ? (
													<Badge variant="outline">
														<BadgeCheck className="w-3 mr-1" />
														Has Prerequisite
													</Badge>
												) : (
													<Badge variant="outline">
														<BadgeX className="w-3 mr-1" />
														<span className="text-gray-600">
															No Prerequisite
														</span>
													</Badge>
												)}
											</TooltipTrigger>
											<TooltipContent>
												{item.hasPreReq
													? item.prerequisites
													: 'This subject has no prerequisite'}
											</TooltipContent>
										</Tooltip>
									</TooltipProvider>
									<TooltipProvider>
										<Tooltip>
											<TooltipTrigger>
												{item.hasCoReq ? (
													<Badge variant="outline">
														<BadgeCheck className="w-3 mr-1" />
														Has Core-requisite
													</Badge>
												) : (
													<Badge variant="outline">
														<BadgeX className="w-3 mr-1" />
														<span className="text-gray-600">
															No core requisites
														</span>
													</Badge>
												)}
											</TooltipTrigger>
											<TooltipContent>
												{item.hasCoReq
													? item.corequisites
													: 'This subject has no core requisites'}
											</TooltipContent>
										</Tooltip>
									</TooltipProvider>
								</div>
							</div>
							<div className="hidden bg-gradient-to-b from-[#020806] to-[#014b3a] w-48 xl:flex items-center justify-center text-white rounded-md">
								<ProgressRing
									progress={item.rank}
									label={getLabel(item.rank)}
								/>
							</div>
						</div>
					</Link>
				))}
			</div>
			<div ref={observerRef} className="h-10"></div>
			{visibleItems < recommendations.length && (
				<div className="text-center text-gray-500 py-4">Loading more...</div>
			)}
		</div>
	);
};

function getLabel(progress) {
	if (progress < 50) {
		return 'BAD MATCH';
	} else if (progress >= 50 && progress < 75) {
		return 'FAIR MATCH';
	} else if (progress >= 75 && progress < 85) {
		return 'GOOD MATCH';
	} else {
		return 'STRONG MATCH';
	}
}

function getButtonVariant(progress) {
	if (progress < 50) {
		return 'destructive';
	} else if (progress >= 50 && progress < 75) {
		return 'secondary';
	} else if (progress >= 75 && progress < 85) {
		return 'outline';
	} else {
		return 'primary';
	}
}

export default PaginatedRecommendations;