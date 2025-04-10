"use client"
import React from 'react'
import SearchSection from './_components/SearchSection'
import TemplateListSelection from './_components/TemplateListSelection'

function Dashboard() {

    const [userInput, setUserInput] = React.useState<string>('')

  return (
    <div>
      <SearchSection onSearchInput={(value: string)=>setUserInput(value)}/>
      <TemplateListSelection userSearchInput={userInput} />
      </div>
  )
}

export default Dashboard
