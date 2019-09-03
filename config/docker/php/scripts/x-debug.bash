#!/bin/bash

## This script shouldn't run if xdebug is off
## Always append to the existing xdebug file

# Find the right path
# XDEBUG_SYSTEM_PATH=$(find /usr/local/lib/php/extensions/ -name xdebug.so);
# echo "zend_extension=${XDEBUG_SYSTEM_PATH}"; \
## MAIN CONFIGS
{
    echo "zend_extension=xdebug.so"; \
    echo 'xdebug.remote_enable=1'; \
} | tee $XDEBUG_FILE_PATH


## PORT
if [ -n "$XDEBUG_PORT" ]; then
    echo "xdebug.remote_port=${XDEBUG_PORT}" | tee -a $XDEBUG_FILE_PATH
fi

## IDEKEY
if [ -n "$XDEBUG_IDEKEY" ]; then
    echo "xdebug.idekey=${XDEBUG_IDEKEY}" | tee -a $XDEBUG_FILE_PATH
fi

## HOST
if [ -n "$XDEBUG_HOST" ]; then
    {
        echo 'xdebug.remote_connect_back=0'; \
        echo "xdebug.remote_host=${XDEBUG_HOST}"; \
    } | tee -a $XDEBUG_FILE_PATH
else
    {
        echo 'xdebug.remote_connect_back=1'; \
    } | tee -a $XDEBUG_FILE_PATH
fi

