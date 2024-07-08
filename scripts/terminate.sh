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
echo "Terminating all apps of $PROJECT_NAME $ENVIRONMENT"

echo "Terminating API"
cd ${PROJECT_DIR}/functions && eb terminate "$PROJECT_NAME-$ENVIRONMENT" --profile=${AWS_PROFILE} --force 
echo "Terminating UI "
cd ${PROJECT_DIR}/ui && eb terminate "$PROJECT_NAME-ui-$ENVIRONMENT" --profile=${AWS_PROFILE} --force
echo "Terminating ADMIN"
cd ${PROJECT_DIR}/admin && eb terminate "$PROJECT_NAME-admin-$ENVIRONMENT" --profile=${AWS_PROFILE} --force



