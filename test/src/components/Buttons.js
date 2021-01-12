import React from 'react';


export default function Buttons({etat,begin}) {
    return (
        <div style={{textAlign:"center"} }>
            <button disabled={! begin} type="button" className="btn btn-success" style={{padding:'30px 30px',margin:'70px'}} onClick={()=>etat("Present")} >Present</button>
            <button disabled={! begin} type="button" className="btn btn-warning" style={{padding:'30px 30px',margin:'70px'}} onClick={()=>etat("Excusé")}>Excusé</button>
            <button disabled={! begin} type="button" className="btn btn-danger" style={{padding:'30px 30px',margin:'70px'}} onClick={()=>etat("Abscent")}>Abscent</button>   
            
        </div>
    )
}
