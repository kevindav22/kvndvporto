// src/components/loading/MainLoading.jsx
import { useEffect } from 'react';
import { motion } from 'framer-motion';

const MainLoading = ({ onFinish }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onFinish();
    }, 1500);
    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-[#0E1C2D] z-[9999]">
      <div className="flex space-x-3">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="w-4 h-4 md:w-5 md:h-5 bg-[#C4A77D] rounded-full"
            animate={{ y: [0, -10, 0] }}
            transition={{
              delay: i * 0.2,
              repeat: Infinity,
              duration: 0.6,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default MainLoading;
