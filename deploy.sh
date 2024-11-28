#!/bin/bash

# 운영 체제 감지
if [ -f /etc/os-release ]; then
    . /etc/os-release
    OS=$ID
    VERSION=$VERSION_ID
else
    OS=$(uname -s)
    VERSION=""
fi

# 로그 파일 작성
LOGFILE=~/deploy.log

echo "OS: $OS" > $LOGFILE
echo "Version: $VERSION" >> $LOGFILE

# 필요한 패키지 설치
if [ "$OS" = "ubuntu" ] || [ "$OS" = "debian" ]; then
    echo "Detected Debian-based system" >> $LOGFILE
    sudo apt-get update -y >> $LOGFILE 2>&1
    sudo apt-get remove -y nodejs libnode72 libnode-dev >> $LOGFILE 2>&1
    sudo apt-get install -y nginx >> $LOGFILE 2>&1
    # Node.js 설치
    curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash - >> $LOGFILE 2>&1
    sudo apt-get install -y nodejs >> $LOGFILE 2>&1
elif [ "$OS" = "centos" ] || [ "$OS" = "rhel" ] || [ "$OS" = "fedora" ]; then
    echo "Detected Red Hat-based system" >> $LOGFILE
    sudo yum update -y >> $LOGFILE 2>&1
    sudo yum install -y nginx >> $LOGFILE 2>&1
    # Node.js 설치
    curl -fsSL https://rpm.nodesource.com/setup_18.x | sudo bash - >> $LOGFILE 2>&1
    sudo yum install -y nodejs >> $LOGFILE 2>&1
else
    echo "지원되지 않는 리눅스 배포판입니다." >> $LOGFILE
    exit 1
fi

# movie 폴더로 이동하여 배포
cd ~/movie

# 빌드 및 서버 재시작
npm install >> $LOGFILE 2>&1
npm run build >> $LOGFILE 2>&1
sudo systemctl restart nginx >> $LOGFILE 2>&1
