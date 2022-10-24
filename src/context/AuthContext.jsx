import localStorage from "../hooks/localStorage";
import React from "react";

const authContext = React.createContext([null, () => {}]);

export const AuthProvider = (props) => {
	const [auth, setAuth] = localStorage("auth", null);

	return <authContext.Provider value={[auth, setAuth]}>
		        {props.children}
		   </authContext.Provider>;
};

export default authContext;
