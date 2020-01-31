import {createStore,applyMiddleware,combineReducers} from 'redux'
import {logger} from 'redux-logger'
import promise from 'redux-promise-middleware'
import category from './reducers/category'
import today from './reducers/today'
import event from './reducers/event'
import payment from './reducers/payment'
import ticket from './reducers/ticket'

// middleware
const middleware = applyMiddleware(
    logger,
    promise
)
// reducers
const reducers = combineReducers({
    event,
    category,
    today,
    payment,
    ticket
})
// store
const store = createStore(
    reducers,
    middleware
    )

export default store