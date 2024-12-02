import React from 'react';
import Layout from '../../layout/main';
import Chatbot from '@/components/dashboard/chatbot';

export default function ChatbotPage() {
  return (
    <Layout>
      <div className="bg-white rounded-lg overflow-hidden h-[calc(100vh-12rem)]">
        <Chatbot />
      </div>
    </Layout>
  );
}
