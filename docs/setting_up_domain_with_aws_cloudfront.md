# Setting Up Domain with AWS Cloudfront

## Table of Contents
1. [Introduction](#introduction)
2. [Domain: AWS Route 53](#domain)
3. [SSL Certs: AWS Certificate Manager](#ssl)
	3. [Multiple Domains](#ssl-multiple-domains)
4. [Proxy Server: AWS Cloudfront](#cloudfront)
5. [DNS Record Set: AWS Route 53](#dns)


## <a name="introduction"></a> Introduction
Cloudfront acts as a Proxy for our purposes here.

It allows our gateway to our application to be perceived as www.some-domain.com although the static files are stored in one location, and the server is being hosted in another. 

This gives us the flexibility to have a standardized and configurable entrypoint to our hosted environments regardless where the files themselves are being hosted. 

## <a name="domain"></a> Domain: AWS Route 53
We need a Domain to use to be our entry point.  You should go with [AWS Route 53] as the SSL Certificates and Cloudfront will be expecting to be using it.  AWS works well when you use everything from the same ecosystem

0. Go to [https://console.aws.amazon.com/route53/](https://console.aws.amazon.com/route53/)
0. Buy a domain
	2.  The standard option is `.com` is $12 each for the year
	2.  Cheapest option is a `.click` domain at $7 a year
	2.  `.pizza` exists, isn't that cool?
0. You're done (for now)

## <a name="ssl"></a> SSL Certs: AWS Certificate Manager
We need to create an SSL Certificate that will authorize communication under specific domains and subdomains of our choosing. 

This process in AWS could not be simpler. 

0. Go to [https://console.aws.amazon.com/acm/home](https://console.aws.amazon.com/acm/home)
	1. Its not super important but stay in the same region for all of your configuration, including your S3 Bucket setup
0. Add your domain name in
	1. `my-domain.com`
1. Add any wildcards you want as well for subdomains
	2. `*.my-domain.com`
	0. This will automatically include www through the use of the wildcard

Be as specific or non-specific as you want with these patterns.

### <a name="ssl-multiple-domains"></a> Multiple Domains

The individual example above should suffice for most setups, but you could get fancy with setting up multiple environments under one domain.

Example:

1. Development Cert
	1. `dev.my-domain.com`
	1. `*.dev.my-domain.com`
2. Staging Cert
	1. `uat.my-domain.com`
	1. `*.uat.my-domain.com`
3. Production Cert
	1. `my-domain.com`
	1. `*.my-domain.com`

## <a name="cloudfront"></a> Proxy Server: AWS Cloudfront

*Note: be sure to have a Heroku application domain already created*

We need to Connect our Heroku Origin with our Domain. This will allow users to go to our purchased domain (`my-domain.com`) but actually be proxying through it to the heroku app's location at `my-app.herokuapp.com`

We are setting:0. Origin Settings (information about the Server we want to proxy to)
0. Behavior Settings (forwarding query strings and headers, defaulting to https, etc...)
0. Distribution Settings (CNAMES to distribute to, SSL Certs)

** Instructions **

* Origin Settings
	0. Origin Domain Name: Domain of the Heroku App
		1. Example: `my-app.herokuapp.com`
	0. Origin Path: (leave empty)
	1. Origin ID: (automatically defined)
	2. Origin SSL Protocols (default)
		0. TLSv1.2: Checked
		0. TLSv1.1: Checked
		0. TLSv1: Checked
		0. SSLv3: Unchecked
	3. Origin Protocol Policy: Match Viewer
	4. HTTP Port: 80 (default)
	5. HTTPS Port 443 (default)
	6. Origin Custom Headers (default)
		0. (leave empty)
	
* Default Cache Behavior Settings
	8. Path Pattern: Default (*)
	0. Viewer Protocol Policy
	0. Allowed HTTP Methods
	0. Cached HTTP Methods
	0. Forward Headers
	0. Object Caching
	0. Minimum TTL
	0. Maximum TTL
	0. Default TTL
	0. Forward Cookies
	0. Forward Query Strings
	0. Smooth Streaming
	0. Restrict Viewer Access
	0. Compress Objects Automatically
* Distribution Settings
	0. Price Class
	0. AWS WAF Web ACL
	0. Alternate Domain Names (CNAMEs)
	0. SSL Certificates
	0. Custom SSL Client Support


## <a name="dns"></a> DNS Record Set: AWS Route 53
Now that we have a CloudFront Distribution connecting our Heroku Origin with our Domain CNAMES, we need to update this in our DNS Record Set

0. Connect the domain AND any subdomains under it by setting a wildcard of * 
	1. Remember to Select Alias	0. Select the `CloudFront distribution` created for this domain
Example Steps:
0. Name: `*.my-domain.com`0. Type: IPv4 address0. Alias: Yes
0. Alias Target: *Cloudfront distributions* > *.my-domain.com
1. Save it

When completed, you should see in the table a new entry for this with the name that was entered, of type A, and the value as an ALIAS to the cloudfront distribution unique code

[AWS Route 53]: https://aws.amazon.com/route53/