import React, { useEffect, useState} from 'react';
 
function WebsiteHealth() {


  const [sessionVariable, setSessionVariable] = useState(
    localStorage.getItem('sessionVariable') || 'default'
  );

  // Update localStorage whenever sessionVariable changes
  useEffect(() => {
    localStorage.setItem('sessionVariable', sessionVariable);
    console.log("Updated Session Variable", sessionVariable);
}, [sessionVariable]);

  // Update sessionVariable when needed
  const updateSessionVariable = (newValue) => {
    setSessionVariable(newValue);
  };
  console.log("Initialized Session Variable", sessionVariable)

  console.log("Homepage Session Vairable", sessionVariable)
  
  return (
    <div>
      <h1>The Website is running</h1>
    </div>
  );
}

export default WebsiteHealth;
