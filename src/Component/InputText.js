import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    resize: {
        fontSize: 20,
    },
})

class InputText extends Component {
    render() {
        const { classes } = this.props;

        return (
            <div>
                <TextField
                    type={this.props.type}
                    label={
                        <div style={{ fontSize: "16px" }}>{this.props.label}</div>
                    }
                    InputProps={{
                        classes: {
                            input: classes.resize,
                        },
                    }}
                    onKeyUp = {this.props.update}
                />
            </div>
        );
    }
}

InputText.propTypes = {
    classes: PropTypes.object.isRequired,
    label: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    update: PropTypes.func.isRequired
};

export default withStyles(styles)(InputText);