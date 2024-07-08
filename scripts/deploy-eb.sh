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
TYPE=$4

export SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" &> /dev/null && pwd )"
# . "$SCRIPT_DIR/env/.env"


export PROJECT_DIR="$SCRIPT_DIR/.."

if [[ -n "$TYPE" ]]
then
    echo "Deploying $TYPE"
    if [[ "$TYPE" == api ]]
    then 
        cd ${PROJECT_DIR}/functions && eb deploy "${PROJECT_NAME}-${ENVIRONMENT}"
    else
        cd ${PROJECT_DIR}/${TYPE} && eb deploy "${PROJECT_NAME}-${TYPE}-${ENVIRONMENT}"
    fi
else
    echo "Deploying all apps to $ENVIRONMENT"
    echo "Deploying API to $ENVIRONMENT($PROJECT_NAME-$ENVIRONMENT)"
    cd ${PROJECT_DIR}/functions && eb deploy "$PROJECT_NAME-$ENVIRONMENT" --profile=${AWS_PROFILE} --staged
    echo "Deploying UI to $ENVIRONMENT($PROJECT_NAME-ui-$ENVIRONMENT)"
    cd ${PROJECT_DIR}/ui && eb deploy "$PROJECT_NAME-ui-$ENVIRONMENT" --profile=${AWS_PROFILE} --staged
    echo "Deploying ADMIN to $ENVIRONMENT($PROJECT_NAME-admin-$ENVIRONMENT)"
    cd ${PROJECT_DIR}/admin && eb deploy "$PROJECT_NAME-admin-$ENVIRONMENT" --profile=${AWS_PROFILE} --staged
fi

