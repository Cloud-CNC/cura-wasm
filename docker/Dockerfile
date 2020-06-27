#Cura WASM build environment

FROM ubuntu

WORKDIR /usr/cura-wasm

ARG DEBIAN_FRONTEND=noninteractive

#Upgrade and update Ubuntu
RUN apt update -y && apt upgrade -y && apt dist-upgrade -y

#Install packages
RUN apt install autoconf automake build-essential cmake curl git libtool python3-dev python3-sip-dev wget unzip -y

#Copy the makefile
COPY Make.sh ./

#Copy the patch
COPY CuraEngine.patch ./