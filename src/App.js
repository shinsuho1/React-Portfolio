import { Route, Switch } from "react-router-dom";

import Header from "./commponents/common/Header";
import Footer from "./commponents/common/Footer";

import Data from "./commponents/main/Data";
import Introduction from "./commponents/main/Introduction";
import Main from "./commponents/main/Main";
import ProgreamSlider from "./commponents/main/ProgreamSlider";

import Information from "./commponents/sub/Information";
import News from "./commponents/sub/News";
import Download from "./commponents/sub/Download";
import Support from "./commponents/sub/Support";

import "./scss/style.scss";

function App() {
	return (
		<>
			<Switch>
				<Route exact path="/">
					<Header />
					<Main />
					<Introduction />
					<ProgreamSlider />
					<Data />
					<Footer />
				</Route>
				<Route>
					<Header />
				</Route>
			</Switch>

			<Route path="/information" component={Information} />
			<Route path="/news" component={News} />
			<Route path="/download" component={Download} />
			<Route path="/support" component={Support} />


		</>
	);
}

export default App;
