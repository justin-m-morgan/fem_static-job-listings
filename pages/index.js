import { useReducer } from 'react'

import Head from 'next/head'

import jobPosts from "../jobPosts.json"

import Container from "../components/home/Container"
import Header from "../components/home/Header"
import Body from "../components/home/Body"
import JobCard from "../components/home/JobCard"
import Filter from "../components/home/Filter"


const initialFilters = {filters: []};

function addUniqueFilter(filters, new_filter) {
  let new_filters = new Set([...filters])
  new_filters.add(new_filter)
  return [...new_filters]
}


function filterReducer(state, action) {
  switch (action.type) {
    case 'add-filter':
      return {filters: addUniqueFilter(state.filters, action.payload)};
    case 'remove-filter':
      return {filters: state.filters.filter(f => f != action.payload)};
    case 'clear-filters':
      return {filters: []};
    default:
      throw new Error();
  }
}

function addFilter(dispatch) {
  return function(key, value) {
    dispatch({type: "add-filter", payload: `${key}|${value}`})
  }
}
function removeFilter(dispatch) {
  return function(filterString) {
    dispatch({type: "remove-filter", payload: filterString})
  }
}
function clearFilters(dispatch) {
  return function() {
    console.log("Clicked Clear")
    dispatch({type: "clear-filters"})
  }
}

function filter_jobs(jobs, filters) {
  return filters.length ? jobs.filter(job => job_passes_filters(job, filters)) : jobs
}

// "Or" filter
// function job_passes_filters(job, filters) {
//   return filters.some(filter_applies(job))
// }

// "And" filter
function job_passes_filters(job, filters) {
  return filters.every(filter_applies(job))
}

function filter_applies(job) {
  return function(filter) {
    let {key, value} = mapFilterToObject(filter)
    let job_value = job[key]
    if (Array.isArray(job_value)) {
      return job_value.includes(value)
    } else {
      return job_value == value
    }
  }
}

function mapFilterToObject(filterString) {
  let [key, value] = filterString.split("|")
  return {key, value}
}

export default function Home() {
  const [state, dispatch] = useReducer(filterReducer, initialFilters)

  return (
    <Container>
      <Head>
        <title>Jobarama</title>
        <link rel="icon" href="/images/favicon-32x32.png" />
      </Head>
        <Header filters={state.filters} removeFilter={removeFilter(dispatch)} clearFilters={clearFilters(dispatch)}/>
        <Body>
        <ul className="space-y-16 mt-8 lg:mt-0 lg:space-y-6">
        {filter_jobs(jobPosts, state.filters).map(job => (
          <li>
          <JobCard key={job.id} job={job} addFilter={addFilter(dispatch)}/>
          </li>
        ))}
        </ul>
        </Body>
      </Container>


  )
}
