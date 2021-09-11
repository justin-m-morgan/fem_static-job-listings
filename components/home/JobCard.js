import classNames from "classnames"

export default function JobCard({ job, addFilter }) {
  return (
    <div className={classNames(
      "w-full",
      "bg-neutral-faint",
      "relative lg:flex lg:justify-between",
      "rounded-lg shadow-primaryGlow"
    )}>
      <FlourishNewJob job={job} />

      <div className={"px-6 pt-10 pb-4 lg:pb-10 lg:flex lg:justify-between w-full"}>
        <div className="lg:flex lg:space-x-6 lg:items-center">
          <CompanyImage job={job} />
          <JobDescription job={job} />
        </div>
        <hr className="border-gray-400 my-4 lg:hidden" />
        <div className="lg:ml-auto flex flex-wrap justify-start lg:items-start lg:justify-end text-primary-dark font-bold">
          <DetailPill key={job.role} filter_key="role" text={job.role} addFilter={addFilter} />
          <DetailPill key={job.level} filter_key="level" text={job.level} addFilter={addFilter} />
          {job.languages.map(language =>
            <DetailPill key={language} filter_key="languages" text={language} addFilter={addFilter} />
          )}
          {job.tools.map(tool =>
          <DetailPill key={tool} filter_key="tools" text={tool} addFilter={addFilter} />
          )}

        </div>
      </div>
    </div>
  )
}

function FlourishNewJob({job}) {
  return (
  <div className="rounded-lg overflow-hidden absolute top-0 left-0 bottom-0 w-3">
        { job.new && <div className="absolute -left-2 w-3 top-0 bottom-0 bg-primary-dark"></div>}
  </div>)
}

function JobDescription({ job }) {
  return (
    <div>
      <div className="flex items-center space-x-2 font-bold">
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
    <img src={job.logo} alt="{job.company} Logo" className="absolute lg:relative -top-8 lg:top-0 h-16 lg:h-20" />
  )
}

function CompanyName({ job }) {
  return (
    <p className="text-primary-dark text-md pr-4 text-sm">{job.company}</p>
  )
}

function TagPill({ text, color_class }) {
  return (
    <span className={classNames(
      "align-middle",
      "px-2 py-1",
      "rounded-full",
      "font-bold uppercase text-gray-50 text-xs",
      color_class
    )}
    >{text}</span>
  )
}
function DetailPill({ filter_key, text, addFilter }) {
  return (
    <button onClick={() => addFilter(filter_key, text)}>
    <span className={classNames(
      "inline-block",
      "px-2 py-1",
      "mr-3 mb-3",
      "bg-primary-dark bg-opacity-10 hover:bg-primary-dark hover:text-neutral-faint",
      "rounded",
      "font-bold")}
      >{text}</span>
    </button>
  )
}

function JobPosition({ job }) {
  return (
    <a href="#" className={classNames(
      "inline-block",
      "py-2",
      "font-bold tracking-wide text-md hover:text-primary-dark"
      )}>{job.position}</a>
  )
}
function JobDetails({ job }) {
  return (

    <div className="flex space-x-2 text-gray-400 text-sm">
      <p>{job.postedAt}</p>
      <span>&bull;</span>
      <p>{job.contract}</p>
      <span>&bull;</span>
      <p >{job.location}</p>
    </div>
  )
}
