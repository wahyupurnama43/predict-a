FROM node:18
WORKDIR /index
ENV PORT 3001
COPY . .
RUN npm install
EXPOSE 3001
CMD [ "npm", "run", "start"]
