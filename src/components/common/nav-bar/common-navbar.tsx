'use client';

import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

import { cn } from '@/lib/utils';

const wrapperVariant = {
  visible: {
    opacity: 1,
    y: 0,
  },
  initial: { opacity: 0, y: -75 },
  hidden: { opacity: 0, y: -25 },
};

const CommonNavbar = () => {
  const [isToggle, setIsToggle] = useState(false);

  return (
    <motion.div
      variants={wrapperVariant}
      initial="initial"
      animate="visible"
      transition={{ ease: [0.1, 0.25, 0.3, 1], duration: 0.6 }}
    >
      <nav className="border-gray-200 bg-white dark:bg-gray-900">
        <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between gap-y-2 p-4">
          <div className="flex items-center">
            <Image
              src="/icons/local_project_icon.svg"
              width={40}
              height={40}
              className="mr-3"
              alt="Local Project Management "
            />
            <span className="self-center whitespace-nowrap px-2 text-sm font-semibold dark:text-white md:text-lg">
              My PM Management
            </span>
          </div>
          <motion.button
            onClick={() => setIsToggle(!isToggle)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="ml-3 inline-flex items-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 md:hidden"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="h-6 w-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              ></path>
            </svg>
          </motion.button>
          <AnimatePresence>
            <motion.div
              className={cn('hidden w-full md:block md:w-auto', {
                block: isToggle,
              })}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <ul className="mt-4 flex flex-col rounded-lg border border-gray-100 bg-gray-50 p-4 font-medium dark:border-gray-700 dark:bg-gray-800 md:mt-0 md:flex-row md:space-x-8 md:border-0 md:bg-white md:p-0 md:dark:bg-gray-900">
                <li>
                  <Link
                    href="home"
                    className="block rounded py-2 pl-3 pr-4 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:bg-transparent md:dark:hover:text-blue-500"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="register"
                    className="block rounded py-2 pl-3 pr-4 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:bg-transparent md:dark:hover:text-blue-500"
                  >
                    Register
                  </Link>
                </li>
                <li>
                  <Link
                    href="login"
                    className="block rounded py-2 pl-3 pr-4 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:bg-transparent md:dark:hover:text-blue-500"
                  >
                    Login
                  </Link>
                </li>
              </ul>
            </motion.div>
          </AnimatePresence>
        </div>
      </nav>
    </motion.div>
  );
};

export default CommonNavbar;
