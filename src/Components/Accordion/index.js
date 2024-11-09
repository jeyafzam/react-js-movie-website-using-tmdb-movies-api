import React, { useState, useRef, useEffect } from "react";

const FAQAccordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const contentRefs = useRef([]);
  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqData = [
    {
      question: "Why is a video not loading?",
      answer:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
    },
    {
      question: "Why isn't there a HD version of this video?",
      answer:
        "Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
    },
    {
      question: "Why is the sound distorted?",
      answer:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
    },
    {
      question: "Why is the video stuttering, buffering or randomly stopping?",
      answer:
        "If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.",
    },
    {
      question: "How do I make the video go fullscreen?",
      answer:
        "If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.",
    },

    {
      question: "What browsers are supported?",
      answer:
        "It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.It uses a dictionary of over 200 Latin words...",
    },
    {
      question: "How do you handle my privacy?",
      answer:
        "Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
    },
    {
      question: "How can I contact you?",
      answer:
        "Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
    },
  ];

  const leftColumn = faqData.slice(0, 4);
  const rightColumn = faqData.slice(4);

  useEffect(() => {
    contentRefs.current.forEach((ref, index) => {
      if (ref) {
        ref.style.maxHeight =
          activeIndex === index ? `${ref.scrollHeight}px` : "0px";
      }
    });
  }, [activeIndex]);

  return (
    <div className="gap flex col-12 ">
      {[leftColumn, rightColumn].map((column, colIndex) => (
        <div key={colIndex} className="accordion-column col-6">
          {column.map((item, index) => {
            const itemIndex = colIndex * 4 + index;
            const isActive = activeIndex === itemIndex;

            return (
              <div key={itemIndex} className="accordion-item">
                <button
                  className="accordion-header col-12 button cp"
                  onClick={() => toggleAccordion(itemIndex)}
                >
                  <p className="question_item">{item.question}</p>
                  <span className="icon">
                    <span className="line horizontal"></span>
                    <span
                      className={`line vertical ${isActive ? "rotate" : ""}`}
                    ></span>
                  </span>
                </button>

                <div
                  ref={(el) => (contentRefs.current[itemIndex] = el)}
                  className="accordion-body"
                  style={{
                    overflow: "hidden",
                    transition: "max-height 1s ease",
                    maxHeight: isActive
                      ? `${contentRefs.current[itemIndex]?.scrollHeight}px`
                      : "0px",
                  }}
                >
                  <p>{item.answer}</p>
                </div>
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
};

export default FAQAccordion;
