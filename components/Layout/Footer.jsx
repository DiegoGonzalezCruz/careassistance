import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { footer1, footer2, socialNetworks } from './footerItems'
export const Footer = () => {
  return (
    <footer className="footer md:p-10 pb-10 bg-base-200 flex flex-col text-white ">
      <div className=" w-full">
        <div className="relative w-24 h-24 ">
          <Image
            src="/images/Logo_Care_Assistance.svg"
            layout="fill"
            className=""
            alt="footer logo"
          />
        </div>
      </div>
      <div className="w-full border-2 border-white"></div>
      <div className="flex md:flex-row flex-col gap-10 md:items-start pl-4 justify-between w-full">
        <div>
          <span className="footer-title">Servicios</span>

          {footer1.map((link) => {
            return (
              <Link href={link.href} passHref key={link.title}>
                <p className="link link-hover">{link.title}</p>
              </Link>
            )
          })}
        </div>
        <div>
          <span className="footer-title">Legales</span>
          {footer2.map((link) => {
            return (
              <Link href={link.href} passHref key={link.title}>
                <p className="link link-hover">{link.title}</p>
              </Link>
            )
          })}
        </div>
        <div>
          <span className="footer-title">Social</span>
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
      </div>
    </footer>
  )
}
