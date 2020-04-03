import React, {Component} from 'react';

class Nav extends Component {
    render() {
        const {toggleNote, showNote} = this.props;

        return (
            <div className="nav-container">
                <div className="nav-logo">NotesApp</div>
                <button className="nav-button" onClick={() => toggleNote()}>
                    {showNote ? 'Cancel' : 'Create'}
                </button>
                <button className="nav-button">
                    Archive
                </button>
                <button className="nav-button">
                    Actual
                </button>
            </div>
        );
    }
}

export default Nav;