export default function Body({ children }) {
  return (
    <main class="py-24 md:py-16 px-6 lg:px-16 bg-neutral-faint">

      <ul class="space-y-16 md:space-y-6">
        {children}
      </ul>
    </main>
  )
}
