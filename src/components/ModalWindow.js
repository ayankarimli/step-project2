import React, {Component} from 'react';

class ModalWindow extends Component {
    render() {
        return (
            <div className="modal-window">
                <button className="submit-modal">OK</button>
                <button className="cancel-modal">Cancel</button>
                
            </div>
        );
    }
}

export default ModalWindow;