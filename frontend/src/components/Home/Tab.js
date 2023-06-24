import { useState } from "react";
import "./Tab.css";

function Tabs() {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <div className="container">
      <div className="bloc-tabs">
        <button
          className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(1)}
        >
          Problem 1
        </button>
        <button
          className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(2)}
        >
          Problem 2
        </button>
        <button
          className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(3)}
        >
          Problem 3
        </button>
        <button
          className={toggleState === 4 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(4)}
        >
          Problem 4
        </button>
      </div>

      <div className="content-tabs">
        <div
          className={toggleState === 1 ? "content  active-content" : "content"}
        >
          {/* <h2>Content 1</h2>
          <hr />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
            praesentium incidunt quia aspernatur quasi quidem facilis quo nihil
            vel voluptatum?
          </p> */}
          <div class="article-container">
            <div class="article">
              <h3>title1</h3>
              <p>
                714. Best Time to Buy and Sell Stock with Transaction Fee Medium
                6258 165 Add to List Share You are given an array prices where
                prices[i] is the price of a given stock on the ith day, and an
                integer fee representing a transaction fee. Find the maximum
                profit you can achieve. You may complete as many transactions as
                you like, but you need to pay the transaction fee for each
                transaction. Note: You may not engage in multiple transactions
                simultaneously (i.e., you must sell the stock before you buy
                again).{" "}
              </p>
              <p>
                <br />
                Example 1: Input: prices = [1,3,2,8,4,9], fee = 2 Output: 8
                Explanation: The maximum profit can be achieved by: - Buying at
                prices[0] = 1 - Selling at prices[3] = 8 - Buying at prices[4] =
                4 - Selling at prices[5] = 9 The total profit is ((8 - 1) - 2) +
                ((9 - 4) - 2) = 8. Example 2: Input: prices = [1,3,7,5,10,3],
                fee = 3 Output: 6 Constraints:
              </p>
              <button>Submit </button>
            </div>
            <div class="article-2">
              <h3>title2</h3>
              <p>article2</p>
            </div>
          </div>
        </div>

        <div
          className={toggleState === 2 ? "content  active-content" : "content"}
        >
          <h2>Content 2</h2>
          <hr />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
            voluptatum qui adipisci.
          </p>
        </div>

        <div
          className={toggleState === 3 ? "content  active-content" : "content"}
        >
          <h2>Content 3</h2>
          <hr />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos sed
            nostrum rerum laudantium totam unde adipisci incidunt modi alias!
            Accusamus in quia odit aspernatur provident et ad vel distinctio
            recusandae totam quidem repudiandae omnis veritatis nostrum
            laboriosam architecto optio rem, dignissimos voluptatum beatae
            aperiam voluptatem atque. Beatae rerum dolores sunt.
          </p>
        </div>
        <div
          className={toggleState === 4 ? "content  active-content" : "content"}
        >
          <h2>Content 4</h2>
          <hr />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos sed
            nostrum rerum laudantium totam unde adipisci incidunt modi alias!
            Accusamus in quia odit aspernatur provident et ad vel distinctio
            recusandae totam quidem repudiandae omnis veritatis nostrum
            laboriosam architecto optio rem, dignissimos voluptatum beatae
            aperiam voluptatem atque. Beatae rerum dolores sunt.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Tabs;
