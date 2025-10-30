import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Gallery from './component/Gallery'
import Book from './component/Book'
import StateHandling from './component/StateHandling'
import ImageManipulation from './component/ImageManipulation'

function App() {
//   const student=
//   [{
// name:"Ansh",
// age:19,
// barnch:"CSE",
// college:"ABES Engineering College",
// location:"Ghazibad"
//   },
//   {
// name:"Ram",
// age:20,
// barnch:"CSE",
// college:"ABES Engineering College",
// location:"Ghazibad"
//   },
//   {
// name:"Vansh",
// age:20,
// barnch:"IT",
// college:"ABES Engineering College",
// location:"Ghazibad"
//   }
// ]

const BookData=[{
  img:"https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSOFIK24fVeCjrrBFZ1yftHiGU4iIOP_n5F9vPJPfkSEM-f6RS5",
  title: "Java: The Complete Reference, Thirteenth Edition",
  publisher: "McGraw-Hill Osborne Media",
  price: "Rs. 3999"
},
{
    img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbmu6l0_IA8ddxDvL6ZsPLE1Ge16EgRuOVUZjTiL92zVUTEMMFLJ-YntD3VcbcVLxe4XfYxuwu6_DYKD0ItZg9NqgaXTl3W8UAZw0YHh5jXg&s=10",
  title: "Python Book",
  publisher: "New",
  price: "Rs. 4999"
},
{
    img:"https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSAArS6NpUdvamjH_re3k7HApKeSLsr86nl7ctEOC1BynG9LmsATlYOFViwJ-0byr-dob0wONxFrtsAk4kKBgQTfyeQqs-2MrQMxfIzDAN_DA",
  title: "C++ Book",
  publisher: "Old Media",
  price: "Rs. 599"
},
{  img:"https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQP1ylWzmQry4xuKpzmNxRc1X6eXIQdj87Zz97_nAeNcDhAJIh1UsFv96-PxQLzbe77KTTcLfvH_Fo8VgTNfUsZ-YJ0hA04pz6MZlsmrZUKCw",
  title: "Ruby on Rails",
  publisher: "Oscorp Media Productions",
  price: "Rs. 9999"
}
]


 

  return (
    <div>
    <h2>ABES Engineering College</h2>   
    {/* <Gallery />   */}
    {/* <ICard name="Rahul Singh" age="20" branch="CSE" college="ABES Engineering College" location="Ghaziabad" /> */}
    {/* <ICard data={student} /> */}
    {/* {<Book book={BookData}/>} */}

    {/* <div className='container'>
      {BookData.map((ele,indes)=>(
      <Book book={ele} />
    ))}
    
    </div> */}

    {/* <StateHandling/> */}
    <ImageManipulation/>
    
     
    </div>
  )
}

export default App
