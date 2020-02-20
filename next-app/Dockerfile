FROM node:13.8.0
WORKDIR /app
RUN npm install --global pm2
COPY /package.json yarn.lock ./
RUN yarn install --production
COPY ./ ./
RUN yarn build
EXPOSE 3000

CMD ["pm2-runtime", "npm", "--", "start"]
