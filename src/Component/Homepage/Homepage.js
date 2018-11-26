import React, { Component } from 'react';
import Sticky from 'react-sticky-el';

import Grid from '@material-ui/core/Grid';
import Posts from './Post/Posts';
import SuggestUsers from './Suggest/Users';
import SuggestGenres from './Suggest/Genres';
import Users from './Users';

import '../../Style/Homepage.css'

class Homepage extends Component {
    render() {
        return (
            <Grid container spacing={32}>
                <Grid item xs={1} />
                <Grid className="grid" item xs={3}>
                    <Sticky>
                        <SuggestUsers />
                        <SuggestGenres />
                    </Sticky>
                </Grid>
                <Grid className="grid" item xs={6}>
                    <Posts />
                </Grid>
                <Grid style={{display: "flex", justifyContent: "center"}} className="grid" item xs={1}>
                    <Users />
                </Grid>
                <Grid item xs={1} />
            </Grid>
        );
    }
}

export default Homepage;