import { useState } from "react"

import Filter from "./Filter"

export default function Header({ children }) {

  return (
    <header className="px-6 lg:px-16 bg-header-mobile lg:bg-header-desktop bg-cover bg-primary-dark min-h-[150px] flex flex-col justify-end">
      <aside className="bg-neutral-light rounded-lg shadow-primaryGlow py-6 px-12 pl-6 flex transform translate-y-8">
        {children}
        <button className="ml-auto text-primary-dark underline font-bold">Clear</button>
      </aside>
    </header>
  )
}

