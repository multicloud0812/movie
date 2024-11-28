#!/bin/bash

# 운영 체제 감지
if [ -f /etc/os-release ]; then
    . /etc/os-release
    OS=$ID
else
    OS=$(uname -s)
fi

# 필요한 패키지 설치
if [ "$OS" = "ubuntu" ] || [ "$OS" = "debian" ]; then
    # Ubuntu 또는 Debian 계열 시스템
    sudo apt-get update -y
    sudo apt-get remove -y nodejs libnode72 libnode-dev
    sudo apt-get install -y nginx
    # Node.js 설치
    curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
    sudo apt-get install -y nodejs
elif [ "$OS" = "centos" ] || [ "$OS" = "rhel" ]; then
    # Red Hat 또는 CentOS 계열 시스템
    sudo yum update -y
    sudo yum install -y nginx
    # Node.js 설치
    curl -fsSL https://rpm.nodesource.com/setup_18.x | sudo bash -
    sudo yum install -y nodejs
else
    echo "지원되지 않는 리눅스 배포판입니다."
    exit 1
fi

# movie 폴더로 이동하여 배포
cd ~/movie

# 빌드 및 서버 재시작
npm install
npm run build
sudo systemctl restart nginx
