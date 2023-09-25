import React from 'react'
import { useSelector,useDispatch} from "react-redux";
import { decrement, increment, incrementByAmount } from '../Redux/counter';

const Game = () => {
    const count = useSelector((state) => state.counter.count);
    const dispatch = useDispatch();
  return (
    <div>
        <h1 className='text-center'>{count}</h1>
        <div className='d-flex'>
            <button 
            onClick={()=> dispatch(increment())}
            className='btn btn-success text-white p-2 mx-1'>
                increment
            </button>
            <button 
            onClick={()=> dispatch(decrement())}
            className='btn btn-success text-white p-2 mx-1'>
                decrement
            </button>
            <button 
            onClick={()=> dispatch(incrementByAmount(20))}
            className='btn btn-success text-white p-2 mx-1'>
                Increment by Amount
            </button>

        </div>
    </div>
  )
}

export default Game