cd /home/ubuntu/apps/qa/web
npm install
npm run build:qa 
pm2 stop web-qa-hafla
pm2 restart web-qa-hafla
# pm2 start npm --name "web-qa-hafla" -- start 

