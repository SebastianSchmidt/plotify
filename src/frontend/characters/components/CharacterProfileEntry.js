import React, { Component } from 'react'

import AutosavingTextField from '../../shared/AutosavingTextField'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { withStyles } from 'material-ui/styles'

class CharacterProfileEntry extends Component {
  render () {
    const { classes, className, entry, editMode } = this.props
    let inputProps
    if (!editMode) {
      inputProps = {
        disableUnderline: true,
        classes: {
          input: classes.inputDisabled
        }
      }
    } else {
      inputProps = {
        classes: {
          root: classes.inputRoot,
          input: classes.input
        }
      }
    }
    return (
      <div className={classNames(classes.entry, className)}>
        <AutosavingTextField
          className={classes.textField}
          label={entry.title}
          defaultValue={entry.value}
          disabled={!editMode}
          InputProps={inputProps}
          fullWidth
          multiline
        />
      </div>
    )
  }
}

CharacterProfileEntry.propTypes = {
  classes: PropTypes.object.isRequired,
  className: PropTypes.string,
  entry: PropTypes.object.isRequired,
  editMode: PropTypes.bool.isRequired
}

CharacterProfileEntry.defaultProps = {
  editMode: true
}

const styles = (theme) => ({
  entry: {
    padding: theme.spacing.unit * 3
  },
  inputRoot: {
    '&:before': {
      backgroundColor: 'rgba(0, 0, 0, 0.2)'
    }
  },
  inputDisabled: {
    color: theme.palette.text.primary
  },
  input: {
    '&:hover': {
      cursor: 'text'
    }
  },
  textField: {
  }
})

export default withStyles(styles)(CharacterProfileEntry)
