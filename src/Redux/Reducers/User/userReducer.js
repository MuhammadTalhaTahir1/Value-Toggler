const initialState = {
   uid: null,
   userName: null,
   isUserLogin: false,
   hobby: [null],
   moreData: {
     city: '',
   },
 };
 
 const userReducer = (state = initialState, action) => {
   switch (action.type) {
     case 'setId':
       return {
         ...state,
         uid: action.id,
       };
 
     case 'setUserName':
       return {
         ...state,
         userName: action.uname,
       };
 
     case 'setUserData':
       const {userName, uid} = action.data;
       return {
         ...state,
         uid: uid,
         userName: userName,
       };
 
     case 'setIsUserLogin':
       return {
         ...state,
         isUserLogin: action.isUserAuthenticate,
       };
 
     default:
       return state;
   }
 };
 
 export default userReducer;