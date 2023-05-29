



import React, { useEffect, useState } from 'react';

const VoteCounts = () => {
  const [voters, setVoters] = useState([]);

  useEffect(() => {
    fetch('/api/v1/auth/votecount') // Replace with your API endpoint
      .then(response => response.json())
      .then(data => {
        if (data.success) {
          setVoters(data.voters);
        }
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <h2>Vote Counts</h2>
      {voters && voters.length > 0 ? (
        voters.map(voters => (
          <div key={voters._id}>
            <p>Candidate: {voters._id}</p>
            <p>Vote Count: {voters.count}</p>
          </div>
        ))
      ) : (
        <p>No candidates found.</p>
      )}
    </div>
  );
};
export default VoteCounts;


 
