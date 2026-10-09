---
title: Manor
description: The NUCATS Discord bot
---
Manor is our codename for the NUCATS discord bot, which handles basic utility commands, student verification, and tickets.

## Commands
All commands are available as slash commands and as prefix commands using `!`.
For example, `/ping` can also be run as `!ping`.

### General commands

- `/8ball <question>` - Answers a question.
- `/bucket` - Posts a bucket GIF.
- `/coinflip` - Flips a coin after asking you to call heads or tails.
- `/credits` - Displays developer credits.
- `/httpcat` - Posts a random image from http.cat.
- `/httpdog` - Posts a random image from http.dog.
- `/ping` - Shows bot latency.
- `/rate <item>` - Rates an item from 1 to 10.
- `/request_command <description>` - Sends a request for a new command to the committee.
- `/roll [sides] [rolls]` - Rolls one or more dice. Defaults to one six-sided die.
- `/urandom` - Returns 256 bytes of hexadecimal data from `/dev/urandom`.
- `/uwu [text]` - Uwuifies the supplied text, or a recent message when no text is supplied.

Authentication starts from the button posted by `/auth_message <channel>` in the authentication channel.

### Committee-only commands

- `/auth_message <channel>` - Posts the authentication button to a channel.
- `/panel <channel>` - Posts the support ticket panel to a channel.
- `/role_panel <channel>` - Posts the optional-role panel to a channel.
- `/stage_up` - Moves users up one stage: Stage 1 -> Stage 2 -> Stage 3 -> Alumni.
- `/unverify <user>` - Removes the verified role from a user.
- `/unverify_all` - Removes the verified role from all users in the server.
- `/verify <user>` - Gives the verified role to a user.
- `/verify_all` - Gives the verified role to all users in the server.

https://github.com/nucats-soc/airport