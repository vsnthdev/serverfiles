FROM ubuntu:rolling

ENV DEBIAN_FRONTEND=nonintercative

# The following tasks are executed in order:
#   1. Update all the packages
#   2. Install the required programs & tools
#   3. Create a non-root user & set a password
#   4. Disable sudo passwords as it's not required
#   5. Install & configure Volta.sh tool to manage Node.js versions
#   6. Install latest Node.js using Volta
#   7. Install Starship prompt
#   8. Install SSH service for GitHub Codespaces
RUN apt-get update && \
    apt-get -y upgrade && \
    apt-get -y install sudo curl fish neovim exa git && \
    useradd -m serverfiles && \
    echo "serverfiles:serverfiles" | chpasswd && \
    adduser serverfiles sudo && \
    echo '\nserverfiles ALL=(ALL) NOPASSWD: ALL' >> /etc/sudoers && \
    su - serverfiles -c "curl https://get.volta.sh | bash" && \
    su - serverfiles -c "/home/serverfiles/.volta/bin/volta install node@latest" && \
    curl -fsSL https://starship.rs/install.sh > /starship_installer.sh && \
    chmod +x /starship_installer.sh && \
    /starship_installer.sh --yes && \
    rm /starship_installer.sh && \
    curl -fsSL https://raw.githubusercontent.com/microsoft/vscode-dev-containers/main/script-library/sshd-debian.sh > /ssh_debian.sh && \
    chmod +x /ssh_debian.sh && \
    addgroup ssh && \
    /ssh_debian.sh && \
    rm /ssh_debian.sh && \
    chsh -s /usr/bin/bash serverfiles

COPY ./.config /home/serverfiles/.config
COPY ./.git* /home/serverfiles/
COPY ./.bashrc /home/serverfiles/.bashrc

RUN chown -R serverfiles:serverfiles /home/serverfiles/.config && \
    chown -R serverfiles:serverfiles /home/serverfiles/.git* && \
    chown serverfiles:serverfiles /home/serverfiles/.bashrc

USER serverfiles
