import * as interact from "interactjs";
import cuid from "cuid";

import CommandBar from "react-uwp/CommandBar";
import AppBarButton from "react-uwp/AppBarButton";
import AppBarSeparator from "react-uwp/AppBarSeparator";

import { connect } from "react-redux";
import { addNotes } from "../redux/actions/addNotes";
import { deleteNote } from "../redux/actions/deleteNote";

class InteractWrapper extends React.Component {
    componentDidMount() {
        interact(this.refs.interact)
            .draggable({
                inertia: false,
                restrict: {
                    restriction: "self",
                    endOnly: true,
                    elementRect: { top: 0, left: 0, bottom: 1, right: 1 }
                },
                ignoreFrom: "textarea, [class*='command-bar-commands']",
                autoScroll: true,
                onmove: function (event) {
                    var target = event.target,
                        x = (parseFloat(target.getAttribute('data-x')) || this.props.x || 0) * 1 + event.dx,
                        y = (parseFloat(target.getAttribute('data-y')) || this.props.y || 0) * 1 + event.dy;

                    target.style.webkitTransform =
                        target.style.transform =
                        'translate(' + x + 'px, ' + y + 'px)';

                    target.setAttribute('data-x', x);
                    target.setAttribute('data-y', y);
                }.bind(this)
            })
            .resizable({
                edges: { left: true, right: true, bottom: true, top: true },
                restrictEdges: {
                    outer: 'parent',
                    endOnly: true,
                },
                restrictSize: {
                    min: { width: 300, height: 300 },
                },
                inertia: true,
            })
            .on('resizemove', function (event) {
                var target = event.target,
                    x = (parseFloat(target.getAttribute('data-x')) || this.props.x || 0) * 1,
                    y = (parseFloat(target.getAttribute('data-y')) || this.props.y || 0) * 1;

                target.style.width = event.rect.width + 'px';
                target.style.height = event.rect.height + 'px';

                x += event.deltaRect.left;
                y += event.deltaRect.top;

                target.style.webkitTransform = target.style.transform =
                    'translate(' + x + 'px,' + y + 'px)';

                target.setAttribute('data-x', x);
                target.setAttribute('data-y', y);
            }.bind(this))
            .on('dragend', function (event) {
                this.saveNote(this.refs.textarea);
            }.bind(this));
    }
    saveNote(e) {
        const target = e.target || e;
        const storageNotes = JSON.parse(localStorage.notes);
        let noteAlreadyExists = false;
        storageNotes.forEach(item => {
            if (item.id === this.props.id) {
                item.msg = target.value;
                item.x = this.refs.interact.getAttribute('data-x') || this.props.x;
                item.y = this.refs.interact.getAttribute('data-y') || this.props.y;
                noteAlreadyExists = true;
            }
        });
        if (!noteAlreadyExists) {
            storageNotes.push({
                id: this.props.id,
                msg: target.value,
                x: this.refs.interact.getAttribute('data-x') || this.props.x,
                y: this.refs.interact.getAttribute('data-y') || this.props.y
            });
        }
        localStorage.notes = JSON.stringify(storageNotes);
    }
    createNewNote(e) {
        const storageNotes = JSON.parse(localStorage.notes);
        if (storageNotes.length <= 50) {
            const note = {
                id: cuid(),
                msg: "",
                x: (this.refs.interact.getAttribute('data-x') || this.props.x) * 1 + 350,
                y: (this.refs.interact.getAttribute('data-y') || this.props.y)
            };

            storageNotes.push(note);
            localStorage.notes = JSON.stringify(storageNotes);
            this.props.addNotes([note]);
        }
    }
    deleteNote(e) {
        let storageNotes = JSON.parse(localStorage.notes);
        storageNotes = storageNotes.filter(item => item.id !== this.props.id);
        if (storageNotes.length) {
            localStorage.notes = JSON.stringify(storageNotes);
            this.props.deleteNote(this.props.id);
        }
    }
    bringToTop(e) {
        e.currentTarget.style["z-index"] = String(Date.now()).slice(-8);
    }
    render() {
        return (
            <div
                style={{
                    transform: `translate(${this.props.x}px, ${this.props.y}px)`,
                    zIndex: String(Date.now()).slice(-8)
                }}
                onMouseDown={this.bringToTop.bind(this)}
                ref="interact">
                <CommandBar
                    style={{
                        touchAction:"none",
                        backgroundColor: this.props.accentColor || "#0078D7",
                        position: "relative"
                    }}
                    labelPosition="collapsed"
                    primaryCommands={[
                        <AppBarButton onClick={this.createNewNote.bind(this)} icon="Add" label="Add note" />,
                        <AppBarButton onClick={this.deleteNote.bind(this)} icon="Delete" label="Delete note" />
                    ]}
                />
                <textarea ref="textarea" onChange={this.saveNote.bind(this)} defaultValue={this.props.msg}></textarea>

                <style jsx>{`
               div{
                   width:300px;
                   height:300px;
                   position:absolute;    
               }
               textarea {
                margin-top:-48px;
                padding-top:48px;
                resize: none;
                width:100%;
                height:100%;
                font-size:18px;
                border:0;
            }
                    `}</style>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    accentColor: state.accent.accentColor,
    notes: state.notes
});

export default connect(mapStateToProps, { addNotes, deleteNote })(InteractWrapper);