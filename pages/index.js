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

export default function Home() {
  const [state, dispatch] = useReducer(filterReducer, initialFilters)

  return (
    <Container>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/images/favicon-32x32.png" />
      </Head>
        <Header filters={state.filters} removeFilter={removeFilter(dispatch)}/>
        <Body>
        <ul className="space-y-16 mt-8 lg:mt-0 lg:space-y-6">
        {jobPosts.map(job => (
          <JobCard key={job.id} job={job} addFilter={addFilter(dispatch)}/>
        ))}
        </ul>
        </Body>
      </Container>


  )
}
