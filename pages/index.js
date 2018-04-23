import 'core-js/fn/object/assign';
import 'core-js/fn/string/ends-with'; // unsure if needed
import 'core-js/fn/string/starts-with';
import 'core-js/fn/string/includes';
import 'core-js/fn/array/includes';
import 'core-js/fn/array/find';
if (!Number.parseFloat) Number.parseFloat = parseFloat;

import Head from "next/head";
import NavigationView from "react-uwp/NavigationView";
import SplitViewCommand from "react-uwp/SplitViewCommand";

import { Provider } from "react-redux";
import store from "./redux/store";

import Layout from "./components/Layout";
import NotesContainer from "./components/NotesContainer";
import SettingsContainer from "./components/SettingsContainer";
import ShareContainer from "./components/ShareContainer";

const IconStyleSheetFix = {
    lineHeight: "48px",
    fontSize: "16px"
};

export default class Index extends React.Component {
    componentDidMount() {
        store.dispatch({
            type: "CHANGE_ACCENT",
            payload: localStorage.accentColor
        });
    }
    static async getInitialProps({ query }) {
       
        const notes = query.notes;
        console.warn(notes);
        return { notes };
      }    
    render() {
        return (
            <Provider store={store}>
                <Layout>
                    <Head>
                        <meta name="viewport" content="width=device-width, initial-scale=1" />
                        <meta name="description" content="A web application allowing you to create sticky notes saved on your local device using the JavaScript localStorage API." />
                        <meta name="keywords" content="localnotes, ol-web, olweb, ol web, localstorage, notes, sticky notes, note online, web notes" />
                        <title>localNotes</title>
                    </Head>
                    <NavigationView
                        pageTitle="localNotes"
                        style={{
                            position: "fixed",
                            zIndex: 999999999,
                            height: "100%",
                            top: 0
                        }}
                        displayMode="overlay"
                        autoResize={false}
                        navigationTopNodes={[
                            <SplitViewCommand
                                style={{ ...IconStyleSheetFix, color: this.props.accentColor }}
                                onClick={() => store.dispatch({ type: "TOGGLE_SHARE" })}
                                label="Share"
                                icon="Share" />,
                            <SplitViewCommand
                                style={{ ...IconStyleSheetFix, color: this.props.accentColor }}
                                onClick={() => open("https://ol-web.github.io")}
                                label="Author's page"
                                icon="Home" />
                        ]}
                        navigationBottomNodes={[
                            <SplitViewCommand
                                style={{ ...IconStyleSheetFix, color: this.props.accentColor }}
                                onClick={() => store.dispatch({ type: "TOGGLE_SETTINGS" })}
                                label="Settings"
                                icon={"\uE713"} />
                        ]}
                        focusNavigationNodeIndex={1}
                    >
                    <SettingsContainer />
                    <ShareContainer />
                    </NavigationView>
                    <NotesContainer sharedNotes={this.props.notes} />
                </Layout>
            </Provider>
        );
    }
}