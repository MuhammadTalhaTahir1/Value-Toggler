// const incrementValueAction=()=>{
//     return{ type: "increment" }
// }
// const decrementValueAction=()=>{
//     return{ type: "decrement" }
// }
const incrementDecrementAction=(actionType)=>{
if(actionType=='increment'){
    return{ type: "increment" }
}
else if(actionType=='decrement'){
    return{ type: "decrement" }
}
}
const setCustomValueAction=(text)=>{
    return{ type: "changeValue", payload: text }
}
export {
    // incrementValueAction,
    // decrementValueAction,
    setCustomValueAction,
    incrementDecrementAction
}