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
                    user: "Bronze Leesin"
                },
                {
                    avatar: "https://avatarfiles.alphacoders.com/110/thumb-110640.png",
                    user: "Silver Yi"
                },
                {
                    avatar: "https://vignette.wikia.nocookie.net/leagueoflegends/images/9/91/Y_que_olvides_tu_apellidoo_zed.png/revision/latest?cb=20171010153449&path-prefix=es",
                    user: "Best Zed"
                },
                {
                    avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxUTuQKVLSEwIIRLRsfp0-sFKQhZrJo4FJ6rco7u_lJOWU3qjJ",
                    user: "Sexy Ahri"
                },
                {
                    avatar: "https://www.mobafire.com/images/avatars/singed-classic.png",
                    user: "Toxic Singed"
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
                        <div className="sgg-user">{user.user}<br/>
                            <Button style={{marginTop: "5px", borderRadius: "20px", minHeight: "25px", height: "25px", padding: "0"}} size="small" variant="outlined" color="primary">Follow</Button>
                        </div>
                    }
                    action={
                        <IconButton className="sgg-action-icon">
                            <ClearIcon style={{fontSize: "15px"}} />
                        </IconButton>
                    }
                />
            )
        })

        return (
            <Card className="sgg-card">
                <CardHeader
                    className="sgg-card-header"
                    title={
                        <div className="sgg-title">Suggested users
                            <a href="/" style={{fontSize: "10px", float: "right"}}>See all</a>
                        </div>
                    }
                />
                {users}
            </Card>
        );
    }
}

export default Users;