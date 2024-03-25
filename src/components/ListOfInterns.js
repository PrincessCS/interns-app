import React, {useState} from 'react';
import { InternData } from './InternData';


function ListOfInterns({data}){


    const [search, setSearch] = useState('');

    const handleSearchChange = event => {
      setSearch(event.target.value);
    };

    const filteredInterns = data.filter(intern =>
        intern.name.toLowerCase().includes(search.toLowerCase())
      );


    return(


       
        <>

<div className="top-bar">
    <div className='flex'>
  <a href='#'>HOME</a>
  <a href='#'>TASKS</a>
  <a href='#'>INTERNS</a>
  <a href='#'>FAQ</a>
  
  </div>
  <input
        type="text"
        placeholder="Search Intern by Name..."
        value={search}
        onChange={handleSearchChange}
        className='search-bar'
      />
</div>

    
        <table className='table'>

        <thead>
            <tr>
                <th>Rank</th>
                <th>Display</th>
                <th>Intern Names</th>
                <th>Info</th>
                <th>Task 1</th>
                <th>Task 2</th>
                <th>Task 3</th>
                <th>Task 4</th>
                <th>Total</th>
               
                
                
            </tr>
        </thead>

     <tbody>
        {filteredInterns.map(intern => (
            
            <tr key={intern.name}>
             <td className='rank'>{intern.rank}</td>
            <td><img src = {intern.img} alt={intern.name} className='intern-img'/></td>    
            <td>{intern.name}</td>
            <td>{intern.info}</td>
            <td>{intern.grading.math}</td>
            <td>{intern.grading.eng}</td>
            <td>{intern.grading.bio}</td>
            <td>{intern.grading.phy}</td>
            <td>{intern.grading.total}</td>      
            </tr>
          
            
           
          
            
            

            
          
        
        ))
        }
         </tbody>    
        </table>

       

       </>
    )
}




export default ListOfInterns;