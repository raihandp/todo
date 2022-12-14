FROM node:14-alpine as builder
WORKDIR /app
COPY . .
RUN rm -f -r node_modules package-lock.json Dockerfile

RUN npm install --production
RUN npm install -g @vercel/ncc
RUN ncc build server.js -o dist

FROM node:14-alpine
ENV HOME=/home/node
WORKDIR $HOME/app
COPY --from=builder /app/dist/index.js .
RUN npm install mysql2
# COPY --from=builder /app .
# COPY .env $HOME/app/
USER node
EXPOSE 3030
CMD ["node", "index.js"]