import React from "react";
import { Form, Button } from 'react-bootstrap';
import { useParams, useLocation, useNavigate} from 'react-router-dom';
import { useEffect, useState} from "react";

function ReviewChangeRequest(props) {
    console.log("reviewchange request page hit")
  // Access the form data from the state using props
  const [formData, setFormData] = useState({});
  console.log("formData established as useState")
  const { userID } = useParams();
  console.log("userID assigned")
  console.log(formData)
  const navigate = useNavigate();


const location = useLocation();

  useEffect(() => {
    // Access location state if available
    setFormData(location.state.data);
  }, [location]);
  


  // Use the form data as needed

    const submitRequest =(e)=>{
      e.preventDefault();
      if(formData)
      {
        fetch("http://localhost:8080/addChangeRequest/"+userID , {
            method:"POST",
            headers:{
            "Content-Type" : "application/json"
            },
            body: JSON.stringify(formData)
        })
        .then(res=>{
            console.log(1,res);
            if(res.status === 201){
                return res.json();
            }else{
                return null;
            }
            })
        .then(res=>{
            console.log(res)
            if(res!==null){
            
            }else{
            alert('fails');
            }
        })
        .then(
            navigate("/")
        );
        }
        else {
            console.error('Form data is undefined');
        }
    }

    const editRequest =(e)=>{
      e.preventDefault();
      if(formData){
        navigate("/createChangeRequest/" + userID);
        }
        else {
            console.error('Form data is undefined');
        }
    }

    // Now you can use these values in your component
    // For example, you can render them in JSX
    const changeStart = new Date(formData.changeWindowStart);
    const changeStop = new Date(formData.changeWindowStop);
    const currentDate = new Date(Date.now())
    console.log(changeStart)
    console.log(changeStop)
    console.log(currentDate)

    if(currentDate < changeStart && changeStart < changeStop){
        console.log("changeStart after currentDate")
        console.log("changeStop after changeStart")
        return (
        <div>
            <Form>
            <table style={{ width: '100%', borderSpacing: '100px' }}>
            <tbody>
                
                <tr>
                <td>Application ID: {formData.applicationID}</td>
                <td>Reason Number: {formData.reasonNumber}</td>
                </tr>
                <tr>
                <td>Other Department 1: {formData.otherDepartment1}</td>
                <td>Reason Type: {formData.reasonType}</td>
                </tr>
                <tr>
                <td>Other Department 2: {formData.otherDepartment2}</td>
                <td>Change Type: {formData.changeType}</td>
                </tr>
                <tr>
                <td>Change Window Start: {formData.changeWindowStart}</td>
                <td>Change Description: {formData.changeDesc}</td>
                </tr>
                <tr>
                <td>Change Window Stop: {formData.changeWindowStop}</td>
                <td>Change Why: {formData.changeWhy}</td>
                </tr>
                <tr>
                <td>Backout Plan: {formData.backoutPlan}</td>
                <td>Change What: {formData.changeWhat}</td>
                </tr>
                <tr>
                <td>Backout Minutes: {formData.backoutMinutes}</td>
                <td>Risk: {formData.risk}</td>
                </tr>
                
            </tbody>
            </table>

            <Button variant="primary" type="submit" onClick={submitRequest}>
            Submit Request
            </Button>
            <Button variant="primary" type="submit" onClick={editRequest}>
            Edit Request
            </Button>
        </Form>
        </div>
        );
    }
    else{
        return (
            <div>
            <h1>Invalid Dates. Please return to Edit Request Page</h1>
            
            <Button variant="primary" type="submit" onClick={editRequest}>
            Edit Request
            </Button>
            
            </div>
        );
    }
  }


export default ReviewChangeRequest;
