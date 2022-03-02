import React from "react"
import { IUserDetail } from "../../service/reqres/users.interface"

/**
 * Separating out the user to format the component
 * 
 * @param prop The detail of the user per Reqres interface
 * @returns 
 */
function UserDetail(prop: IUserDetail) {
    const {
        email,
        first_name,
        last_name,
        avatar,
    } = prop

    return (
        <div className="user">
            <img src={avatar} alt=''/>
            <div className="user-info">
                <h3>{first_name} {last_name}</h3>
                <span>{email}</span>
            </div>
        </div>
    )
}

export default UserDetail
