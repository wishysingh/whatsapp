const initialStateContact = {
    searchfield:"",
    clickedname:"",
    clickedphone:"",
    replymessage:[]
}

export const contactReducer = (state=initialStateContact, action={})=>{
    switch(action.type){
        case "Search_Contact" :
        return Object.assign({},state,{searchfield:action.payload});
        case "Click_Contact" :
        return Object.assign({},state,{clickedname:action.payload1,clickedphone:action.payload2});
        case "Reply_Message" :
        let newValue = state.replymessage;
        newValue.push(action.payload)
        return Object.assign({},state,{replymessage:newValue});
        default:
        return state
    }   
}