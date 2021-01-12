import React from 'react';
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";



export default function Lbutton({setfiltred}) {
    return (
        <div style={{textAlign:'center',padding:'30px 30px'}}>
            <ButtonGroup color="secondary"  aria-label="outlined primary button group">
                <Button onClick={()=>setfiltred("Tous")}>Tous</Button>
                <Button onClick={()=>setfiltred("Abscent")} >Abscent</Button>
                <Button onClick={()=>setfiltred("Present")} >Present</Button>
            </ButtonGroup>
        </div>
    )
}
