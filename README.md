# Formio Custom JWT Token Example

## Documentation

Custom JWT token is an authentication method for any Deployed Formio Environment. Refer to documentation: [Here](https://help.form.io/developers/integrations/auth#custom-jwt-authentication)

## Use

### Install

`npm install`
or
`yarn install`

Rename `.env.example` to `.env` and replace the value from the environment variables with your project information

### Run 
`node index.js`

This command will generate a JWT token that you can use in a API request or set the token in your localstorage using `formiojs` in your browser.
Having the "formioToken" in your localstorage will add a `x-jwt-token` header in all your formio requests.

`Formio.setToken(token)`

