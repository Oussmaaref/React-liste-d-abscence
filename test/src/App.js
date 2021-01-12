import './App.css';
import React, { useState } from 'react';
import "bootstrap/dist/css/bootstrap.css";
import Start from './components/Start';
import Buttons from './components/Buttons';
import Lbutton from './components/Lbutton';

function App() {
  const L = [
      { name: "Julia Robert", state: "" }
    , { name: "John Kennedy", state: "" }
    , { name: "David Guetta", state: "" }
    , { name: "Ben Ten", state: "" }
    , { name: "Alex Cesar", state: "" }
    , { name: "Francis Pool", state: "" }
    , { name: "Wade Wilson", state: "" }
    , { name: "Jack Reacher", state: "" }
    , {name:"Caroline Dunord",state:""}
    , {name:"Benjamin Franquelin",state:""}
  ]
  const [compteur, setCompteur] = useState(0)
  const [begin, setBegin] = useState(false)
  const [filtred, setfiltred] = useState("Tous")
  const [all, setall] = useState([])
  const [abscent, setabscent] = useState([])
  const [present, setpresent] = useState([])
  function handleButton(val) {
    if (val === "Present") {
      L[compteur].state="Present"
      setpresent([L[compteur],...present])
    }
    else if (val === "Abscent") {
      L[compteur].state="Abscent"
      setabscent([L[compteur],...abscent])
    }else{L[compteur].state="Excusé"}
    setall([L[compteur],...all])
    return (
      setCompteur(compteur + 1)
    )
  }


  return (
    <div style={{ backgroundColor: 'black', width: '100%', height: '2000px' }}>
      {L[compteur] ? <Start compteur={compteur} L={L} begin={begin} handleclick={() => setBegin(true)}></Start> : null}

      {L[compteur] ? <Buttons begin={begin} etat={handleButton}></Buttons> : null}
      <Lbutton setfiltred={setfiltred} ></Lbutton>
      <div style={{ textAlign: 'center',margin:'100px'}}>
        {filtred === "Tous" ? all.map((p) => <div key={p} style={{padding:'10px 10px'}} ><li className="list-group-item list-group-item-danger"><div style={{color:'black',textAlign:'left'}}><h4>{p.name}</h4></div><div style={{textAlign:'right'}}><button type="button" class="btn btn-secondary">{p.state}</button></div></li></div>) : null}
        {filtred === "Present" ? present.map((p) => <div key={p} style={{padding:'10px 10px'}} ><li className="list-group-item list-group-item-danger"><div style={{color:'black',textAlign:'left'}}><h4>{p.name}</h4></div><div style={{textAlign:'right'}}><button type="button" class="btn btn-secondary">{p.state}</button></div></li></div>) : null}
        {filtred === "Abscent" ? abscent.map((p) => <div key={p} style={{padding:'10px 10px'}} ><li className="list-group-item list-group-item-danger"><div style={{color:'black',textAlign:'left'}}><h4>{p.name}</h4></div><div style={{textAlign:'right'}}><button type="button" class="btn btn-secondary">{p.state}</button></div></li></div>) : null}
      </div>

    </div>

  );
}

export default App;
