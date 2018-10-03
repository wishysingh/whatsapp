export function searchContact(text){
    return {
        type: "Search_Contact",
        payload: text
    }
}; 

export function clickContact(text,phone){
    
    return {
        type: "Click_Contact",
        payload1: text,
        payload2: phone
    }
}; 

export function replyMessage(text){
    
    return {
        type: "Reply_Message",
        payload: text
    }
};