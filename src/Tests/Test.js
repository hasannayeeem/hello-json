import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Radium, { Style, StyleRoot } from 'radium';

const Test = () => {
    const [data, setData] = useState({});

    useEffect(()=>{
        const url = `test.json`;
        fetch(url).then(res=>res.json()).then(data=>setData(data))
    },[])
    // localStorage.setItem("data", JSON.stringify(data));
    // let x = JSON.parse(localStorage.getItem("data"));
    // let xx = JSON.parse(x)
    // console.log('x',x);
    // const temp = data
    // const [tempp, setTempp] = useState(x);
    // console.log(data);
    // console.log('t',tempp);
    const handleBlue = ()=>{
        data.className.bg = 'blue'
        setData({...data});
//         console.log(data);
// return data
    }
    const handleYellow = ()=>{
        data.className.bg = 'yellow'
        setData({...data});
    }
    const handleText = ()=>{
        data.style = {
            ...data?.style,
            color: 'white'
        }
        setData({...data});
    }
    const handleTextp = ()=>{
        data.style = {
            ...data?.style,
            color: 'purple'
        }
        setData({...data});
    }
    const changeText = ()=>{
        data.name = 'changed text successfully done'
        setData({...data});
    }
    const mainText = ()=>{
        data.name = 'testName'
        setData({...data});
    }
    const handleSubmit = (e) =>{
        e.preventDefault()
        const name =  e.target.name.value;
        data.name = name;
        setData({...data});
    }
    const style = {
 
        // Adding media query..
        '@media (max-width: 600px)': {
          ...data?.style?.mobile
        },
        ...data?.style
      };
    return (
        <div>
            <h1>test updating json <span style={style} className={`${data?.className?.bg }`}>{data?.name}</span></h1>
            <button onClick={()=>handleBlue()}>blue</button>
            <button onClick={()=>handleYellow(data.className.bg = 'yellow')}>yellow</button>
            <button onClick={()=>handleText()}>whiteText</button>
            <button onClick={()=>handleTextp()}>purpleText</button>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" />
            <button type='submit'>changeManually</button>
            </form>
            <button onClick={()=>changeText()}>changeText</button>
            <button onClick={()=>mainText()}>defaultText</button>
        </div>
    );
};

export default Radium(Test);