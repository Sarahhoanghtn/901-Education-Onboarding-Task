import { Permissions, webMethod } from "./wix-web-methods-mock";
import wixDataMock from "./wix-data-mock";

export const getTeamStatus = webMethod(Permissions.Anyone, async (teamId: string) => {
    const team = await wixDataMock.get('Teams', teamId);
    if (team) {
        return {
            id: team._id,
            teamName: team.teamName,
            approved: team.approved
        }
    }
    return null;
})

console.log(await getTeamStatus("1"));
console.log(await getTeamStatus("999"));