import React from "react";
import "../css/global.css";
import { Page } from "../css/global.css.js";
import Markdown from "react-markdown";
import OsmoButton from "../components/OsmoButton.js";
import { Link } from "react-router-dom";

const markdownIntro = `
# Install Hummingbot + Gateway (Docker)

The recommended method of installing and using Hummingbot & Gateway is with Docker. If you haven’t used Docker before, install it according to your Operating System. 

> 💻 Recommended OS is Linux - **Ubuntu 22.04.3 LTS**
> 
> 🎮 Windows users can find instructions here: [https://docs.docker.com/desktop/install/windows-install/](https://docs.docker.com/desktop/install/windows-install/)
>
> 🐱‍💻 Advanced users can install from source: [https://hummingbot.org/installation/source/](https://hummingbot.org/installation/source/)

### Steps to Install Hummingbot & Gateway

1. Install **Docker**

2. Install **hummingbot/deploy-examples.git**

> 💡 Find source instructions within the repo README.md found here: [https://github.com/hummingbot/deploy-examples/tree/main/hummingbot_gateway_compose](https://github.com/hummingbot/deploy-examples/tree/main/hummingbot_gateway_compose).
`;

const markdown1 = `
## Install Docker on Ubuntu

To install Docker using Linux, follow the steps below:

1. Ensure Docker is installed on your system. If it's not, you can download it from the official [Docker website](https://docs.docker.com/engine/install/ubuntu/).

2. Close and then open the terminal again.

~~~bash
$ curl -fsSL https://get.docker.com -o get-docker.sh
$ sudo sh get-docker.sh
$ sudo usermod -aG docker $USER
$ exit
~~~

> ✅ Enter **bash docker compose version** to verify you have Docker Compose installed.
> ~~~bash 
> $ docker compose version
> ~~~

> ⤵️ You can use **sudo apt-get update && install docker-compose-plugin** to install Docker Compose alone.
> ~~~bash 
> $ sudo apt-get update && install docker-compose-plugin
> ~~~
`;

const markdown2 = `
## Install Hummingbot Deploy-Examples

Hummingbot offers several configurations of Docker containers in a repository called **hummingbot/deploy-examples.git**.

We will focus on **hummingbot_gateway_compose**, which loads a Hummingbot container and a Gateway container together. 


> 💡 Learn about the other containers here: 
> [https://docs.hummingbot.org/installation/docker/#deployment-types](https://docs.hummingbot.org/installation/docker/#deployment-types)


1. From terminal, navigate to the folder where you want to run Hummingbot from.

2. Clone the **deploy-examples.git** repository.

3. Navigate to **~/deploy-examples/hummingbot_gateway_compose**

4. Run the contained docker image.

> 💡 In this example, we make a folder called "trading_stuff" to work from. Your path to the folder you use will be unique to your instance / machine. From a fresh install of Ubuntu, this may look like:
>
> ~~~bash
> /root/trading_stuff/deploy-examples/hummingbot_gateway_compose
> ~~~
    
~~~bash
$ mkdir trading_stuff
$ cd trading_stuff
$ git clone https://github.com/hummingbot/deploy-examples.git
$ cd deploy-examples/hummingbot_gateway_compose
$ docker compose up -d
~~~
    

If successful, you will see:

~~~bash
[+] Running 3/3
 ⠿ Network hummingbot_gateway_compose_default     Created
 ⠿ Container hummingbot                           Started
 ⠿ Container gateway                              Started
~~~

Please note that this is a basic installation guide. Depending on your system and requirements, additional steps may be necessary.


> 💡 To access the running containers, use the **docker exec** command: 
> ~~~bash
> $ docker exec -it <name> /bin/bash
> ~~~

`;

function Install() {
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
      <Link to="/setup">
        <OsmoButton text="NEXT ➡ SETUP" textSize="14px" />
      </Link>
    </Page.Container>
  );
}

export default Install;
