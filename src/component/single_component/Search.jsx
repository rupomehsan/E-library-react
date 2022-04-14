import React from 'react'

function Search () {
  return (
    <>
      <form action='/action_page.php'>
        <input
          type='text'
          placeholder='Search..'
          name='search'
          className='search'
				/>
      </form>
    </>
  )
}

export default Search
