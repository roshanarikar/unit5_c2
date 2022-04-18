import {useState,useEffect} from "react";
import axios from "axios";

export const AddStudent = () => {
  const [formData,setFormData] = useState({
    firstName: "",
    lastName: "",
    Email: "",
    tenthScore: "",
    twelthScore: "",
  })

  const API = "localhost:8080/students";

  const [data,setData] = useState([])

  const getData = () =>{
    axios.get(`${API}`).then(res=>{
      setData(res.data)
    })
  }

  const handleChange = (e) =>{
    const {id,value} = e.target;
    setFormData({
      ...formData,
      [id]:value
    })
  }

  const handleCheckbox = (e) =>{
    const{id,value} = e.target;
    const checked = e.target.checked;
    if(checked){
      setFormData({
        ...formData,
        [id]:value
      })
    }
  }

  const handleSubmit = (e) =>{
    e.preventDefault();
    axios.post(`${API}`,formData).then(()=>{
    setFormData({
      firstName: "",
    lastName: "",
    Email: "",
    tenthScore: "",
    twelthScore: "",
    })
  })
}
  return (
    <form onSubmit={handleSubmit} className="addstudent">
      <div>
        Firstname:{" "}
        <input
          type="text"
          name="first_name"
          className="first_name"
          placeholder="enter first name"
          value={formData.firstName} onChange={handleChange} required
        />
      </div>
      <div>
        {" "}
        Last Name:
        <input
          type="text"
          name="last_name"
          className="last_name"
          placeholder="enter last name"
          value={formData.lastName} onChange={handleChange}
        />
      </div>
      <div>
        {" "}
        Email:
        <input
          type="email"
          name="email"
          className="email"
          placeholder="enter email"
          value={formData.Email} onChange={handleChange}
        />
      </div>

      <div>
        Gender: {/* NOTE: radio boxes only work when they have same `name`. */}
        <div>
          Male
          <input
            name="gender"
            className="male"
            type="radio"
            value={"male"}
            onChange={(e)=>{
              handleCheckbox(e)
            }}
          />{" "}
          Female{" "}
          <input
            name="gender"
            className="female"
            type="radio"
            value={"female"}
            onChange={(e)=>{
              handleCheckbox(e)
            }}
          />
        </div>
      </div>
      <div>
        Age{" "}
        <input
          type="number"
          name="age"
          className="age"
          placeholder="enter age"
        />
      </div>
      <div>
        Tenth Score:{" "}
        <input
          type="number"
          name="tenth_score"
          className="tenth_score"
          placeholder="enter 10th score"
          value={formData.tenthScore} onChange={handleChange}
        />{" "}
      </div>
      <div>
        Twelth Score:{" "}
        <input
          type="number"
          name="twelth_score"
          className="twelth_score"
          placeholder="enter 12th score"
          value={formData.twelthScore} onChange={handleChange}
/>{" "}
      </div>
      <div>
        <select
          value={""} // select dropdown needs both value and onChange attributes
          name="preferred_branch"
          className="preferred_branch"
        >
          <option value="law">law</option>
          <option value="commerce">commerce</option>
          <option value="science">science</option>
          <option value="sports">sports</option>
          <option value="arts">arts</option>
          <option value="acting">acting</option>
        </select>
      </div>

      <input className="submit" type="submit" value="Submit" />
      {
        // <div className="error"></div>
        // show this div with proper error before submitting form, if there's anything not provided
        // eg: first name missing, age cannot be greater than 100 etc
      }
    </form>
  );
};
