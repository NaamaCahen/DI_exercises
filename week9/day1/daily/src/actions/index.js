export const DETAIL='DETAIL';

export const viewDetails=(obj)=>{
    console.log(obj);
    return{
        type:DETAIL,
        payload:obj
    }
}