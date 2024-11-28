import { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import React from 'react';
import useChatBotStore from '@/store/chatbotStore';
import ReactMarkdown from 'react-markdown';
import bubbleGif from '../../assets/images/bubble.gif';
import useAuthStore from '../../store/authStore';
import dayjs from 'dayjs';


export default function Chatbot() {
	const { messages, sendMessage } = useChatBotStore();
	const [input, setInput] = useState('');
	const [loading, setLoading] = useState(false);
	const messagesEndRef = useRef(null); 
	const {user} = useAuthStore();

	useEffect(() => {
		const isFirstVisit = localStorage.getItem('isFirstVisit');
		if (!isFirstVisit) {
			useChatBotStore.setState({
				messages: [
					...messages,
					{ author: 'bot', message: 'Hi, ask me your questions here' },
				],
			});
			localStorage.setItem('isFirstVisit', 'false');
		}
	}, []);

	useEffect(() => {
		messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
	}, [messages, loading]);

	const handleSend = async () => {
		if (input.trim()) {
			setLoading(true);
			setInput('');
			await sendMessage(input);
			setLoading(false);
		}
	};

	return (
		<div className="flex flex-col h-full w-full bg-white">
			<div className="flex-shrink-0 p-4 bg-white border-b">
				<h2 className="text-lg font-semibold">Course chatbot</h2>
			</div>
			<ScrollArea className="flex-grow p-4 overflow-y-auto">
				{messages.length < 1 && (
					<p className="flex justify-center items-center text-xs font-semibold text-gray-400">
						Send a message to start a conversation with the bot!
					</p>
				)}
				{messages.map((message, index) => (
					<div
						key={index}
						className={`mb-4 ${
							message.author === 'user' ? 'text-right' : 'text-left'
						}`}
					>
						{message.author === 'user' ? (
							<p className="m-1 text-xs font-medium text-gray-500 capitalize">
								{user.name} - {dayjs().format('MMMM D, YYYY h:mm A')}
							</p>
						) : (
							<p className="m-1 text-xs font-medium text-gray-500">
								Bot - {dayjs().format('MMMM D, YYYY h:mm A')}
							</p>
						)}
						<div
							className={`inline-block p-1 rounded-lg max-w-full break-words ${
								message.author === 'user'
									? 'bg-blue-500 text-white'
									: 'bg-gray-200'
							}`}
						>
							<ReactMarkdown className={'px-2'}>
								{message.message}
							</ReactMarkdown>
						</div>
					</div>
				))}
				{loading && (
					<div className="flex items-left justify-left">
						<img
							className="p-0 m-0"
							src={bubbleGif}
							alt="Loading..."
							width="55"
							height="55"
						/>
					</div>
				)}
				<div ref={messagesEndRef}></div>
			</ScrollArea>
			<div className="flex-shrink-0 p-4 border-t">
				<div className="flex space-x-2">
					<Input
						type="text"
						placeholder="Type a message..."
						value={input}
						onChange={e => setInput(e.target.value)}
						onKeyPress={e => e.key === 'Enter' && handleSend()}
						className="shadow-none"
					/>
					<Button onClick={handleSend}>Send</Button>
				</div>
			</div>
		</div>
	);
}
