import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Marketing Manager",
    content: "This tool has saved me hours of work every week. The PDF conversion quality is excellent!",
    avatar: "👩‍💼",
  },
  {
    name: "Michael Chen",
    role: "Freelance Designer",
    content: "I use DocTools daily for client work. Fast, reliable, and completely free - amazing!",
    avatar: "👨‍🎨",
  },
  {
    name: "David Wilson",
    role: "University Professor",
    content: "Perfect for preparing course materials. My students love how easy it is to use.",
    avatar: "👨‍🏫",
  },
];

const Testimonials = () => {
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <motion.h2
            className="text-3xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Trusted by Thousands
          </motion.h2>
          <motion.p
            className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            Don't just take our word for it. Here's what our users say about DocTools.
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="text-4xl mb-4">{testimonial.avatar}</div>
              <p className="text-gray-600 dark:text-gray-300 italic mb-4">"{testimonial.content}"</p>
              <div>
                <p className="font-semibold dark:text-white">{testimonial.name}</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
