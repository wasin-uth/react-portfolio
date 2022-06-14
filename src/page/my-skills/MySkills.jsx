import axios from "axios"
import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import "./my-skills.scss"

const MySkills = () => {
    const [mySkills, setMySkills] = useState([])

    useEffect(() => {
        axios.get("https://gitconnected.com/v1/portfolio/wasin-uth")
            .then((res) => setMySkills(res.data))
            .catch((err) => console.log(err))
    }, [])

    return (
        <div id="my-skills">
            {mySkills.skills?.map((item, i) => (
                <motion.div
                    className={item.name}
                    key={i}
                    initial={{ opacity: 0, y: -1000 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 1000 }}
                    transition={{ duration: 1 }}
                >
                    {item.name}
                </motion.div>
            ))}
        </div>
    )
}

export default MySkills