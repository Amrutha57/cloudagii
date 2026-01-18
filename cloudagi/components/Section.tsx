"use client";
import { motion } from "framer-motion";

export default function Section({ children }: { children: React.ReactNode }) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="py-24"
    >
      <div className="max-w-6xl mx-auto px-6">{children}</div>
    </motion.section>
  );
}
