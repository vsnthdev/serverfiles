# set some important environment variables
set -gx LANG "en_IN.UTF-8"
set -gx EDITOR nvim
set -gx VOLTA_HOME "$HOME/.volta"

# disable the right_side of the prompt
function fish_right_prompt
    #intentionally left blank
end

# customizing the fish greeting
function fish_greeting
    #intentionally left blank
end

function gitignore
    curl -sL https://www.toptal.com/developers/gitignore/api/$argv
end

alias vim='nvim'
alias push='git add --all && git commit --verbose && git push'
alias ls='exa -lhg --color-scale --group-directories-first --sort name --time modified'

set -U fish_user_paths "$VOLTA_HOME/bin" $fish_user_paths

# initialize the project
starship init fish | source
