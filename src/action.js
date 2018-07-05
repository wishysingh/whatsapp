export function searchContact(text){
    return {
        type: "Search_Contact",
        payload: text
    }
}; 

export function clickContact(text){
    
    return {
        type: "Click_Contact",
        payload: text
    }
}; 

export function replyMessage(text){
    
    return {
        type: "Reply_Message",
        payload: text
    }
};