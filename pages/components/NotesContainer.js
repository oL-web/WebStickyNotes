import { connect } from "react-redux";
import find from "lodash/find";
import cuid from "cuid";

import InteractWrapper from "./InteractWrapper";

import { addNotes } from "../redux/actions/addNotes";


class NotesContainer extends React.Component {
    componentDidMount() {
        localStorage.notes = localStorage.notes || `[{"id":"${cuid()}","msg":"","x":"60","y":"10"}]`;
        let notesToAdd = JSON.parse(localStorage.notes);

        const sharedNotes = this.props.sharedNotes;
        if (sharedNotes) {
            // for each shared note filter out those withs ids that already exist in local notes
            const nonduplicatedSharedNotes = sharedNotes.filter(item => {
                return !(find(notesToAdd, (obj) => obj.id === item.id));
            });
            notesToAdd = notesToAdd.concat(nonduplicatedSharedNotes);
        }
        localStorage.notes = JSON.stringify(notesToAdd);
        this.props.addNotes(notesToAdd);
    }
    render() {
        return (
            <div>
                {this.props.notes.notes.map((item, index) =>
                    <InteractWrapper key={item.id} id={item.id} msg={item.msg} x={item.x} y={item.y} />
                )}

                <style jsx>{`
                div{
                    position:absolute;
                    top:0;
                    left:0;
                    width:100%;
                    height:100%;
                    overflow-y: hidden;
                }
                    `}</style>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    notes: state.notes,
    accentColor: state.accent.accentColor
});

export default connect(mapStateToProps, { addNotes })(NotesContainer);