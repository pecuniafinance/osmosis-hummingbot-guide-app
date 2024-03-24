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

> 🚨 This will prompt the password setup for Hummingbot. Set a password and write it down for safe keeping.

2. In the Hummingbot Terminal-UI CLI, enter **gateway generate-certs**
3. When prompted, enter in a passphrase and record it with the Hummingbot client password - both will be needed shortly.
4. Run **exit** and then **docker compose down** to exit the Hummingbot UI for now. 
~~~bash
>>> gateway generate-certs
~~~
[Client will generate certificates and give you storage file path]
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

> 🚨 To enable Hummingbot and Gateway to communicate, you’ll need to modify the container’s docker-compose.yml file in the next steps to reflect your new passwords.
`;

const markdown2 = `
## Modify docker-compose.yml

The location of the certs needs to be manually added to the docker-compose.yml for /hummingbot_gateway_compose for the Gateway to access them.

1. Navigate to **~/deploy-examples/hummingbot_gateway_compose/** 
2. Enter **nano docker-compose.yml** to open the terminal editor and display the contents of the YML file.
3. Uncomment the two **environment** rows and their children (delete the hashtags). Pay close attention to the formatting (spacing) to be sure everything is aligned.
4. Change **[password]** to your Hummingbot password and **[passphrase]** to the passphrase you set when generating the certs.

~~~bash
$ cd ~/deploy-examples/hummingbot_gateway_compose/
$ nano docker-compose.yml
~~~~

5. When finished, save and close by pressing **Ctrl+X → Y → Enter → Y → Enter.

~~~bash
Ctrl + X
>>> Y (save changes?)
Enter
~~~

[The file save will be confirmed and you should be back to the CLI]

6. Now return to Hummingbot by running **docker compose up -d** and then **docker attach hummingbot**.

~~~bash
$ docker compose up -d
$ docker attach hummingbot
~~~

> 💡 Use **$ docker attach gateway** in a new terminal to view the running gateway.

7. Finally, confirm Gateway is running by checking the Log Pane of the Hummingbot Terminal-UI.

`;

const markdown3 = `
## Add Osmosis Wallet

You will need to export the private key for your designated trading wallet. It is highly advised to create a dedicated wallet for this purpose. 

### Exporting Private Key

Keplr is the most popular Cosmos-based wallet. When creating a Keplr wallet, **only users who link a Google Account are able to export their private key directly from Keplr**.

To get around this,

1. Export Keplr seed phrase.
2. Restore the wallet using the seed phrase, in a different Cosmos-based wallet (such as Leap wallet) which allows exporting the private key.
3. Export the private key from the newly restored wallet.

> 🚨 An Osmosis Private Key has 64 characters.
>
> Be aware an exported private key may have an **0x** at the start, which may need to be **removed** to fit the private key format check. 
> → Before: 0x1234567890... 
> → After: 1234567890...

### Adding Private Key

Run **gateway connect osmosis** and follow the prompts to add a trading wallet to the Osmosis DEX connector.

~~~bash
>>> gateway connect osmosis
~~~

> 💡 If one or more Osmosis wallets are already found in the configuration files, the prompt will ask if a previous wallet should be used and if so, which one.

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
