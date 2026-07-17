import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import Section from "./components/Section"

const App = () => {

  let user = 'Anurag'
  return (
    <div>
      <Navbar user = {user}/>              {/*props*/}
      <Section> 
        <h2>This is Sheryians</h2>         {/*single children*/}
      </Section>
      <Footer>
        <p>Hello World</p>
        <p>Hii from my side</p>            {/*multiple children*/}
      </Footer>
    </div>
  )
}

export default App