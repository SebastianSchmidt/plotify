import React, { Component } from "react";
import { connect } from "react-redux";
import * as s from "../selectors";
import * as a from "../actions";
import { Paper, TextField, CircularProgress } from "material-ui";
import ProfileGroupsList from "./ProfileGroupsList";
import { palette, spacing } from "../../../themes/PlotifyMainTheme";
import { white } from "material-ui/styles/colors";
import StatusTextField from "./StatusTextField";

const mapStateToProps = (state) => {
  return {
    characterId: s.getCharacterId(state),
    characterName: s.getCharacterName(state),
    isCharacterDeleted: s.isCharacterDeleted(state),
    isLoading: s.isLoading(state),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleCharacterNameChanged: (changedName) => dispatch(a.setCharacterName(changedName)),
    saveCharacterName: () => dispatch(a.saveCharacterName()),
  };
};

const styles = {
  wrapper: {
    height: "100%"
  },
  nameHeader: {
    zIndex: 1,
    position: "relative",
    height: spacing.desktopToolbarHeight * 2,
    backgroundColor: palette.primary2Color,
    left: 0,
    right: 0,
    padding: spacing.desktopGutterLess,
  },
  nameInput: {
    inputStyle: {
      color: white,
    },
    floatingLabelFocusStyle: {
      color: white,
    },
    floatingLabelStyle: {
      color: white,
    },
    underlineFocusStyle: {
      borderColor: white,
    }
  },
  profileLoading: {
    position: "relative",
    left: "50%",
    marginLeft: -12,
    top: 50,
  },
};

const entryGroupWrapperStyle = {
  position: "relative",
  overflowY: "auto",
  left: 0,
  right: 0,
  height: "calc(100% - " + (styles.nameHeader.height) + "px)",
};

class CharacterProfileComponent extends Component {
  constructor(props) {
    super(props);
    this.handleCharacterChanged = this.handleCharacterChanged.bind(this);
    this.saveCharacterName = this.saveCharacterName.bind(this);
  }

  handleCharacterChanged(event) {
    this.props.handleCharacterNameChanged(event.target.value);
  }

  saveCharacterName() {
    this.props.saveCharacterName();
  }

  render() {
    return (
      <div style={styles.wrapper}>
        <Paper rounded={false}
               zDepth={2}
               style={styles.nameHeader}>
          <StatusTextField
            floatingLabelText="Name"
            value={this.props.characterName}
            style={styles.nameInput}
            inputStyle={styles.nameInput.inputStyle}
            floatingLabelFocusStyle={styles.nameInput.floatingLabelFocusStyle}
            floatingLabelStyle={styles.nameInput.floatingLabelStyle}
            underlineFocusStyle={styles.nameInput.underlineFocusStyle}
            fullWidth={true}
            onChange={this.handleCharacterChanged}
            onBlur={this.saveCharacterName}
          />
        </Paper>
        <div style={entryGroupWrapperStyle} className="scrollable">
          <CircularProgress
            size={24}
            thickness={2}
            style={this.props.isLoading ? styles.profileLoading : { display: "none" }}/>
          <ProfileGroupsList />
        </div>
      </div>
    );
  }
}

const CharacterProfile = connect(
  mapStateToProps,
  mapDispatchToProps
)(CharacterProfileComponent);

export default CharacterProfile;
