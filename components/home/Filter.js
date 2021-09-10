

export default function Filter() {
    return (
        <div className="rounded overflow-hidden mr-4 flex items-center space-x-2">
            <span className="text-primary-dark font-bold" x-text="filter[2]"></span>
            <button
                className="px-3 py-1 bg-primary-dark text-neutral-faint hover:bg-neutral-dark transition-colors duration-100"
            //   @click="applied_filters = applied_filters.filter(filter => k != filter[0] && v != filter[1])"
            >
                <span className="inline-block transform scale-150 origin-center translate-y-[2px]">&#10006;</span>
            </button>
        </div>
    )
}