import { motion } from "framer-motion";

const HomePageAnimation = () => {
  return (
    <div className="absolute top-0 left-0 h-full w-full overflow-hidden">
      {/* Segunda manzana */}
      <motion.div
        initial={{ x: 300, y: 300, rotate: 20 }}
        animate={{
          x: [300, 250, 300, 350, 300],
          y: [300, 270, 300, 330, 300],
          rotate: [20, 0, -20, 0, 20],
          transition: {
            duration: 20,
            repeat: Infinity,
            repeatType: "loop",
          },
        }}
        className="absolute w-16 h-16 z-50"
      >
        <img src="../../public/img/apple.png" alt="Apple" />
      </motion.div>

      <motion.div
        initial={{ x: 800, y: 600, rotate: -15 }}
        animate={{
          x: [900, 850, 800, 750, 800],
          y: [600, 570, 600, 630, 600],
          rotate: [-15, 0, 15, 0, -15],
          transition: {
            duration: 40,
            repeat: Infinity,
            repeatType: "loop",
          },
        }}
        className="absolute w-16 h-16 z-50"
      >
        <img src="../../public/img/apple.png" alt="Apple" />
      </motion.div>
    </div>
  );
};

export default HomePageAnimation;
