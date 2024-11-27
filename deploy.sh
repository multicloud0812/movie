#!/bin/bash

# 필요한 패키지 설치
sudo yum update -y
sudo yum install -y nginx

# movie 폴더로 이동하여 배포
cd ~/movie

# 빌드 및 서버 재시작
npm install
npm run build
sudo systemctl restart nginx
