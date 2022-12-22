# 나만의 가짜 컴퓨터 만드는 설명서
# 패키지.제이손을 고치지 않는 이상 캐시를 검증

# 1. 운영체제 및 프로그램 설치(하나 하나 입력하는 방식)

# FROM ubuntu:22.04

# RUN sudo apt install -y nodejs
# RUN sudo npm install -g yarn

# 1. 운영체제 및 프로그램 설치(이미 리눅스, node, npm, yarn 까지 모두 깔려있는 이미지 다운로드하는 방식)
FROM node:14

# 2. 패키지 먼저 설치하기 
COPY ./package.json /myfolder/
COPY ./yarn.lock /myfolder/
WORKDIR /myfolder/
RUN yarn install --production

# 3. 소스코드 복사하기
COPY . /myfolder/
RUN yarn build

# 4. 도커안에서 프로그램 실행하기
CMD yarn start
# CMD 마지막 실행명령으로 들어감, 그 다음은 RUN
# CMD는 한번밖에 실행이 안됨(실행명령), Run은 마음대로 실행할 수 있음(저장명령).