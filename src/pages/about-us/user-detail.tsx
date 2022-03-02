import React from "react"
import { IUserDetail } from "../../service/reqres/users.interface"

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
