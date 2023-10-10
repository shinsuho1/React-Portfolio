import { Route } from "react-router-dom";
import Header from "./commponents/common/Header";
import Footer from "./commponents/common/Footer";

import Mainpage from "./commponents/main/Mainpage";

import Information from "./commponents/sub/Information";
import News from "./commponents/sub/News";
import Download from "./commponents/sub/Download";
import Support from "./commponents/sub/Support";

import "./scss/style.scss";

function App() {
	let scrollUpBtn = document.createElement("div");

	scrollUpBtn.classList.add("scrollUpBtn");
	scrollUpBtn.innerHTML = `<i class="fa-solid fa-chevron-up"></i>`;

	document.body.append(scrollUpBtn);

	scrollUpBtn.addEventListener("click", () => {
		window.scrollTo({ left: 0, top: 0, behavior: "smooth" });
	});

	window.addEventListener("scroll", () => {
		let scroll = window.scrollY;
		if (scroll >= 100) {
			scrollUpBtn.classList.add("on");
		} else if (scroll < 100) {
			scrollUpBtn.classList.remove("on");
		}
	});

	return (
		<>
			<Header />

			<Route exact path="/">
				<Mainpage />
			</Route>


			<Route path="/information" component={Information} />

			<Route path="/news" component={News} />

			<Route path="/download" component={Download} />

			<Route path="/support" component={Support} />

			<Footer />

		</>
	);
}

export default App;
