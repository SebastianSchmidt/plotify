import React from "react";

export default class CharactersList extends React.Component {
  render() {
    return(
      <div id="characters">
        <div id="characters-toolbar">
          <label htmlFor="characters-search-input"
                 className={this.props.filter ? "filter-not-empty" : ""}>
            <i className="fa fa-search" aria-hidden="true"></i>
          </label>
          <input
            type="text"
            placeholder="Charaktere suchen"
            value={this.props.filter}
            onChange={event => { this.props.onSetFilter(event.target.value); }} />
          <button onClick={this.props.onAddCharacter}>
            <i className="fa fa-plus" aria-hidden="true"></i>
          </button>
        </div>
        <ul data-empty-message={this.props.emptyMessage}>
          {this.props.characters.map((character, index) => {
            return (
              <CharacterListElement
                name={character.name}
                key={character.id}
                selectedCharacter={this.props.selectedCharacterId === character.id}
                newCharacter={this.props.selectedCharacterId === character.id &&
                              this.props.selectedCharacterIsNew}
                onSelectCharacter={() => this.props.onSelectCharacter(character.id) }
                onUnselectCharacter={() => this.props.onUnselectCharacter() } />
            );
          })}
        </ul>
      </div>
    );
  }
}

export class CharacterListElement extends React.Component {

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    if (event.ctrlKey && this.props.selectedCharacter) {
      this.props.onUnselectCharacter();
    } else {
      this.props.onSelectCharacter();
    }
  }

  render() {

    let name = this.props.name;
    let classNames = "";

    if (this.props.selectedCharacter) {
      classNames = "selected-character";
    }

    if (!this.props.name) {

      classNames += " character-without-name";

      if (this.props.newCharacter) {
        name = "Neuer Charakter";
      } else {
        name = "Kein Name";
      }

    }

    return (
      <li className={classNames} onClick={(event) => this.handleClick(event)}>{name}</li>
    );

  }
}