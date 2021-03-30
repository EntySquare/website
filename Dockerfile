# # 设置基础镜像
# FROM node:15.12.0
# # 定义作者
# MAINTAINER yyh
# RUN mkdir -p /home/website
# WORKDIR /home/website
# COPY . /home/website
# # RUN npm install -g npm@7.7.5
# RUN npm install
# RUN npm run build
# EXPOSE 8080
# # 将dist文件中的内容复制到 /usr/share/nginx/html/ 这个目录下面
# #CMD npm run serve

# 设置基础镜像
FROM node:15.12.0
# 定义作者
MAINTAINER yyh

# RUN npm install -g npm@7.7.5
RUN npm install
RUN npm run build
RUN mkdir -p /etc/nginx/website
WORKDIR /etc/nginx/website
COPY . /etc/nginx/website
# 将dist文件中的内容复制到 /etc/nginx/html/ 这个目录下面
COPY ./website/dist/  /etc/nginx/website/