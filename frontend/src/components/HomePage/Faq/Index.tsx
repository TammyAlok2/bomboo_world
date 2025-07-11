'use client';

import { useState } from "react";

const FAQ = () => {


  const faqs = [
  {
    id: 1,
    question: "Q1. What services does Bomboo World offer?",
    answer:
      "Bomboo World specializes in providing innovative solutions, including digital transformation, product development, and business consulting. We focus on delivering reliable and customer-centric results."
  },
  {
    id: 2,
    question: "Q2. What industries does Bomboo World serve?",
    answer:
      "We serve a wide range of industries, including healthcare, e-commerce, education, and technology, ensuring customized solutions for each client."
  },
  {
    id: 3,
    question: "Q3. How can I collaborate with Bomboo World?",
    answer:
      "You can reach out to us through our contact form on the website or email us directly. Our team will schedule a consultation to discuss your needs and goals."
  },
  {
    id: 4,
    question: "Q4. What makes Bomboo World unique?",
    answer:
      "Bomboo World stands out for its commitment to innovation, sustainability, and delivering tailored solutions that align with our clients' vision. Our team combines technical expertise with a customer-first approach."
  },
  {
    id: 5,
    question: "Q5. What makes Bomboo World unique?",
    answer:
      "Bomboo World stands out for its commitment to innovation, sustainability, and delivering tailored solutions that align with our clients' vision. Our team combines technical expertise with a customer-first approach."
  },
  {
    id: 6,
    question: "Q6. What makes Bomboo World unique?",
    answer:
      "Bomboo World stands out for its commitment to innovation, sustainability, and delivering tailored solutions that align with our clients' vision. Our team combines technical expertise with a customer-first approach."
  },
 
];


  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const toggleFAQ = (id: number) => {
    setOpenFAQ(openFAQ === id ? null : id);
  };

  return (
    <div className="max-w-screen-xl mx-auto mb-8">
      <h1 className="text-4xl font-bold text-center mb-10">FAQ</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {faqs.map((faq) => (
          <div
            key={faq.id}
            className={`border rounded-lg w-full shadow-md transition-all duration-300 ease-in-out ${
              openFAQ === faq.id ? "p-6 h-auto" : "p-4 h-16"
            }`}
            onClick={() => toggleFAQ(faq.id)}
          >
            <div className="flex justify-between items-center cursor-pointer">
              <h2 className="font-medium">{faq.question}</h2>
              <span className="text-gray-500">
                {openFAQ === faq.id ? "▲" : "▼"}
              </span>
            </div>
            {openFAQ === faq.id && (
              <div className="mt-4 text-gray-600">{faq.answer}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;


