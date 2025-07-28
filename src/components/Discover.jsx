import React, { useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';

const Discover = () => {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true, margin: "-100px" });
  
  const card1Ref = useRef(null);
  const card2Ref = useRef(null);
  const card3Ref = useRef(null);
  const containerRef = useRef(null);


  const { scrollYProgress: containerProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const { scrollYProgress: card1Progress } = useScroll({
    target: card1Ref,
    offset: ["start end", "end start"]
  });

  const { scrollYProgress: card2Progress } = useScroll({
    target: card2Ref,
    offset: ["start end", "end start"]
  });

  const { scrollYProgress: card3Progress } = useScroll({
    target: card3Ref,
    offset: ["start end", "end start"]
  });

  const card1Y = useTransform(card1Progress, [0, 0.5, 1], [100, 0, -50]);
  const card1Scale = useTransform(card1Progress, [0, 0.5, 1], [0.95, 1, 0.98]);
  const card1Opacity = useTransform(containerProgress, [0, 0.2, 0.4, 0.6], [1, 1, 1, 0]);

  const card2Y = useTransform(card2Progress, [0, 0.5, 1], [100, 0, -50]);
  const card2Scale = useTransform(card2Progress, [0, 0.5, 1], [0.95, 1, 0.98]);
  const card2Opacity = useTransform(containerProgress, [0.3, 0.4, 0.6, 0.8], [0, 1, 1, 0]);

  const card3Y = useTransform(card3Progress, [0, 0.5, 1], [100, 0, -50]);
  const card3Scale = useTransform(card3Progress, [0, 0.5, 1], [0.95, 1, 0.98]);
  const card3Opacity = useTransform(containerProgress, [0.6, 0.7, 1], [0, 1, 1]);

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        <motion.div 
          ref={headerRef}
          className="text-center mb-16 md:mb-25"
          initial={{ opacity: 0, y: 30 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-[#002147] mb-4 sm:mb-6">
            Discover What We <span className="text-[#0171DF]">Offer</span>
          </h1>
          <p className="text-lg sm:text-xl text-[#334D6C] max-w-md sm:max-w-xl mx-auto px-2 sm:px-0">
            Elevate your e-commerce experience with our powerful feature set designed for unparalleled excellence.
          </p>
        </motion.div>

        
        <div ref={containerRef}>
          <motion.div 
            ref={card1Ref}
            style={{ y: card1Y, scale: card1Scale, opacity: card1Opacity }}
            className="bg-[#D4EAFF] rounded-3xl p-6 sm:p-8 md:p-12 sticky top-20 sm:top-25 mb-6 sm:mb-8 z-10"
          >
            <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-start">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
                className="order-2 lg:order-1"
              >
                <h2 className="text-2xl sm:text-3xl md:text-4xl leading-normal sm:leading-relaxed font-medium text-[#002147] mb-4 sm:mb-6">
                  Manage All Your Credit Cards in One Place.
                </h2>
                <p className="text-[#334D6C] font-extralight text-base sm:text-lg md:text-xl leading-normal sm:leading-relaxed">
                  Keep track of multiple credit cards effortlessly within the GreenBank app. Monitor balances, track transactions, and stay on top of payments without switching between different accounts.
                </p>
              </motion.div>

              <motion.div 
                className="relative overflow-visible h-auto sm:h-90 flex justify-center lg:justify-end items-start -mt-8 sm:-mt-0 sm:-top-28 lg:left-25 order-1 lg:order-2"
                initial={{ opacity: 0, scale: 0.8, y: 50 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6, type: "spring", bounce: 0.3 }}
                viewport={{ once: true }}
              >
                <img 
                  src="../image_15 (1) (1).png" 
                  alt="VISA" 
                  className="w-full max-w-md sm:w-auto"
                />
              </motion.div>
            </div>
          </motion.div>

          <motion.div 
            ref={card2Ref}
            style={{ y: card2Y, scale: card2Scale, opacity: card2Opacity }}
            className="bg-[#FFF5C5] rounded-3xl p-6 sm:p-8 md:p-12 sticky top-20 sm:top-25 mb-6 sm:mb-8 z-20"
          >
            <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-start">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
                className="order-2 lg:order-1"
              >
                <h2 className="text-2xl sm:text-3xl md:text-4xl leading-normal sm:leading-relaxed font-medium text-[#002147] mb-4 sm:mb-6">
                  Goal-Oriented Financial Planning.
                </h2>
                <p className="text-[#334D6C] font-extralight text-base sm:text-lg md:text-xl leading-normal sm:leading-relaxed">
                  Set and track your financial goals with GreenBank's tailored planning tools. Whether it's saving for a vacation, a new home, or retirement, we'll help you stay on target and achieve your dreams.
                </p>
              </motion.div>

              <motion.div 
                className="relative overflow-visible h-auto sm:h-90 flex justify-center items-start -mt-8 sm:-mt-0 sm:-top-32 order-1 lg:order-2"
                initial={{ opacity: 0, scale: 0.8, y: 50 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6, type: "spring", bounce: 0.3 }}
                viewport={{ once: true }}
              >
                <img 
                  src="../image_18 (1).png" 
                  alt="Financial Goals" 
                  className="w-full max-w-md sm:w-auto h-auto sm:h-[500px]"
                />
              </motion.div>
            </div>
          </motion.div>

          <motion.div 
            ref={card3Ref}
            style={{ y: card3Y, scale: card3Scale, opacity: card3Opacity }}
            className="bg-[#E4E6F9] rounded-3xl p-6 sm:p-8 md:p-12 sticky top-20 sm:top-25 mb-6 sm:mb-8 z-30"
          >
            <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-start">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
                className="order-2 lg:order-1"
              >
                <h2 className="text-2xl sm:text-3xl md:text-4xl leading-normal sm:leading-relaxed font-medium text-[#002147] mb-4 sm:mb-6">
                  Smart Spending Insights.
                </h2>
                <p className="text-[#334D6C] font-extralight text-base sm:text-lg md:text-xl leading-normal sm:leading-relaxed">
                  Gain valuable insights into your spending habits with GreenBank's intelligent analysis tools. Understand where your money is going, receive personalized recommendations for saving, and make informed financial decisions to achieve your goals faster.
                </p>
              </motion.div>

              <motion.div 
                className="relative overflow-visible h-auto sm:h-90 flex justify-center items-start -mt-8 sm:-mt-0 sm:-top-32 order-1 lg:order-2"
                initial={{ opacity: 0, scale: 0.8, y: 50 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6, type: "spring", bounce: 0.3 }}
                viewport={{ once: true }}
              >
                <img 
                  src="../image_21 (1).png" 
                  alt="Spending Insights" 
                  className="w-full max-w-md sm:w-auto h-auto sm:h-[500px]"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>

        
        <div className="h-40 sm:h-60 md:h-80"></div>
      </div>
    </div>
  );
};

export default Discover;