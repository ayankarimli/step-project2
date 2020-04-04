import React, {Component} from 'react';
import './App.css';
import Nav from './components/Nav';
import List from './components/NoteList';
import Note from './components/Note';
import axios from 'axios';
import urlFor from './db/urlFor';
import SingleNote from "./components/SingleNote";
import NoteCard from "./components/NoteCard";
import ModalWindow from "./components/ModalWindow";


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showSingleNote: false,
            showNote: false,
            notes: [],
            note: {},
        };
    }
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


    toggleNote = () => {
        this.setState({
            showNote: !this.state.showNote,
            note: {}
        })
    };

    showSingleNote = (e) => {
        this.setState({showSingleNote: !this.state.showSingleNote})
    };

    render() {
        const {showSingleNote,showNote, notes, note} = this.state;

        return (

            <div className="App">
                <Nav toggleNote={this.toggleNote} showNote={showNote} showSingleNote={this.showSingleNote}/>

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

                {showSingleNote ?
                    <SingleNote
                        toggleNote={this.toggleNote} showNote={showNote}/>
                    :
                    null}

            </div>
        );
    }
}

export default App;
