export const dataType = (type) => {
    if(type ==='department') {
        return {
            id:'teamID',
            name:'memberName',
        }
    }
    if(type ==='partners') {
        return {
            id:'externalID',
            name:'memberName',
        }
    }
}