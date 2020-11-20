import React from 'react';

import Table from '../components/SubjectTable';

function Home(){
  return(
    <div id="home-page">
      <div className="content-wrapper">
        <h1>Me nota!</h1>
        <div className="table-container">
          <Table />
        </div>
      </div>
    </div>
  )
}
export default Home;