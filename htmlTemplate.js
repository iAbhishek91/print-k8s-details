module.exports.htmlEnv = (env) => `
  <html>
    <head>
      <title> K8s metadata env</title>
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

module.exports.htmlVol = (vol) => `
  <html>
    <head>
      <title> K8s metadata vol</title>
    </head>
    <body>
    <h1>POD Details</h1>
    <ul>
      <li>POD LABELS: ${vol.LABELS}</li>
      <li>POD ANNOTATIONS: ${vol.ANNOTATIONS}</li>
    </ul>
    </body>
  </html>
`;