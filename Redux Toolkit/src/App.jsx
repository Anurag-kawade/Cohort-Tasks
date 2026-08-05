import { useDispatch, useSelector } from 'react-redux'
import {increment,decrement,reset,incrementBy5,decrementBy5} from './redux/slices/CounterSlice'
import {changeThemeToLight,changeThemeToDark} from './redux/slices/ThemeSlice'

const App = () => {
  const dispatch = useDispatch()
  const num = useSelector((state)=>state.counter.value)
  const theme = useSelector((state) => state.theme.value)
  return (
    <div className="all-content">
      <div className="counter">
        <h1>{num}</h1>
        <div className="btn">
          <button onClick={()=>{
            dispatch(increment())
          }} className="inc">Increase</button>
          <button onClick={()=>{
            dispatch(decrement())
          }} className="dec">Decrease</button>
          <button onClick={()=>{
            dispatch(incrementBy5())
          }} className="inc">Increase By 5</button>
          <button onClick={()=>{
            dispatch(decrementBy5())
          }} className="dec">Decrease By 5</button>
          <button onClick={()=>{
            dispatch(reset())
          }} className="reset">Reset</button>
        </div>
      </div>
      <div className="theme">
        <h2>The Theme is :- {theme}</h2>
        <button onClick={()=>{
          dispatch(changeThemeToLight())
        }} className="change">Change to Light</button>
        <button onClick={()=>{
          dispatch(changeThemeToDark())
        }} className="change">Change to Dark</button>
      </div>
    </div>
  );
};

export default App;
