import React, { useState } from "react";

import BuyActionWindow from "./BuyActionWindow";

const GeneralContext = React.createContext({
  openBuyWindow: (uid) => {},
  openSellWindow: (uid) => {},
  closeBuyWindow: () => {},
});

export const GeneralContextProvider = (props) => {
  const [isBuyWindowOpen, setIsBuyWindowOpen] = useState(false);
  const [selectedStockUID, setSelectedStockUID] = useState("");
  const [selectedMode, setSelectedMode] = useState("BUY");

  const handleOpenBuyWindow = (uid) => {
    setIsBuyWindowOpen(true);
    setSelectedStockUID(uid);
    setSelectedMode("BUY");
  };
  const handleOpenSellWindow = (uid) => {
    setIsBuyWindowOpen(true);
    setSelectedStockUID(uid);
    setSelectedMode("SELL");
  };

  const handleCloseBuyWindow = () => {
    setIsBuyWindowOpen(false);
    setSelectedStockUID("");
  };

  return (
    <GeneralContext.Provider
      value={{
        openBuyWindow: handleOpenBuyWindow,
        openSellWindow: handleOpenSellWindow,
        closeBuyWindow: handleCloseBuyWindow,
      }}
    >
      {props.children}
      {isBuyWindowOpen && <BuyActionWindow uid={selectedStockUID} mode={selectedMode} />}
    </GeneralContext.Provider>
  );
};

export default GeneralContext;
