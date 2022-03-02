import { IUserList } from './users.interface'

const BASE_URL = 'https://reqres.in'

/**
 * Utilize the reqres API in order to get the list of users
 *  pageNumber is by default 1 if it has not been passed.
 *
 * @param pageNumber 
 * @returns 
 */
export const getUsers = async (pageNumber: number = 1) => {
    const delayInSeconds = 1 // could be extracted later

    const data = await fetch(`${BASE_URL}/api/users?delay=${delayInSeconds}&page=${pageNumber}`)
        .then(async (response) => {
            console.log('response', response)
            if (!response.ok) {
                throw new Error(response.statusText)
            }
            const data = await response.json()
            console.log('innerData', data)
            return data as IUserList
        })

    console.log('outerData', data)
    return data
}