import React, { useEffect, useState} from 'react';
import { Form, Button } from 'react-bootstrap';

import { useParams, useLocation, useNavigate} from 'react-router-dom';
 
function Home() {
  console.log("homepage hit")
  const navigate = useNavigate();

  const [sessionVariable, setSessionVariable] = useState(() => {
    const storedSessionVariable = localStorage.getItem('sessionVariable');
    return storedSessionVariable || 'default';
  });

  // Log the initialized session variable
  console.log('Initialized Session Variable', sessionVariable);

  useEffect(() => {
    console.log('Homepage Session Variable', sessionVariable);
  }, [sessionVariable]);

  const userID = sessionVariable

  const viewRequest =(e)=>{
    e.preventDefault();
    navigate("/changelist/" + userID);
  }

  const createRequest =(e)=>{
    e.preventDefault();
    navigate("/createChangeRequest/" + userID);
  }

  const completedRequest =(e)=>{
    e.preventDefault();
    navigate("/completedRequest");
  }

  if(sessionVariable.toString==="default"){
    return(
      <h1>Please log in</h1>
    )
  }
  else{
    

  return (
    <div>
      <Form>
        <Button variant="secondary" type="submit" onClick={viewRequest}>View All Request</Button>
        <Button variant="secondary" type="submit" onClick={createRequest}>Create New Request</Button>
        <Button variant="secondary" type="submit" onClick={completedRequest}>View Complete Request</Button>
      </Form>
    </div>
  );
  }
}

export default Home;
