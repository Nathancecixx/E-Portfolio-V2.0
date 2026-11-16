/*
  HOME LAB DIAGRAM — edit this file when the lab changes.

  path    The route from the internet into the lab, left to right.
          `link` is the label on the connection to the NEXT stop.
  hosts   The physical machines. Each one gets a card.
          services  The things worth showing. Each becomes a button.
          total     How many VMs/services the host really runs.
                    The diagram shows "+ N more" for the rest.
          wide      true makes the card take the wide column on desktop.

  To add a VM:    add { id, name, runs, note } to a host's services.
  To add a host:  add { id, name, tag, note } to hosts.
  Every id must be unique. Keep notes to a sentence or two.
  Never put IP addresses, hostnames, ports or admin URLs in here.
*/

export const lab = {
  updated: 'November 2026',

  path: [
    { id: 'isp', name: 'Internet', detail: 'My ISP', link: 'Fibre' },
    { id: 'router', name: 'Router', detail: 'Home network and the way out', link: '10Gb uplink' },
    { id: 'switches', name: 'Lab switches', detail: '2.5Gb for the workstation, gigabit for the Pis, patch panels in between' },
  ],

  hosts: [
    {
      id: 'lilred',
      name: 'LilRed',
      tag: 'Raspberry Pi · AI assistant',
      note: 'A Raspberry Pi running Hermes Agent as my personal assistant. I message it on Discord and it helps me look after the lab. It helped build this site too.',
    },
    {
      id: 'services-pi',
      name: 'Always-on Pi',
      tag: 'Raspberry Pi · 24/7 LAN services',
      note: 'A second Pi for anything that has to stay up all day. Keeping these off the workstation means I can restart it without the network losing DNS or VPN.',
      services: [
        { id: 'wireguard', name: 'WireGuard', runs: 'VPN', note: 'My VPN. It is how I get into the lab securely when I am away from home.' },
        { id: 'pihole', name: 'Pi-hole', runs: 'DNS', note: 'DNS for the LAN, with ad blocking for every device on it.' },
      ],
    },
    {
      id: 'proxmox',
      name: 'Proxmox workstation',
      tag: 'Type 1 hypervisor · 14 VMs',
      wide: true,
      total: 14,
      note: 'A workstation I built that runs Proxmox on bare metal. Every job gets its own virtual machine, and I set up, update and troubleshoot all of them. Pick one to see what it does.',
      services: [
        { id: 'ai', name: 'AI server', runs: 'llama.cpp · GPU passthrough', note: 'The graphics cards are passed straight through to this VM, where llama.cpp runs AI models locally instead of in the cloud.' },
        { id: 'jellyfin', name: 'Jellyfin', runs: 'Media server', note: 'Movies and shows, streamed to devices around the house.' },
        { id: 'immich', name: 'Immich', runs: 'Photo storage', note: 'Photo storage that stays on my own hardware.' },
        { id: 'forge', name: 'Forge', runs: 'My fitness tracker', note: 'A fitness tracking app with AI built in. I host it here and use it for my own training.' },
        { id: 'gaming', name: 'Gaming', runs: 'Windows · Moonlight', note: 'A Windows VM for games and emulation, streamed to other devices on the LAN with Moonlight.' },
      ],
    },
  ],
};
