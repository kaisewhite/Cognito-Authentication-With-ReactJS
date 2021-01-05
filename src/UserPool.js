import { CognitoUserPool } from "amazon-cognito-identity-js";
// Create an object that holds some information about our user pool
// Found in the dashboard
const poolData = {
  UserPoolId: "?????????????????",
  ClientId: "????????????????" // App Client ID in Cognito -> App Clients
};

export default new CognitoUserPool(poolData);
