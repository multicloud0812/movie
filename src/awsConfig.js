import AWS from 'aws-sdk';
import { CognitoUserPool, CognitoUserAttribute, AuthenticationDetails, CognitoUser } from 'amazon-cognito-identity-js';

AWS.config.update({
  region: 'ap-northeast-2', // 서울 리전
  accessKeyId: 'YOUR_ACCESS_KEY_ID',
  secretAccessKey: 'YOUR_SECRET_ACCESS_KEY',
});

const dynamoDB = new AWS.DynamoDB.DocumentClient();

const poolData = {
  UserPoolId: 'YOUR_USER_POOL_ID', // Cognito User Pool ID
  ClientId: 'YOUR_CLIENT_ID', // Cognito App Client ID
};

const userPool = new CognitoUserPool(poolData);

export const getCurrentUser = () => {
  return userPool.getCurrentUser();
};

export const signup = (email, password) => {
  const attributeList = [
    new CognitoUserAttribute({ Name: 'email', Value: email })
  ];

  userPool.signUp(email, password, attributeList, null, (err, result) => {
    if (err) {
      console.error('Error during signup:', err);
      return;
    }
    console.log('User registration successful:', result);
  });
};

export const login = (email, password) => {
  const authenticationDetails = new AuthenticationDetails({
    Username: email,
    Password: password,
  });

  const userData = {
    Username: email,
    Pool: userPool,
  };

  const cognitoUser = new CognitoUser(userData);

  cognitoUser.authenticateUser(authenticationDetails, {
    onSuccess: (result) => {
      console.log('Login successful:', result);
    },
    onFailure: (err) => {
      console.error('Error during login:', err);
    },
  });
};

export { AWS, dynamoDB, userPool, CognitoUserAttribute, AuthenticationDetails, CognitoUser };
