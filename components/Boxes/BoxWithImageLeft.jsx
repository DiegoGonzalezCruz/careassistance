import Image from 'next/image'
import { motion } from 'framer-motion'

export const BoxWithImageLeft = ({
  image,
  title,
  text,
  imagePosition,
  button = ''
}) => {
  const iconVariants = {
    onscreen: {
      x: 0,
      opacity: 1,
      transition: {
        type: 'tween'
      }
    },
    offscreen: {
      opacity: 0,
      x: -100
    }
  }

  return (
    <div className="bg-white flex overflow-hidden min-h-[100vh] w-screen">
      <div className="flex flex-col md:flex-row w-full items-center justify-center debug1">
        <motion.div
          whileInView="onscreen"
          viewport={{ once: false, amount: 0.3 }}
          initial="offscreen"
          variants={iconVariants}
          className="relative h-56 lg:h-full w-full -translate-x-14 debug2 flex items-center"
        >
          <div className="relative h-1/2 w-full ">
            <Image
              src={image}
              className="max-w-sm shadow-2xl rounded rounded-r-3xl"
              layout="fill"
              objectFit="contain"
              alt={title}
            />
          </div>
        </motion.div>
        <motion.div
          variants={iconVariants}
          whileInView="onscreen"
          viewport={{ once: false, amount: 0.3 }}
          initial="offscreen"
          className=" text-primary w-full h-full  mr-5 px-5 flex flex-col items-center justify-center "
        >
          <h2 className="font-bold text-primary">{title}</h2>
          <p className="py-6">{text}</p>
          {/* {button && <button className="btn btn-primary">{'button'}</button>} */}
        </motion.div>
      </div>
    </div>
  )
}
