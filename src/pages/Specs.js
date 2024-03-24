import React from "react";
import "../css/global.css";
import { Page } from "../css/global.css.js";
import Markdown from "react-markdown";
import OsmoButton from "../components/OsmoButton.js";
import { Link } from "react-router-dom";

const markdownIntro = `
# Technical Info & Links
`;

const markdown1 = `
## Helpful Commands

Full list of commands and shortcuts can be found here: [https://docs.hummingbot.org/client/commands-shortcuts/](https://docs.hummingbot.org/client/commands-shortcuts/).

### Hummingbot Commands

- **>>> create**
Start the wizard to configure a new strategy
- import
Load a previously configured strategy from local storage
- balance 
Prints the balances of tokens in connected wallets
- start / stop 
Starts / stops a loaded strategy
- exit
Close Hummingbot and return to Terminal
- **Ctrl+C spamming**
Allows you to exit a wizard you may get stuck in

### Gateway Commands

~~~bash
>>> gateway connect
~~~
- Wizard to add a wallet to a DEX connector

~~~bash
>>> gateway balance
~~~
- Prints the balances of tokens in connected wallets

~~~bash
>>> gateway status
~~~
- Prints connected chains with some data

~~~bash
>>> gateway list
~~~
- Prints all available gateway connectors

~~~bash
>>> gateway config
~~~
- Prints gateway connector configurations; RPC addresses

~~~bash
>>> gateway connector-tokens
~~~
- Wizard to add tokens for display in **balance** command

~~~bash
>>> gateway approve-tokens <dex>_<chain>_<network> <TOKEN-SYMBOL>
~~~
- Approve tokens for a DEX;
- Errors:
  - "Waiting for allowances..”, 
  - [connector] is not ready. Please wait...;


~~~bash
>>> gateway connector-tokens <dex>_<chain>_<network> <TOKEN-SYBOL>,<TOKEN-SYMBOL>
~~~
- Print token balances for various networks

~~~bash
>>> gateway -h
~~~
- Prints all gateway commands

> 💡 Learn to update config params from cli: https://docs.hummingbot.org/gateway/setup/#updating-config-parameters

`;

const markdown2 = `
## Links & Resources

Broader and more detailed information including socials, websites, and docs.

### Hummingbot Links

- Discord: [https://discord.gg/hummingbot](https://discord.gg/hummingbot)
- Website: [https://hummingbot.org/](https://hummingbot.org/)
- Github: [https://github.com/hummingbot/hummingbot](https://github.com/hummingbot/hummingbot)
- Advanced features docs can be found here: https://docs.hummingbot.org/developers/commands/
- Strategy Parameters docs here: https://docs.hummingbot.org/strategy-configs/#how-to-configure
- Dashboard for managing multiple instances of Hummingbot: https://docs.hummingbot.org/dashboard/
- V2 Strategies allow much more control than the included V1 strategies: https://docs.hummingbot.org/v2-strategies/

### Pecunia.Finance Links

- [Website](https://pecuniafinance.com/)
- [Github](https://github.com/pecuniafinance)
- [Docs](https://docs.pecuniafinance.com/)
- [Discord](https://discord.gg/xV9urV3rHx)

### Connector Links

- [Medium]()
- [Pull Request]()
- [Hummingbot Doc]()

`;

function Specs() {
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
      </Page.Wrapper>
    </Page.Container>
  );
}

export default Specs;
