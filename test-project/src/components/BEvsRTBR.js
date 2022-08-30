import React from 'react'
import axios from 'axios'
import {useState, useEffect} from 'react'
import {  useNavigate } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import { Postdata } from '../SErvixe/Postdata';

function BEvsRTBR() {
  let navigate=useNavigate();
  const [tab,setTab]=useState({ });
  const [add,setAdd]=useState(true);
  const [modify,setModify]=useState(true);
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
  setModify(false)
  axios.get("http://localhost:4000/data/"+id)
  .then(r=>{
   setData(r.data)
  })
  .catch(e=>{
   console.log(e.data)
  })
}
const modifyData=(e,id)=>{
 
  axios.put("http://localhost:4000/data/"+id ,data)
    .then(r=>{
      alert("Updated")
      console.log(r.data)
    })
    .catch(e=>{
      console.log(e.data)
    })
    navigate("/inputScreen")
}

const addacount=(e)=>{
  e.preventDefault();
  setAdd(false)
}
const adddata=(e)=>{
  e.preventDefault()
  Postdata(data);
 navigate("/inputScreen")
}

  return (
    <div style={{marginTop:"1%",overflow:"scroll"}}>
  
<form  style={{marginLeft:"5%"}}>
Quarter:<select value={data.Q} onChange={(e)=>setData({...data,Q:e.target.value})}>
  <option>Q1</option>
  <option>Q2</option>
  <option>Q3</option>
  <option>Q4</option>
</select>
<button style={{
          marginLeft: "2%",
          color: "white",
          backgroundColor: "rgba(132, 38, 191,1)",
        }}
        className="btn " onClick={(e)=>{addacount(e)}}>Add</button>
</form>
        <table id="myTable" style={{ margin:"1%",textAlign:"center"}} className="table table-bordered table-striped" border="3">
        <thead>
          <tr >
           <th>Vertical</th>
            <th>Master Cust Code</th>
            <th>BE on Portal</th>
            <th>BE TBU</th>
            <th>Change</th>
            <th>Confirmed</th>
            <th>HP</th>
            <th>Conf+HP</th>
            <th>LP</th>
            <th>At Risk</th>
            <th>RAG</th>
            <th>RAR</th>
            <th>RT In</th>
            <th>RT Out</th>
            <th>{data.Q==="Q4"?"JanRTBR":data.Q==="Q3"?"OctRTBR":data.Q==="Q2"?"JulRTBR":"AprRTBR"}</th>
            <th>{data.Q==="Q4"?"FebRTBR":data.Q==="Q3"?"NovRTBR":data.Q==="Q2"?"AugRTBR":"MayRTBR"}</th>
            <th>{data.Q==="Q4"?"MarRTBR":data.Q==="Q3"?"DecRTBR":data.Q==="Q2"?"SepRTBR":"JunRTBR"}</th>
            <th>{data.Q==="Q4"?"Q4RTBR":data.Q==="Q3"?"Q3RTBR":data.Q==="Q2"?"Q2RTBR":"Q1RTBR"}</th>
            <th>RTBR-BE</th>
            <th>RTBR-High probability BE</th>
            <th>Remarks</th>
            <th colSpan="2">Action</th>
          </tr>
        {add?"":
        <tr>
        
        <td><input type='text' value={data.vertical} onChange={(e)=>setData({...data,vertical:e.target.value})}/></td>
        <td><input type='text' value={data.code} onChange={(e)=>setData({...data,code:e.target.value})}/></td>
        <td><input type='number' value={data.BE} onChange={(e)=>setData({...data,BE:e.target.value})}/></td>
        <td><input type='number' value={data.BETBU} onChange={(e)=>setData({...data,BETBU:e.target.value})}/></td>
        <td><input type='number' value={data.change} onChange={(e)=>setData({...data,change:e.target.value})}/></td>
        <td><input type='number'value={data.confirmed} onChange={(e)=>setData({...data,confirmed:e.target.value})} /></td>
        <td><input type='number'value={data.HP} onChange={(e)=>setData({...data,HP:e.target.value})} /></td>
        <td><input type='number' value={data.confHP} onChange={(e)=>setData({...data,confHP:e.target.value})}/></td>
        <td><input type='number' value={data.LP} onChange={(e)=>setData({...data,LP:e.target.value})}/></td>
        <td><input type='number' value={data.risk} onChange={(e)=>setData({...data,risk:e.target.value})}/></td>
        <td><input type='number' value={data.rag} onChange={(e)=>setData({...data,rag:e.target.value})}/></td>
        <td><input type='number' value={data.rar} onChange={(e)=>setData({...data,rar:e.target.value})}/></td>
        <td><input type='number' value={data.rtin} onChange={(e)=>setData({...data,rtin:e.target.value})}/></td>
        <td><input type='number' value={data.rtout} onChange={(e)=>setData({...data,rtout:e.target.value})}/></td>
        <td><input type='number' value={data.julRTBR} onChange={(e)=>setData({...data,julRTBR:e.target.value})}/></td>
        <td><input type='number' value={data.augRTBR} onChange={(e)=>setData({...data,augRTBR:e.target.value})}/></td>
        <td><input type='number' value={data.sepRTBR} onChange={(e)=>setData({...data,sepRTBR:e.target.value})}/></td>
        <td colSpan="3"></td>
        <td><input type='text' value={data.remarks} onChange={(e)=>setData({...data,remarks:e.target.value})}/></td>
        <td colSpan="2"><button  className="btn btn-outline-success" onClick={(e)=>{adddata(e)}}>Save</button></td>
        </tr>}
        {modify?"":
        <tr>
        
        <td><input type='text' value={data.vertical} onChange={(e)=>setData({...data,vertical:e.target.value})}/></td>
        <td><input type='text' value={data.code} onChange={(e)=>setData({...data,code:e.target.value})}/></td>
        <td><input type='number' value={data.BE} onChange={(e)=>setData({...data,BE:e.target.value})}/></td>
        <td><input type='number' value={data.BETBU} onChange={(e)=>setData({...data,BETBU:e.target.value})}/></td>
        <td><input type='number' value={data.change} onChange={(e)=>setData({...data,change:e.target.value})}/></td>
        <td><input type='number'value={data.confirmed} onChange={(e)=>setData({...data,confirmed:e.target.value})} /></td>
        <td><input type='number'value={data.HP} onChange={(e)=>setData({...data,HP:e.target.value})} /></td>
        <td><input type='number' value={data.confHP} onChange={(e)=>setData({...data,confHP:e.target.value})}/></td>
        <td><input type='number' value={data.LP} onChange={(e)=>setData({...data,LP:e.target.value})}/></td>
        <td><input type='number' value={data.risk} onChange={(e)=>setData({...data,risk:e.target.value})}/></td>
        <td><input type='number' value={data.rag} onChange={(e)=>setData({...data,rag:e.target.value})}/></td>
        <td><input type='number' value={data.rar} onChange={(e)=>setData({...data,rar:e.target.value})}/></td>
        <td><input type='number' value={data.rtin} onChange={(e)=>setData({...data,rtin:e.target.value})}/></td>
        <td><input type='number' value={data.rtout} onChange={(e)=>setData({...data,rtout:e.target.value})}/></td>
        <td><input type='number' value={data.julRTBR} onChange={(e)=>setData({...data,julRTBR:e.target.value})}/></td>
        <td><input type='number' value={data.augRTBR} onChange={(e)=>setData({...data,augRTBR:e.target.value})}/></td>
        <td><input type='number' value={data.sepRTBR} onChange={(e)=>setData({...data,sepRTBR:e.target.value})}/></td>
        <td colSpan="3"></td>
        <td><input type='text' value={data.remarks} onChange={(e)=>setData({...data,remarks:e.target.value})}/></td>
        <td colSpan="2"><button  className="btn btn-outline-success" onClick={(e)=>{modifyData(e,data.id)}}>Save</button></td>
        </tr>}
        </thead>
        <tbody>
        {tab.length > 0 && (
            tab.map((d) => {
              return (
                <tr key={d.id}>
            <td style={{"backgroundColor":"lightblue"}}>{d.vertical}</td>
            <td style={{"backgroundColor":"lightblue"}}>{d.code}</td>
            <td style={{"backgroundColor":"lightyellow"}}>{d.BE}</td>
            <td style={{"backgroundColor":"yellow"}}>{d.BETBU}</td>
            <td style={{"backgroundColor":"yellow"}}>{d.change}</td>
            <td>{d.confirmed}</td>
            <td>{d.HP}</td>
            <td style={{"backgroundColor":"lightgreen"}}>{d.confHP}</td>
            <td>{d.LP}</td>
            <td style={{"backgroundColor":"rgb(177,156,217)"}}>{d.risk}</td>
            <td style={{"backgroundColor":"rgb(177,156,217)"}}>{d.rag}</td>
            <td style={{"backgroundColor":"rgb(177,156,217)"}}>{d.rar}</td>
            <td style={{"backgroundColor":"lightgreen"}}>{d.rtin}</td>
            <td style={{"backgroundColor":"lightpink"}}>{d.rtout}</td>
            <td>{d.julRTBR}</td>
            <td>{d.augRTBR}</td>
            <td>{d.sepRTBR}</td>
            <td>{Number(d.julRTBR)+Number(d.augRTBR)+Number(d.sepRTBR)}</td>
            <td>{Number(d.julRTBR)+Number(d.augRTBR)+Number(d.sepRTBR)-Number(d.BE)}</td>
            <td>{Number(d.julRTBR)+Number(d.augRTBR)+Number(d.sepRTBR)-Number(d.BETBU)}</td>
            <td>{d.remarks}</td>            
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

export default BEvsRTBR