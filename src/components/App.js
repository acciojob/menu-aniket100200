import React, { useState } from "react";
import Card from "./Card";
import '../styles/App.css';

const App = ()=>{
    const mainState=[
        {
          id: 1,
          title: 'buttermilk pancakes',
          category: 'breakfast',
          price: 15.99,
          img: 'https://imgs.search.brave.com/9WV7IVB3SgB0AtbFw_fgdhV3lTAdfguVeZGby9Q0fAY/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/dGFzdGVvZmhvbWUu/Y29tL3dwLWNvbnRl/bnQvdXBsb2Fkcy8y/MDE4LzAxL0J1dHRl/cm1pbGstUGFuY2Fr/ZXNfRVhQU19UT0hB/TTIyXzMzNjM5X0Ix/MV8xMl8yYi5qcGc_/Zml0PTcwMCw3MDA',
          desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
        },
        {
          id: 2,
          title: 'diner double',
          category: 'lunch',
          price: 13.99,
          img: 'https://imgs.search.brave.com/uhOFxYaW-mrdVONlrk_8MXqSWK6xSDgMBmcetMEAu6E/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/Z2xvYmFsdHJhdmVs/ZXJ1c2EuY29tL3dw/LWNvbnRlbnQvdXBs/b2Fkcy9JTUdfMTE1/NS1lMTQ4OTY2OTk1/NTYxOS0yMjV4MzAw/LmpwZw',
          desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
        },
        {
          id: 3,
          title: 'godzilla milkshake',
          category: 'shakes',
          price: 6.99,
          img: 'https://imgs.search.brave.com/rAFs1QQL3bBO4MDV49bVWguh4ti5D9svtEimGZXdVXw/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly91Y2Fy/ZWNkbi5jb20vNjZh/M2Q3ZTktODQ4OC00/NGE3LTk4ODctNGI2/MWQwNzhkMmEyLy0v/c2NhbGVfY3JvcC8x/NTB4MTUwL2NlbnRl/ci8tL3F1YWxpdHkv/bm9ybWFsLw.jpeg',
          desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
        },
        {
          id: 4,
          title: 'country delight',
          category: 'breakfast',
          price: 20.99,
          img: 'https://imgs.search.brave.com/crikwAm8HqB-nqcTCTEOyAUlRwAJrWJYxpzJBr1tE0Y/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZXRpbWcuY29tL3Ro/dW1iL21zaWQtNjc4/OTU4Nzgsd2lkdGgt/MzAwLGhlaWdodC0y/MjUsaW1nc2l6ZS00/MzExMTIscmVzaXpl/bW9kZS03NS9jb3Vu/dHJ5LWRlbGlnaHQu/anBn',
          desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
        },
        {
          id: 5,
          title: 'egg attack',
          category: 'lunch',
          price: 22.99,
          img: 'https://imgs.search.brave.com/06aRqPEKX6qh_ygFvWo6BpveaZWLtkxFbs5cSndVqLI/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9iZWFz/dC1raW5nZG9tLnVz/L21lZGlhL2NhdGFs/b2cvcHJvZHVjdC9j/YWNoZS80YjExZDMz/MTFmNjZjNmRmNmNh/NWI3YmExNzAxZjZh/Ni9lL2EvZWFhLTA3/MHNwX2lyb25fbWFu/X21hcmtfNTBfYmF0/dGxlX2RhbWFnZWRf/dmVyc2lvbl9fMS5q/cGc',
          desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
        },
        {
          id: 6,
          title: 'oreo dream',
          category: 'shakes',
          price: 18.99,
          img: 'https://imgs.search.brave.com/OUfUTGm6YqUD3I1iIPlWc1Jpy5ffxaGY4sOkBDqmCM4/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9iZWFz/dC1raW5nZG9tLnVz/L21lZGlhL2NhdGFs/b2cvcHJvZHVjdC9j/YWNoZS80YjExZDMz/MTFmNjZjNmRmNmNh/NWI3YmExNzAxZjZh/Ni9lL2EvZWFhLTEx/Nl9hdmVuZ2Vyc19l/bmRnYW1lX2Jyb190/aG9yLWZfNS5qcGc',
          desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
        },
        {
          id: 7,
          title: 'bacon overflow',
          category: 'breakfast',
          price: 8.99,
          img: 'https://imgs.search.brave.com/chRIxOCOkRTuKJnBQG3-AV7pQQfA0AHX4wbU_xcm8ks/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pMS5z/bmRjZG4uY29tL2Fy/dHdvcmtzLTAwMDE4/OTQ1OTI3Ni05d3Zz/YzQtdDUwMHg1MDAu/anBn',
          desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
        },
        {
          id: 8,
          title: 'american classic',
          category: 'lunch',
          price: 12.99,
          img: 'https://imgs.search.brave.com/8yafGDk-JumeSfLjTmOYvmmMOWuBsV3blXqfTtGYtrU/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/eWVuLmNvbS5naC9p/bWFnZXMvMTEyMC81/ZmVmYjA1ZjFiZDEy/ZjMzLmpwZWc_dj0x',
          desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
        },
        {
          id: 9,
          title: 'quarantine buddy',
          category: 'shakes',
          price: 16.99,
          img: 'https://imgs.search.brave.com/LFbJRf3_LjQvnB8m41ClsP32xOgX7a8cLCG9NVXBw_4/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/cmVkZGl0c3RhdGlj/LmNvbS9kZXNrdG9w/MngvaW1nL3dpZGdl/dHMvcmVyZWRkaXQt/cHJvbW8vY2VudGVy/LnBuZw',
          desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
        },
      ]
      
      const[state,setState] = useState(mainState);
      const[category,setCategory]= useState("all");
      const doSomething =(cat)=>{
            setCategory(category);
           document.querySelector(".curr").classList.remove("curr");
           document.getElementById(cat).classList.add("curr");
           setState(mainState.filter((ele)=>{
                if(cat==="all")return true;
                return ele.category===cat;
           }))

           console.log(state);

      }

    return <div style={{display:"flex", flexDirection:"column",alignItems:"center"}}>
                <h1 style={{textDecoration:"underline"}}>Our Menu</h1>
                <div>
                    <ul  style={{listStyleType:"none",display:"flex",gap:"20px"}}>
                        <li className="curr" id="all" onClick={()=>{doSomething("all");}}>All</li>
                        <li id="breakfast" onClick={()=>{doSomething("breakfast")}}>BreakFast</li>
                        <li id="lunch" onClick={()=>{doSomething("lunch")}}>Lunch</li>
                        <li id="shakes" onClick={()=>{doSomething("shakes")}}>Shakes</li>
                    </ul>
                </div>
                <div style={{display:"grid",gridTemplateColumns:"1fr 1fr"}}>
                    {
                        state.map((item,index)=>(
                            <Card key={item.id} obj={item}/>
                        ))
                    }
                </div>
           </div>
}

export default App;