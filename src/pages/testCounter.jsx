// https://redux-toolkit.js.org/tutorials/quick-start

import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, incrementByAmount } from '../redux/counterSlice'

function Counter () {
    const count = useSelector((state) => state.counter.value)
    const dispatch = useDispatch()
    return (
        <div>
        <div>
          <button
            className="btn btn_orange"
            aria-label="Increment value"
            onClick={() => dispatch(increment())}
          >
            +
          </button>
          <span>{count}</span>
          <button
            className="btn btn_orange"
            aria-label="Decrement value"
            onClick={() => dispatch(decrement())}
          >
            -
          </button>
          <br />
          <button
            className="btn btn_orange"
            aria-label="Decrement value"
            onClick={() => dispatch(incrementByAmount(10))}
          >
            +10
          </button>
        </div>
      </div>
    )
}

export default Counter;