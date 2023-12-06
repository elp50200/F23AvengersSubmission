import { useEffect, useState } from "react"
import { Table } from "react-bootstrap"
import { useParams, useLocation, Link} from 'react-router-dom';


function CompletedRequestList(){
    const[changerequests, setChangeRequest] = useState([]);
    const getChangeRequest = async() =>{

        const response = await fetch("http://localhost:8080/getCompletedRequest");
        
        const json = await response.json();
        setChangeRequest(json);
        console.log("changeRequest JSON",json);
        console.log("changeRequest",changerequests);

    }

    useEffect(()=>{

        getChangeRequest();

    },[]);



    return(

        <div>
            
            <Table striped>
                <thead>
                    <tr>
                    <th>ChangeNumber</th>
                    <th>Description</th>
                    <th>Requester Name</th>
                    <th>Change Window Start</th>
                    <th>Change Window Stop</th>
                    <th>status</th>
                    </tr>
                </thead>

                {changerequests.map((changedata) =>(
                        <tbody>
                        <tr>
                        <td><Link to={`/user/${null}/singleChangeRequest/${changedata.changeNumber}`}>{changedata.changeNumber}</Link></td>
                        <td>{changedata.changeDesc}</td>
                        <td>{changedata.user?.fname+" "+changedata.user?.lname}</td>
                        <td>{changedata.changeWindowStart}</td>
                        <td>{changedata.changeWindowStop}</td>
                        <td>{changedata.status}</td>
                        </tr>
                        </tbody>
                ))}
            </Table>
        </div>
    )

}

export default CompletedRequestList