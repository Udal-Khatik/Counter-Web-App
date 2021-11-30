import React, { useEffect, useState } from "react";
import "./App.css";
import { getInitialVal, updateCounter } from "./components/API";
import Counter from "./components/Counter";
import Loader from "./components/Loader/Loader";

const App = () => {
  const [count, setCount] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const getVal = async () => {
      try {
        await getInitialVal().then((res) => {
          res === null ? setCount(1) : setCount(res);
        });
      } catch (error) {
        console.log(error);
      }
    };
    getVal();
  }, []);

  useEffect(() => {
    setIsLoading(true);
    const update = async () => {
      await updateCounter(count).then((res) => setIsLoading(false));
    };
    update();
  }, [count]);

  return (
    <div className="App">
      <div
        style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {isLoading && (
          <div>
            <Loader />
          </div>
        )}
        {!isLoading && <div style={{ marginTop: "20px" }}></div>}
        <div>
          <Counter count={count} setCount={setCount} />
        </div>
        <p
          style={{
            fontSize: "12px",
            marginLeft: "-74px",
            marginTop: "5px",
            fontWeight: "500",
          }}
        >
          Counter value: {count}
        </p>
      </div>
    </div>
  );
};

export default App;
