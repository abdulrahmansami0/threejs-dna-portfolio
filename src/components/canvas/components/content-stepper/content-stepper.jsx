import { AnimatePresence, motion } from "framer-motion";

const ContentStepper = ({ steps }) => {
  const renderContent = () => {
    switch (steps) {
      case 0:
        return (
          <div
            style={{
              position: "absolute",
              bottom: "10%",
              right: "20%",
              transform: "translate(-50%, -50%)",
            }}
          >
            <h1>Step 1</h1>
            <p>Some content for Step 1.</p>
          </div>
        );
      case 1:
        return (
          <motion.div
            key={steps}
            style={{
              position: "absolute",
              bottom: "10%",
              right: "-50%",
              transform: "translate(-50%, -50%)",
            }}
          >
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              style={{
                fontSize: "2rem",
              }}
            >
              Meet Our Team
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, delay: 0.2 }}
              style={{
                width: "50%",
                fontWeight: 300,
              }}
            >
              We are a team of dedicated professionals with expertise in
              software development, design, and innovation.
            </motion.p>
          </motion.div>
        );
      case 2:
        return (
          <motion.div
            key={steps}
            style={{
              position: "absolute",
              bottom: "10%",
              right: "-40%",
              transform: "translate(-50%, -50%)",
            }}
          >
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              style={{
                fontSize: "2.3rem",
              }}
            >
              Features
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, delay: 0.2 }}
              style={{
                width: "50%",
                fontWeight: 300,
              }}
            >
              Our software includes advanced features designed to enhance user
              experience and streamline workflows.
            </motion.p>
          </motion.div>
        );
      case 3:
        return (
          <motion.div
            key={steps}
            style={{
              position: "absolute",
              bottom: "10%",
              right: "13%",
              transform: "translate(-50%, -50%)",
            }}
          >
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              style={{
                fontSize: "2.3rem",
              }}
            >
              About Our Team
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, delay: 0.2 }}
              style={{
                width: "50%",
                fontWeight: 300,
              }}
            >
              Our team use advanced technologies to enhance user experience and
              streamline workflows.
            </motion.p>
          </motion.div>
        );
      default:
        return (
          <div
            style={{
              position: "absolute",
              bottom: "10%",
              right: "20%",
              transform: "translate(-50%, -50%)",
            }}
          >
            <h1>Unknown step</h1>
            <p>There is no information available for this step.</p>
          </div>
        );
    }
  };

  return (
    <motion.div>
      <AnimatePresence mode="wait">{renderContent()}</AnimatePresence>
    </motion.div>
  );
};

export default ContentStepper;
