// import { useEffect, useState } from "react"
// import { Table } from "react-bootstrap"
// import { useParams, useLocation, Link} from 'react-router-dom';


// function ChangeRequestList(){
//     const { userID } = useParams();
//     const[changerequests, setChangeRequest] = useState([]);
//     const getChangeRequest = async() =>{

//         const response = await fetch(
//             "http://localhost:8080/getChangeRequest/"+userID
//         );
        
//         const json = await response.json();
//         setChangeRequest(json);
//         console.log("changeRequest JSON",json);
//         console.log("changeRequest",changerequests);

//     }

//     useEffect(()=>{

//         getChangeRequest();

//     },[]);



//     return(

//         <div>
            
//             <Table striped>
//                 <thead>
//                     <tr>
//                     <th>ChangeNumber</th>
//                     <th>Description</th>
//                     <th>Requester Name</th>
//                     <th>Change Window Start</th>
//                     <th>Change Window Stop</th>
//                     <th>status</th>
//                     </tr>
//                 </thead>

//                 {changerequests.map((changedata) =>(
//                         <tbody>
//                         <tr>
//                         <td><Link to={`/user/${userID}/singleChangeRequest/${changedata.changeNumber}`}>{changedata.changeNumber}</Link></td>
//                         <td>{changedata.changeDesc}</td>
//                         <td>{changedata.user?.fname+" "+changedata.user?.lname}</td>
//                         <td>{changedata.changeWindowStart}</td>
//                         <td>{changedata.changeWindowStop}</td>
//                         <td>{changedata.status}</td>
//                         </tr>
//                         </tbody>
//                 ))}
//             </Table>
//         </div>
//     )

// }

// export default ChangeRequestList


import { useEffect, useState } from "react";
import { Table, Button } from "react-bootstrap";
import { useParams, useLocation, Link } from 'react-router-dom';

function ChangeRequestList() {
    const { userID } = useParams();
    const [changerequests, setChangeRequest] = useState([]);
    const [sortOrder, setSortOrder] = useState("asc"); // Initial sort order is ascending

    const getChangeRequest = async () => {
        const response = await fetch(
            "http://localhost:8080/getChangeRequest/" + userID
        );

        const json = await response.json();
        setChangeRequest(json);
    }

    useEffect(() => {
        getChangeRequest();
    }, []);

    const handleSort = () => {
        // Toggle sort order
        const newSortOrder = sortOrder === "asc" ? "desc" : "asc";
        setSortOrder(newSortOrder);

        // Sort changerequests by status
        const sortedChangeRequests = [...changerequests].sort((a, b) => {
            // Assuming status is a string, if it's a number, you might need to adjust the comparison logic
            const comparison = a.status.localeCompare(b.status);
            return newSortOrder === "asc" ? comparison : -comparison;
        });

        setChangeRequest(sortedChangeRequests);
    };

    return (
        <div>
            
            <Table striped>
                <thead>
                    <tr>
                        <th>ChangeNumber</th>
                        <th>Description</th>
                        <th>Requester Name</th>
                        <th>Change Window Start</th>
                        <th>Change Window Stop</th>
                        <th>Status  <Button variant="outline-primary" size="sm" onClick={handleSort}>{sortOrder === "asc" ? "▲" : "▼"}</Button></th>
                    </tr>
                </thead>
                <tbody>
                    {changerequests.map((changedata) => (
                        <tr key={changedata.changeNumber}>
                            <td><Link to={`/user/${userID}/singleChangeRequest/${changedata.changeNumber}`}>{changedata.changeNumber}</Link></td>
                            <td>{changedata.changeDesc}</td>
                            <td>{changedata.user?.fname + " " + changedata.user?.lname}</td>
                            <td>{changedata.changeWindowStart}</td>
                            <td>{changedata.changeWindowStop}</td>
                            <td>{changedata.status}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    );
}

export default ChangeRequestList;
