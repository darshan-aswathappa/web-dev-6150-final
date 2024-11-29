import { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import React from 'react';
import useChatBotStore from '@/store/chatbotStore';
import ReactMarkdown from 'react-markdown';
import bubbleGif from '../../assets/images/bubble.gif';
import userAvatar from '../../assets/images/user.png';
import botAvatar from '../../assets/images/bot.avif';
import useAuthStore from '../../store/authStore';
import dayjs from 'dayjs';

const placeholderMessages = [
	'Grading policy breakdown for INFO 6150 - Web Design/User Experien Engr?',
	'How can I contact professor Vishal Chawla?',
];

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
		messagesEndRef.current?.scrollIntoView();
	}, [messages, loading]);

	const handleSend = async () => {
		if (input.trim()) {
			setLoading(true);
			setInput('');
			await sendMessage(input);
			setLoading(false);
		}
	};

	const handlePlaceholderClick = async (message) => {
		setLoading(true);
		await sendMessage(message);
		setLoading(false);
	};

	return (
		<div className="flex flex-col h-full w-full bg-white">
			<div className="flex-shrink-0 p-4 bg-white border-b">
				<h2 className="text-lg font-semibold">🌿🎓 Spring 2025 Chatbot</h2>
			</div>
			<ScrollArea className="flex-grow p-4 overflow-y-auto">
				{messages.length < 1 && (
					<p className="flex justify-center items-center text-xs font-semibold text-gray-400 text-center">
						Click on a message or send a message to start a conversation with the bot!
					</p>
				)}
				{messages.length < 1 && (
					<div className="flex flex-col space-y-2 mt-2">
						{placeholderMessages.map((msg, index) => (
							<div
								key={index}
								className="shadow-none bg-gray-200 text-gray-700 hover:bg-gray-300 hover:bg-opacity-80 rounded-lg cursor-pointer"
								onClick={() => handlePlaceholderClick(msg)}
							>
								<p className="text-sm p-1 m-1">{msg}</p>
							</div>
						))}
					</div>
				)}
				{messages.map((message, index) => (
					<div
						key={index}
						className={`mb-4 flex items-start ${
							message.author === 'user' ? 'justify-end' : 'justify-start'
						}`}
					>
						{message.author !== 'user' && (
							<img
								src={botAvatar}
								alt="Bot avatar"
								className="w-8 h-8 rounded-full mr-2"
							/>
						)}
						<div
							className={`inline-block px-2 rounded-lg max-w-full h-full ${
								message.author === 'user'
									? 'bg-[#c9fae2] text-black'
									: 'bg-[#f8f8f8] text-black'
							}`}
						>
							<ReactMarkdown className={'text-sm font-normal px-1.5 mt-3'}>
								{message.message}
							</ReactMarkdown>
							<p className="mb-2 mr-1 text-xs font-medium text-gray-500 capitalize text-right">
								{dayjs().format('MMMM D, YYYY h:mm A')}
							</p>
						</div>
						{message.author === 'user' && (
							<img
								src={userAvatar}
								alt="User avatar"
								className="w-8 h-8 rounded-full ml-2"
							/>
						)}
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
					<Button className="shadow-none" onClick={handleSend}>
						Send
					</Button>
				</div>
			</div>
		</div>
	);
}
