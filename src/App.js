import React, {Component} from 'react';
import './App.css';
import Nav from './components/Nav';
import List from './components/NoteList';
import Note from './components/Note';
import axios from 'axios';
import urlFor from './db/urlFor';

class App extends Component {
    constructor() {
        super();
        this.state = {
            showNote: false,
            notes: [],
            note: {},
        };
    }

    toggleNote = () => {
        this.setState({
            showNote: !this.state.showNote,
            note: {}
        })
    };

    getNotes = () => {
        axios.get(urlFor('notes'))
            .then((res) => this.setState({notes: res.data}));
    };


    submissionRequest = (data, id) => {
        if (id) {
            return axios.patch(urlFor(`notes/${id}`), data);
        } else {
            return axios.post(urlFor('notes'), data);
        }
    };

    submitNote = (data, id) => {
        this.submissionRequest(data, id)
            .then((res) => this.setState({showNote: false}));
    };

    render() {
        const {showNote, notes, note} = this.state;

        return (
            <div className="App">
                <Nav toggleNote={this.toggleNote} showNote={showNote}/>

                <br/>
                {showNote ?
                    <Note
                        note={note}
                        submitNote={this.submitNote}
                    />
                    :
                    <List
                        getNotes={this.getNotes}
                        notes={notes}
                    />}
            </div>
        );
    }
}

export default App;
