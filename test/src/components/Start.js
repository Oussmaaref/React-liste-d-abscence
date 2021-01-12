import React from 'react';
let top = {

    width: "100%",
    height: "180px",
    position: "relative",
    padding: "30px",
};

let frame = {
    width: "1050px",
    height: "170px",
    borderStyle: "solid",
    borderRadius: "25px",
    marginTop: "30px",
    marginBottom: "30px",
    borderTopWidth: "3px",
    borderRightWidth: "3px",
    borderLeftWidth: "3px",
    borderBottomWidth: "3px",
    paddingTop: "30px",
    margin: "auto",
    borderColor: "white",
};
export default function Start({handleclick,begin,compteur,L}) {


    return (
        <div style={top}>
            <div style={frame}>
                <div style={{position:"absolute",top:"50%",left:"45.9%"}} >
                   {! begin ? <button type="button" className="btn btn-link" style={{color:"#e60057"}} onClick={() =>handleclick()} >START</button>: <div style={{color:'white'}}><h1>{L[compteur].name}</h1></div>} 
                </div>
            </div>
        </div>
    );
}