import './App.css';
// import AutoComplete from './AutoComplete'
import {useState,useEffect} from 'react'
function App () {
  
  const [api,setapi]=useState([]);
  const [loading,setLoading] = useState(false);
  const [search,setSearch] = useState('');
  const [filterSearch,setFilterSearch] = useState([]);

  useEffect( () => {
     setLoading(true);
    fetch( "https://jsonplaceholder.typicode.com/users")
    .then(res => res.json()) 
    .then(data => 
        {
         setapi(data);
         setLoading(false);
        //  console.log(data);       
     }
    )
    .catch(err=> console.log(err));

} , []);

useEffect(()=>{
  setFilterSearch(
    api.filter(user=>{
      return user.name.toLowerCase().includes(search.toLowerCase())
    })
  )
},[search,api])

if(loading){
  return<p>Loading countries.....</p>
}

// const filterUsers = api.filter(user=>{
//   return user.name.toLowerCase().includes(search.toLowerCase())
// })


  return (
    <>
    
    <div className="App">
    <h1>hllo</h1>
      
    <p>this is the demo project to try git</p>
    {/* {search} */}
     <input type="text" placeholder="Search" onChange={e=>setSearch(e.target.value)}/>  
     {
                        filterSearch.map( (value,index)=>{

                            return(
                              
                                <tr> {value.name}&nbsp; &nbsp; &nbsp;{value.website} </tr>
                                
                            )

                        } )
                    }  
    </div>
    {/* <AutoComplete/> */}
    <div className="App">
       <header className="App-header">
         <h1>This is the heading</h1>
       </header>
     </div>

    </>
  );
}

export default App;