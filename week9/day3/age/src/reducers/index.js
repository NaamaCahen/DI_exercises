import { UP,DOWN } from "../actions";

const inistate={
    age:20
}

export const reducer=(state=inistate,action={})=>{
    switch (action.type) {
        case UP:
            return {...state,age:state.age+1}   
        case DOWN:
            return {...state,age:state.age-1}   
        default:
            return {...state}
    }
}