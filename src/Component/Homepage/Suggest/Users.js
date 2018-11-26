import React, { Component } from 'react';

import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import ClearIcon from '@material-ui/icons/Clear';

import '../../../Style/Suggest.css';

class Users extends Component {

    constructor(props) {
        super(props);
        this.state = {
            users: [
                {
                    avatar: "https://www.mobafire.com/images/avatars/lee-sin-muay-thai.png",
                    user: "Nhan Dep Trai",
                    isFollow: false
                },
                {
                    avatar: "https://avatarfiles.alphacoders.com/110/thumb-110640.png",
                    user: "Manh Vat Vo",
                    isFollow: false
                },
                {
                    avatar: "https://vignette.wikia.nocookie.net/leagueoflegends/images/9/91/Y_que_olvides_tu_apellidoo_zed.png/revision/latest?cb=20171010153449&path-prefix=es",
                    user: "Dat vai feet",
                    isFollow: false
                },
                {
                    avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxUTuQKVLSEwIIRLRsfp0-sFKQhZrJo4FJ6rco7u_lJOWU3qjJ",
                    user: "Khoa Tran 14 tuoi",
                    isFollow: false
                },
                {
                    avatar: "https://www.mobafire.com/images/avatars/singed-classic.png",
                    user: "Dat tung phim",
                    isFollow: false
                }
            ]
        }
    }

    render() {
        let users = this.state.users.map((user) => {
            return (
                <CardHeader
                    className="sgg-card-title"
                    avatar={
                        <Avatar src={user.avatar} className="sgg-avatar" />
                    }
                    title={
                        <div className="sgg-user">{user.user}<br />
                            <Button className="sgg-follow" size="small" variant="outlined" color="primary">Follow</Button>
                        </div>
                    }
                    action={
                        <IconButton className="sgg-action-icon">
                            <ClearIcon style={{ fontSize: "15px" }} />
                        </IconButton>
                    }
                />
            )
        })

        return (
            <Card style={{ marginTop: "90px" }} className="sgg-card">
                <CardHeader
                    className="sgg-card-header"
                    title={
                        <div className="sgg-title">Suggested users
                            <a href="/" style={{ fontSize: "12px", float: "right" }}>See all</a>
                        </div>
                    }
                />
                {users}
            </Card>
        );
    }
}

export default Users;