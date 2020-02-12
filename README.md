# Node HTTPS Service

Run a HTTPS node service to accept https requests and respond using SSL encryption

1. Install Nodejs
2. Install npm modules in the dir using npm install (make sure you have the package.json file)
3. Specify the port number on which you want to start the http service in the js file.
4. Copy your website you want to 'public' folder & SSL keys & certificates in 'SSL' folder.
5. Run the service using command "node <file_name>.js"
6. You can now browse the website locally on "https://127.0.0.1" or the DNS address for the same.

Shortcut: (Just run the 'start_https_service.bat' to do the above steps automatically)

Related to SSL Keys & Certificates :-

1. Copy your private key to 'SSL' folder and rename it as 'server.key'.
2. Copy your certificate to 'SSL' folder and rename it as 'server.crt'.

(Note: The Browser will only be show a secure connection only if the certificate is generated on the same machine & is hosted on the same server/machine.)

# Generating SSL keys.

Note :  1. Need to install OpenSSL to run these commands below.
        2. Need to generate these keys from the same machine from which you want to host.

1. Generating Private Key & Certificate Signing Request Key (CSR)
> openssl req -new -newkey rsa:2048 -nodes -keyout private.key -out certificate_signing_request.csr

2. Upload the CSR to the Certificate Authority Requestor and they will provide you with the 'Certificate.crt' file which you need to keep in the 'SSL' folder.

3. If you have the private key of the Certificate Authority then you can generate the certificate using following command from a different machine.
> openssl req -new -x509 -nodes -sha1 -key certificate_signing_request.csr -out Certificate.crt -days 999 -config E:\Server\openssl.cnf

(cnf file is the default config of the server you can define your .cnf as required or you can just use the provided cnf for node) 

----- Generating Self Signed Certificate ------

Follow Step 1 and then Step 3 to generate your self signed certificate.


# Installing the certificate and the key in the Server

1. Windows Server - Just Import the domain 'certificate.crt' file as machine user.
2. Linux/ Mac Server - copy the 'certificate.crt' file to '/etc/ssl/certs' & 'private.key' to '/etc/ssl/private'.


Once you have followed all this steps you are done you now have a running HTTPS Web Server.
