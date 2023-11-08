# Silent C2

Silent C2 is a simple, lightweight golang based command-and-control (CNC).

## 🌐 Silent's Webpages

| Links                                            | Description                                                    |
|--------------------------------------------------|----------------------------------------------------------------|
| [Silent Previews](https://silent.lol/Previews)   | Public previews of Silent C2, a sneak peek of what's coming up |
| [Reviews](https://silent.lol/Reviews)            | See what some of our members have to say about Silent C2       |
| [Image To Dot](https://silent.lol/ImageToDot)    | Convert images into intricate Braille dot art                  |
| [Password Generator](https://silent.lol/PassGen) | Easily create and save passwords                               |
| [Bug Hunter](https://silent.lol/BugHunter)       | Mini-game focused on hunting and catching virtual bugs         |
| [Toggle Game](https://silent.lol/ToggleGame)     | Misc Game, Was Bored.                                          |
| [Notes](https://silent.lol/Notes)                | Create and manage notes all in one place                       |
| [WPM Speed Test](https://silent.lol/WPMTest)     | Test and improve your typing speed with a WPM speed test       |


## Project Details

| Project             | Developers              | Public Distribution    | GNU/GPL                    | Last Modified     | Status           |
|--------------------|------------------------|-----------------------|------------------------|-------------------|------------------|
| Silent C2           | Selfrep. x Ecstasy    | False                    | Version 3 (June 29, 2007) | November 7, 2023 | In Development   |

## ✅ Silent Overview

| Summary                  | Description                                                                                           |
|-------------------------|--------------------------------------------------------------------------------------------------------|
| Hybrid Protocol          | Supports both TELNET and SSH connectivity.                                                             |
| Command Handler          | Dedicated handler/manager for configuring command permissions, names, and command aliases, etc.     |
| Account Permissions      | Reseller, Mod, Admin, Owner, and Normal.                                                              |
| Captcha Protection       | Customizable Captcha functionality upon login to prevent automated brute force attacks.             |
| API Compatibility        | Supports sending API attacks via CNC.                                                                 |
| Attack Manager           | Allows users to easily enable/disable attacks directly from the CNC.                                  |
| Theme Customization      | Users can set their own themes, and you can create preset themes in the configuration.               |
| User Manager             | Adding, removing, editing, kicking, banning, unbanning, listing, exporting, and looking up users.    |
| Reseller Commands        | Dedicated resellers' commands to manage their customers, adding, deleting, listing, and kicking.     |
| Central IP Logging       | Logs a custom IP/URL with a tag to save for later; you can list, add, and remove logs.                |
| Broadcast                | Allows broadcasting messages across the network via title/interface.                                   |
| Account Plans            | Includes preset account plans for convenience when adding clients.                                    |
| Customization            | Allows for complete customization, from title to prompt/pages to banner/commands and themes.        |
| Built-In Discord Bot     | Includes a Discord bot with commands for managing users, reloading config, and normal utility commands. |
| And Much More           |                                                                                                        |



| **Logging**     |
|-----------------|
|  Ratelimits    |
|  API Attack Spam/Prevention |
|  Events        |





# Discord Bot

    
| Bot Cmds  | Command Description                                |
|-----------|----------------------------------------------------|
| latency   | See command latency                                |
| role      | Give a user a role (admin)                         |
| geo       | Geo locate an address                             |
| help      | Shows a list of all commands                       |
| roles     | Views server roles                                |
| invites   | See invites                                        |
| online    | View who's online on the net                       |
| reload    | Reloads the config file (admin)                   |
| users     | User management (admin)                           |
| feedback  | Give feedback (for customers)                     |
| pfp       | Fetches a user's profile picture                   |
| uptime    | Gets the uptime of the application                |
| hostname  | Hostname/DNS lookup                                |
| message   | Cross-platform messaging                          |



# ⚠️ Coming Soon

| Features To Come              | Description                                                           |
|------------------------------|-----------------------------------------------------------------------|
| Message of The Day           | Enable/disable, edit, and set preset MOTDs via DiscordBot and CNC.   |
| Priority-Based Ticket System  | Allows Ticket Support within CNC and DiscordBot with response status. |
| Global Information            | Today's Attacks, Average Weekly Attacks, Most Active Attacker, Most Recent Attack, Most Attacked Location. |



| **Tools**  | **Logging** |
|------------|-------------|
|  ping     |  Password resets |
|  whois    |  User management |
|  resolver |  Resellers |
|  iplookup |  Mirai attack logs |
|  portscan |  API attack logs |
|  reversedns |  DDoS alerts |
|           |  DDoS attacks on host to email |
|           |  DDoS interface |




## ❗ Setup Requirments
- Something to connect with such as PuTTy or KiTTy


## Installation / Setup
- An AutoSetup file will be provided upon purcahse simply run: the following command

      ./Setup <MySQL Password>



| **🔌 Connection**                                             |
|---------------------------------------------------------------|
| 1. **Database Setup**                                        |
|     After setting up the database and screening, you can connect and login. |
|                                                              |
| 2. **Connection Information**                                 |
|     Configuration details (protocol type, port, host etc), can be adjusted in the `config.json` file located in the `src/assets` directory. |
|                                                              |
| 3. **Default Login**                                         |
|     Use the following default credentials to log in:         |
|       **Username:** `root`                                  |
|       **Password:** `Admin67` (This is the default owner account, which you can customize later). |
|                                                              |
| 4. **Password Security**                                     |
|     Keep in mind that created account passwords are securely hashed, making manual password changes impossible. To change passwords, you can use the `changepass` command. |
|                                                              |
| 5. **Getting Started**                                      |
|     Once you have customized your username and password, you are ready to start adding clients. To begin, run the `users` command for a prompt. |
|                                                               |



## ⚙ Configuration
- Configuration file is located in `src/config.json`, this holds all the information you need to setup the discord bot, the connection information, the motd, and much more (there are some commands to update the config directly such as motd, help settings, along with a reload command etc)  
  


## 💰 Reseller Clients
- Run `reseller` and follow prompt from there (resellers can only add normal users)
  


## Commands
- To view a list of avalible commands run : `help`



## Contact / Credits
- **Discord**: `itsjustnix`
- **Instagram**: `@VanityVillian`
- **Telegram**: `@ItsEcstasy`



## 🤝💰 Donations
Donations are much appricated, Happy coding.
- **Discord**: `itsjustnix`
- **Instagram**: `@VanityVillian`
- **Telegram**: `@ItsEcstasy`

  
