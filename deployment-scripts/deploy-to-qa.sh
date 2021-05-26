ssh -i ../keys/napsesdevelopment.pem ubuntu@ec2-13-234-116-224.ap-south-1.compute.amazonaws.com 'rm -r /home/ubuntu/apps/qa/web'
ssh -i ../keys/napsesdevelopment.pem ubuntu@ec2-13-234-116-224.ap-south-1.compute.amazonaws.com 'mkdir -p /home/ubuntu/apps/qa/web'
rsync -P -a -e "ssh -i ../keys/napsesdevelopment.pem" ../ ubuntu@ec2-13-234-116-224.ap-south-1.compute.amazonaws.com:/home/ubuntu/apps/qa/web \
--exclude .next \
--exclude node_modules \
--exclude test \
--exclude deployment-scripts \
--exclude keys 
rsync -P -a -e "ssh -i ../keys/napsesdevelopment.pem" ../deployment-scripts/start-scripts/start_qa_ui.sh ubuntu@ec2-13-234-116-224.ap-south-1.compute.amazonaws.com:/home/ubuntu/apps/qa/web
ssh -i ../keys/napsesdevelopment.pem ubuntu@ec2-13-234-116-224.ap-south-1.compute.amazonaws.com '/home/ubuntu/apps/qa/web/start_qa_ui.sh'