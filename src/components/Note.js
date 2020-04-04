import React, {Component} from 'react';

class Note extends Component {
    onSubmit(e) {
        e.preventDefault();
        const formData = {
            title: this.title.value,
            content: this.content.value
        };
        this.props.submitNote(formData, this.props.note.id);
    }

    handleColorChange = (event) => {
        this.setState({color: event.target.value})
    };

    render() {
        const {note} = this.props;
        return (
            <div className="note-container">
                <h2>Fill data</h2>
                <form
                    className="note-form"
                    onSubmit={(e) => this.onSubmit(e)}
                >
                    <div className="note-title">
                        <input
                            className="note-title-input"
                            type="text"
                            placeholder="Title"
                            defaultValue={note.title}
                            ref={(input) => this.title = input}
                        />
                    </div>
                    <div className="note-textarea-container">
            <textarea
                className="note-textarea"
                placeholder="Note text"
                defaultValue={note.content}
                ref={(input) => this.content = input}
            />
                    </div>

                    <div className="color-picker" onChange={this.handleColorChange}>
                        <span className="color">Color : </span>
                        <input type="radio" name="color-pick" value="#F06292" id="color1"/>
                        <label htmlFor="color1" style={{backgroundColor: "#90ee90"}}/>
                        <input type="radio" name="color-pick" value="#BA68C8" id="color2"/>
                        <label htmlFor="color2" style={{backgroundColor: "#add8e6"}}/>
                        <input type="radio" name="color-pick" value="#FFD54F" id="color3"/>
                        <label htmlFor="color3" style={{backgroundColor: "#ffa500"}}/>
                        <input type="radio" name="color-pick" value="#4FC3F7" id="color4"/>
                        <label htmlFor="color4" style={{backgroundColor: "#f08080"}}/>
                    </div>

                    <input className="note-button" type="submit" value="Create"/>
                </form>

            </div>
        );
    }
}

export default Note;