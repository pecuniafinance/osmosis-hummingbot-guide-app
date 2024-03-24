import React from "react";
import "../css/global.css";
import { Page } from "../css/global.css.js";
import Markdown from "react-markdown";
import OsmoButton from "../components/OsmoButton.js";
import { Link } from "react-router-dom";
import createStrat from "../imgs/create-strat.png";
import stratList from "../imgs/import-list.png";
import importStrat from "../imgs/import-strat.png";
import run from "../imgs/run-strat.png";

const markdownIntro = `
# Run a Strategy on Osmosis DEX

To begin trading, a strategy must be configured. Two strategies, **amm_arb** and **amm_v3_lp**, are supported for the Osmosis Connector.
`;

const markdown1 = `
## Prepare

1. If you haven’t already, connect a wallet to Osmosis Mainnet with **gateway connect osmosis**. 
Afterwards, you should be able to see your **osmosis_osmosis_mainnet** wallet when you run **gateway balance**. 
2. To display the balance of specific tokens in the trading wallet balance, run **gateway approve-tokens osmosis_osmosis_mainnet <TOKEN_SYMBOL_HERE>**. The token balance will be displayed the next time **gateway balance** is run.
3. Ensure the added trading wallet has at least 1 OSMO to cover trading gas costs.

~~~bash
>>> gateway balance
>>> gateway approve-tokens osmosis_osmosis_mainnet <TOKEN_SYMBOL_HERE>
~~~
`;
const markdown2 = `

## Create New Strategy

Use **create** command to set up an **amm_arb** or **amm_v3_lp** [strategy](https://docs.hummingbot.org/strategies/amm-arbitrage/). 

~~~bash
>>> create
~~~

Answer the question prompts presented so that you to generate **your own version** of the following example configuration:

### **Example Config for AMM_ARB**

~~~bash
strategy: amm_arb
connector_1: osmosis_osmosis_mainnet
market_1: OSMO-USDC
connector_2: uniswap_polygon_mainnet
market_2: USDC-WOSMO
min_profitability: 1.0
market_1_slippage_buffer: 1.0
market_2_slippage_buffer: 1.0
concurrent_orders_submission: false
debug_price_shim: false
gateway_transaction_cancel_interval: 600
~~~

### Example Config for AMM_V3_LP

~~~bash
strategy: amm_v3_lp
connector: osmosis_osmosis_mainnet
market: OSMO-USDC
fee_tier: MEDIUM
price_spread: 1.0
amount: 1.0
min_profitability: 1.0
~~~

> 🚨 Use alphabetical order for the market pair; i.e. “ATOM-OSMO” and not “OSMO-ATOM”

> 🚨 Use only LOW/MEDIUM/HIGH for fee_tier as **‘LOWEST’ is not supported** and may result in an error.

### Example Config

`;

const markdown3 = `
## Import a Strategy (optional)

Run **import** to get a list of locally stored files, use the arrow keys or tab to scroll and select one. Or, you can also skip the prompt by running **import <file_name>** directly.

~~~bash
>>> import
>>> import <file_name>
~~~
`;

const markdown4 = `
~~~bash
>>> import <file_name>
~~~
`;

const markdown5 = `
## Run the Strategy

To run a trading strategy,

1. Ensure a strategy is loaded and Preliminary checks are confirmed. 
2. Then simply run **start**.

> 💡 The strategy will first request confirmation of selected wallets.

~~~bash
>>> start
~~~

`;

function Create() {
  return (
    <Page.Container>
      <Page.Wrapper>
        <Markdown>{markdownIntro}</Markdown>
      </Page.Wrapper>
      <Page.Wrapper>
        <Markdown>{markdown1}</Markdown>
      </Page.Wrapper>
      <Page.Wrapper>
        <Markdown>{markdown2}</Markdown>
        <img src={createStrat} alt="create strategy prompts" />
      </Page.Wrapper>
      <Page.Wrapper>
        <Markdown>{markdown3}</Markdown>
        <img src={stratList} alt="import a strategy from storage" />
        <Markdown>{markdown4}</Markdown>
        <img src={importStrat} alt="directly import strategy file" />
      </Page.Wrapper>
      <Page.Wrapper>
        <Markdown>{markdown5}</Markdown>
        <img src={run} alt="run the strategy" />
      </Page.Wrapper>
      <Link to="/technical">
        <OsmoButton text="NEXT ➡ INFO" textSize="14px" />
      </Link>
    </Page.Container>
  );
}

export default Create;
