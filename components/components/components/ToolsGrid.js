import { motion } from "framer-motion";

const tools = [
  {
    name: "PDF to Word",
    icon: "📄",
    description: "Convert PDF files to editable Word documents",
    color: "bg-blue-100 dark:bg-blue-900",
  },
  {
    name: "PDF Compressor",
    icon: "🗜️",
    description: "Reduce PDF file size while preserving quality",
    color: "bg-green-100 dark:bg-green-900",
  },
  {
    name: "Word to PDF",
    icon: "🔤",
    description: "Convert Word documents to PDF format",
    color: "bg-purple-100 dark:bg-purple-900",
  },
  {
    name: "PDF Merge",
    icon: "🔄",
    description: "Combine multiple PDFs into a single file",
    color: "bg-yellow-100 dark:bg-yellow-900",
  },
  {
    name: "PDF Split",
    icon: "✂️",
    description: "Extract pages or split PDF into multiple files",
    color: "bg-red-100 dark:bg-red-900",
  },
  {
    name: "PDF to JPG",
    icon: "🖼️",
    description: "Convert PDF pages to high-quality images",
    color: "bg-pink-100 dark:bg-pink-900",
  },
];

const ToolsGrid = () => {
  return (
    <section id="tools" className="py-16">
      <div className="text-center mb-12">
        <motion.h2
          className="text-3xl font-bold mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Powerful Document Tools
        </motion.h2>
        <motion.p
          className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          All the tools you need to work with PDFs and other documents, completely free and easy to use.
        </motion.p>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {tools.map((tool, index) => (
          <motion.div
            key={tool.name}
            className={`${tool.color} p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow cursor-pointer`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            whileHover={{ y: -5 }}
          >
            <div className="text-4xl mb-4">{tool.icon}</div>
            <h3 className="text-xl font-semibold mb-2 dark:text-white">{tool.name}</h3>
            <p className="text-gray-700 dark:text-gray-300">{tool.description}</p>
          </motion.div>
        ))}
      </div>
      
      <motion.div
        className="text-center mt-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.6, duration: 0.5 }}
      >
        <a
          href="#"
          className="inline-block px-6 py-3 border border-blue-600 text-blue-600 dark:text-blue-400 dark:border-blue-400 font-medium rounded-lg hover:bg-blue-50 dark:hover:bg-gray-800 transition-colors"
        >
          View All Tools
        </a>
      </motion.div>
    </section>
  );
};

export default ToolsGrid;
