import { connect } from "react-redux";
import { toggleShare } from "../redux/actions/toggleShare";

import ContentDialog, { ContentDialogProps } from "react-uwp/ContentDialog";
import TextBox from "react-uwp/TextBox";
import store from "../redux/store";
import slugify from "slugify";
import request from "superagent";

class ShareContainer extends React.Component {
    constructor(props) {
        super(props);
        this.websiteLink = "www.localnotes.herokuapp.com/shared/";
        this.state = {
            customLinkText: "YOUR-TEXT"
        };
    }
    handleLinkChange(value) {
        const sluggedValue = slugify(value, {
            replacement: '-',
            remove: null,
            lower: true
        });
        this.setState({ customLinkText: sluggedValue })
    }
    shareNotes(){
        request
        .post('/share')
        .send({
            customLinkText: this.state.customLinkText,
            notes: JSON.parse(localStorage.notes)
        })
        .set('accept', 'json')
        .end((err, res) => {
          console.log(res);
        });
    }
    render() {
        return (
            <div>
                {!this.props.dialog.showShare ? null : <ContentDialog
                    title="Share your notes with the world! This will create a special URL using the text you can provide below(up to 100 characters). People who visit that link will automatically download your current notes onto their device."
                    statusBarTitle="Share"
                    primaryButtonText="Save"
                    showCloseButton={true}
                    defaultShow={true}
                    primaryButtonAction={this.shareNotes.bind(this)}
                    secondaryButtonAction={() => store.dispatch({ type: "TOGGLE_SHARE" })}
                    closeButtonAction={() => store.dispatch({ type: "TOGGLE_SHARE" })}
                    style={{ zIndex: 999999999 }}
                    contentNode={
                        <div style={{ padding: "16px" }}>
                            <TextBox onChangeValue={this.handleLinkChange.bind(this)}
                                style={{ width: "100%" }} placeholder="www.localnotes.herokuapp.com/shared/YOUR-TEXT" />
                            <TextBox style={{ width: "100%" }}
                                disabled value={this.websiteLink + this.state.customLinkText} />
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

export default connect(mapStateToProps, { toggleShare })(ShareContainer);