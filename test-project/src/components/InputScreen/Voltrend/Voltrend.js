import React from 'react'
import axios from 'axios'
import VolAdd from "./VolAdd"
import {useState, useEffect} from 'react'

function Voltrend() {
  const [tab,setTab]=useState({ });
  const [add,setAdd]=useState(true);
  const [modify,setModify]=useState(true);
  const [data1 ,setData1] =useState({});
  const[data,setData] =useState({

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
},[add, modify])

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
              <VolAdd flag={add} data={data1} fun={adddata} />
              {modify?"":
        <tr>
         <td><input type='text' value={data1.vertical} onChange={(e)=>setData1({...data1,vertical:e.target.value})}/></td>
        <td><input type='text' value={data1.code} onChange={(e)=>setData1({...data1,code:e.target.value})}/></td>
        <td><input type='number' value={data1.apr} onChange={(e)=>setData1({...data1,apr:e.target.value})}/></td>
        <td><input type='number' value={data1.may} onChange={(e)=>setData1({...data1,may:e.target.value})}/></td>
        <td><input type='number' value={data1.jun} onChange={(e)=>setData1({...data1,jun:e.target.value})}/></td>
        <td></td>
        <td><input type='number' value={data1.jul} onChange={(e)=>setData1({...data1,jul:e.target.value})}/></td>
        <td><input type='number' value={data1.aug} onChange={(e)=>setData1({...data1,aug:e.target.value})}/></td>
        <td><input type='number'value={data1.sep} onChange={(e)=>setData1({...data1,sep:e.target.value})} /></td>
        <td></td>
        <td><input type='number'value={data1.oct} onChange={(e)=>setData1({...data1,oct:e.target.value})} /></td>
        <td><input type='number' value={data1.nov} onChange={(e)=>setData1({...data1,nov:e.target.value})}/></td>
        <td><input type='number' value={data1.dec} onChange={(e)=>setData1({...data1,dec:e.target.value})}/></td>
        <td></td>
        <td><input type='number' value={data1.jan} onChange={(e)=>setData1({...data1,jan:e.target.value})}/></td>
        <td><input type='number' value={data1.feb} onChange={(e)=>setData1({...data1,feb:e.target.value})}/></td>
        <td><input type='number' value={data1.mar} onChange={(e)=>setData1({...data1,mar:e.target.value})}/></td>
        <td></td>
        <td colSpan="2"><button  className="btn btn-outline-success" onClick={(e)=>{modifyData(e,data1.id)}}>Save</button></td>
        </tr>} 
            </thead>
            <tbody>
            {tab.length > 0 && (
                tab.map((d) => {
                  return (
                    <tr key={d.id}>
                <td >{d.vertical}</td>
                <td >{d.code}</td>
                <td >{d.apr}</td>
                <td >{d.may}</td>
                <td >{d.jun}</td>
                <td style={{"backgroundColor":"lightgreen"}}>{Number(d.apr)+Number(d.may)+Number(d.jun)}</td>
                <td>{d.jul}</td>
                <td >{d.aug}</td>
                <td>{d.sep}</td>
                <td style={{"backgroundColor":"lightgreen"}}>{Number(d.jul)+Number(d.aug)+Number(d.sep)}</td>
                <td >{d.oct}</td>
                <td >{d.nov}</td>
                <td >{d.dec}</td>
                <td style={{"backgroundColor":"lightgreen"}}>{Number(d.oct)+Number(d.nov)+Number(d.dec)}</td>
                <td>{d.jan}</td>
                <td>{d.feb}</td>
                <td>{d.mar}</td>
                <td style={{"backgroundColor":"lightgreen"}}>{Number(d.jan)+Number(d.feb)+Number(d.mar)}</td>
              
                            
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