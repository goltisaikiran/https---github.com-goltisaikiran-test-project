import axios from "axios";
export const Postdata = (data) => {
  
    axios.post("http://localhost:4000/data/" ,data)
    .then(r=>{
      alert("Added  ")
      console.log(r.data)
    })
    .catch(e=>{
      console.log(e.data)
    })
};


