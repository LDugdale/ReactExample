import Amplify, { Auth, API, graphqlOperation } from "aws-amplify";

Amplify.configure({
    Auth: {

        // REQUIRED only for Federated Authentication - Amazon Cognito Identity Pool ID
        identityPoolId: 'eu-west-1:757d8c0d-46ff-4353-b12b-3e60c25b6751',
        
        // REQUIRED - Amazon Cognito Region
        region: 'eu-west-1',

        // OPTIONAL - Amazon Cognito Federated Identity Pool Region 
        // Required only if it's different from Amazon Cognito Region
        identityPoolRegion: 'eu-west-1',

        // OPTIONAL - Amazon Cognito User Pool ID
        userPoolId: 'eu-west-1_FQqvhIcmg',

        // OPTIONAL - Amazon Cognito Web Client ID (26-char alphanumeric string)
        userPoolWebClientId: 'j48b6khdqtam1di4s02vhuil4',

        // OPTIONAL - Enforce user authentication prior to accessing AWS resources or not
        mandatorySignIn: false,

        // OPTIONAL - Configuration for cookie storage
        // cookieStorage: {
        // // REQUIRED - Cookie domain (only required if cookieStorage is provided)
        //     domain: '.yourdomain.com',
        // // OPTIONAL - Cookie path
        //     path: '/',
        // // OPTIONAL - Cookie expiration in days
        //     expires: 365,
        // // OPTIONAL - Cookie secure flag
        //     secure: true
        // },

        // OPTIONAL - customized storage object
        //storage: new MyStorage(),
        
        // OPTIONAL - Manually set the authentication flow type. Default is 'USER_SRP_AUTH'
        //authenticationFlowType: 'USER_PASSWORD_AUTH'
    },
    API: {
        "aws_project_region": "eu-west-1",
        "aws_appsync_graphqlEndpoint": "https://x57v4dsu5fgplmw553iocewdtu.appsync-api.eu-west-1.amazonaws.com/graphql",
        "aws_appsync_region": "eu-west-1",
        "aws_appsync_authenticationType": "API_KEY",
        "aws_appsync_apiKey": "da2-sroqbl3sg5c67mipv43rn5fevi"
      }
});

export {
    Auth,
    API, 
    graphqlOperation 
}