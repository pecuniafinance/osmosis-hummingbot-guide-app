import React from "react";
import "../css/global.css.js";
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

> 🚨 Be sure to check the Hummingbot Gateway repository for [Open Gateway Issues](https://github.com/hummingbot/gateway/issues) to DYOR.

> 💡 Both **amm_arb** and **amm_v3_lp** are [V1 Strategies](https://hummingbot.org/v1-strategies/) which mean the logic is simple. 
> 
> V1 strategies will be _depreciated over time_ in favor of [V2 Strategies](https://hummingbot.org/strategies/) which utilize a python [script](https://hummingbot.org/scripts/) format that is capable of complex logic and features.

> 💰 Want to get rewarded for building a custom Osmosis V2 script? 
> 
> Contact [Pecunia.Finance](https://pecuniafinance.com) (the maintainers) for a possible bounty.
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

1. Use **create** command to set up an [**amm_arb**](https://docs.hummingbot.org/strategies/amm-arbitrage/) or [**amm_v3_lp**](https://docs.hummingbot.org/strategies/amm-v3-lp/) type of [strategy](https://docs.hummingbot.org/strategies/). 

~~~bash
>>> create
~~~

Answer the question prompts presented so that you to generate **your own version** of the following example configurations.

> 🔎 Use alphabetical order for the market pair; i.e. “ATOM-OSMO” and not “OSMO-ATOM”

> 🚨 Use only LOW/MEDIUM/HIGH for fee_tier as **‘LOWEST’ is not supported** and may result in an error.

### Example Configs

📚 Do Your Own Research (DYOR)
- [Hummingbot Trading Logic AMM_ARB](https://github.com/hummingbot/hummingbot/blob/master/hummingbot/strategy/amm_arb/amm_arb.py)
- [Hummingbot Trading Logic AMM_V3_LP](https://github.com/hummingbot/hummingbot/blob/master/hummingbot/strategy/amm_v3_lp/amm_v3_lp.py)
- [Hummingbot Articles](https://hummingbot.org/academy/all/)

> 🚨 These are **EXAMPLES ONLY AND NOT FINANCIAL ADVICE**!

#### Example Config for AMM_ARB

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

#### Example Config for AMM_V3_LP

~~~bash
strategy: amm_v3_lp
connector: osmosis_osmosis_mainnet
market: OSMO-USDC
fee_tier: MEDIUM
price_spread: 1.0
amount: 1.0
min_profitability: 1.0
~~~

#### Example Config Setup

`;

const markdown3 = `
## Import a Strategy (optional)

Already created a strategy previously?

- Run **import** to get a list of locally stored files, use the arrow keys or tab to scroll and select one. 
- Or, run **import <file_name>** directly to skip the selection prompt.

~~~bash
>>> import
~~~
`;

const markdown4 = `
~~~bash
>>> import <file_name>
~~~
`;

const markdown5 = `
## Run the Strategy

To start running a trading strategy,

1. Ensure a strategy is loaded and Preliminary checks are confirmed (see example below).

2. Run **start** command.

3. Confirm correct wallet with **Yes**.

~~~bash
>>> start
>>> Yes
~~~

> 🎉 **Congrats**
>
> Hummingbot will now execute trades on Osmosis DEX using the input private key to create positions or make trades based upon the selected strategy or script and the selected variables.
`;

function RunStrat() {
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

export default RunStrat;
