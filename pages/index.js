import { useState } from 'react'

import Head from 'next/head'

import jobPosts from "../jobPosts.json"

import Container from "../components/home/Container"
import Header from "../components/home/Header"
import Body from "../components/home/Body"
import JobCard from "../components/home/JobCard"
import Filter from "../components/home/Filter"


export default function Home() {
  const [filters, setFilters] = useState([])

  return (
    <Container>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/images/favicon-32x32.png" />
      </Head>
        <Header />
        <Body>
        <ul className="space-y-16 md:space-y-6">
        {jobPosts.map(job => (
          <JobCard key={job.id} job={job} />
        ))}
        </ul>
        </Body>
      </Container>


  )
}
