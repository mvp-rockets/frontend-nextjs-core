#!/usr/bin/env bash
set -e
# Config
if [ -z "$1" ]
then
    echo "No argument supplied"
    exit 1
fi

AWS_PROFILE=$1
PROJECT_NAME=$2


export SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" &> /dev/null && pwd )"

export PROJECT_DIR="$SCRIPT_DIR/.." 
echo "Terminating all apps"

echo "Terminating EB Application & VPC"
cd ${PROJECT_DIR}/cdk-infra && cdk destroy -e "$PROJECT_NAME-ElasticBeanstalkStack" --require-approval=never --profile=${AWS_PROFILE} --force 

cd ${PROJECT_DIR}/cdk-infra && cdk destroy --all --require-approval=never --profile=${AWS_PROFILE} --force 
