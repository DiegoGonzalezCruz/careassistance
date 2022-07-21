import Image from 'next/image'
import { Desktop } from './NavBar/Desktop'
import { Mobile } from './NavBar/Mobile'
// import Logo from '../../public/images/Logo_Care_Assistance.svg'

export const NavBar = () => {
  return (
    <div className="h-[10vh] w-screen flex flex-row sticky top-0 z-50 bg-white">
      <div className="h-full w-3/4 mx-auto flex-row flex ">
        <div className="relative w-20 h-full mx-4 ">
          <Image
            src="/img/logo/logo.svg"
            layout="fill"
            className=""
            alt="logo care assistance"
          />
        </div>

        <Desktop />

        <Mobile />
      </div>
    </div>
  )
}
