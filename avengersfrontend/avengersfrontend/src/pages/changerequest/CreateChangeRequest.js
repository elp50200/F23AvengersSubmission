import { useEffect, useState } from "react";
import { Form, Button } from 'react-bootstrap';
import { useParams, useNavigate} from 'react-router-dom';

function CreateChangeRequest() {
  //used to get a variable from the path
  const { userID } = useParams();
  const navigate = useNavigate();
  //console.log(userID);

  const[changerequest, setChangeRequest] = useState({
    applicationID:'',
    otherDepartment1:'',
    otherDepartment2:'',
    reasonNumber:'',
    reasonType:'',
    changeType:'',
    changeDesc:'',
    changeWhy:'',
    changeWhat:'',
    changeWindowStart:'',
    changeWindowStop:'',
    backoutPlan:'',
    backoutMinutes:'',
    risk:''
  });
  

  const changeValue=(e)=>{
    console.log(e);
    setChangeRequest({
     ...changerequest, [e.target.name]:e.target.value  
    });
    console.log(e.target.name + " name "  );
    console.log(e.target.value + " value " );
  }

//method to call backend and set book to equal to the response
  // useEffect(()=>{ 
  //   fetch("/addChangeRequest/" + userID, {method:"POST"})
  //   .then(res =>res.json())
  //   .then(res=>{
  //     setBook(res)});
  // },[])


  const submitBook =(e)=>{
    e.preventDefault();
    console.log("sending data to review page", changerequest)
    navigate("/createChangeRequest/" + userID + "/review", { state: { data: changerequest } });
  }

  return (
    <div>
       
      <Form onSubmit={submitBook}>
        <table style={{ width: '100%', borderSpacing: '100px' }}>
          <tbody>
            <tr>
              <td>
                <Form.Group controlId="formCreateRequest">
                  <Form.Label><b>Application ID</b></Form.Label>
                  <Form.Control type="text" placeholder="Enter Application ID" onChange={changeValue} name="applicationID" value={changerequest.applicationID} />
                </Form.Group>
              </td>
              <td>
                <Form.Group controlId="formCreateRequest">
                  <Form.Label><b>Reason Number</b></Form.Label>
                  <Form.Control type="text" placeholder="Enter Reason Number" onChange={changeValue} name="reasonNumber" value={changerequest.reasonNumber} />
                </Form.Group>
              </td>
            </tr>


            <tr> 
              <td>
                <Form.Group controlId="formCreateRequest">
                  <Form.Label><b>Other Department 1</b></Form.Label>
                  <Form.Control type="text" placeholder="Enter Other Department 1" onChange={changeValue} name="otherDepartment1" value={changerequest.otherDepartment1} />
                </Form.Group>
              </td>
              <td>
                <Form.Group controlId="formCreateRequest">
                  <Form.Label><b>Reason Type</b></Form.Label>
                  <Form.Control type="text" placeholder="Enter Reason Type" onChange={changeValue} name="reasonType" value={changerequest.reasonType} />
                </Form.Group>
              </td>
            </tr>


            <tr>
            <td>
                <Form.Group controlId="formCreateRequest">
                  <Form.Label><b>Other Department 2</b></Form.Label>
                  <Form.Control type="text" placeholder="Enter Other Department 2" onChange={changeValue} name="otherDepartment2" value={changerequest.otherDepartment2} />
                </Form.Group>
              </td>
              
              <td>
                <Form.Group controlId="formCreateRequest">
                  <Form.Label><b>Change Type</b></Form.Label>
                  <Form.Control type="text" placeholder="Enter Change Type" onChange={changeValue} name="changeType" value={changerequest.changeType} />
                </Form.Group>
              </td>
            </tr>


            <tr>
            <td>
                <Form.Group controlId="formCreateRequest">
                  <Form.Label><b>Change Window Start</b></Form.Label>
                  <Form.Control type="text" placeholder="Enter Change Window Start" onChange={changeValue} name="changeWindowStart" value={changerequest.changeWindowStart} />
                </Form.Group>
              </td>
              <td>
                <Form.Group controlId="formCreateRequest">
                  <Form.Label><b>Change Why</b></Form.Label>
                  <Form.Control type="text" placeholder="Enter Change Why" onChange={changeValue} name="changeWhy" value={changerequest.changeWhy} />
                </Form.Group>
              </td>
            </tr>


            <tr>
            <td>
                <Form.Group controlId="formCreateRequest">
                  <Form.Label><b>Change Window Stop</b></Form.Label>
                  <Form.Control type="text" placeholder="Enter Change Window Stop" onChange={changeValue} name="changeWindowStop" value={changerequest.changeWindowStop} />
                </Form.Group>
              </td>
              <td>
                <Form.Group controlId="formCreateRequest">
                  <Form.Label><b>Change Description</b></Form.Label>
                  <Form.Control type="text" placeholder="Enter Change Description" onChange={changeValue} name="changeDesc" value={changerequest.changeDesc} maxLength={80} />
                </Form.Group>
              </td>
            </tr>


            <tr>
              
              <td>
                <Form.Group controlId="formCreateRequest">
                  <Form.Label><b>Backout Plan</b></Form.Label>
                  <Form.Control type="text" placeholder="Enter Backout Plan" onChange={changeValue} name="backoutPlan" value={changerequest.backoutPlan} />
                </Form.Group>
              </td>
              <td>
                <Form.Group controlId="formCreateRequest">
                  <Form.Label><b>Change What</b></Form.Label>
                  <Form.Control type="text" placeholder="Enter Change What" onChange={changeValue} name="changeWhat" value={changerequest.changeWhat} />
                </Form.Group>
              </td>
            </tr>


            <tr>
              <td>
                <Form.Group controlId="formCreateRequest">
                  <Form.Label><b>Backout Minutes</b></Form.Label>
                  <Form.Control type="text" placeholder="Enter Backout Minutes" onChange={changeValue} name="backoutMinutes" value={changerequest.backoutMinutes} />
                </Form.Group>
              </td>
              <td>
                <Form.Group controlId="formCreateRequest">
                  <Form.Label><b>Risk</b></Form.Label>
                  <Form.Control type="text" placeholder="Enter Risk" onChange={changeValue} name="risk" value={changerequest.risk} maxLength={2} />
                </Form.Group>
              </td>
            </tr>


          </tbody>
        </table>

        <Button variant="secondary" type="submit">
          Review
        </Button>
      </Form>

    </div>
  );
 
  
    // return (
    //   <div>
    //      <form>
    //         <label for="name">Name</label> <br />
    //         <input type="text" id="name" name="name"></input>
    //         <br />
    //         <br />
    //         <label for="appID">AppID</label><br />
    //         <input type="text" id="appID" name="appID"></input>
    //         <br />
    //         <br />
    //         <label for="reason">Reason</label><br />
    //         <input type="text" id="reason" name="reason"></input>
    //         <br />
    //         <br />
    //         <label for="changeType">Change Type</label><br />
    //         <input type="text" id="changeType" name="changeType"></input>
    //         <br />
    //         <br />
    //         <label for="description">Description</label><br />
    //         <input type="text" id="description" name="description"></input>
    //         <br />
    //         <br />
    //         <label for="otherDepartments">Other Departments</label><br />
    //         <input type="text" id="otherDepartments" name="otherDepartments"></input>

    //         <br />
    //         <br />
    //         <label for="what">What</label><br />
    //         <input type="text" id="what" name="what"></input>
    //         <br />
    //         <br />
    //         <label for="why">Why</label><br />
    //         <input type="text" id="why" name="why"></input>

    //         <br />
    //         <br />
    //         <label for="changeWindowsStart">Change Windows Start</label><br />
    //         <input type="text" id="what" name="what"></input>

    //         <br />
    //         <br />
    //         <label for="changeWindowsStop">Change Windows Stop</label><br />
    //         <input type="text" id="changeWindowsStop" name="changeWindowsStop"></input>

    //         <br />
    //         <br />
    //         <label for="backOutPlan">Back Out Plan</label><br />
    //         <input type="text" id="backOutPlan" name="backOutPlan"></input>
    //         <br />
    //         <br />
    //         <label for="backOutMinutes">Back Out Minutes</label><br />
    //         <input type="text" id="backOutMinutes" name="backOutMinutes"></input>
    //         <br />
    //         <br />
    //         <label for="risk">Risk</label><br />
    //         <input type="text" id="risk" name="risk"></input>
    //         <br />
    //         <br />
    //         <button>Reset</button>
    //         <button>Review</button><br />
    //     </form>
    //   </div>
//    );
  }
  
  export default CreateChangeRequest;