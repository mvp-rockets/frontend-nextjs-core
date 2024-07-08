#!/usr/bin/env bash
set -e
# Config
if [ -z "$1" ]
then
    echo "No argument supplied"
    exit 1
fi
PROJECT_NAME=$1
ENVIRONMENT=$2
AWS_PROFILE=$3

export SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" &> /dev/null && pwd )"

export PROJECT_DIR="$SCRIPT_DIR/.." 

cd ${PROJECT_DIR}/cdk-infra && cdk deploy -e "$PROJECT_NAME-ElasticBeanstalkStack" --profile=${AWS_PROFILE}

echo "Terminating RDS"
cd ${PROJECT_DIR}/cdk-infra && cdk destroy "$PROJECT_NAME-RdsStack-$ENVIRONMENT" --require-approval=never --profile=${AWS_PROFILE} --force --exclusively


