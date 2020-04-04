import React, {Component} from 'react';

class Nav extends Component {
    render() {
        const {toggleNote, showNote,showSingleNote} = this.props;

        return (
            <div className="nav-container">
                <div className="nav-logo">NotesApp</div>
                <button className="nav-button" onClick={() => toggleNote()}>
                    {showNote ? 'Cancel' : 'Create'}
                </button>
                <button className="nav-button">
                    Archive
                </button>
                <button className="nav-button" onClick={() => showSingleNote()}>
                    Actual
                </button>
            </div>
        );
    }
}

export default Nav;