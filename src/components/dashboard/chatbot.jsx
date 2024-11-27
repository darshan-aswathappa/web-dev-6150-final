import { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import React from 'react';
import useChatBotStore from '@/store/chatbotStore';
import ReactMarkdown from 'react-markdown';

export default function Chatbot() {
	const { messages, sendMessage } = useChatBotStore();
	const [input, setInput] = useState('');
	const [loading, setLoading] = useState(false);
	const messagesEndRef = useRef(null); // Ref for scrolling

	useEffect(() => {
		useChatBotStore.setState({
			messages: [
				...messages,
				{ author: 'bot', message: 'Hi, ask me your questions here' },
			],
		});
	}, []);

	useEffect(() => {
		messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
	}, [messages, loading]);

	const handleSend = async () => {
		if (input.trim()) {
			setLoading(true);
			await sendMessage(input);
			setInput('');
			setLoading(false);
		}
	};

	return (
		<div className="flex flex-col h-full w-full bg-white">
			<div className="flex-shrink-0 p-4 bg-white border-b">
				<h2 className="text-lg font-semibold">Chatbot</h2>
			</div>
			<ScrollArea className="flex-grow p-4 overflow-y-auto">
				{messages.map((message, index) => (
					<div
						key={index}
						className={`mb-4 ${
							message.author === 'user' ? 'text-right' : 'text-left'
						}`}
					>
						<div
							className={`inline-block p-2 rounded-lg max-w-full break-words ${
								message.author === 'user'
									? 'bg-blue-500 text-white'
									: 'bg-gray-200'
							}`}
						>
							<ReactMarkdown>{message.message}</ReactMarkdown>
						</div>
					</div>
				))}
				{loading && (
					<div className="text-center mb-4">
						<div className="inline-block p-2 rounded-lg bg-gray-200 max-w-full break-words">
							<span className="loader border-t-transparent border-solid animate-spin rounded-full border-blue-400 border-4 h-6 w-6 mx-auto"></span>
						</div>
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
					/>
					<Button onClick={handleSend}>Send</Button>
				</div>
			</div>
		</div>
	);
}
