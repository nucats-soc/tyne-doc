---
title: Startup Procedure
description: What to do when everything breaks
---
:::caution
You will need access to the Tailscale tailnet for the start of this guide, iDRAC is locked behind there.
:::

So everything is dead, server is cold, nothing is connecting, and you've been asked to bring everything back up! Unnerving, I know, but trust me you'll be fine, just follow this guide.

- Step 1 - Turn on the server remotely.
  - Once Tailscale is online and on the correct Tailnet, navigate to [82.38.137.122](https://82.38.137.122).
  - This will take you to the iDRAC login page. Get the username and password from Bitwarden, and log in. (this can take a little bit to load)
    - NOTE: If you cannot access iDRAC, and you are absolutely sure Tailscale is on, and you are on the correct tailnet, it is likely the server has lost power, and you will need to get in contact with Jack (jack at eilles dot xyz).
  - Once iDRAC has decided to fully load, you will be looking at the Server Overview.
  - First, check that the server is actually off, if the Virtual Console Preview shows nothing, then it is.
    - If the Server is on, it has likely lost network access, you should troubleshoot that a different way.
  - Under Quick Launch Tasks, click Power ON/OFF
    - After doing that, please launch the Virtual Console to monitor the boot process. If something fails, and you don't know how to fix it, ask someone for help.
- Step 2 - It started!
  - So the server has started fine!
  - In the servers current state, everything should startup according to the order set in Proxmox, which may take up to 5 minutes to finish. There should be no extra intervention needed from your end.
  - Good job! :thumbs_up: