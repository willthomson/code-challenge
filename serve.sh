#!/bin/sh

export LOCAL_IP=`ipconfig getifaddr en0`

browser-sync start -s -f . --no-notify --host $LOCAL_IP --port 9000