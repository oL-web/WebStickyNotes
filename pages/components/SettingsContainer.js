import { connect } from "react-redux";
import { toggleSettings } from "../redux/actions/toggleSettings";

import ContentDialog, { ContentDialogProps } from "react-uwp/ContentDialog";
import ColorPicker from "react-uwp/ColorPicker";
import Button from "react-uwp/Button";
import store from "../redux/store";
import cuid from "cuid";

class SettingsContainer extends React.Component {
    constructor(props) {
        super(props);
        this.colorPickerColor = "#0078D7";
    }
    changeColor = (color) => {
        store.dispatch({ type: "TOGGLE_SETTINGS" });
        store.dispatch({
            type: "CHANGE_ACCENT",
            payload: this.colorPickerColor
        });

        localStorage.accentColor = this.colorPickerColor;
    }
    handlePickedColor(color) {
        this.colorPickerColor = color;
    }
    resetStorage(){
        localStorage.notes = `[{"id":"${cuid()}","msg":"","x":"60","y":"10"}]`;
        location.reload();
    }
    render() {
        return (
            <div>
                {!this.props.dialog.showSettings ? null :
                    <ContentDialog
                        statusBarTitle="Settings"
                        title="Adjust WebStickyNotes to your preferences"
                        primaryButtonText="Save"
                        showCloseButton={true}
                        defaultShow={true}
                        primaryButtonAction={this.changeColor}
                        secondaryButtonAction={() => store.dispatch({ type: "TOGGLE_SETTINGS" })}
                        closeButtonAction={() => store.dispatch({ type: "TOGGLE_SETTINGS" })}
                        style={{ zIndex: 999999999, height:"100%",overflow:"scroll" }}
                        contentNode={
                            <div style={{ padding: "15px" }}>
                                <h3>Change color accent: </h3>
                                <ColorPicker
                                size={200}
                                defaultColor={this.colorPickerColor}
                                onChangedColor={this.handlePickedColor.bind(this)} />

                                <h3>Reset note storage(will restart the page): </h3>
                                <Button style={{width:"50%"}} onClick={this.resetStorage.bind(this)}>Reset notes</Button>
                            </div>
                            
                        } />
                }
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    dialog: state.dialog
});

export default connect(mapStateToProps, { toggleSettings })(SettingsContainer);