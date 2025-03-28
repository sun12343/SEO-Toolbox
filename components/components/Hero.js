import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="py-12 md:py-20">
      <div className="text-center max-w-3xl mx-auto">
        <motion.h1
          className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Your All-in-One Document Solution
        </motion.h1>
        
        <motion.p
          className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          Edit, convert, compress, and manage your PDFs and documents with our free online tools. No installation needed.
        </motion.p>
        
        <motion.div
          className="flex flex-col sm:flex-row justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <motion.a
            href="#tools"
            className="px-8 py-3 bg-blue-600 text-white font-medium rounded-lg shadow-lg hover:bg-blue-700 transition-colors"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            Explore Tools
          </motion.a>
          <motion.a
            href="#features"
            className="px-8 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 font-medium rounded-lg shadow hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            Learn More
          </motion.a>
        </motion.div>
      </div>
      
      <motion.div
        className="mt-16 flex justify-center"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.6, duration: 0.5 }}
      >
        <div className="relative w-full max-w-4xl h-64 md:h-80 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-gray-800 dark:to-gray-700 rounded-2xl shadow-xl overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="grid grid-cols-3 gap-4 p-6 w-full">
              {[1, 2, 3].map((item) => (
                <motion.div
                  key={item}
                  className="bg-white dark:bg-gray-700 rounded-lg shadow-md p-4 h-32"
                  animate={{
                    y: [0, -10, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: item * 0.3,
                  }}
                >
                  <div className="h-4 bg-blue-100 dark:bg-blue-900 rounded w-3/4 mb-3"></div>
                  <div className="h-3 bg-gray-100 dark:bg-gray-600 rounded w-1/2"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
