import axios from 'axios'

const App = () => {
  const getData = async()=>{
    const response = await axios.get('https://picsum.photos/v2/list?page=2&limit=100')

    console.log(response)
  }
  return (
    <button onClick={getData} type="submit">Get Data</button>
  )
}

export default App