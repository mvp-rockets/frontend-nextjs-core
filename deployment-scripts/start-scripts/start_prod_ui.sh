cd /home/ubuntu/apps/prod/web
npm install
npm run build:production 
pm2 stop web-prod-hafla
pm2 restart web-prod-hafla
# pm2 start npm --name "web-prod-hafla" -- start 

