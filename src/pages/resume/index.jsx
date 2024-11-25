import React from 'react';
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';
import Layout from '../../layout/main';

export default function ResumeOptions() {
	return (
		<Layout>
			<h1 className="text-2xl font-semibold mb-6">Resume Options</h1>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
				{[1, 2, 3, 4].map(item => (
					<Card key={item}>
						<CardHeader>
							<CardTitle>Resume Option {item}</CardTitle>
							<CardDescription>Resume option description</CardDescription>
						</CardHeader>
						<CardContent>
							<p>Resume option content goes here.</p>
						</CardContent>
					</Card>
				))}
			</div>
		</Layout>
	);
}
