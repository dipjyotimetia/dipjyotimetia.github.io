---
id: hyperv
title: Hyper-V
sidebar_label: Hyper-V
---

### Problem:

After I installed Ubuntu Desktop in HyperV I could not get the machine to run full screen.

### Solution:

Update your /etc/default/grub settings.

### Explanation:

Start terminal Type sudo vi /etc/default/grub Press i to enter edit mode Change the GRUB_CMDLINE_LINUX_DEFAULT=”quiet splash” line to GRUB_CMDLINE_LINUX_DEFAULT=”quiet splash video=hyperv_fb:1920x1080” Type :wq to save the file Run sudo update-grub Restart your VM, enter Full Screen mode and enjoy.