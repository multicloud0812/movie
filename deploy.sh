#!/bin/bash

# 필요한 패키지 설치
sudo yum update -y
sudo yum install -y nginx

# movie 폴더로 이동하여 배포
cd ~/movie

# 서버 재시작 (필요에 따라 맞춤 설정)
sudo systemctl restart nginx
