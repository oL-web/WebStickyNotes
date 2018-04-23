import { Theme as UWPThemeProvider, getTheme } from "react-uwp/Theme";

import { connect } from "react-redux";
import { changeAccent } from "../redux/actions/changeAccent"

class Layout extends React.Component {
    render() {
        return (
            <UWPThemeProvider
                needGenerateAcrylic={false}
                theme={getTheme({
                    themeName: "dark", // set custom theme
                    accent: this.props.accentColor, // set accent color
                    useFluentDesign: true, // sure you want use new fluent design.
                    userAgent: false,
                    desktopBackgroundImage: "/static/bg1.jpg" // set global desktop background image
                })}>
                {this.props.children}
            </UWPThemeProvider>
        );
    }
}

const mapStateToProps = (state)=>({
    accentColor:state.accent.accentColor
});

export default connect(mapStateToProps, {changeAccent} )(Layout);