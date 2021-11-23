import React from 'react'
import {useSelector} from 'react-redux'
import {useDispatch} from 'react-redux'
import { buyCake } from './redux/cake/cakeAction'



function HooksCakeContainer() {
    const numOfCake = useSelector(state => state.numberOfCake)
    const dispatch=useDispatch()
    return (
        <div>
            <h1>number of cake{numOfCake}</h1>
            <button onClick={()=>dispatch(buyCake())}>buy cake</button>
        </div>
    )
}

export default HooksCakeContainer
