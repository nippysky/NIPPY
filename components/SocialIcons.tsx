import {
  FaTwitter,
  FaLinkedinIn,
  FaGithub,
  FaBehance,
  FaYoutube,
} from "react-icons/fa";
import { GrMail } from "react-icons/gr";
import Link from "next/link";
import { motion } from "framer-motion";

export default function SocialIcons() {
  return (
    <div className="w-full lg:w-1/2 flex gap-8 my-10 lg:my-0 ">
      {/* Twitter */}
      <motion.div
        whileHover={{
          scale: 1.1,
          transition: { duration: 0.1 },
        }}
        className="text-royal dark:text-gold hover:text-black dark:hover:text-white"
      >
        <Link
          target="_blank"
          rel="noreferrer"
          href={"https://twitter.com/nippysky"}
        >
          <FaTwitter size={23} />
        </Link>
      </motion.div>

      {/* LinkedIn */}
      <motion.div
        whileHover={{
          scale: 1.1,
          transition: { duration: 0.1 },
        }}
        className="text-royal dark:text-gold hover:text-black dark:hover:text-white"
      >
        <Link
          target="_blank"
          rel="noreferrer"
          href={"https://www.linkedin.com/in/nippysky"}
        >
          <FaLinkedinIn size={23} />
        </Link>
      </motion.div>

      {/* Github */}
      <motion.div
        whileHover={{
          scale: 1.1,
          transition: { duration: 0.1 },
        }}
        className="text-royal dark:text-gold hover:text-black dark:hover:text-white"
      >
        <Link
          target="_blank"
          rel="noreferrer"
          href={"https://github.com/nippysky"}
        >
          <FaGithub size={23} />
        </Link>
      </motion.div>

      {/* Behance */}
      <motion.div
        whileHover={{
          scale: 1.1,
          transition: { duration: 0.1 },
        }}
        className="text-royal dark:text-gold hover:text-black dark:hover:text-white"
      >
        <Link
          target="_blank"
          rel="noreferrer"
          href={"https://www.behance.net/nippysky"}
        >
          <FaBehance size={23} />
        </Link>
      </motion.div>

      {/* Youtube */}
      <motion.div
        whileHover={{
          scale: 1.1,
          transition: { duration: 0.1 },
        }}
        className="text-royal dark:text-gold hover:text-black dark:hover:text-white"
      >
        <Link
          target="_blank"
          rel="noreferrer"
          href={"https://www.youtube.com/channel/UC6ANuPxrIeOBgGNYVAQ5GRg"}
        >
          <FaYoutube size={23} />
        </Link>
      </motion.div>

      {/* Email */}
      <motion.div
        whileHover={{
          scale: 1.1,
          transition: { duration: 0.1 },
        }}
        className="text-royal dark:text-gold hover:text-black dark:hover:text-white"
      >
        <Link href={"mailto:nsinfo247@gmail.com"}>
          <GrMail size={23} />
        </Link>
      </motion.div>
    </div>
  );
}
