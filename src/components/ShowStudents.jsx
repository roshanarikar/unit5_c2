import {useState,useEffect} from "react"
import axios from "axios";
import { getDefaultNormalizer } from "@testing-library/react";

export const ShowStudents = () => {
  const [array,setArray] = useState([])
  const [data,setData] = useState([])

  useEffect(()=>{
    getData();
  },[])

  const getData = () =>{
    axios.get(`http://localhost:8080/students`).then(res=>{
      setArray([...res.data])
    })
  }

  function compareId(a,b){
    if(+a.id < +b.id){
      return -1;
    }
    if(+a.id > +b.id){
      return 1;
    }
    return 0
  }
  return (
    <div>
      <div className="controls">
        <div>
          Sort By:{" "}
          <select
            // select dropdown needs both value and onChange
            className="sortby"
          >
            <option value="first_name">First Name</option>
            <option value="gender">Gender</option>
            <option value="age">Age</option>
            <option value="tenth_score">10th Score</option>
            <option value="twelth_score">12th Score</option>
          </select>
        </div>
        <div>
          Order:
          <select
            // select dropdown needs both value and onChange
            className="sortorder"
          >
            <option value="asc">Ascending</option>
            <option value="desc">Descending</option>
          </select>
        </div>
        <button className="sort">sort</button>
      </div>
      <table className="table">
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Gender</th>
            <th>Age</th>
            <th>10th Score</th>
            <th>12th Score</th>
            <th>Branch</th>
          </tr>
        </thead>
        <tbody className="tbody">
          {/* populate all rows like below: */}
          <tr className="row">
            <td className="first_name"></td>
            <td className="last_name"></td>
            <td className="email"></td>
            <td className="gender"></td>
            <td className="age"></td>
            <td className="tenth_score"></td>
            <td className="twelth_score"></td>
            <td className="preferred_branch"></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
