import React, { Component } from 'react';

import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import Chip from '@material-ui/core/Chip';
import CardContent from '@material-ui/core/CardContent';

import '../../../Style/Suggest.css';

class Genres extends Component {

    constructor(props) {
        super(props);
        this.state = {
            genres: ["dog", "sky", "cat", "lol", "people", "girl", "mr dat", "tungphin", "motlit"]
        }
    }

    render() {

        let color = "primary";

        let genres = this.state.genres.map((genre) => {
            if (color === "default") color = "primary";
            else if (color === "primary") color = "secondary";
            else color = "default";

            return (
                <Chip clickable color={color} label={genre} className="sgg-chip" />
            )
        })

        return (
            <Card className="sgg-card">
                <CardHeader
                    className="sgg-card-header"
                    title={
                        <div className="sgg-title">Popular tags</div>
                    }
                />
                <CardContent className="sgg-card-content">
                    {genres}
                </CardContent>
            </Card>
        );
    }
}

export default Genres;