import React, { useState, useContext, useEffect } from "react";
import { BarChartOutlined, KeyboardArrowDown, KeyboardArrowUp, MoreHoriz } from "@mui/icons-material";
import {Tooltip, Grow} from "@mui/material";
import {watchlist} from '../data/data'
import DeleteIcon from '@mui/icons-material/Delete';
import GeneralContext from "./GeneralContext";
import { DoughnutChart } from "./DoughnoutChart";
const WatchList = () => {
  const [items, setItems] = useState(() => {
    const stored = localStorage.getItem("watchlist");
    return stored ? JSON.parse(stored) : watchlist;
  });
  const [lastDeleted, setLastDeleted] = useState(null);
  const labels = items.map(stock => stock.name);
  const data = {
    labels: labels,
    datasets: [
      {
          label: 'Price',
          data: items.map(stock => stock.price),
          backgroundColor: [
              'rgba(255, 99, 132, 0.5)',
              'rgba(54, 162, 235, 0.5)',
              'rgba(255, 206, 86, 0.5)',
              'rgba(75, 192, 192, 0.5)',
              'rgba(153, 102, 255, 0.5)',
              'rgba(255, 159, 64, 0.5)',
          ],
         
          borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)',
          ], 
          borderWidth: 1,
      }
    ],
  };

  const handleDelete = (name) => {
    setItems(prev => {
      const toDelete = prev.find(s => s.name === name);
      if (toDelete) setLastDeleted(toDelete);
      return prev.filter(s => s.name !== name);
    });
  };

  const handleUndo = () => {
    if (!lastDeleted) return;
    setItems(prev => [lastDeleted, ...prev]);
    setLastDeleted(null);
  };

  useEffect(() => {
    localStorage.setItem("watchlist", JSON.stringify(items));
  }, [items]);



  return (
    <div className="watchlist-container">
      <div className="search-container">
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search eg:infy, bse, nifty fut weekly, gold mcx"
          className="search"
        />
        <span className="counts"> {items.length} / 50</span>
      </div>

      {lastDeleted && (
        <div style={{ padding: "8px 12px" }}>
          <span style={{ marginRight: 10 }}>Removed {lastDeleted.name}</span>
          <button className="btn btn-grey" onClick={handleUndo}>Add back</button>
        </div>
      )}

      <ul className="list">
       {items.map((stock, index) => {
        return <WatchListItem stock={stock} key={index} onDelete={handleDelete}/>;
       })}
      </ul>
       <DoughnutChart data={data} />
     
    </div>
  );
};

export default WatchList;


const WatchListItem = ({stock, onDelete}) => {
  const [showWatchlistAction, setShowWatchlistAction] = useState(false);

  const handleMouseEnter = () => {
    setShowWatchlistAction(true);
  }

  const handleMouseExit = (e) => {
    setShowWatchlistAction(false);
  }

  return (
    <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseExit} >
      <div className="item">
      <p className={stock.isDown ? "down" : "up"}>{stock.name}</p>
      <div className="itemInfo">
        <span className="percent">{stock.percent}</span>
        {stock.isDown ? (
          <KeyboardArrowDown className="down p-5"  style={{margin:"5px"}}/> 
        ) : <KeyboardArrowUp className="up p-5 " style={{margin:"5px"}}/>}
        <span className="price">{stock.price}</span>
      </div>
      </div>
      {showWatchlistAction && <WatchlistAction uid={stock.name} onDelete={onDelete} />}
      </li>
  );

};

const WatchlistAction = ({ uid, onDelete })=>{
  const context = useContext(GeneralContext);
  
   return (
    <span className="actions">
      <span>
      <Tooltip
      title="Buy (B)" placement="top" arrow
      TransitionComponent={Grow}>
        <button className="buy" onClick={() => context.openBuyWindow(uid)}>Buy</button>
      </Tooltip>
      <Tooltip
      title="Sell (S)" placement="top" arrow
      TransitionComponent={Grow}>
        <button className="sell" onClick={() => context.openSellWindow(uid)}>Sell</button>
      </Tooltip>
      <Tooltip
      title="Analytics (A)" placement="top" arrow
      TransitionComponent={Grow}>
        <button className="action" >
        <BarChartOutlined className="icon"/>
        </button>
      </Tooltip>
      <Tooltip
      title="Delete (D)" placement="top" arrow
      TransitionComponent={Grow}>
        <button className="action" onClick={() => onDelete(uid)}>
          <DeleteIcon className="icon"/>
        </button>
      </Tooltip>
      <Tooltip
      title="More" placement="top" arrow
      TransitionComponent={Grow}>
        <button className="action">
          <MoreHoriz className="icon"/>
        </button>
      </Tooltip>
      
    </span>
    </span>
   )
}