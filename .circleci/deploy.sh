#!/bin/bash

echo "Deploy to $APP_NAME app."

git remote add heroku git@heroku.com:$APP_NAME.git

# Install Heroku CLI
echo "Install Heroku CLI"
wget -nv https://cli-assets.heroku.com/branches/stable/heroku-linux-amd64.tar.gz
sudo mkdir -p /usr/local/lib /usr/local/bin
sudo tar -xzf heroku-linux-amd64.tar.gz -C /usr/local/lib
sudo ln -s /usr/local/lib/heroku/bin/heroku /usr/local/bin/heroku

cat >> ~/.ssh/config << EOF
  VerifyHostKeyDNS yes
  StrictHostKeyChecking no
EOF

# Deploy
git push heroku $CIRCLE_SHA1:refs/heads/master
