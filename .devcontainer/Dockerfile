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
    git config --global user.email vsnthdev@gmail.com && \
    git config --global user.name "Vasanth Developer" && \
    git config --global core.editor "'code-insiders' -w" && \
    git config --global core.autocrlf false && \
    git config --global commit.template "~/.gitmessage" && \
    git config --global pull.rebase false

COPY ./.config /home/serverfiles/.config
COPY ./.git* /home/serverfiles/

RUN chown -R serverfiles:serverfiles /home/serverfiles/.config && \
    chown -R serverfiles:serverfiles /home/serverfiles/.git*

USER serverfiles
