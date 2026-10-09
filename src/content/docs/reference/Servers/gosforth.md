---
title: Gosforth
description: The only server we own (for now)
---

```
root@gosforth:~# fastfetch
         .://:`              `://:.             root@gosforth
       `hMMMMMMd/          /dMMMMMMh`           -------------
        `sMMMMMMMd:      :mMMMMMMMs`            OS: Proxmox VE 9.2.20 x86_64
`-/+oo+/:`.yMMMMMMMh-  -hMMMMMMMy.`:/+oo+/-`    Host: PowerEdge R530
`:oooooooo/`-hMMMMMMMyyMMMMMMMh-`/oooooooo:`    Kernel: Linux 7.0.14-19-pve
  `/oooooooo:`:mMMMMMMMMMMMMm:`:oooooooo/`      Uptime: 5 days, 20 hours, 17 mins
    ./ooooooo+- +NMMMMMMMMN+ -+ooooooo/.        Packages: 780 (dpkg)
      .+ooooooo+-`oNMMMMNo`-+ooooooo+.          Shell: bash 5.2.37
        -+ooooooo/.`sMMs`./ooooooo+-            Display (VGA-1): 1024x768 @ 60 Hz
          :oooooooo/`..`/oooooooo:              Terminal: termproxy
          :oooooooo/`..`/oooooooo:              CPU: 2 x Intel(R) Xeon(R) E5-2683 v4 (64) @ 3.00 GHz
        -+ooooooo/.`sMMs`./ooooooo+-            GPU: Matrox Electronics Systems Ltd. G200eR2
      .+ooooooo+-`oNMMMMNo`-+ooooooo+.          Memory: 3.30 GiB / 62.68 GiB (5%)
    ./ooooooo+- +NMMMMMMMMN+ -+ooooooo/.        Swap: 22.29 MiB / 8.00 GiB (0%)
  `/oooooooo:`:mMMMMMMMMMMMMm:`:oooooooo/`      Disk (/): 6.13 GiB / 66.13 GiB (9%) - ext4
`:oooooooo/`-hMMMMMMMyyMMMMMMMh-`/oooooooo:`    Local IP (vmbr0): 82.38.137.123/29
`-/+oo+/:`.yMMMMMMMh-  -hMMMMMMMy.`:/+oo+/-`    Locale: en_US.UTF-8
        `sMMMMMMMm:      :dMMMMMMMs`
       `hMMMMMMd/          /dMMMMMMh`                                   
         `://:`              `://:`                                     
```

## Basic information
This is our current primary server, codenamed Gosforth.
- It is a rented dedicated server, currently colocated in Ushaw Moor
- As you can see above, it runs Proxmox
- This server hosts all of our infrastructure on a 1G/1G link
- We have a /29 of public IP addresses!

## Hardware information

- System
  - Dell Poweredge R530 ([info](https://i.dell.com/sites/doccontent/shared-content/data-sheets/en/Documents/Dell-PowerEdge-R530-Spec-Sheet.pdf))
- CPU
  - 2x Intel Xeon E5-2683 v4 ([info](https://www.intel.com/content/www/us/en/products/sku/91766/intel-xeon-processor-e52683-v4-40m-cache-2-10-ghz/specifications.html))
  - 32C/64T Total at 2.1GHz base frequency
- Memory
  - 8 Sticks
  - 64GB Total, 8GB each
  - DDR4-2133
- Storage
  - 2x 256GB SSD + 2x 1TB SSD
  - Both striped as RAID-0
  - /dev/sda - 232.4GB
  - /dev/sdb - 953.3GB

## Proxmox information
We use Proxmox because we can spin up multiple VM's for different purposes, such as member VM's, testing, event VM's, etc...

### Proxmox account
Unless you are on the Tech Team, or have an extremely specific reason to be granted access to Proxmox, you will not be given an account.

If you have a reason to believe you should have an account, please make a ticket in Discord, or email soc.computingtechnology@ncl.ac.uk

### Networking
- IP Allocation
  - We have `82.38.137.120/29` (6 usable addresses) allocated to us.
  - It is a dedicated block routed directly to our server through AS201422.
- In Proxmox, we currently configure it to primarily use internal IP's (10.10.10.0/24) for VM's unless one has a very specific use case and needs a public IP.
- Almost all VM's are reverse proxied through one IP (int.nucats.org) if they need to be, with port forwarding through there also possible.
  
### Maintenance

Maintenance procedures for gosforth can be found [here](/guides/servers/gosforth-maintenance). 

These procedures should be completed during the allocated timeslot, the slot should be listed on TimeTree, if not, then it is also on the page itself.