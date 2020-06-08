import React from "react";
import { CoronaContextProvider } from "./context/CoronaContext";

import { Header } from "./components/Header";
import { GlobalCoronaInfo } from "./components/GlobalCoronaInfo";
import { GlobalCoronaTable } from "./components/GlobalCoronaTable";
import { IndoCoronaTable } from "./components/IndoCoronaTable";

const App = () => {
	return (
		<CoronaContextProvider>
			<Header />
			<GlobalCoronaInfo />
			<GlobalCoronaTable />
			<IndoCoronaTable />
		</CoronaContextProvider>
	);
};

export default App;
