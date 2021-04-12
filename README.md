# PatchBoot Electron

Bootstrapp your Secure Scuttlebutt Client.

## Functionality

PatchBoot Electron provides an electron app that allows executing small app retrieved via ssb.

Find out more about PatchBoot and how to publish apps on [git ssb](http://localhost:7718/%25wU05I81A2dWJQyz4QW6vZTHZj0CKSqsyHNnt9W%2F8%2FrM%3D.sha256) or [GitHub](https://github.com/retog/patchboot)

## Usage

You need to have an instance of [ssb-server](https://github.com/ssbc/ssb-server) running. If you have [Patchwork](https://github.com/ssbc/patchwork/) installed and running you have this already. If the data and keys are not stored in `~/.ssb` you need to set `ssb_appname` accordingly.

    npm install
    npm run start

The UI will show all apps it finds in the ScuttleVerse visible to you.


