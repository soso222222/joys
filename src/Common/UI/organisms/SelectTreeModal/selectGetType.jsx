import { getPartners, getPartnersMembers, getRegularDepartment, getRegularMembers } from '../../../Service/dbManage'

const selectGetType = (type, id) => {

    if(type === 'department'){
        const departmentTeams = async (id) => {
            const data = await getRegularDepartment(id)
            return data.teams
        }
        const members = async (id) => {
            const data = await getRegularMembers(id)
            return data.members;
        }
        return {
            treeDatas:departmentTeams,
            selectData:members
        }
    }

    if(type === 'partners'){
        console.log('partners')
        const departmentTeams = async (id) => {
            const data = await getPartners(id)
            return data.teams
        }
        const members = async (id) => {
            const data = await getPartnersMembers(id)
            return data.members;
        }
        return {
            treeDatas:departmentTeams,
            selectData:members
        }
    }
}

export default selectGetType