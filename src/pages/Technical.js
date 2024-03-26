import React from "react";
import "../css/global.css.js";
import { Page } from "../css/global.css.js";
import Markdown from "react-markdown";
import OsmoButton from "../components/OsmoButton.js";
import { Link } from "react-router-dom";

const markdownIntro = `
# Technical & Links
`;

const markdown1 = `
## Helpful Commands

Full list of commands and shortcuts can be found here: [https://hummingbot.org/client/commands-shortcuts/](https://hummingbot.org/client/commands-shortcuts/).

### Hummingbot Commands

~~~bash
>>> create
~~~
- Start the wizard to configure a new strategy

~~~bash
>>> import
~~~
- Load a previously configured strategy from local storage

~~~bash
>>> balance
~~~
- Prints the balances of CEX tokens in connected wallets
- Use **gateway balance** to get DEX balances (see Gateway Commands)

~~~bash
>>> start / stop
~~~
- Start / stop a loaded / running strategy

~~~bash
>>> exit
~~~
- Close Hummingbot and return to Terminal CLI

~~~bash
>>> [Ctrl + C]
~~~
- Spamming (holding 'Ctrl' key and repeatedly pressing 'C' key) allows you to exit any prompts
- May exit Hummingbot Client to Terminal CLI if over-used

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

> 💡 Learn to update Gateway config params from CLI: [https://hummingbot.org/gateway/setup/#updating-config-parameters](https://hummingbot.org/gateway/setup/#updating-config-parameters).

`;

const markdown2 = `
## Links & Resources

Broader and more detailed information including socials, websites, and docs.

### Hummingbot Links

- Website: [https://hummingbot.org/](https://hummingbot.org/)
- Discord: [https://discord.gg/hummingbot](https://discord.gg/hummingbot)
- Github: [https://github.com/hummingbot/](https://github.com/hummingbot/)
- Advanced features docs: [https://hummingbot.org/developers/commands/](https://hummingbot.org/developers/commands/)
- Strategy Parameters docs: [https://hummingbot.org/client/config-files/](https://hummingbot.org/client/config-files/)
- Dashboard for managing multiple instances: [https://hummingbot.org/dashboard/](https://hummingbot.org/dashboard/)
- V2 Strategies: [https://hummingbot.org/strategies/](https://hummingbot.org/strategies/)
- Scripts: [https://hummingbot.org/scripts/](https://hummingbot.org/scripts/)
- V1 Strategies: [https://hummingbot.org/v1-strategies/](https://hummingbot.org/v1-strategies/)

> 📚 **(Hummingbot) Bot-Camp**
>
> There is also an official course for learning how to use Hummingbot, which is taught by members of Hummingbot Foundation and other Hummingbot Partners.
>
> Check it out here: [https://www.botcamp.xyz/](https://www.botcamp.xyz/)

### Pecunia.Finance Links

- [Website](https://pecuniafinance.com/)
- [Github](https://github.com/pecuniafinance)
- [Docs](https://pecuniafinance.com/docs/intro)
- [Medium](https://medium.com/@pecuniafinancedao/)
- [Twitter](https://twitter.com/PecuniaFinance)
- [Discord](https://discord.gg/xV9urV3rHx)

### Osmosis Connector Links

- [Project Announcement Medium Post](https://medium.com/@pecuniafinancedao/osmosis-connector-for-hummingbot-project-o-nexum-5aa291a865d0)
- [Hummingbot Gateway Pull Request](https://github.com/hummingbot/gateway/pull/277)
- [Hummingbot Osmosis Connector Doc](https://hummingbot.org/exchanges/osmosis/)
- [Hummingbot Osmosis Connector Guide](https://hummingbot.org/academy-content/using-osmosis-with-hummingbot/) (shared content with this guide)

`;

function Technical() {
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

export default Technical;
