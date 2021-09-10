// {% if job.featured %}border-transparent border-l-primary-dark border-4  {% endif %}

export default function JobCard({ job }) {
  return (
    <li className="relative rounded-lg shadow-primaryGlow lg:flex lg:justify-between">
      <div className={`px-6 pt-10 pb-4 lg:pb-10 lg:flex lg:justify-between w-full ${job.new ? "border-transparent border-l-primary-dark border-4": "" }`}>
        <div className="lg:flex lg:space-x-6 lg:items-center">
          <CompanyImage job={job} />
          <JobDescription job={job} />
        </div>
        <hr class="border-gray-400 my-4 lg:hidden" />
        <div class="lg:ml-auto flex flex-wrap justify-start lg:items-start lg:justify-end text-primary-dark font-bold">
          <DetailPill text={job.role} />
          <DetailPill text={job.level} />
          {job.languages.map(language => <DetailPill text={language} />)}
          {job.tools.map(tool => <DetailPill text={tool} />)}
        </div>
      </div>
    </li>
  )
}

function JobDescription({ job }) {
  return (
    <div>
      <div class="flex items-center space-x-2 font-bold">
        <CompanyName job={job} />
        {job.new && <TagPill key="new" value={true} text="New!" color_class="bg-primary-dark" />}
        {job.featured && <TagPill key="featured" value={true} text="Featured" color_class="bg-neutral-dark" />}
      </div>

      <JobPosition job={job} />
      <JobDetails job={job} />
    </div>
  )
}

function CompanyImage({ job }) {
  return (
    <img src={job.logo} alt="{job.company} Logo" className="absolute md:relative -top-8 md:top-0 h-16 md:h-20" />
  )
}

function CompanyName({ job }) {
  return (
    <p class="text-primary-dark text-md pr-4 text-sm">{job.company}</p>
  )
}

function TagPill({ text, color_class }) {
  return (
    <button >
      <span className={"inline-block font-bold uppercase text-gray-50 rounded-full px-3 py-1 text-xs " + color_class}>{text}</span>
    </button>
  )
}
function DetailPill({ text }) {
  return (
    <button>
      <span class="inline-block px-2 py-1 font-bold bg-primary-dark bg-opacity-10 rounded mr-3 mb-3">{text}</span>
    </button>
  )
}

function JobPosition({ job }) {
  return (
    <p class="font-bold py-2 text-md">{job.position}</p>
  )
}
function JobDetails({ job }) {
  return (

    <div class="flex space-x-2 text-gray-400 font-semibold text-sm">
      <p>{job.postedAt}</p>
      <span>&bull;</span>
      <p>{job.contract}</p>
      <span>&bull;</span>
      <p >{job.location}</p>
    </div>
  )
}
