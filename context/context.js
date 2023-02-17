import React from "react";

const MapUtilsContext = React.createContext();

export const MapUtilsProvider = MapUtilsContext.Provider;
export const MapUtilsConsumer = MapUtilsContext.Consumer;

export default MapUtilsContext;