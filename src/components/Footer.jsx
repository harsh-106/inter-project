import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <motion.footer 
      className="bg-blue-100 px-4 sm:px-6 lg:px-8 py-6 sm:py-9"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto">
       
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 sm:gap-8 mb-12 sm:mb-16">
          
          <motion.div 
            className="flex-shrink-0 order-1 lg:order-none mb-4 sm:mb-0"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="w-12 sm:w-16 h-12 sm:h-16 bg-black rounded-lg flex items-center justify-center">
              <span className="text-white text-2xl sm:text-3xl font-bold">π</span>
            </div>
          </motion.div>

          
          <div className="flex-1 lg:text-right lg:mr-12 xl:mr-18 order-3 lg:order-none w-full">
            <motion.h2 
              className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-800 mb-4 sm:mb-6 mr-0 sm:mr-8 lg:mr-16 text-center lg:text-right"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              Empowering your financial journey,<br />
              <span className='block mr-0 sm:mr-8 lg:mr-40'>one transaction at a time.</span>
            </motion.h2>
            <div className='flex justify-center lg:justify-center'>
              <motion.button 
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 sm:px-8 py-2 sm:py-3 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl text-sm sm:text-base"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                Buy Template
              </motion.button>
            </div>
          </div>
        </div>

       
        <motion.div 
          className="border-t border-gray-300 mb-6 sm:mb-8"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        />

        <motion.div 
          className="flex flex-col md:flex-row items-center justify-between gap-3 sm:gap-4 text-gray-600 text-sm sm:text-base"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
         
          <div className="flex items-center gap-1 order-2 md:order-1">
            <motion.a 
              href="#" 
              className="hover:text-blue-600 transition-colors duration-300 underline decoration-gray-400 hover:decoration-blue-600"
              whileHover={{ scale: 1.02 }}
            >
              Designed By Breeje Anadkat
            </motion.a>
          </div>

          
          <div className="text-center order-1 md:order-2 mb-3 md:mb-0">
            <span>© 2025 GreenBank. All Rights Reserved.</span>
          </div>

        
          <div className="flex items-center gap-4 sm:gap-6 order-3 md:order-3">
            <motion.a 
              href="#" 
              className="hover:text-blue-600 transition-colors duration-300 underline decoration-gray-400 hover:decoration-blue-600"
              whileHover={{ scale: 1.02 }}
            >
              Built in React.js
            </motion.a>
            <motion.a 
              href="#" 
              className="hover:text-blue-600 transition-colors duration-300 underline decoration-gray-400 hover:decoration-blue-600"
              whileHover={{ scale: 1.02 }}
            >
              Get This Template
            </motion.a>
          </div>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;