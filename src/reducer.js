const initialStateContact = {
    searchfield:"",
    clickedname:"",
    replymessage:[]
}

export const contactReducer = (state=initialStateContact, action={})=>{
    switch(action.type){
        case "Search_Contact" :
        return Object.assign({},state,{searchfield:action.payload});
        case "Click_Contact" :
        return Object.assign({},state,{clickedname:action.payload});
        case "Reply_Message" :
        console.log(action.payload)
        let newValue = state.replymessage;
        newValue.push(action.payload)
        console.log(newValue)
        return Object.assign({},state,{replymessage:newValue});
        default:
        return state
    }   
}