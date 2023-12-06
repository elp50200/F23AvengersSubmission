import { useEffect, useState } from "react";
import { Form, Button } from 'react-bootstrap';
import { useParams, useNavigate} from 'react-router-dom';

function SingleChangeRequest() {

    const { changeNumber } = useParams();
    const { userID } = useParams();
    const navigate = useNavigate();

    const [jsonData, setjsonData] = useState([]);

    

    const getjsonData = async () => {
        try {
            const response = await fetch("http://localhost:8080/viewOneChangeRequest/"+changeNumber);

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const json = await response.json();
            setjsonData(json);
            console.log(json);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    useEffect(() => {
        getjsonData();
    }, []);

    const denied =(e)=>{
        e.preventDefault();
        try {
            const response =  fetch('http://localhost:8080/updateStatus/'+jsonData.changeNumber+'/denied', {
                method: 'POST',
                headers: {
                'Content-Type': 'application/json',
                }
            });
            navigate('/');
        } catch (error) {
        console.error('An error occurred:', error);
        alert('Failed to update status');
        }
          
      }
  
      const approved =(e)=>{
        e.preventDefault();
        try {
            const response =  fetch('http://localhost:8080/updateStatus/'+jsonData.changeNumber+'/approved', {
                method: 'POST',
                headers: {
                'Content-Type': 'application/json',
                }
                
            });
            navigate('/');
        } catch (error) {
                console.error('An error occurred:', error);
                alert('Failed to update status');
            }
      }

      const returnToList =(e)=>{
        e.preventDefault();
        try {
            
            navigate("/changelist/" + userID);
        } catch (error) {
                console.error('An error occurred:', error);
                alert('Failed to update status');
            }
      }



      console.log(jsonData.status)
      console.log("User ID: ",userID)
      console.log("JSON User ID: ", jsonData.user?.userID)
      if(userID.toString()===jsonData.user?.userID.toString() ||jsonData.status==="completed"||jsonData.status==="denied")
      {
        console.log("User is looking at own request")
        return (
            <div>
            <Form>
            <table style={{ width: '100%', borderSpacing: '100px' }}>
                <tbody>
                <tr>
                    <td>Change Number {jsonData.changeNumber}</td>
                    <td>Requester Name: {jsonData.user?.fname+" "+jsonData.user?.lname}</td>
                </tr>
                <tr>
                    <td>Application ID: {jsonData.applicationID}</td>
                    <td>Reason Number: {jsonData.reasonNumber}</td>
                </tr>
                <tr>
                    <td>Other Department 1: {jsonData.otherDepartment1}</td>
                    <td>Reason Type: {jsonData.reasonType}</td>
                </tr>
                <tr>
                    <td>Other Department 2: {jsonData.otherDepartment2}</td>
                    <td>Change Type: {jsonData.changeType}</td>
                </tr>
                <tr>
                    <td>Change Window Start: {jsonData.changeWindowStart}</td>
                    <td>Change Description: {jsonData.changeDesc}</td>
                </tr>
                <tr>
                    <td>Change Window Stop: {jsonData.changeWindowStop}</td>
                    <td>Change Why: {jsonData.changeWhy}</td>
                </tr>
                <tr>
                    <td>Actual Implementation Start: {jsonData.actualImplStart}</td>
                    <td>Change What: {jsonData.changeWhat}</td>
                </tr>
                <tr>
                    <td>Backout Plan: {jsonData.backoutPlan}</td>
                    <td>Status: {jsonData.status}</td>
                </tr>
                <tr>
                    <td>Backout Minutes: {jsonData.backoutMinutes}</td>
                    <td>Risk: {jsonData.risk}</td>
                </tr>
                <tr>
                    <td>Implementor: {jsonData.implementor}</td>
                    <td>Implementation: {jsonData.implementation}</td>
                </tr>
                
                </tbody>
            </table>
                <Button variant="secondary" type="submit" onClick={returnToList}>
                    Return
                </Button>
            </Form>
            </div>
        );
    }
    else{
        console.log("With buttons")
        return (
            <div>
            <Form>
            <table style={{ width: '100%', borderSpacing: '100px' }}>
                <tbody>
                <tr>
                    <td>Change Number: {jsonData.changeNumber}</td>
                    <td>Requester Name: {jsonData.user?.fname+" "+jsonData.user?.lname}</td>
                </tr>
                <tr>
                    <td>Application ID: {jsonData.applicationID}</td>
                    <td>Reason Number: {jsonData.reasonNumber}</td>
                </tr>
                <tr>
                    <td>Other Department 1: {jsonData.otherDepartment1}</td>
                    <td>Reason Type: {jsonData.reasonType}</td>
                </tr>
                <tr>
                    <td>Other Department 2: {jsonData.otherDepartment2}</td>
                    <td>Change Type: {jsonData.changeType}</td>
                </tr>
                <tr>
                    <td>Change Window Start: {jsonData.changeWindowStart}</td>
                    <td>Change Description: {jsonData.changeDesc}</td>
                </tr>
                <tr>
                    <td>Change Window Stop: {jsonData.changeWindowStop}</td>
                    <td>Change Why: {jsonData.changeWhy}</td>
                </tr>
                <tr>
                    <td>Actual Implementation Start: {jsonData.actualImplStart}</td>
                    <td>Change What: {jsonData.changeWhat}</td>
                </tr>
                <tr>
                    <td>Backout Plan: {jsonData.backoutPlan}</td>
                    <td>Status: {jsonData.status}</td>
                </tr>
                <tr>
                    <td>Backout Minutes: {jsonData.backoutMinutes}</td>
                    <td>Risk: {jsonData.risk}</td>
                </tr>
                <tr>
                    <td>Implementor: {jsonData.implementor}</td>
                    <td>Implementation: {jsonData.implementation}</td>
                </tr>
                
                </tbody>
            </table>
    
            <Button variant="danger" type="submit" onClick={denied}>
                Deny
            </Button>
            <Button variant="success" type="submit" onClick={approved}>
                Approve
            </Button>
            <Button variant="secondary" type="submit" onClick={returnToList}>
                Return
            </Button>
            </Form>
            </div>
        );
    }
  }
  
  export default SingleChangeRequest;