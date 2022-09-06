import React from 'react'
import axios from 'axios'
import {useState, useEffect} from 'react'

function Voltrend() {
  const [tab,setTab]=useState({ });
  const [add,setAdd]=useState(true);
  const [modify,setModify]=useState(true);
  const [data1 ,setData1] =useState({});
  const[data,setData] =useState({
    Q:"",
    id:"",
    vertical:"",
    code:"",
    BE:"",
    BETBU:"",
    change:"",
    confirmed:"",
    HP:"",
    confHP:"",
    LP:"",
    risk:"",
    rag:"",
    rar:"",
    rtin:"",
    rtout:"",
    julRTBR:"",
    augRTBR:"",
    sepRTBR:"",
    Q2RTBR:"",
    RTBR_BE:"",
    RTBR_HPBE:"",
    remarks:""
  })
  
const fetch=()=>{
  axios
    .get("http://localhost:4000/data")
    .then((r) => {
      setTab(r.data);
    })
    .catch((e) => {
      console.log(e.data);
    });
}

 useEffect(()=>{
fetch();
},[])
const delrow=(id)=>{
  axios.delete("http://localhost:4000/data/"+id)
  .then(r=>{
    console.log(r.data)
    alert(`Deleted Sucessfully`)
   fetch();
  })
  .catch(e=>{
    console.log(e.data)
  })
  }
  
  
  const th=document.getElementsByTagName('th');
  for(let c=0;c<th.length;c++){
    th[c].addEventListener('click',item(c))
  }
  function item(c){
    return function(){
  
      sortTable(c)
    }
  }
  function sortTable(c) {
    var table, rows, switching, i, x, y, shouldSwitch;
    table = document.getElementById("myTable");
    switching = true;
    while (switching) {
      switching = false;
      rows = table.rows;
      for (i = 1; i < (rows.length - 1); i++) {
        shouldSwitch = false;
        x = rows[i].getElementsByTagName("TD")[c];
        y = rows[i + 1].getElementsByTagName("TD")[c]
        if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
          shouldSwitch = true;
          break;
        }
      }
      if (shouldSwitch) {
        rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
        switching = true;
      }
    }
  }
  const modifyAcount=(id)=>{
    setModify(!modify)  
    axios.get("http://localhost:4000/data/"+id)
    .then(r=>{
     setData1(r.data)
     console.log(data1)
    })
    .catch(e=>{
     console.log(e.data)
    })
  }
  const modifyData=(e,id)=>{
   
    axios.put("http://localhost:4000/data/"+id ,data1)
      .then(r=>{
        alert("Updated")
        console.log(r.data)
      })
      .catch(e=>{
        console.log(e.data)
      })
      setModify(!modify);
     fetch();
  }
  
  const addacount=(e)=>{
    e.preventDefault();
    setAdd(!add)
  }
  const adddata=(e,id,data)=>{
    e.preventDefault()
    axios.post("http://localhost:4000/data/" ,data)
    .then(r=>{
      alert("Added  ")
      console.log(r.data)
    })
    .catch(e=>{
      console.log(e.data)
    })
   setAdd(!add);
  //  setData1({});
  fetch();
  }
  

  return (
    <div className='table'>

  
    <form  className='quater'>
    Financial Year:<select value={data.Q} onChange={(e)=>setData({...data,Q:e.target.value})}>
      <option>2022</option>
      <option>2021</option>
      <option>2020</option>
      <option>2019</option>
    </select>
    <button style={{
              marginLeft: "2%",
              color: "white",
              backgroundColor: "rgba(132, 38, 191,1)",
            }}
            className="btn " onClick={(e)=>{addacount(e,data,add)}}>Add</button>
    </form>
            <table id="myTable" className="table table-bordered table-striped" border="3">
            <thead>
              <tr >
               <th>Sector</th>
                <th>Master Cust Code</th>
                <th>Apr</th>
                <th>May</th>
                <th>Jun</th>
                <th>SUM Q1</th>
                <th>Jul</th>
                <th>Aug</th>
                <th>Sep</th>
                <th>SUM Q2</th>
                <th>Oct</th>
                <th>Nov</th>
                <th>Dec</th>
                <th>SUM Q3</th>
                <th>Jan</th>
                <th>Feb</th>
                <th>Mar</th>
                <th>SUM Q4</th>
                <th colSpan="2">Action</th>
              </tr>
            </thead>
            <tbody>
            {tab.length > 0 && (
                tab.map((d) => {
                  return (
                    <tr key={d.id}>
                <td >{d.vertical}</td>
                <td >{d.code}</td>
                <td >{d.r.apr}</td>
                <td >{d.r.may}</td>
                <td >{d.r.jun}</td>
                <td style={{"backgroundColor":"lightgreen"}}>{Number(d.r.apr)+Number(d.r.may)+Number(d.r.jun)}</td>
                <td>{d.r.jul}</td>
                <td >{d.r.aug}</td>
                <td>{d.r.sep}</td>
                <td style={{"backgroundColor":"lightgreen"}}>{Number(d.r.jul)+Number(d.r.aug)+Number(d.r.sep)}</td>
                <td >{d.r.oct}</td>
                <td >{d.r.nov}</td>
                <td >{d.r.dec}</td>
                <td style={{"backgroundColor":"lightgreen"}}>{Number(d.r.oct)+Number(d.r.nov)+Number(d.r.dec)}</td>
                <td>{d.r.jan}</td>
                <td>{d.r.feb}</td>
                <td>{d.r.mar}</td>
                <td style={{"backgroundColor":"lightgreen"}}>{Number(d.r.jan)+Number(d.r.feb)+Number(d.r.mar)}</td>
              
                            
                <td><button  className="btn btn-outline-info" onClick={()=>{modifyAcount(d.id)}}>Modify</button></td>
                <td><button className="btn btn-outline-danger" onClick={()=>delrow(d.id)}>Delete</button> </td>
              </tr>);
                })
                )}
                {/* navigate('Modify/'+d.id) */}
            </tbody>
          </table>
        </div>
        
  )
}

export default Voltrend