import React from 'react';

function Header(){
   const client = "Programmer";
   const title = {
    designer : "Design ",
    programmer :"Programming "
   }
   const clientinfo = {
    name: "Taima",
    nick :"Hamadneh"
   }
    return(
     <div className="navbar bg-primary rounded">
        <h2 className="text-white">
            {client == "Designer" ? title.designer: title.programmer}
            is my life.  
        </h2>
     </div> 
    );
}
export default Header;