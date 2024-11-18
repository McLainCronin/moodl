import React from 'react'
import { Flamenco } from "next/font/google";

const fugaz = Flamenco({ subsets: ["latin"], weight: ['400'] });

export default function Button(props) {
    const { text, dark, full, clickHandler } = props
    return (
      <button onClick={clickHandler} className={'rounded-full overflow-hidden duration-200 hover:scale-105 hover:opacity-100 opacity-90 border-2 border-solid border-[#ff74a2] ' + (dark ? ' text-white bg-[#ef447d]' : ' text-[#ef447d]') + (full ? ' grid place-items-center w-full ' : ' ')}>
          <p className={'px-6 sm:px-10 whitespace-nowrap py-2 sm:py-3 ' + fugaz.className}>
              {text}
          </p>
      </button>
    )
}
