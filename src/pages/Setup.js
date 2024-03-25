import React from "react";
import "../css/global.css";
import { Page } from "../css/global.css.js";
import Markdown from "react-markdown";
import OsmoButton from "../components/OsmoButton.js";
import { Link } from "react-router-dom";
import gatewayRunning from "../imgs/gateway-running.png";
import addWallet from "../imgs/add-osmosis-wallet.png";

const markdownIntro = `
# Setup Gateway + Osmosis

Before starting with strategies, the Gateway container needs to be given Hummingbot certificates (certs) so it can communicate with the Hummingbot container. This begins with generating the certs from the Hummingbot Terminal-UI, where you are able to use Hummingbot commands and orchestrate the bot.
`;

const markdown1 = `
## Generate Certificates

1. From the terminal, run:
~~~bash
$ sudo chmod -R a+rw ./hummingbot_files ./gateway_files
$ docker attach hummingbot
~~~

> 🚨 This will prompt the password setup for Hummingbot.
> 
> Set a password and write it down for safe keeping.

2. In the Hummingbot Terminal-UI CLI, enter **gateway generate-certs**.

~~~bash
>>> gateway generate-certs
~~~

3. When prompted, enter in a passphrase and record it with the Hummingbot client password - _both will be needed shortly_. Also make note of the file path for where the client certs are stored.

[Client will generate certificates and give you storage file path]

4. Run **exit** and then **docker compose down** to exit the Hummingbot UI for now (see below).

[From the Hummingbot UI CLI]
~~~bash
>>> exit
~~~
[Then from Terminal again]
~~~bash
$ docker compose down
~~~

You should see this output:
~~~bash
[+] Running 3/3 
 ⠿ Container gateway                            Removed
 ⠿ Container hummingbot                         Removed
 ⠿ Network hummingbot_gateway_compose_default   Removed
~~~~

To enable Hummingbot and Gateway to communicate, you’ll need to modify the container’s docker-compose.yml file in the next steps to reflect your new passwords.
`;

const markdown2 = `
## Modify docker-compose.yml

The location of the certs needs to (for the time being) be _manually_ added to the **docker-compose.yml** for **_hummingbot_gateway_compose_** so the Gateway can access them. In this example, we are using the native CLI text editor of Ubuntu with the _nano_ command.

> 💡 You can also use any other text-editor or IDE like [Visual Studio Code](https://code.visualstudio.com/) to make the changes to docker-compose.yml, but be sure any autoformatting extensions like 'Priettier' are configured correctly.

To _manually_ modify **deploy-examples/hummingbot_gateway_compose/docker-compose.yml**, follow these steps:

1. Navigate to **~/deploy-examples/hummingbot_gateway_compose/** 

2. In the CLI, enter **nano docker-compose.yml** to open a terminal editor and display the contents of the YML file.

~~~bash
$ cd ~/deploy-examples/hummingbot_gateway_compose/
$ nano docker-compose.yml
~~~~

3. Uncomment the two **environment** rows **and their children** (delete the hashtags). Pay close attention to the formatting (see spacing in examples below), to be sure everything is aligned.

> 🚨 The formatting (spaces, rows, order, etc.) is critical for YML files to function. Incorrect formatting may result in an error 🥴.

4. Change **[password]** to your Hummingbot password and **[passphrase]** to the passphrase you set when generating the certs.

The changes should look something like this:

**Before:**
~~~yaml
__hummingbot:
____# environment:
______#  - CONFIG_PASSWORD=[password]
__gateway:
____# environment:
______#  - GATEWAY_PASSPHRASE=[passphrase]
~~~

**After:**
~~~bash
__hummingbot:
____environment:
______- CONFIG_PASSWORD=Password69!
__gateway:
____environment:
______- GATEWAY_PASSPHRASE=CryptoKing01
~~~

> ⚠️ **The code in these examples is formatted to align left.** 
>
> _Each underscore_ ("_") _represents a space, two make up a single "Tab" button press._
> 
> The "**hummingbot**" and "**gateway**" labels should have 2 spaces or one tab before them.
> 
> The "**environment**" label should have 4 spaces or two tabs before it (them).
>
> Each "**-**" should have 6 spaces or three tabs before them.

5. When finished, save and close by pressing **(Ctrl + X) → Y → Enter → Y → Enter**.

~~~bash
Ctrl + X
$ Y
Enter
$ Y
Enter
~~~

> 💻 If using nano on Ubuntu CLI, the file will be confirmed saved and you should be back to the CLI.

6. Now return to Hummingbot by running **docker compose up -d** and then **docker attach hummingbot**.

~~~bash
$ docker compose up -d
$ docker attach hummingbot
~~~

> 💡 Optionally, use **$ docker attach gateway** in a _new terminal_ to view the running gateway.

7. Finally, confirm Gateway is running by checking the Log Pane of the Hummingbot Terminal-UI.

`;

const markdown3 = `
## Add Osmosis Wallet

You will need to export the private key for your designated trading wallet.

> 🚨 It is highly advised to create a **dedicated wallet** for this purpose. 
> 
> The private key **will only be stored locally** in the config files of wherever Hummingbot is running, but there is still always inherent risk any time a private key is being used autonomously.

### Exporting Private Key

To export your trading wallet private key, follow the native instructions for whichever Osmosis-supporting wallet you choose. 

- Find the wallets supporting Osmosis under "Wallets" of the "Ecosystem" page of the osmosis.zone website.
- [https://osmosis.zone/ecosystem](https://osmosis.zone/ecosystem)

> 💡 The recommended wallet is [Leap](https://www.leapwallet.io/) because it easily allows any user to export their private key.

#### Exporting from Keplr

Keplr is the most popular Cosmos-based wallet supporting Osmosis. When creating a Keplr wallet, **only users who link a Google Account are able to export their private key directly from Keplr**. However, there is a way to get around this 😎.

> 💡 For a detailed guide with images, use the official Osmosis Hummingbot Guide here: [https://hummingbot.org/academy-content/using-osmosis-with-hummingbot/#export-private-key-from-keplr](https://hummingbot.org/academy-content/using-osmosis-with-hummingbot/#export-private-key-from-keplr).

1. Export Keplr seed phrase.

2. Restore the wallet using the seed phrase, in a different Cosmos-based wallet (such as Leap wallet) which allows exporting the private key.

3. Export the private key from the newly restored wallet.

> 🚨 **An Osmosis Private Key has 64 characters.**
>
> Be aware an exported private key may have an **0x** at the start, which may need to be **removed** to fit the private key format check. For example: 
>
> ⬅ Before: 0x1234567890...
>
> ➡ After: 1234567890...

### Adding Private Key

Run **gateway connect osmosis** and follow the prompts to add a trading wallet to the Osmosis DEX connector.

~~~bash
>>> gateway connect osmosis
~~~

> 💡 If one or more Osmosis wallets are already found in the configuration files, the prompt will ask if a previous wallet should be used and if so, which one.

You should be rewarded with:
~~~bash
The osmosis connector now uses wallet <TRADING_WALLET_PUBLIC_KEY> on osmosis-mainnet
~~~

As seen in the example below:
`;

function Setup() {
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
        <img src={gatewayRunning} alt="gateway running" />
      </Page.Wrapper>
      <Page.Wrapper>
        <Markdown>{markdown3}</Markdown>
        <img src={addWallet} alt="add osmosis wallet prompts" />
      </Page.Wrapper>
      <Link to="/run">
        <OsmoButton text="NEXT ➡ RUN" textSize="14px" />
      </Link>
    </Page.Container>
  );
}

export default Setup;
