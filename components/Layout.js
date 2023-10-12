import { motion } from "framer-motion";

export default function Layout({ children }) {
    return (
        <>
            <div
                className='flex flex-col h-screen '
            >

                <motion.div
                    className='relative flex-grow isolate'
                    initial="initial"
                    animate="animate"
                    variants={{
                        initial: {
                            opacity: 0,
                        },
                        animate: {
                            opacity: 1,
                        },
                    }}
                >
                    <main className='isolate h-full dotgrid '>{children}</main>
                </motion.div>
            </div>

        </>
    )
}

