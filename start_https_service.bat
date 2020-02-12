@echo off
title Node HTTPS Service
setlocal EnableDelayedExpansion

REM Check if node is installed
for /f "delims=" %%i in ('node -v') do set output=%%i

IF "!output!" EQU "" (
    echo Node not installed
    echo Please Install Nodejs or if already installed set node environment in system variables
) else (
    IF exist node_modules (start browse.url && node node_https_server.js) ELSE (echo Downloading node modules... && npm install && cls && title Node HTTPS Service && start browse.url && node node_https_server.js )
)

Pause