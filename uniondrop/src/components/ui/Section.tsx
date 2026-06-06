import { motion } from "framer-motion";

export default function Section({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`py-20 md:py-32 px-6 ${className}`}
    >
      <div className="max-w-7xl mx-auto">{children}</div>
    </motion.section>
  );
}