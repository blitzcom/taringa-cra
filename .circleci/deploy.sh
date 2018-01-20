#!/bin/bash

echo "Deploy to $APP_NAME app."

# Install private ssh key
which ssh-agent
eval $(ssh-agent -s)
echo "$SSH_HEROKU_PRIVATE_KEY" | tr -d '\r' | ssh-add - > /dev/null
mkdir -p ~/.ssh
chmod 700 ~/.ssh

# Add heroku.com as known host
ssh-keyscan heroku.com >> ~/.ssh/known_hosts
chmod 644 ~/.ssh/known_hosts

# Install Heroku CLI
echo "Install Heroku CLI"
wget -nv https://cli-assets.heroku.com/branches/stable/heroku-linux-amd64.tar.gz
sudo mkdir -p /usr/local/lib /usr/local/bin
sudo tar -xzf heroku-linux-amd64.tar.gz -C /usr/local/lib
sudo ln -s /usr/local/lib/heroku/bin/heroku /usr/local/bin/heroku

cat > ~/.netrc << EOF
machine api.heroku.com
  login $HEROKU_LOGIN
  password $HEROKU_API_KEY
EOF

git remote add heroku git@heroku.com:$APP_NAME.git
git remote -v

# Deploy
ssh git@heroku.com
