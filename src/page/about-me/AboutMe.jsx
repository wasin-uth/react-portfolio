import profile from "../../assets/images/Profile.jpg"
import { motion } from "framer-motion"
import "./about-me.scss"

const animation = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
    transition: { duration: 1 }
}

const AboutMe = () => {

    return (
        <div id="about-me">
            <motion.img
                className="profile"
                src={profile}
                alt="profile"
                variants={animation}
                initial="initial"
                animate="animate"
                exit="exit"
                transition="transition"
            >
            </motion.img>
            <motion.span
                className="nickname"
                initial={{ opacity: 0, y: -1000 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 1000 }}
                transition={{ duration: 2 }}
            >
                KOK
            </motion.span>
            <motion.div
                className="card"
                initial={{ opacity: 0, y: 1000 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -1000 }}
                transition={{ duration: 2 }}
            >
                <span>Hi!</span>
                <span>I'm Wasin</span>
            </motion.div>
            <motion.div
                className="contents"
                initial={{ opacity: 0, x: 620, y: 100 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 2, delay: 2 }}
            >
                <h1>Front-end Developer</h1>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem atque saepe quas assumenda incidunt, ex quia id magnam iusto eveniet aliquid totam maiores enim voluptatum labore odio et, veniam earum?
            </motion.div>
        </div>
    )
}

export default AboutMe