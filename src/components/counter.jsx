import { useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { decrement, increment, incrementByAmount } from "../ducks/counterSlice"

function Counter() {
    const [ input, setInput ] = useState(0)
    const count = useSelector((state) => state.value)
    const dispatch = useDispatch()

    const byAmountSubmit = e => {
        e.preventDefault()
        dispatch(incrementByAmount(+input))
    }

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={() => dispatch(decrement())}>-</button>
            <button onClick={() => dispatch(increment())}>+</button>
            <form onSubmit={e => byAmountSubmit(e)}>
                <input type="number" onChange={e => setInput(e.target.value)} />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default Counter