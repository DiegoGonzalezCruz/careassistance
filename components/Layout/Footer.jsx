import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { footer1, footer2, socialNetworks } from './footerItems'
export const Footer = () => {
  return (
    <footer className=" footer md:p-10 pb-10 bg-base-200 flex flex-row text-white w-screen h-[50vh] min-h-[40vh] overflow-hidden">
      <div className="logo w-1/4 h-full flex flex-col items-center  relative ">
        {/* //Forma */}
        <div className="  forma max-w-full min-w-[20rem] w-[30rem] absolute -translate-x-1/2 -rotate-45 origin-top-right shadow-xl rounded-full">
          <div className=" bg-primary  rounded-full min-w-[10rem]  h-6 -translate-y-full -translate-x-1/3"></div>
          <div className="border-primary  rounded-full w-[25rem] h-24 flex items-center justify-center">
            <div className="border-accent bg-accent border-4 rounded-full w-[10rem] h-6 translate-y-11 ">
              <div className="border-accent bg-accent rounded-full w-[5rem] h-1 translate-y-8 translate-x-10"></div>
              <div className="border-primary bg-primary rounded-full w-[3rem] h-1 -translate-y-5 translate-x-20"></div>
            </div>
          </div>
        </div>
        <div className=" w-24 h-24 relative ">
          <Image
            src="/images/Logo_Care_Assistance.svg"
            layout="fill"
            className=""
            alt="footer logo"
          />
        </div>
      </div>
      {/* <div className="w-3 border-2 border-white self-center"></div> */}
      <div className=" links w-2/4 flex flex-col gap-10 md:items-start px-10 justify-between h-full ">
        <div className="wrapper  h-full flex flex-col items-start justify-between">
          {footer1.map((link) => {
            return (
              <Link href={link.href} passHref key={link.title}>
                <div className="flex flex-row gap-10 justify-start">
                  <p className="link link-hover hover:underline hover:opacity-100 opacity-50 text-base">
                    {link.title}
                  </p>
                </div>
              </Link>
            )
          })}
        </div>
        <div className="legales flex flex-row  items-center justify-between  w-full">
          {footer2.map((link) => {
            return (
              <Link href={link.href} passHref key={link.title}>
                <p className="link link-hover text-xs font-bold text-accent">
                  {link.title}
                </p>
              </Link>
            )
          })}
        </div>
      </div>

      <div className="social w-1/4  flex flex-col justify-center items-center self-end">
        <div className="relative  w-full h-20">
          <Image
            src={'/img/home/massanos.svg'}
            layout="fill"
            objectFit="contain"
          />
        </div>
        <div className="grid grid-flow-col gap-4">
          <div className="cursor-pointer">
            <Link passHref href={'https://twitter.com'}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
              </svg>
            </Link>
          </div>
          <div className="cursor-pointer">
            <Link passHref href={'https://facebook.com'}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
