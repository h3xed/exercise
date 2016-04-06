FROM centos:centos7

# Enable Extra Packages for Enterprise Linux (EPEL) for CentOS
RUN     yum install -y epel-release git
# Install Node.js and npm
RUN     curl --silent --location https://rpm.nodesource.com/setup_5.x | sh
RUN     yum install -y nodejs tar bzip2 fontconfig freetype

RUN mkdir /src

WORKDIR /src
ADD package.json /src/package.json
RUN npm install --silent

ADD . /src

CMD ["npm", "start"]
