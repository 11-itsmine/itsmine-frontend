# 프론트엔드 빌드 단계
FROM node:20.16.0 AS build

WORKDIR /app

# 의존성 설치
COPY frontend/package.json frontend/package-lock.json ./
RUN npm install

# 애플리케이션 소스 복사 및 빌드
COPY frontend ./
RUN npm run build

# Nginx 단계
FROM nginx:alpine

# 빌드된 파일을 Nginx의 html 디렉토리로 복사
COPY --from=build /app/build /usr/share/nginx/html

# 포트 3000 노출
EXPOSE 3000

CMD ["nginx", "-g", "daemon off;"]