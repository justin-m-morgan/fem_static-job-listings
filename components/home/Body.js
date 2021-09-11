import JobCard from "./JobCard"

export default function Body({ addFilter, jobPosts }) {
  return (
    <main className="py-24 md:py-16 px-6 lg:px-16">
      <ul className="max-w-4xl mx-auto space-y-16 mt-8 lg:mt-0 lg:space-y-6">
        {jobPosts.map(job => (
          <li>
          <JobCard key={job.id} job={job} addFilter={addFilter}/>
          </li>
        ))}
        </ul>
    </main>
  )
}
