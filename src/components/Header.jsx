import React, { useContext } from 'react'
import { Link } from 'react-router'
import { Cart } from '../Context-API/Context';
import { darkTheme } from '../Context-API/DarkMode';

export default function Header() {
  const {cart} = useContext(Cart);
const {dark, toggleMode} = useContext(darkTheme);

  return (
    <div className={dark ? "dark" : "light"}>
      <header className="bg-white dark:bg-gray-800">
  <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
    <div className="flex flex-col items-start gap-4 md:flex-row md:items-center md:justify-between">
      <div>
        <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl dark:text-white">Blog Posts</h1>

        <p className="mt-1.5 text-sm text-gray-500 dark:text-gray-300">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure, recusandae.
        </p>
      </div>

      <div className="flex items-center gap-4">
        <Link to={"/"}>
        <button
          className="inline-flex items-center justify-center gap-1.5 rounded border border-gray-200 bg-white px-5 py-3 text-gray-900 transition hover:text-gray-700 focus:outline-none focus:ring"
          type="button"
        >
          <span className="text-sm font-medium"> shop </span>
        </button>
        </Link>

        <Link to={"/cart"}>
        <button
          className="inline-block rounded bg-indigo-600 px-5 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring"
          type="button"
        >
          go to cart {cart.length ? cart.length : ""}
        </button>
        
        </Link>
        <label className="relative flex cursor-pointer flex-wrap items-center gap-2 text-slate-500">
        <input
          className="peer relative h-6 w-12 cursor-pointer appearance-none rounded-xl ring-2 ring-inset ring-slate-300 transition-colors after:absolute after:left-0 after:top-0 after:h-6 after:w-6 after:rounded-full after:bg-white after:ring-2 after:ring-inset after:ring-slate-500 after:transition-all checked:bg-indigo-600checked:ring-indigo-600 checked:after:left-6 checked:after:bg-white checked:after:ring-indigo-600 hover:ring-slate-400 after:hover:ring-slate-600 checked:hover:bg-indigo-600 checked:hover:ring-indigo-600 checked:after:hover:ring-indigo-600 checked:focus:bg-indigo-600 checked:focus:ring-indigo-600 checked:after:focus:ring-indigo-600 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-slate-200 disabled:after:ring-slate-300"
          type="checkbox"
          value=""
          onClick={toggleMode}
        />
        <div className="absolute left-0.5 top-0.5 flex h-5 w-5 items-center justify-center text-slate-500 opacity-100 transition-opacity peer-checked:opacity-0 peer-hover:text-slate-600 peer-focus:text-slate-700">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="h-4 w-4"
          >
            <path d="M14.438 10.148c.19-.425-.321-.787-.748-.601A5.5 5.5 0 0 1 6.453 2.31c.186-.427-.176-.938-.6-.748a6.501 6.501 0 1 0 8.585 8.586Z" />
          </svg>
        </div>
        <div className="absolute left-[1.625rem] top-0.5 flex h-5 w-5 items-center justify-center text-indigo-600 opacity-0 transition-opacity peer-checked:opacity-100 peer-hover:text-indigo-600 peer-focus:text-indigo-600">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="h-4 w-4"
          >
            
            <path d="M8 1a.75.75 0 0 1 .75.75v1.5a.75.75 0 0 1-1.5 0v-1.5A.75.75 0 0 1 8 1ZM10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0ZM12.95 4.11a.75.75 0 1 0-1.06-1.06l-1.062 1.06a.75.75 0 0 0 1.061 1.062l1.06-1.061ZM15 8a.75.75 0 0 1-.75.75h-1.5a.75.75 0 0 1 0-1.5h1.5A.75.75 0 0 1 15 8ZM11.89 12.95a.75.75 0 0 0 1.06-1.06l-1.06-1.062a.75.75 0 0 0-1.062 1.061l1.061 1.06ZM8 12a.75.75 0 0 1 .75.75v1.5a.75.75 0 0 1-1.5 0v-1.5A.75.75 0 0 1 8 12ZM5.172 11.89a.75.75 0 0 0-1.061-1.062L3.05 11.89a.75.75 0 1 0 1.06 1.06l1.06-1.06ZM4 8a.75.75 0 0 1-.75.75h-1.5a.75.75 0 0 1 0-1.5h1.5A.75.75 0 0 1 4 8ZM4.11 5.172A.75.75 0 0 0 5.173 4.11L4.11 3.05a.75.75 0 1 0-1.06 1.06l1.06 1.06Z" />
          </svg>
        </div>

      </label>
      <div className='select-none'>
      <span className={dark ? "text-white" : "text-black"}>{dark ? "Dark" : "Light"}</span>
      </div>
      </div>
      
    </div>
    
  </div>
  
</header>
</div>
  )
}





