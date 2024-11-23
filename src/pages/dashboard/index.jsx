import React from 'react';
import Layout from '../../layout/main';
import clipText from '../../lib/textClipper';
import { Badge } from '@/components/ui/badge';
import { BadgeCheck, BadgeX } from 'lucide-react';
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from '@/components/ui/tooltip';
import useRecommendationStore from '../../store/resume-recomendation';
import { Link } from 'react-router-dom';
import SpinnerComponent from "../../components/dashboard/loader";

export default function Dashboard() {	
	const { fetchRecommendations, isFetching, error, recommendations } =
		useRecommendationStore();

	React.useEffect(() => {
		if (recommendations === null) {
			fetchRecommendations("DAMG");
		}
	}, [recommendations, isFetching]);
	
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
										{item.name} - {item.number}
									</Badge>
									<Badge variant="outline">{item.credits} Hours</Badge>
								</div>
								<div>
									<h1 className="font-bold text-xl pt-2">{item.subjectName}</h1>
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
														<BadgeX className="w-3 mr-1" /> No Prerequisite
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
														<BadgeX className="w-3 mr-1" /> No core requisites
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
							<div className="hidden bg-red-600 w-48 xl:flex items-center justify-center text-white rounded-r-md">
								<p>Rank: {item.rank}</p>
							</div>
						</div>
					</Link>
				))}
			</div>
		</Layout>
	);
}
