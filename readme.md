# apigateway-sdk-cli [![Build Status](https://travis-ci.org/SamVerschueren/apigateway-sdk-cli.svg?branch=master)](https://travis-ci.org/SamVerschueren/apigateway-sdk-cli)

> Download the JavaScript AWS API Gateway SDK.


## Install

```
$ npm install --save apigateway-sdk-cli
```


## Usage

```
$ apigateway --help

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
```


## Related

- [apigateway-sdk](https://github.com/SamVerschueren/apigateway-sdk) - API for this module

## License

MIT © [Sam Verschueren](http://github.com/SamVerschueren)
