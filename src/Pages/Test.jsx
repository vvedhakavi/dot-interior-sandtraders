
import React, { useState , useEffect } from 'react';

export default function Test() {
    const [data, setData] = useState([])
    const fetchInfo = async () => { 
   
        const res = await fetch("/data.json");
        const d = await res.json();
        return setData(d); 
}

useEffect(() => {
	fetchInfo();
}, [])
 {data.map((dataObj, index) => {
          return (
            <div
              style={{
                width: "15em",
                backgroundColor: "#35D841",
                padding: 2,
                borderRadius: 10,
                marginBlock: 10,
              }}
            >
              <p style={{ fontSize: 20, color: 'white' }}>{dataObj.name}</p>
            </div>
          );
        })}
}
