import React from "react";
import { LayoutRouteProps, Route } from "react-router-dom";

const DefaultLayout: React.FC<{ children: any }> = ({ children }) => (
	<div>{children}</div>
);

const DefaultLayoutRoute: React.FC<{
	component: React.ElementType;
	rest: any;
}> = ({ component: Component, ...rest }) => {
	return (
		// 
    <div>HII</div>
	);
};

export default DefaultLayoutRoute;
