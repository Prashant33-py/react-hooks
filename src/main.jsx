import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
// import { useContext, createContext } from "react";

// const TreeContext = createContext();
// const trees = [
// 	{ id: "1", type: "Maple" },
// 	{ id: "2", type: "Oak" },
// 	{ id: "3", type: "Banyan" },
// 	{ id: "4", type: "Mango" },
// ];
// export const useTrees = () => useContext(TreeContext);
createRoot(document.getElementById("root")).render(
	// <TreeContext.Provider value={{ trees }}>
	<StrictMode>
		<App />
	</StrictMode>

	// </TreeContext.Provider>
);
