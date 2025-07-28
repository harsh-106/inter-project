import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const steps = [
  {
    id: 1,
    title: "Sign Up With GreenBank",
    description: "Create your GreenBank account and unlock a world of financial possibilities.",
    image: "src/assets/signup (1).png",
  },
  {
    id: 2,
    title: "Connect Your Accounts",
    description: "Link all your financial accounts effortlessly to GreenBank and manage everything in one place.",
    image: "src/assets/Deco (1).png",
  },
  {
    id: 3,
    title: "Start Saving & Growing",
    description: "Use smart tools to track spending, save efficiently, and grow your money automatically.",
    image: "src/assets/netflix.png",
  },
];

const Steps = () => {
  return (
    <section className="bg-[#021f45] py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 text-white relative">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8 sm:gap-10 lg:gap-12">
        
        <div className="lg:w-1/2 lg:sticky lg:top-20 lg:h-[calc(100vh-10rem)] lg:flex lg:flex-col">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold">
            Get Started In Just{" "}
            <br />
            <span className="text-blue-400 block mt-1 sm:mt-2">3 Simple Steps</span>
          </h2>
          <p className="mt-3 sm:mt-4 text-base sm:text-lg text-gray-300 max-w-full lg:w-[500px]">
            Three simple steps to unlock the power of GreenBank and
            revolutionize your banking experience.
          </p>
        </div>

        
        <div className="lg:w-1/2 space-y-6 sm:space-y-8 md:space-y-10">
          {steps.map((step, idx) => {
            const { ref, inView } = useInView({
              triggerOnce: true,
              threshold: 0.2,
            });

            return (
              <motion.div
                key={step.id}
                ref={ref}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: idx * 0.2 }}
                className="bg-blue-100 text-gray-900 p-6 sm:p-7 md:p-8 rounded-xl sm:rounded-2xl shadow-lg sm:shadow-xl"
              >
                <div className="mb-2 inline-block px-3 sm:px-4 py-1 bg-blue-500 text-white rounded-full text-xs sm:text-sm">
                  Step {step.id}
                </div>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-3 sm:mb-4">
                  {step.title}
                </h3>
                <p className="mb-3 sm:mb-4 text-base sm:text-lg md:text-xl font-light text-gray-700">
                  {step.description}
                </p>
                <img
                  src={step.image}
                  alt={step.title}
                  className="rounded-lg sm:rounded-xl border border-gray-200 w-full h-auto"
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Steps;