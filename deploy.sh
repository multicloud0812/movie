#!/bin/bash

# 필요한 패키지 업데이트 및 설치
sudo apt-get update -y
sudo apt-get install -y nginx

# Node.js 설치 및 버전 관리
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs

# movie 폴더로 이동하여 배포
cd ~/movie

# 빌드 및 서버 재시작
npm install
npm run build
sudo systemctl restart nginx
