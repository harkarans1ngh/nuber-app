import React , {useState} from 'react';
import { Storage } from "@aws-amplify/storage"
const mystyle = {
  width: "30%",
  };


const container = {
    padding: "2px 16px"
}

const cardstyle = {
    boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
    transition: "0.3s"
};

async function onChange(e) {
    if (!e.target.files[0]) return
    const file = e.target.files[0];
    await Storage.put(file.name, file);
    alert("Uploaded to NUBER");
  }

const Upload = () => {

    return <div>

        <div style = {cardstyle}>
        <img src={require('./person.png')} alt="Avatar" style={mystyle}></img>
        <div  style = {container}>
            <h4>DRIVER PORTAL</h4>
            <input type="file" onChange={onChange}/>
        </div>
        </div>
        
    </div>
}

export default Upload;