import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const SearchRecipe = () => {
  return (
    <div className='flex justify-center items-center'>
        <input className='p-2 w-5/12' placeholder='Enter recipe name' />
        <FontAwesomeIcon icon={faSearch} />
    </div>
  )
}

export default SearchRecipe