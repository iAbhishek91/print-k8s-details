module.exports.html = (env) => `
  <html>
    <head>
      <title> K8s metadata </title>
    </head>
    <body>
    <h1>POD Details</h1>
    <ul>
      <li>POD NAME: ${env.POD_NAME}</li>
      <li>POD NAMESPACE: ${env.POD_NAMESPACE}</li>
      <li>POD IP ADDRESS: ${env.POD_IP_ADDRESS}</li>
      <li>POD: ${env.SERVICE_ACCOUNT}</li>
    </ul>
    <h1>NODE Details</h1>
    <ul>
      <li>NODE NAME: ${env.NODE_NAME}</li>
    </ul>
    </body>
  </html>
`;