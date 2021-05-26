#!/bin/bash

SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" &> /dev/null && pwd )"
PROJECT_DIR="$SCRIPT_DIR/.."

s3cmd -c $PROJECT_DIR/../functions/keys/s3cmd_config --acl-public sync $PROJECT_DIR/public/static_images/  s3://media.hafla.com
