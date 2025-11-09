import './App.css'
import axios from 'axios'

const loadData = async () =>{
  try {
    const result = await axios.get("https://jsonplaceholder.typicode.com/posts/2");
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};

function App() {
  return (
    <div>
      <button onClick={() => loadData(true)}>Get data</button>
    </div>
  )
}

///  Promise
// const myPromise = (isSuccess) => {
//   return new Promise((resolve, reject) => {
//     if(isSuccess){
//       resolve("Data loaded successfully!");
//     } else{
//       reject("Somthing went wrong!")
//     }
//   });
// };

// const loadData = (isSuccess) =>{
//   myPromise(isSuccess)
//   .then((result) => console.log(result))
//   .catch((error) => console.log(error))
//   .finally(() => console.log("Done"));
// };

// const loadData = async (isSuccess) =>{
//   try{
//     const message = await myPromise(isSuccess)
//     console.log(message);
//   } catch(error){
//     console.log(error);
//   } finally{
//     console.log("Done");
//   }
// };

// function App() {
//   return (
//     <div>
//       <button onClick={() => loadData(true)}>Successful promise</button>
//       <button onClick={() => loadData(false)}>Rejected promise</button>
//     </div>
//   )
// }

export default App
