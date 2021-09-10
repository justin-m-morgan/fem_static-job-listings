import { useState } from "react"

import Filter from "./Filter"

export default function Header({ filters, removeFilter }) {
  let filterObjects = filters.map(mapFilterToObject)

  return (
    <header className="px-6 lg:px-16 bg-header-mobile lg:bg-header-desktop bg-cover bg-primary-dark min-h-[150px] flex flex-col justify-end">
      <aside className="bg-neutral-light rounded-lg shadow-primaryGlow py-6 px-12 pl-6 flex transform translate-y-8">
        {filters.map((filter) => <FilterButton label={getFilterLabel(filter)} filter={filter} removeFilter={removeFilter}/>) }
        <button className="ml-auto text-primary-dark underline font-bold">Clear</button>
      </aside>
    </header>
  )
}


function FilterButton({label, filter, removeFilter}) {
  return (
    <div className="rounded overflow-hidden mr-4 flex items-center space-x-2">
    <span className="text-primary-dark font-bold">{label}</span>
    <button onClick={() => removeFilter(filter)} className="px-3 py-1 bg-primary-dark text-neutral-faint hover:bg-neutral-dark transition-colors duration-100">
      <span className="inline-block transform scale-150 origin-center translate-y-[2px]">&#10006;</span>
    </button>
  </div>
  )
}

function getFilterLabel(filterString) {
  return mapFilterToObject(filterString)["value"]
}

function mapFilterToObject(filterString) {
  let [key, value] = filterString.split("|")
  return {key, value}
}
