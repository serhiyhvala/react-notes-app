import { MdDeleteForever } from 'react-icons/md'

const Note = () => {
    return(
        <div className="note">
            <span>Hello! This is our first Note</span>
            <div className="note-footer">
                <small>13/04/2021</small>
                <MdDeleteForever className="delete-icons" size="1.3em" />
            </div>
        </div>
    )
}

export default Note;