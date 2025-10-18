import { useState } from "react";
import "./styles/style.css";

function App() {
  const [opened, setOpened] = useState<number | null>(null);
  const faqs: { question: string; answer: string }[] = [
    {
      question: "What is React?",
      answer:
        "React is a JavaScript library for building user interfaces, mainly for web and mobile applications.",
    },
    {
      question: "What is a component in React?",
      answer:
        "A component in React is a reusable piece of UI that can have its own structure, logic, and style.",
    },
    {
      question: "What are React hooks?",
      answer:
        "React hooks are special functions that let you use React features (like state and lifecycle methods) inside functional components.",
    },
  ];

  const toggleFAQ = (index: number) => {
    return setOpened(opened === index ? null : index);
  };

  return (
    <>
      <div className="faq-container">
        {faqs.map((faq, index) => (
          <div
            className="faq-item"
            key={index}
            onClick={() => toggleFAQ(index)}
          >
            <div className="faq-question">{faq.question}</div>
            <div className={`faq-answer ${index === opened ? "open" : ""}`}>
              <div className="faq-answer-inner">{faq.answer}</div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
