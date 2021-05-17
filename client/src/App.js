
import { useEffect, useState } from 'react';
import FileBase64 from 'react-file-base64';
import { createItem, getItems } from './functions';

function App() {

  const [item, setItem] = useState({title:'',image:''});
  const [items,setItems] = useState([])
  const onSubmitHandler = async (e)=>{
    e.preventDefault();
    const result = await createItem(item);

   setItems([...items,result]);
  }

  useEffect(() => {
   const fetchData = async()=>{
     const result = await getItems();
     console.log('fetch data;m',result)
     setItems(result)
   }
   fetchData()
  }, [])
  return (
    <div className="App">
      <pre>{JSON.stringify(item,null,'\t')}</pre>
      <form action="" onSubmit={onSubmitHandler}>
        <input type="text" 
        
          onChange={e=>setItem({...item,title:e.target.value})}
        />
        <FileBase64
        type="file"
        multiple={false}
        onDone={({base64})=>setItem({...item,image:base64})}
        />
        <button>submit</button>

      </form>
      {items?.map(item=>(
        <div>
<div key={item._id} className="card">
  <div className="card-image waves-effect waves-block waves-light">
    <img className="activator" style={{width:'100%',height:300}} src={item.image} />
  </div>
  <div className="card-content">
    <span className="card-title activator grey-text text-darken-4">{item.title}</span>
  </div>

</div>


        </div>
      ))}
    </div>
  );
}

export default App;
