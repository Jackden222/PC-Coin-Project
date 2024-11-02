import React, { createContext, useState, useEffect, useContext } from 'react';

const GameContext = createContext();

export const GameProvider = ({ children }) => {
  const [balance, setBalance] = useState(10000);
  const [profitPerHour, setProfitPerHour] = useState(0);
  const [purchasedItems, setPurchasedItems] = useState({});
  const [selectedItem, setSelectedItem] = useState(null);

  const buyItem = (id, cost, profit, itemImage) => {
    if (balance >= cost && !purchasedItems[id]) {
      setBalance(prev => prev - cost);
      setPurchasedItems(prev => ({...prev, [id]: {profit, image: itemImage}}));
      if (!selectedItem) {
        setSelectedItem(id);
        setProfitPerHour(profit);
      }
      return true;
    }
    return false;
  };

  const selectItem = (id) => {
    if (purchasedItems[id]) {
      setSelectedItem(id);
      setProfitPerHour(purchasedItems[id].profit);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setBalance(prev => prev + profitPerHour);
    }, 3600000); // 3600000 мс = 1 час

    return () => clearInterval(interval);
  }, [profitPerHour]);

  return (
    <GameContext.Provider value={{ balance, profitPerHour, purchasedItems, selectedItem, buyItem, selectItem }}>
      {children}
    </GameContext.Provider>
  );
};

export const useGame = () => useContext(GameContext);