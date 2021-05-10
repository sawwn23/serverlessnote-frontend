const config = {
    MAX_ATTACHMENT_SIZE: 5000000,
    s3: {
      REGION: "ap-northeast-1",
      BUCKET: "serverlessknx-notes-app-upload",
    },
    apiGateway: {
      REGION: "ap-northeast-1",
      URL: "https://14vdtec3ub.execute-api.ap-northeast-1.amazonaws.com/dev",
    },
    cognito: {
      REGION: "ap-northeast-1",
      USER_POOL_ID: "ap-northeast-1_RieD32mhQ",
      APP_CLIENT_ID: "ovf94lg10sbsjk6qp22puolsg",
      IDENTITY_POOL_ID: "ap-northeast-1:0e383aad-63b2-4ff8-ae83-5d24e1e14a2b",
    },
  };
  
  export default config;