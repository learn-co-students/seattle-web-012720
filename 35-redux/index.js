const redux = require("redux");
const createStore = redux.createStore;

const initialState = {
    donuts: 0,
    donutsEaten: 0
}

// const makeDonut = {
//     type: "MAKE_DONUT",
//     flavor: "chocolate"
// }

//action types
const MAKE_DONUT = "MAKE_DONUT";
const EAT_DONUT = "EAT_DONUT"

//action creator
const makeDonut = () => {
    return {
      type: MAKE_DONUT,
      flavor: "chocolate",
    };
}

const eatDonut = () => {
    return {
        type: EAT_DONUT
    }
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case MAKE_DONUT:
        return {
            ...state,
            donuts: state.donuts + 1
        }
        case EAT_DONUT:
        return {
            ...state,
            donuts: state.donuts - 1,
            donutsEaten: state.donutsEaten +1
        }
        default:
            return state;
    }
}

const store = createStore(reducer);

store.subscribe(() => {
    console.log("CURRENT STATE", store.getState())
})

console.log("INITIAL STATE", store.getState())

store.dispatch(makeDonut());
store.dispatch(makeDonut());
store.dispatch(eatDonut());
store.dispatch(makeDonut());
store.dispatch(makeDonut());
store.dispatch(makeDonut());




console.log("Hello from redux")

