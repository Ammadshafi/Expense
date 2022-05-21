export const AppReducer=(state,action)=>{
    switch (action.type) {
      case 'Delete':
            return{
                ...state,
                transiction:state.transiction
                .filter(cur=>cur.id !== action.load)



            }
            case 'Add':
                return{
                    ...state,
                    transiction:[action.load,...state.transiction]
    
    
    
                }


    }
}
