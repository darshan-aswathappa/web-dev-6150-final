import React from 'react';
import Layout from '../../layout/main';
import clipText from '../../lib/textClipper';
import { Badge } from '@/components/ui/badge';
import { BadgeCheck, BadgeX, Book, TimerIcon } from 'lucide-react';
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from '@/components/ui/tooltip';
import useRecommendationStore from '../../store/resume-recomendation';
import { Link } from 'react-router-dom';
import SpinnerComponent from "../../components/dashboard/loader";
import ProgressRing from '../../components/dashboard/meter';
import UseAuthStore from "../../store/authStore";

export default function Dashboard() {	
	const { fetchRecommendations, isFetching, error, recommendations, hasFetched } =
		useRecommendationStore();
	const { user } = UseAuthStore();

	React.useEffect(() => {
		if (!hasFetched) {
			fetchRecommendations('CSYE', user._id);
		}
	}, [hasFetched, fetchRecommendations]);
	
	if(isFetching || recommendations === null) {
		return (
			<Layout>
				<SpinnerComponent />
			</Layout>
		);
	}
	
	return (
		<Layout>
			<div className="flex flex-col gap-y-2">
				{recommendations.map(item => (
					<Link
						key={item._id}
						to={`/dashboard/${item._id}`}
						style={{ color: 'inherit', textDecoration: 'inherit' }}
					>
						<div className="bg-white rounded-md flex justify-between relative">
							<div className="p-4 flex-1">
								<div className="flex space-x-3">
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
									<h1 className="font-bold text-xl pt-2 md:hidden">
										{clipText(item.subjectName, 5)}
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
												{item.hasPreReq === true ? (
													<Badge variant="outline">
														<BadgeCheck className="w-3 mr-1" />
														Has Prerequisite
													</Badge>
												) : (
													<Badge variant="outline">
														<BadgeX className="w-3 mr-1" />{' '}
														<span className="text-gray-600">
															No Prerequisite
														</span>
													</Badge>
												)}
											</TooltipTrigger>
											<TooltipContent>
												{item.hasPreReq === true
													? item.prerequisites
													: 'This subject has no prerequisite'}
											</TooltipContent>
										</Tooltip>
									</TooltipProvider>
									<TooltipProvider>
										<Tooltip>
											<TooltipTrigger>
												{item.hasCoReq === true ? (
													<Badge variant="outline">
														<BadgeCheck className="w-3 mr-1" />
														Has Core-requisite
													</Badge>
												) : (
													<Badge variant="outline">
														<BadgeX className="w-3 mr-1" />{' '}
														<span className="text-gray-600">
															No core requisites
														</span>
													</Badge>
												)}
											</TooltipTrigger>
											<TooltipContent>
												{item.hasCoReq === true
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
		</Layout>
	);
}

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