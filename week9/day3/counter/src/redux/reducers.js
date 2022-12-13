import { INCREMENT,DECREMENT } from "./actions";

const inistate={
    count:0
}

export const reducer=(state=inistate,action={})=>{
    switch (action.type) {
        case INCREMENT:           
            return {...state,count:state.count+1}   
        case DECREMENT:           
            return {...state,count:state.count-1}   
        default:
            return {...state}
    }
}