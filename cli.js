#!/usr/bin/env node
'use strict';
const fs = require('fs');
const meow = require('meow');
const apiSdk = require('apigateway-sdk');

const cli = meow(`
	Usage
	  $ apigateway

	Options
	  --id       The API Gateway ID.
	  --stage    The stage name.
	  --out      The output filename. [Default: apigateway.zip]
	  --profile  The AWS profile to load.
	  --region   The AWS region. [Default: us-west-1]

	Examples
	  $ apigateway --id 123 --stage v1
	  $ apigateway --id 123 --stage v1 --out archive.zip
	  $ apigateway --id 123 --stage v1 --profile apigateway-sdk
`);

if (cli.flags.profile) {
	process.env.AWS_PROFILE = cli.flags.profile;
}

apiSdk.config.update({region: cli.flags.region || 'us-west-1'});

apiSdk(cli.flags).then(data => {
	fs.writeFileSync(cli.flags.out || 'apigateway.zip', data);
});
