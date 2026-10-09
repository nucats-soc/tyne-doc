---
title: Gosforth Maintenance
description: Every server needs maintenance performed on it, this one is no exception.
---

:::note
The maintenance timeslot for gosforth is the `First Sunday of every month, between 18:00 and 19:00`.
:::

Like every server, this one also needs maintained every now and again.

During this downtime, **any and all** VM's and Containers that are not student-owned are to be updated and rebooted.

The machine itself also needs to be updated, this can be done by going to `Datacenter > gosforth > Updates`, click `Refresh`, and then `>_ Upgrade`.

Afterwards, reboot the server and ensure it comes back online. If it doesn't come back after 10 minutes, and you are unable to get a response when running `ping gosforth.nucats.org`, call the Tech Officer in charge of infrastructure immediately, and don't stop calling until they pick up. You will know their phone number, if not, then fall back to any other contact method you have.

## Step by step guide

- Step 1:
  - Navigate to the Proxmox WebUI and log in with your provided account.
- Step 2:
  - Use the web shell to update and restart all NUCATS managed VM's and Containers.
    - A way to check whether a VM/Container is owned by NUCATS is to check the tags, those with the 'infra' tag are managed by us.
    - For containers, these usually run Alpine Linux, you should update these by running `apk update && apk upgrade`.
    - For VM's, these usually run Fedora Server, you should update these by running `sudo dnf update`
    - Once the update has been installed, please restart the VM/Container, as it will usually include a kernel update.
- Step 3:
  - You should now update the server itself, as Proxmox also requires updates occasionally.
    - To do this, navigate to `Datacenter > gosforth > Updates`.
    - Once there, click `Refresh`, close the window once it says `TASK OK`.
    - Then click `>_ Upgrade`, the server will open a console window, you will need to hit Enter for the update to start.
    - Leave this window open until the server finishes updating.
- Step 4:
  - Once Step 3 is completed, you should click `Reboot` in the top right corner of the screen.
    - This will turn the server off and on again.
    - The server should restart within about 2 minutes, if it has restarted successfully, your browser tab should start receiving data again automatically.
      - If it has been more than 10 minutes, or you have accidentally clicked `Shutdown` instead of `Restart`, and you can't get a response when running `ping gosforth.nucats.org` from your own machine, you should call the Tech Officer in charge of infrastructure immediately. You should have their phone number, if not, then resort to any other contact method you have.
- Step 5:
  - Well done! You updated everything!