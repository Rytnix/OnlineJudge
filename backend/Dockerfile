FROM node:16
RUN apt-get update && \
    apt-get install -y apt-transport-https ca-certificates curl gnupg-agent software-properties-common && \
    apt-get update && \
    apt-get install -y  redis-server && \ 
     apt install default-jdk -y && \
     apt install default-jre -y && \
    rm -rf /var/lib/apt/lists/*

ENV PORT=5000
ENV CONTAINERIZED=true

WORKDIR /app

COPY . .

RUN npm install

EXPOSE 5000

CMD ["/bin/bash", "-c", "redis-server & npm start"]
