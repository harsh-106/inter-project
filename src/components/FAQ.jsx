import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const faqs = [
  {
    question: 'What is Green Bank?',
    answer: 'Green Bank is a platform that provides tools to help fleet managers track, manage, and optimize their vehicles and drivers.'
  },
  {
    question: 'How does the Green Bank dashboard benefit fleet managers?',
    answer: 'It gives real-time insights, reports, and management capabilities to increase operational efficiency and reduce costs.'
  },
  {
    question: 'What sets Green Bank apart from traditional fleet management systems?',
    answer: 'Green Bank offers a cloud-based modern interface, AI analytics, and seamless integrations tailored for scalable fleet operations.'
  },
  {
    question: 'How does Green Bank help in managing drivers and vehicles?',
    answer: 'Through live tracking, maintenance reminders, driver scorecards, and automated compliance management tools.'
  },
  {
    question: 'How secure is GreenBank?',
    answer: 'GreenBank implements top-tier encryption, regular audits, and data privacy measures to keep your information safe.'
  },
  {
    question: 'Does GreenBank support international transactions?',
    answer: 'Yes, it supports international transactions and provides currency conversion and multi-language support.'
  }
];

const FaqItem = ({ faq, isOpen, onClick, animationProps }) => (
  <motion.div 
    className={`rounded-xl p-4 sm:p-6 mb-4 sm:mb-6 cursor-pointer shadow-sm hover:shadow-md transition-all ${
      isOpen ? 'bg-blue-50 border-blue-200' : 'bg-white border-gray-200'
    } border-2`}
    onClick={onClick}
    {...animationProps}
    whileHover={{
      scale: 1.02,
      transition: { duration: 0.2 }
    }}
    whileTap={{
      scale: 0.98
    }}
  >
    <div className="flex items-center gap-3 sm:gap-4">
      <motion.span 
        className={`text-xl sm:text-2xl ${
          isOpen ? 'text-blue-600' : 'text-gray-500'
        }`}
        animate={{ 
          rotate: isOpen ? 180 : 0,
          color: isOpen ? '#2563eb' : '#6b7280'
        }}
        transition={{ duration: 0.3 }}
      >
        {isOpen ? '-' : '+'}
      </motion.span>
      <h4 className={`font-medium text-base sm:text-lg ${
        isOpen ? 'text-blue-800' : 'text-gray-800'
      }`}>
        {faq.question}
      </h4>
    </div>

    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ 
            opacity: 1, 
            height: 'auto',
            transition: { 
              duration: 0.4,
              ease: [0.04, 0.62, 0.23, 0.98]
            }
          }}
          exit={{ 
            opacity: 0, 
            height: 0,
            transition: { 
              duration: 0.3,
              ease: [0.04, 0.62, 0.23, 0.98]
            } 
          }}
          className="overflow-hidden"
        >
          <p className="pt-3 sm:pt-4 text-sm sm:text-base text-gray-600">{faq.answer}</p>
        </motion.div>
      )}
    </AnimatePresence>
  </motion.div>
);

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [animatedItems, setAnimatedItems] = useState([]);
  const containerRef = useRef(null);
  
  const [leftRef, leftInView] = useInView({
    threshold: 0.3,
    triggerOnce: false
  });

  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        const containerTop = containerRef.current.getBoundingClientRect().top;
        if (containerTop > window.innerHeight) {
          setAnimatedItems([]);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section 
      ref={containerRef}
      className="flex flex-col md:flex-row items-start gap-8 sm:gap-12 md:gap-16 p-4 sm:p-6 md:p-8 lg:p-12 max-w-7xl mx-auto"
    >
      
      <motion.div 
        className="w-full md:w-1/2"
        ref={leftRef}
        initial={{ opacity: 0, x: -80 }}
        animate={leftInView ? { 
          opacity: 1, 
          x: 0,
          transition: {
            duration: 0.8,
            ease: [0.16, 1, 0.3, 1]
          }
        } : {}}
      >
        <motion.h2 
          className="text-3xl sm:text-4xl md:text-5xl font-semibold leading-snug text-gray-900"
          initial={{ y: 20, opacity: 0 }}
          animate={leftInView ? { 
            y: 0, 
            opacity: 1,
            transition: {
              delay: 0.2,
              duration: 0.8
            }
          } : {}}
        >
          Answers to your <br />
          <motion.span 
            className="text-blue-600"
            initial={{ opacity: 0 }}
            animate={leftInView ? { 
              opacity: 1,
              transition: {
                delay: 0.4,
                duration: 0.8
              }
            } : {}}
          >
            Questions
          </motion.span>
        </motion.h2>

        <motion.p 
          className="mt-3 sm:mt-4 text-base sm:text-lg text-gray-500 font-light"
          initial={{ y: 10, opacity: 0 }}
          animate={leftInView ? { 
            y: 0, 
            opacity: 1,
            transition: {
              delay: 0.6,
              duration: 0.6
            }
          } : {}}
        >
          Get answers to commonly asked questions about GreenBank and its features.
        </motion.p>
        
        <motion.button 
          className="mt-4 sm:mt-6 bg-blue-600 text-white px-6 sm:px-8 py-2 rounded-full font-medium hover:bg-blue-700 transition text-sm sm:text-base"
          whileHover={{ 
            scale: 1.05,
            boxShadow: '0 10px 20px rgba(37, 99, 235, 0.2)'
          }}
          whileTap={{ scale: 0.98 }}
          initial={{ y: 10, opacity: 0 }}
          animate={leftInView ? { 
            y: 0, 
            opacity: 1,
            transition: {
              delay: 0.8,
              duration: 0.6
            }
          } : {}}
        >
          Contact Us
        </motion.button>
      </motion.div>

      
      <div className="w-full md:w-1/2">
        {faqs.map((faq, index) => {
          const [ref, inView] = useInView({
            threshold: 0.1,
            triggerOnce: false
          });

          useEffect(() => {
            if (inView && !animatedItems.includes(index)) {
              setAnimatedItems(prev => [...prev, index]);
            }
          }, [inView, index, animatedItems]);

          return (
            <FaqItem
              key={index}
              faq={faq}
              isOpen={openIndex === index}
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              animationProps={{
                ref,
                initial: { 
                  opacity: 0, 
                  y: 40,
                  scale: 0.95 
                },
                animate: inView || animatedItems.includes(index) ? { 
                  opacity: 1, 
                  y: 0,
                  scale: 1,
                  transition: {
                    duration: 0.6,
                    delay: index * 0.15,
                    ease: [0.16, 1, 0.3, 1]
                  }
                } : {}
              }}
            />
          );
        })}
      </div>
    </section>
  );
};

export default FAQ;