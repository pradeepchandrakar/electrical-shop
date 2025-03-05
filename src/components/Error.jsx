import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useRouteError } from "react-router-dom";
function Error() {
  const err =useRouteError();
  console.log(err)
  return (
   <>
    <div className="error-container">
      {/* Animated 404 Text */}
      <motion.h1
        className="error-title"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        {err.status}
        
      </motion.h1>
      <div>{err.statusText}</div>

      {/* Error Message */}
      <motion.p
        className="error-message"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        {err.data}
      </motion.p>

      {/* Animated Image */}
      <motion.img
        src="../../public/images/error.png"
        alt="Error"
        className="error-image"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.8, duration: 0.7 }}
      />

      {/* Home Button */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        <Link to="/" className="error-button">
          Go Home
        </Link>
      </motion.div>
    </div>
   </>
  )
}

export default Error
