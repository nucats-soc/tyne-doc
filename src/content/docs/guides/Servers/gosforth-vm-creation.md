---
title: Creating VM's/LXC's on gosforth
description: How to create a new VM or LXC on gosforth
---
I realised this should be made when I thought about how weird this thing is set up.

Ideally, LXC's should be used, unless something requires a VM, or you just feel like using one.

:::caution
If you're creating a VM, and you need a certain image for it, make sure to upload this into `local (gosforth)`, under `ISO Images`.

To make downloads a bit quicker, use `Download from URL`.

This is also needed for Containers! Look under CT Templates in the same storage volume for that.
:::

## Create CT
- Click `Create CT` in the top right corner.
- Check the "Advanced" checkbox at the bottom of the new window.
- General
  - Set a hostname for the new container, ideally following [naming scheme](/reference/naming-scheme).
  - Add your SSH Public Key(s) into the specified box.
    - Some containers don't immediately start an SSH server, so please add a password too and store it in Bitwarden.
  - Set the resource pool to `int` if it is using an internal IP, or `pub` if it is using a public IP.
  - Add tags as needed
- Template
  - Choose a container template, it is recommended to use Alpine.
- Disks
  - Under Disks, ensure your Storage volume is set to `gosforth`
  - Set the amount of storage you need.
- CPU
  - Set the number of cores you need, usually won't be more than 2-4.
- Memory
  - Set the amount of memory you want, 4096MiB is usually enough
  - Set the amount of swap you need, ideally equal to your memory size.
- Network
  - Public IP (only use if necessary)
    - Keep bridge on `vmbr0`
    - Set your IP to one in our subnet, with /29 as the CIDR
    - Set the gateway to our range gateway.
  - Internal IP 
    - Change bridge to `vmbr1`
    - Set your IP to `10.10.10.x/24`, replacing `x` with an available number/
    - Set the gateway to `10.10.10.1`
- DNS
  - Leave as default.
- Confirm
  - Click `Start after created` if you're ready to go.
    - If extra config is required, then leave it empty.