import React ,{useState} from 'react'
import { Search, ChevronDown, ChevronRight } from 'lucide-react';
const Frequently = () => {
    
      const faqs = [
        {
          question: 'What is RMax?',
          answer: 'Qest, is a SaaS platform/ecosystem that lets any small to medium service business setup & manage their business quickly & easily.'
        },
        {
          question: 'How does it work?',
          answer: 'Qest, is a SaaS platform/ecosystem that lets any small to medium service business setup & manage their business quickly & easily.'
        },
        {
          question: 'How much does it cost?',
          answer: 'Qest, is a SaaS platform/ecosystem that lets any small to medium service business setup & manage their business quickly & easily.'
        }
      ];
      const [activeQuestion, setActiveQuestion] = useState('What is RMax?');
  const [searchQuery, setSearchQuery] = useState('');
  return (
    <div className="text-center mb-12">
    <h2 className="text-4xl font-bold mb-4">
      Frequently Asked Questions
    </h2>
    <p className="text-gray-600 mb-2">
      Find answers to common questions about our services and features.
    </p>
    <p className="text-gray-600 mb-8">
      For more details, contact our support team.
    </p>
    <div className="relative max-w-xl mx-auto mb-12">
      <input
        type="text"
        placeholder="Ask Q! e.g Tell me about key Features."
        className="w-full px-4 py-3 pr-12 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <button className="absolute right-3 top-1/2 -translate-y-1/2 text-red-500">
        <Search className="w-5 h-5" />
      </button>
    </div>

    <div className="space-y-4 text-left">
      {faqs.map((faq) => (
        <div 
          key={faq.question}
          className="border rounded-lg overflow-hidden"
        >
          <button
            className="w-full px-6 py-4 flex justify-between items-center hover:bg-gray-50"
            onClick={() => setActiveQuestion(activeQuestion === faq.question ? '' : faq.question)}
          >
            <span className="font-medium">{faq.question}</span>
            {activeQuestion === faq.question ? (
              <ChevronDown className="w-5 h-5 text-gray-500" />
            ) : (
              <ChevronRight className="w-5 h-5 text-gray-500" />
            )}
          </button>
          {activeQuestion === faq.question && (
            <div className="px-6 py-4 bg-gray-50">
              <p className="text-gray-600">{faq.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>

    <div className="text-center mt-8">
      <p className="text-gray-600">
        Haven't got your answer?{' '}
        <a href="#" className="text-blue-600 hover:underline">
          Contact our support now
        </a>
      </p>
    </div>
  </div>
  )
}

export default Frequently
