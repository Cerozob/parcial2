import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Navbar } from "../components/nav/Navbar";
import { IntlProvider } from "react-intl";
import { LOCALES } from "../i18n/locales";
import messages from "../i18n/messages";
import { Gallery } from "../components/gallery/Gallery";
import { HomeDetail } from "../pages/home-detail/HomeDetail";
import { OfflineTooltip } from "../components/offlineTooltip/OfflineTooltip";

export const AppRouter = () => {
	const [language, setLanguage] = useState(LOCALES.ENGLISH);

	return (
		<IntlProvider locale={language} messages={messages[language]}>
			<Router>
				<OfflineTooltip></OfflineTooltip>
				<Navbar setLanguage={setLanguage}></Navbar>
				<Switch>
					<Route exact path="/">
						<Gallery />
					</Route>
					<Route exact path="/homes">
						<Gallery />
					</Route>
					<Route exact path="/homes/:id">
						<HomeDetail></HomeDetail>
					</Route>
				</Switch>
			</Router>
		</IntlProvider>
	);
};
