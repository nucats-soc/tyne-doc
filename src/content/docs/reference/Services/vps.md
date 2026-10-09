---
title: Virtual Private Servers
description: So you can host stuff!
---
We offer free Virtual Private Server hosting to any paying member of NUCATS!

These servers can be used for anything you like, host your own website, build a new project, most stuff you want to do, you should be able to!

This will run on top of Proxmox, just like all our other services, with access to either a KVM VM, or an LXC Container.

If you want to request one of these, please create a ticket in the NUCATS discord server, or email soc.computingtechnology@ncl.ac.uk, with the subject line `VPS REQUEST - your name`.

## Specs
Your server will by default, have the following specs:
- 2 CPU Cores
- 4 GB RAM
- 64 GB SSD Storage
- One local IPV4 address (10.10.10.0/24)
- OS
  - LXC: Alpine Linux
  - VM: Fedora Server

You can request any reasonable alterations to these specs as required.

## Networking
All traffic will go out through `82.38.137.126`, you should point your DNS records to this IP. By default, you will have a reverse proxy to ports `80` and `443`. You can request other ports to be forwarded if required too.

If you don't own your own domain, we can set up a subdomain for you, for example `yourname.nucats.org`.

### Reverse Proxy information
We use `nginx` for reverse proxying sites, this can be configured by anyone on the Tech Team.

### SSL Certificates (https)
Certificates for your website are generated through Let's Encrypt, they're generated on the reverse proxy LXC, rather than on your own VPS.

If you are using your own domain, you will need to let a member of the Tech Team know, so we can generate an SSL certificate for your specific domain, make sure to specify this when requesting your VPS.

## SSH
To SSH into your VPS, we require you to use an SSH key, this is for access control on our jump host, as well as for overall security, as a key is more secure than a password on your VPS. You will need to provide your public key to us when requesting a VPS.

To connect via ssh, you should run the following command:

`ssh -J jump@int.nucats.org youruser@internal.vps.ip.address`

You should be dropped into your VPS's shell after running this.

## What's the catch?
Basically nothing, the only thing that may be considered a "catch" is that during high traffic periods, for example, events where people may need a VM spun up for working, your VPS will be turned off temporarily to free up resources. You will always be given advance notice of these shutdowns, and it's likely this will only happen once per year.