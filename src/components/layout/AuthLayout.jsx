import { motion } from "framer-motion";

export default function AuthLayout({ title, children }) {
  return (
    <div className="auth-bg min-h-screen flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        className="glass-card w-full max-w-md p-8"
      >
        <h2 className="text-2xl font-semibold text-center mb-6">{title}</h2>
        {children}
      </motion.div>
    </div>
  );
}