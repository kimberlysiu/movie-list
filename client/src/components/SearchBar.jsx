import React from 'react';

var SearchBar = (props) => (
  <form
    id='form'>
    <input
      type='text'
      value={props.state}
      onChange={props.handleChange}
      placeholder='Search...'
    />
    <button onClick={props.handleSubmit}
      type='button'
      name='Submit'>Go!</button>
    {/* <input
      type="search"
      id="query"
      name="q"
      placeholder="Search..."
    ></input>
    <button>Go!</button> */}
  </form>
);

export default SearchBar;