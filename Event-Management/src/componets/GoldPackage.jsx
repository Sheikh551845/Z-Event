import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function GoldPackage() {
  return (
    <div>
     <div className="relative flex w-full max-w-[20rem] flex-col rounded-xl bg-gradient-to-tr from-yellow-400 to-yellow-200 bg-clip-border p-8 text-black shadow-md shadow-pink-500/40">
  <div className="relative m-0 mb-8 overflow-hidden rounded-none border-b border-white/10 bg-transparent bg-clip-border pb-8 text-center text-gray-700 shadow-none">
    <p className="block font-sans text-3xl font-bold uppercase leading-normal text-black antialiased">
      GOLD
    </p>
    <h1 className="mt-6 flex justify-center gap-1 font-sans text-7xl font-normal tracking-normal text-white antialiased">
      <span className="mt-2 text-4xl">$</span>300
      <span className="self-end text-4xl">/Event</span>
    </h1>
  </div>
  <div className="p-0">
    <ul className="flex flex-col gap-4">
      <li className="flex items-center gap-4">
        <span className="rounded-full border border-white/20 bg-white/20 p-1 bg-green-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            aria-hidden="true"
            className="h-3 w-3"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 12.75l6 6 9-13.5"
            ></path>
          </svg>
        </span>
        <p className="block font-sans text-base font-normal leading-relaxed text-inherit antialiased">
          15 team members
        </p>
      </li>
      <li className="flex items-center gap-4">
        <span className="rounded-full border border-white/20 bg-white/20 p-1 bg-green-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            aria-hidden="true"
            className="h-3 w-3"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 12.75l6 6 9-13.5"
            ></path>
          </svg>
        </span>
        <p className="block font-sans text-base font-normal leading-relaxed text-inherit antialiased">
          13+ inner Events
        </p>
      </li>
      <li className="flex items-center gap-4">
        <span className="rounded-full border border-white/20 bg-white/20 p-1 bg-green-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            aria-hidden="true"
            className="h-3 w-3"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 12.75l6 6 9-13.5"
            ></path>
          </svg>
        </span>
        <p className="block font-sans text-base font-normal leading-relaxed text-inherit antialiased">
          40+ Food Items
        </p>
      </li>
      <li className="flex items-center gap-4">
        <span className="rounded-full border border-white/20 bg-white/20 p-1 bg-green-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            aria-hidden="true"
            className="h-3 w-3"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 12.75l6 6 9-13.5"
            ></path>
          </svg>
        </span>
        <p className="block font-sans text-base font-normal leading-relaxed text-inherit antialiased">
          24h service
        </p>
      </li>
      <li className="flex items-center gap-4">
        <span className="rounded-full border border-white/20 bg-white/20 p-1 bg-green-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            aria-hidden="true"
            className="h-3 w-3"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 12.75l6 6 9-13.5"
            ></path>
          </svg>
        </span>
        <p className="block font-sans text-base font-normal leading-relaxed text-inherit antialiased">
          5% Discount on promo-code
        </p>
      </li>
    </ul>
  </div>
  <div className="mt-12 p-0">
  <NavLink to="/AboutUs"><button
      className="block w-full select-none rounded-lg bg-white py-3.5 px-7 text-center align-middle font-sans text-sm font-bold uppercase text-black shadow-md shadow-blue-gray-500/10 transition-all hover:scale-[1.02] hover:shadow-lg hover:shadow-blue-gray-500/20 focus:scale-[1.02] focus:opacity-[0.85] focus:shadow-none active:scale-100 active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
      type="button"
      data-ripple-dark="true"
    >
      Contact US
    </button></NavLink> 
  </div>
</div>
    </div>
  )
}
