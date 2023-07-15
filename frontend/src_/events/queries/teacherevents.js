import { authorizedFetch } from 'generals/authorizedfetch'

export const TeacherEvents = (id, startdate, enddate) =>
    authorizedFetch('/gql', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        redirect: 'follow', // manual, *follow, error
        body: JSON.stringify({
            "query":
                `query ($id: ID!, $startdate: DateTime!, $enddate: DateTime!) {
                    events: eventByUser(id: $id, startdate: $startdate, enddate: $enddate) {
                            id, startdate, enddate
                            groups { id, name }
                            participants { id, name, surname, email }
                    }
                }`,
            "variables": {"id": id, "startdate": startdate.toISOString().replace('Z', ''), "enddate": enddate.toISOString().replace('Z', '')}
        }),
    })
