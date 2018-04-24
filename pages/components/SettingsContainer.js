import { connect } from "react-redux";
import { toggleSettings } from "../redux/actions/toggleSettings";

import ContentDialog, { ContentDialogProps } from "react-uwp/ContentDialog";
import ColorPicker from "react-uwp/ColorPicker";
import store from "../redux/store";

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
    render() {
        return (
            <div>
                {!this.props.dialog.showSettings ? null :
                    <ContentDialog
                        title="Change color accent"
                        statusBarTitle="Settings"
                        primaryButtonText="Save"
                        showCloseButton={true}
                        defaultShow={true}
                        primaryButtonAction={this.changeColor}
                        secondaryButtonAction={() => store.dispatch({ type: "TOGGLE_SETTINGS" })}
                        closeButtonAction={() => store.dispatch({ type: "TOGGLE_SETTINGS" })}
                        style={{ zIndex: 999999999 }}
                        contentNode={
                            <ColorPicker
                                size={300}
                                style={{ padding: "0 0 15px 15px" }}
                                defaultColor={this.colorPickerColor}
                                onChangedColor={this.handlePickedColor.bind(this)} />
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