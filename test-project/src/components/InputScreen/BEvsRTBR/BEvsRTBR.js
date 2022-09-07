import React from 'react'
import axios from 'axios'
import {useState, useEffect} from 'react'
import Add from './Add'

// import {  useNavigate } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
// import { Postdata } from '../../../SErvixe/Postdata';

function BEvsRTBR() {

  // let navigate=useNavigate();
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
},[add,modify])


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
    <div className='table-responsive'>
  
<form  className='quater'>
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
        className="btn " onClick={(e)=>{addacount(e,data,add)}}>Add</button>
</form>
            <table id="myTable" className="table  table-striped table-sm table-hover align-middle" >
            <thead className="table-info">
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
        <Add flag={add} data={data} fun={adddata} />
        
         {modify?"":
        <tr>
        
        <td><input type='text' value={data1.vertical} onChange={(e)=>setData1({...data,vertical:e.target.value})}/></td>
        <td><input type='text' value={data1.code} onChange={(e)=>setData1({...data1,code:e.target.value})}/></td>
        <td><input type='number' value={data1.BE} onChange={(e)=>setData1({...data1,BE:e.target.value})}/></td>
        <td><input type='number' value={data1.BETBU} onChange={(e)=>setData1({...data1,BETBU:e.target.value})}/></td>
        <td><input type='number' value={data1.change} onChange={(e)=>setData1({...data1,change:e.target.value})}/></td>
        <td><input type='number'value={data1.confirmed} onChange={(e)=>setData1({...data1,confirmed:e.target.value})} /></td>
        <td><input type='number'value={data1.HP} onChange={(e)=>setData1({...data1,HP:e.target.value})} /></td>
        <td><input type='number' value={data1.confHP} onChange={(e)=>setData1({...data1,confHP:e.target.value})}/></td>
        <td><input type='number' value={data1.LP} onChange={(e)=>setData1({...data1,LP:e.target.value})}/></td>
        <td><input type='number' value={data1.risk} onChange={(e)=>setData1({...data1,risk:e.target.value})}/></td>
        <td><input type='number' value={data1.rag} onChange={(e)=>setData1({...data1,rag:e.target.value})}/></td>
        <td><input type='number' value={data1.rar} onChange={(e)=>setData1({...data1,rar:e.target.value})}/></td>
        <td><input type='number' value={data1.rtin} onChange={(e)=>setData1({...data1,rtin:e.target.value})}/></td>
        <td><input type='number' value={data1.rtout} onChange={(e)=>setData1({...data1,rtout:e.target.value})}/></td>
        {/* <td><input type='number' value={data1.julRTBR} onChange={(e)=>setData1({...data1,julRTBR:e.target.value})}/></td>
        <td><input type='number' value={data1.augRTBR} onChange={(e)=>setData1({...data1,augRTBR:e.target.value})}/></td>
        <td><input type='number' value={data1.sepRTBR} onChange={(e)=>setData1({...data1,sepRTBR:e.target.value})}/></td> */}
        <td colSpan="6"></td>
        <td><input type='text' value={data1.remarks} onChange={(e)=>setData1({...data1,remarks:e.target.value})}/></td>
        <td colSpan="2"><button  className="btn btn-outline-success" onClick={(e)=>{modifyData(e,data1.id)}}>Save</button></td>
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
            <td>{data.Q==="Q4"?d.jan:data.Q==="Q3"?d.oct:data.Q==="Q2"?d.jul:d.apr}</td>
            <td>{data.Q==="Q4"?d.feb:data.Q==="Q3"?d.nov:data.Q==="Q2"?d.aug:d.may}</td>
            <td>{data.Q==="Q4"?d.mar:data.Q==="Q3"?d.dec:data.Q==="Q2"?d.sep:d.jun}</td>
            <td>{Number(data.Q==="Q4"?d.jan:data.Q==="Q3"?d.oct:data.Q==="Q2"?d.jul:d.apr)+
            Number(data.Q==="Q4"?d.feb:data.Q==="Q3"?d.nov:data.Q==="Q2"?d.aug:d.may)+
            Number(data.Q==="Q4"?d.mar:data.Q==="Q3"?d.dec:data.Q==="Q2"?d.sep:d.jun)}</td>
            <td>{Number(data.Q==="Q4"?d.jan:data.Q==="Q3"?d.oct:data.Q==="Q2"?d.jul:d.apr)+
            Number(data.Q==="Q4"?d.feb:data.Q==="Q3"?d.nov:data.Q==="Q2"?d.aug:d.may)+
            Number(data.Q==="Q4"?d.mar:data.Q==="Q3"?d.dec:data.Q==="Q2"?d.sep:d.jun)-Number(d.BE)}</td>
            <td>{Number(data.Q==="Q4"?d.jan:data.Q==="Q3"?d.oct:data.Q==="Q2"?d.jul:d.apr)+
            Number(data.Q==="Q4"?d.feb:data.Q==="Q3"?d.nov:data.Q==="Q2"?d.aug:d.may)+
            Number(data.Q==="Q4"?d.mar:data.Q==="Q3"?d.dec:data.Q==="Q2"?d.sep:d.jun)-Number(d.BETBU)}</td>
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