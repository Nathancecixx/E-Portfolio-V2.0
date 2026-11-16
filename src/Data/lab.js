export const labNodes = [
  {
    id: 'network', label: 'Home network', category: 'Physical setup', short: 'Rack & connections',
    title: 'Start with the connections.',
    work: 'I personally built my network rack and put together the home network that connects my lab equipment.',
    purpose: 'A physical place to connect the Proxmox machine, Raspberry Pi and the devices I use at home.',
    lesson: 'It gives me a practical setting for understanding how hardware, addressing and services depend on each other. My VLAN configuration practice is in Cisco Packet Tracer, not a claim about this home network.',
  },
  {
    id: 'host', label: 'Proxmox host', category: 'Physical setup', short: 'A machine I built',
    title: 'One machine, room to experiment.',
    work: 'I personally built the machine that runs Proxmox and use it as the host for my virtual machines.',
    purpose: 'Virtualization lets me try different operating systems and workloads without needing a separate physical computer for each one.',
    lesson: 'Building the hardware and working with the hypervisor helps me connect computer architecture to the way virtual resources are allocated.',
  },
  {
    id: 'vms', label: 'Virtual machines', category: 'Virtualization', short: 'Windows & Linux',
    title: 'Getting to know both sides of the OS.',
    work: 'I work with Windows and Linux virtual machines in my home lab, alongside what I study about operating systems and computer architecture.',
    purpose: 'VMs give me environments for exploring software and OS behaviour on the same physical host.',
    lesson: 'A virtual machine has its own operating system, but still depends on the host underneath it. That distinction matters when I work through a problem.',
  },
  {
    id: 'dns', label: 'Raspberry Pi DNS', category: 'Network service', short: 'Local name resolution',
    title: 'A small computer with a specific job.',
    work: 'I set up a Raspberry Pi as a DNS server on my home network.',
    purpose: 'DNS resolution connects the names devices request to the addresses they need. Running the service makes that dependency tangible.',
    lesson: 'It gives me a reason to follow a request through a network service rather than treating internet access as one undifferentiated thing.',
  },
  {
    id: 'vpn', label: 'Encrypted VPN', category: 'Remote access', short: 'An encrypted way in',
    title: 'Access the lab from outside home.',
    work: 'I set up encrypted remote access to my home lab using a VPN.',
    purpose: 'An encrypted VPN connection provides a way to reach my own environment remotely.',
    lesson: 'Remote access makes me think carefully about access boundaries and security. This diagram deliberately leaves out addresses, administrative endpoints and connection details.',
  },
  {
    id: 'dev', label: 'Development environment', category: 'Separate workspace', short: 'Space for software work',
    title: 'Give development its own space.',
    work: 'I use a separate environment for software development rather than treating every machine as the same workspace.',
    purpose: 'It keeps a clear place for project code, tools and experiments, alongside the rest of the lab.',
    lesson: 'Working this way helps me think about which environment a change belongs in. I also collaborate with AI assistants; assisted code is part of the workflow, not a claim that I wrote every line alone.',
  },
];
