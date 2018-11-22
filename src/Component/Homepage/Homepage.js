import React, { Component } from 'react';
import Sticky from 'react-sticky-el';

import Grid from '@material-ui/core/Grid';
import Posts from './Post/Posts';
import SuggestUsers from './Suggest/Users';
import SuggestGenres from './Suggest/Genres';

class Homepage extends Component {
    render() {
        return (
            <Grid container spacing={8}>
                <Grid item xs={2}>
                </Grid>
                <Grid style={{marginTop: "50px"}} item xs={6}>
                    <Posts />
                </Grid>
                <Grid style={{marginTop: "50px"}} item xs={2}>
                    <Sticky>
                        <SuggestUsers />
                        <SuggestGenres />
                    </Sticky>
                </Grid>
                <Grid item xs={2}>
                </Grid>
            </Grid>
        );
    }
}

export default Homepage;