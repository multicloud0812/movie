#!/bin/bash

# 서버 환경 감지
if grep -qEi "(Microsoft|WSL)" /proc/version &> /dev/null ; then
  SERVER="azure"
else
  SERVER="aws"
fi

# 필요한 패키지 설치
if [ "$SERVER" = "azure" ]; then
  echo "Deploying on Azure (Ubuntu)" | tee -a ~/deploy.log
  sudo apt-get update -y | tee -a ~/deploy.log
  sudo apt-get remove -y nodejs libnode72 libnode-dev | tee -a ~/deploy.log
  sudo apt-get install -y nginx | tee -a ~/deploy.log
  # Node.js 설치
  curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash - | tee -a ~/deploy.log
  sudo apt-get install -y nodejs | tee -a ~/deploy.log
elif [ "$SERVER" = "aws" ]; then
  echo "Deploying on AWS (Linux)" | tee -a ~/deploy.log
  sudo yum update -y | tee -a ~/deploy.log
  sudo yum install -y nginx | tee -a ~/deploy.log
  # Node.js 설치
  curl -fsSL https://rpm.nodesource.com/setup_18.x | sudo bash - | tee -a ~/deploy.log
  sudo yum install -y nodejs | tee -a ~/deploy.log
else
  echo "지원되지 않는 리눅스 배포판입니다." | tee -a ~/deploy.log
  exit 1
fi

# movie 폴더로 이동하여 배포
cd ~/movie

# 빌드 및 서버 재시작
npm install | tee -a ~/deploy.log
npm run build | tee -a ~/deploy.log
sudo systemctl restart nginx | tee -a ~/deploy.log
