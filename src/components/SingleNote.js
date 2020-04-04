import React, {Component} from 'react';

class SingleNote extends Component {
    render() {
        const {toggleNote,note} = this.props
        return (
            <div className="single-note-container">
                <div className="single-notes">{note}</div>
                <button className="single-note-button" onClick={() => toggleNote()}>Edit</button><br/>
                <button className="single-note-button">Archieve</button><br/>
                <button className="single-note-button">Delete</button>

            </div>
        );
    }
}

export default SingleNote;