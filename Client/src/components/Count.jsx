"use client"

import { animate, motion, useMotionValue, useTransform } from "framer-motion"
import { useEffect } from "react"

const Count = ({ target = 520, duration = 5 }) => {
    const count = useMotionValue(0)
    const rounded = useTransform(() => Math.round(count.get()))

    useEffect(() => {
        const controls = animate(count, target, { duration })
        return () => controls.stop()
    }, [count, target, duration])

    return <motion.pre style={text}>{rounded}</motion.pre>
}

export default Count

/**
 * ==============   Styles   ================
 */
const text = {
    fontSize: 84,
    color: "#000000",
    fontWeight: 200,
}
