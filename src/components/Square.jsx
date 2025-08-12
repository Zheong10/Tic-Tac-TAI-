import React from "react";
import { motion } from "framer-motion";

const Square = ({ value, onClick }) => {
  return (
    //motion.button is used to animate the button
    <motion.button
      className="w-[90px] h-[90px] bg-[#1E293B] flex items-center justify-center font-bold text-3xl cursor-pointer hover:bg-[#374151] transition-colors duration-200"
      onClick={onClick}
      whileTap={{ scale: 0.9 }}
    >
      {value}
    </motion.button>
  );
};

export default Square;
