import React, { useEffect, useState } from "react"
import { getUsers } from "../../service/reqres/reqres-integration"
import { IUserDetail, IUserList } from "../../service/reqres/users.interface"
import UserDetail from "./user-detail"

function AboutUs() {
    const [users, setUsers] = useState<IUserDetail[]>([])

    const showUsers = async (pageNumber: number) => {
        const {
            page,
            total_pages,
            data
        }: IUserList = await getUsers(pageNumber)
        // initial push of users
        const usersCollection = data
        // loop through potentially other users.
        for(let i=page+1; i<=total_pages; i++) {
            const {data}: IUserList = await getUsers(i)
            usersCollection.push(...data)
        }
        return usersCollection
    }

    useEffect(() => {
        showUsers(1)
            .then( users => {
                setUsers(users)
            })
    }, [])

    return (
        <div className="display-users">
            <h1> Meet the team </h1>
            {
                users.map((row: IUserDetail, key) => {
                    return (
                        // This could be done better by passing in the prop instead
                        <UserDetail
                            key={key}
                            id={row.id}
                            email={row.email}
                            first_name={row.last_name}
                            last_name={row.last_name}
                            avatar={row.avatar}
                        />
                    )
                })
            }
        </div>
    )
}

export default AboutUs
