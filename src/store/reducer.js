export const initialState = {
    user: null,
    token: null,
    plalists:null
};
const reducer = (state,action)=>{
    console.log(action);

    switch(action.type){
        // 
        case "SET_USER":
            return {
                ...state,
                user:action.user,
            };
            
         // 
        case "SET_TOKEN":
            return {
                ...state,
                token:action.token,
            };

        // 
        case "SET_PLAYLISTS":
            return {
                ...state,
                plalists:action.plalists,
            };
         
        default:
            return state;    
    }
}
export default reducer;