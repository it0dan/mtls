<p align="center">
  <a href="https://nodejs.org/" target="blank"><img src="https://github.com/devicons/devicon/blob/master/icons/nodejs/nodejs-original.svg" width="200" alt="NodeJS Logo" /></a>
  <a href="https://www.openssl.org/" target="blank"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/OpenSSL_logo.svg/2560px-OpenSSL_logo.svg.png" width="200" alt="OpenSSL Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest
    
## 📝 Description

This is a example of how to create self-signed certificate with [OpenSSL](https://www.openssl.org/) and test a [mTLS](https://www.cloudflare.com/learning/access-management/what-is-mutual-tls/) communication with a sample [NodeJS](https://nodejs.org/) application.

## 💻 What do you need to make it work?

  - [Node](https://nodejs.org/en/) - JS runtime environment
  - [VSCode](https://code.visualstudio.com/) - IDE
  - [OpenSSL](https://cloud.mongodb.com/) - TLS toolkit
  - [cURL](https://curl.se/) - Command line tool to make HTTP requests (optional)
  - [Postman](https://postman.com/) -API Testing tool (optional)

## ⚙ Installation

```bash
$ npm install
```

## 🔐 Creating certificates

Create a folder called certificates and inside this folder run the commands listed below:

```bash
# creating trust certificate authority (CA) for server and client
$ openssl req -new -x509 -nodes -days 365 -subj '/CN=my-ca' -keyout ca.key -out ca.crt

# creating server's private key
$ openssl genrsa -out server.key 2048

# creating server's certificate signature request (CSR)
$ openssl req -new -key server.key -subj '/CN=localhost' -out server.csr

# creating server's certificate signed by CA
$ openssl x509 -req -in server.csr -CA ca.crt -CAkey ca.key -CAcreateserial -days 365 -out server.crt

# creating client's private key
$ openssl genrsa -out client.key 2048

# creating client's certificate signature request (CSR)
$ openssl req -new -key client.key -subj '/CN=my-client' -out client.csr

# creating client's certificate signed by CA
$ openssl x509 -req -in client.csr -CA ca.crt -CAkey ca.key -CAcreateserial -days 365 -out client.crt
```


## 🚀 Running the app

```bash
# watch mode
$ npm run start:dev

# production mode
$ npm run start
```

## 🎬 Testing with cURL

In case you are using *cURL*, run the following command inside certificates folder:
```bash
$ curl --cacert ca.crt --key client.key --cert client.crt https://localhost:3000/ -v
```

## 🎬 Testing with Postman

To test with Postman, follow the instructions below:

Go to Settings > Certificates:
<p align="center">
  <a>
  <img src="https://i.ibb.co/7Cb30dZ/postman-certificates.png" alt="postman-certificates" />
  </a>
</p>

Now turn on CA Certificates switch and import ca.crt file into PEM file:
<p align="center">
  <a>
  <img src="https://i.ibb.co/5LT0v1X/postman-certificates2.png" alt="postman-certificates2" />
  </a>
</p>

Ater that, click in "Add Certificate" and fill the fields like the image below, and then click on the "Add" button:
<p align="center">
  <a>
  <img src="https://i.ibb.co/dgxCfm4/postman-certificates3.png" alt="postman-certificates3" />
  </a>
</p>

To finish, create a new request with our server, your response should look like this:
<p align="center">
  <a>
  <img src="https://i.ibb.co/LpTC89g/postman-certificates4.png" alt="postman-certificates4" />
  </a>
</p>

## 🐛 Problem?
If you find trouble to have some fun with this code feel confortable to open a new `ISSUE`.

But if you find it and know how to solve, please open a `PULL REQUEST`.
