"use client";
import { motion } from "framer-motion";

export default function ProjectCard({ project }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.3 }}
      className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow border border-gray-100"
    >
      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <span className="text-xs font-bold text-primary bg-blue-50 px-2 py-1 rounded">
            {project.type}
          </span>
          <span className="text-xs text-gray-400">{project.date}</span>
        </div>
        <h3 className="text-lg font-bold text-dark mb-2">{project.client}</h3>
        <p className="text-gray-600 text-sm mb-4">{project.desc}</p>
        <div className="flex justify-between items-center border-t pt-4">
          <span className="text-xs text-gray-500">PO: {project.po}</span>
          <span className="font-bold text-secondary">RM {project.value}</span>
        </div>
      </div>
    </motion.div>
  );
}