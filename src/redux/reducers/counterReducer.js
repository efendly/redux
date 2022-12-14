


 const counterReducer=(state=0,action)=>{

switch (action.type) {
    case 'Increment':
        return state=state+action.payload;
    case 'Decrement':
        return state=state-action.payload;
    default:
        return state;
}

}
export default counterReducer;