export default function Body({ children }) {
  return (
    <main className="py-24 md:py-16 px-6 lg:px-16">

      <ul className="space-y-16 md:space-y-6">
        {children}
      </ul>
    </main>
  )
}
