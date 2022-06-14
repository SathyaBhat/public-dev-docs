"use strict";(self.webpackChunkmomento_docs=self.webpackChunkmomento_docs||[]).push([[7726],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return p}});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),h=c(n),p=o,m=h["".concat(l,".").concat(p)]||h[p]||d[p]||i;return n?a.createElement(m,r(r({ref:t},u),{},{components:n})):a.createElement(m,r({ref:t},u))}));function p(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,r[1]=s;for(var c=2;c<i;c++)r[c]=n[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},3745:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return p},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return d}});var a=n(7462),o=n(3366),i=(n(7294),n(3905)),r=["components"],s={sidebar_position:1},l="Caching with AWS Lambda",c={unversionedId:"guides/caching-with-aws-lambda",id:"guides/caching-with-aws-lambda",title:"Caching with AWS Lambda",description:"The release of AWS Lambda in November 2014 kicked off the serverless revolution in software architecture. Lambda's event-driven, function-based compute solution changed the nature of how we build applications in the cloud.",source:"@site/docs/5-guides/1-caching-with-aws-lambda.md",sourceDirName:"5-guides",slug:"/guides/caching-with-aws-lambda",permalink:"/docs/guides/caching-with-aws-lambda",draft:!1,editUrl:"https://github.com/alexdebrie/momento-docs/tree/main/docs/5-guides/1-caching-with-aws-lambda.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Guides",permalink:"/docs/guides"},next:{title:"Walkthrough - Adding a cache to a serverless application",permalink:"/docs/serverless-cache-walkthrough"}},u={},d=[{value:"Connection reuse",id:"connection-reuse",level:2},{value:"Background",id:"background",level:3},{value:"Application",id:"application",level:3},{value:"Credential management",id:"credential-management",level:2},{value:"Background",id:"background-1",level:3},{value:"Application",id:"application-1",level:3},{value:"Storing the Momento authentication token in Secrets Manager",id:"storing-the-momento-authentication-token-in-secrets-manager",level:4},{value:"Granting IAM permissions to access your secret",id:"granting-iam-permissions-to-access-your-secret",level:4},{value:"Accessing the secret in your Lambda function code",id:"accessing-the-secret-in-your-lambda-function-code",level:4},{value:"Package management",id:"package-management",level:2},{value:"Background",id:"background-2",level:3},{value:"Application",id:"application-2",level:3},{value:"Node.js",id:"nodejs",level:4},{value:"Python",id:"python",level:4},{value:"Other languages",id:"other-languages",level:4}],h={toc:d};function p(e){var t=e.components,s=(0,o.Z)(e,r);return(0,i.kt)("wrapper",(0,a.Z)({},h,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"caching-with-aws-lambda"},"Caching with AWS Lambda"),(0,i.kt)("p",null,"The release of AWS Lambda in November 2014 kicked off the serverless revolution in software architecture. Lambda's event-driven, function-based compute solution changed the nature of how we build applications in the cloud."),(0,i.kt)("p",null,"However, Lambda's compute model is quite different from the instance-based or even container-based models that came before it. It is hyper-ephemeral, as function instances are spun up on demand as needed to handle incoming events. This means you need to optimize for quick startup of your function instances and remove anything that could add to cold-start latency."),(0,i.kt)("p",null,"Further, Lambda is a stateless model where function instances can be removed as needed based on your application traffic. This means you can't assume a running instance will be available, but you can optimize your code so that requests to an existing container will be faster than those from a cold start."),(0,i.kt)("p",null,"In this guide, we will look at practical aspects of using Momento in AWS Lambda. Specifically, we'll cover three aspects of efficient use of Momento in Lambda:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"#connection-reuse"},"Connection reuse"),";")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"#credential-management"},"Credential management"),";")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"#package-management"},"Package management"),"."))),(0,i.kt)("p",null,"This is designed to be a dense, practical guide on getting Momento configured in your serverless application."),(0,i.kt)("p",null,"If you want to know more about why Momento works well with serverless applications, please refer to our ",(0,i.kt)("a",{parentName:"p",href:"./../how-it-works/caching-with-serverless"},"guide on Caching with Serverless"),"."),(0,i.kt)("p",null,"If you want a deeper tutorial of how Lambda works and how to use Momento in your Lambda-based application, check out our in-depth tutorial on adding a cache to your serverless application."),(0,i.kt)("h2",{id:"connection-reuse"},"Connection reuse"),(0,i.kt)("p",null,"The first step to using Momento well in your serverless application is to make sure you're reusing your connection to the Momento service in your Lambda function. We'll describe some background first, then give you the practical steps to take in your application."),(0,i.kt)("h3",{id:"background"},"Background"),(0,i.kt)("p",null,"Recall that Lambda is a stateless, function-based, event-driven compute model. Often, your Lambda function handler will look something like the following:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Code for example Lambda handler",src:n(6223).Z,title:"Lambda handler example",width:"1023",height:"527"})),(0,i.kt)("p",null,"You will have a handler that serves as the entrypoint to your Lambda function. Whenever you have a configured event arrive, such as an HTTP request, an SQS queue message, or a batch of stream records, an instance of your Lambda function will receive the event and invoke your handler with the details of the event."),(0,i.kt)("p",null,"The important thing to note is that everything within the scope of your handler will be new each time. For example, in our handler, we have a counter variable that is both initialized and incremented within the handler:."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Code with example Lambda handler and local variables",src:n(2390).Z,title:"Lambda handler with local variables",width:"1023",height:"527"})),(0,i.kt)("p",null,"However, because the variable is within the scope of the handler, it is not persisted across requests. Each time we invoke this specific function instance, the counter variable will be set to 1, but the count will be lost once the handler is finished executing for an event."),(0,i.kt)("p",null,"We can reuse state within a function instance if we want. If we set our variable in the global scope, outside of our handler scope, the variable will be retained across function instances."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Code with example Lambda handler and global variable",src:n(4446).Z,title:"Lambda handler with global variable",width:"1146",height:"531"})),(0,i.kt)("p",null,"In the image above, we've set the counter variable in the global scope. Now, each invocation of this function instance will increment that counter and the aggregated data will be retained across requests."),(0,i.kt)("p",null,"Note that this state is still retained within a specific instance of our Lambda function. The Lambda service may spin up multiple instances of your Lambda function if you have multiple, concurrent events that trigger your function at the same time. Data will be shared across requests to a single function instance across time but not across function instances."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Architecture diagram with pool of Lambda functions",src:n(3695).Z,title:"Lambda pool",width:"1120",height:"980"})),(0,i.kt)("p",null,"For example, in the image above, there are three separate instances of our Lambda function running. Multiple users are making HTTP requests to our function, and each function can handle only a single request at a time. However, once a function instance is initialized, it can be reused for multiple requests over time. You can see that each function instance has a counter variable, each with a different value based on the state of that individual function instance."),(0,i.kt)("p",null,"While this variable reuse can be helpful for things like counters, it is more commonly used for reusing things that can take a long time to initialize. If you are making network calls to external services like Momento in your Lambda function, establishing the initial connection can be the slowest part of your request. You will need to do both the TCP handshake to connect to the remote server and the TLS handshake to set up TLS encryption. This can easily take 100 milliseconds or more. Given that Momento has client-side latency of 1-2 milliseconds, this can defeat all of the gains from our caching!"),(0,i.kt)("p",null,"However, we can take advantage of Lambda's global variable reuse to cache our Momento client. Our first invocation within a specific function instance will take the time to establish the connection to Momento, but all subsequent invocations within that instance will be able to reuse the connection and drastically reduce overall response time."),(0,i.kt)("h3",{id:"application"},"Application"),(0,i.kt)("p",null,"Now that we know the details on why connection reuse is necessary in Lambda, let's get to the specifics of how it works."),(0,i.kt)("p",null,"Remember that anything in the global scope will be reused across requests. This means you could initialize your Momento client in the global scope of your handler as follows:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Code example with a global Momento client",src:n(6100).Z,title:"Global Momento client",width:"1260",height:"857"})),(0,i.kt)("p",null,"While this can work, it adds a lot of boilerplate to each function handler in your application. Additionally, it means your configuration logic is replicated across multiple different files rather than centralized in a single file."),(0,i.kt)("p",null,"I prefer to create a separate file for initializing my Momento client, as follows:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Code example for Momento client module",src:n(4488).Z,title:"Momento client module",width:"1148",height:"497"})),(0,i.kt)("p",null,"Notice that we have a ",(0,i.kt)("inlineCode",{parentName:"p"},"client")," variable in the global scope of this module. Then, we have a ",(0,i.kt)("inlineCode",{parentName:"p"},"getMomentoClient")," function that is exported from the module. Within that function, we first check if the ",(0,i.kt)("inlineCode",{parentName:"p"},"client")," variable is null and return it if not. Otherwise, we initialize a Momento client and save it to the ",(0,i.kt)("inlineCode",{parentName:"p"},"client")," variable. Then, we return the client to the caller."),(0,i.kt)("p",null,"This module will be loaded by our handler when our function instance is initialized. The first time a client calls the ",(0,i.kt)("inlineCode",{parentName:"p"},"getMomentoClient")," function, there will not be an existing client available and one will be initialized. However, future requests will get a previously initialized client that has an existing connection to the Momento service, resulting in faster requests."),(0,i.kt)("p",null,"You can use this in your handler function or service class as follows:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Code example for using Momento client module",src:n(1812).Z,title:"Momento client usage",width:"1411",height:"561"})),(0,i.kt)("p",null,"While the example here is in Node.js, the same pattern will apply to other programming languages."),(0,i.kt)("h2",{id:"credential-management"},"Credential management"),(0,i.kt)("p",null,"Momento uses a JWT to authenticate your client to the Momento service. In this section, we'll talk about how to manage this token in AWS Lambda."),(0,i.kt)("h3",{id:"background-1"},"Background"),(0,i.kt)("p",null,"As discussed above, Lambda is a stateless compute environment. This means all data used within your application must be either built directly into your function code or must be dynamically loaded at runtime into your application. Building data directly into your code can work for specific bits of data but is less flexible than needed for other bits of data."),(0,i.kt)("p",null,"There are two main options for handling more dynamic data in your code. For non-sensitive information, you can inject data into your function code via environment variables. This works well for data that changes across stages in your application, such as the names of DynamoDB tables or S3 buckets. It can also work well for slight configuration differences across environments, such as the log level or feature-flagging behavior of your application."),(0,i.kt)("p",null,"However, environment variables do not work as well for sensitive information. All environment variables can be accessed by your application code, and this means compromised third-party libraries could easily read and capture your sensitive credentials."),(0,i.kt)("p",null,"To manage credentials, AWS Lambda users generally turn to one of two services: ",(0,i.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/systems-manager/latest/userguide/systems-manager-parameter-store.html"},"AWS Systems Manager Parameter Store"),", or ",(0,i.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/secretsmanager/latest/userguide/intro.html"},"AWS Secrets Manager"),"."),(0,i.kt)("p",null,"These two systems are quite similar. Both provide a simple API for storing and receiving credentials and integrate with IAM to manage permissions. Secrets Manager is a more advanced solution that provides higher request limits, automated credential rotation, and more fine-grained access control."),(0,i.kt)("p",null,"For these advanced features, you pay both for each secret you store and for API calls to the Secrets Manager service. Conversely, Parameter Store is free to use but has lower per-second request limits and no automated credential rotation."),(0,i.kt)("h3",{id:"application-1"},"Application"),(0,i.kt)("p",null,"Now that we know a bit about secret management in AWS Lambda, let's see how to store and manage our Momento authentication token in Lambda."),(0,i.kt)("p",null,"The application portion of credential management has three components:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Storing the Momento authentication token in Secrets Manager;")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Granting the needed IAM permissions for a Lambda function to access the secret;")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Accessing the secret within your Lambda function."))),(0,i.kt)("p",null,"Let's handle these in order."),(0,i.kt)("h4",{id:"storing-the-momento-authentication-token-in-secrets-manager"},"Storing the Momento authentication token in Secrets Manager"),(0,i.kt)("p",null,"First, we need to store our Momento authentication token in AWS Secrets Manager."),(0,i.kt)("p",null,"Navigate to the ",(0,i.kt)("a",{parentName:"p",href:"https://console.aws.amazon.com/secretsmanager/home"},"AWS Secrets Manager section of the AWS console"),". Make sure you are in the same region you use for your serverless application. Then, click the ",(0,i.kt)("strong",{parentName:"p"},"Store a new secret")," button to add a new secret to Secrets Manager."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Example showing how to start storing a new secret in AWS Secrets Manager",src:n(6018).Z,title:"Secrets Manager creation",width:"1264",height:"520"})),(0,i.kt)("p",null,"This will open the Secrets Manager wizard for creating a new secret."),(0,i.kt)("p",null,"For the ",(0,i.kt)("strong",{parentName:"p"},"Secret type"),', select "',(0,i.kt)("strong",{parentName:"p"},"Other type of secret"),'". Then, enter "',(0,i.kt)("strong",{parentName:"p"},"MOMENTO_AUTH_TOKEN"),'" for your secret key and paste your authentication token as the secret value.'),(0,i.kt)("p",null,"You can keep the default encryption key. Click the ",(0,i.kt)("strong",{parentName:"p"},"Next")," button to continue the wizard."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Example showing how to store a new secret in Secrets Manager",src:n(1730).Z,title:"Secrets Manager Store a new secret",width:"819",height:"836"})),(0,i.kt)("p",null,"On the next screen, give your secret a name to identify the secret. and enter a quick description of the secret. Then, click ",(0,i.kt)("strong",{parentName:"p"},"Next.")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Example showing how to name and describe secret in Secrets Manager",src:n(9425).Z,title:"Secrets Manager Name and Description",width:"869",height:"936"})),(0,i.kt)("p",null,"The next screen handles secret rotation, which we will not set up here. Click ",(0,i.kt)("strong",{parentName:"p"},"Next")," to continue to the final screen."),(0,i.kt)("p",null,"On the final page, click the ",(0,i.kt)("strong",{parentName:"p"},"Store")," button to confirm storage of your secret."),(0,i.kt)("p",null,"You should now see your secret listed on the Secrets Manager page:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Example showing how to find secret in Secrets Manager",src:n(7282).Z,title:"Secrets Manager List Secrets",width:"1118",height:"331"})),(0,i.kt)("p",null,"Click on the secret name for your secret to open the detail screen for your secret."),(0,i.kt)("p",null,"In the ",(0,i.kt)("strong",{parentName:"p"},"Secret details")," section, there is a ",(0,i.kt)("strong",{parentName:"p"},"Secret ARN")," for your secret. Copy this value, as you will need it for the next step."),(0,i.kt)("h4",{id:"granting-iam-permissions-to-access-your-secret"},"Granting IAM permissions to access your secret"),(0,i.kt)("p",null,"Now that we have configured the secret in AWS Secrets Manager, we need to grant permission for your AWS Lambda function to access the secret."),(0,i.kt)("p",null,"AWS Identify and Access Management (IAM) is the authorization system across all of AWS. When creating a Lambda function, your function will be associated with an IAM role that it will use to authenticate to various AWS services. You must grant permission for that IAM to access your Momento authentication token in order to retrieve the token from AWS Secrets Manager."),(0,i.kt)("p",null,"In general, the IAM statement you will need to configure will look as follows:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'- Effect: "Allow"\n  Action:\n    - "secretsmanager:GetSecretValue"\n  Resource: "<yourSecretArn>"\n')),(0,i.kt)("p",null,"Be sure to replace ",(0,i.kt)("strong",{parentName:"p"},'"',"<",'yourSecretArn>"')," with the Secret ARN you copied from the Secrets Manager console."),(0,i.kt)("p",null,"The mechanism you use to configure your IAM statements will depend on the deployment tooling you use for your Lambda functions."),(0,i.kt)("p",null,"If you are using the ",(0,i.kt)("a",{parentName:"p",href:"https://www.serverless.com/framework"},"Serverless Framework"),", you can configure this permission by adding the following to the ",(0,i.kt)("strong",{parentName:"p"},"provider:")," block of your ",(0,i.kt)("strong",{parentName:"p"},"serverless.yml")," file:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'provider:\n  iam:\n    role:\n      statements:\n        - Effect: "Allow"\n          Action:\n            - "secretsmanager:GetSecretValue"\n          Resource: "<yourSecretArn>"\n')),(0,i.kt)("p",null,"Be sure to replace ",(0,i.kt)("strong",{parentName:"p"},'"',"<",'yourSecretArn>"')," with the Secret ARN you copied from the Secrets Manager console."),(0,i.kt)("p",null,"If you are using ",(0,i.kt)("a",{parentName:"p",href:"https://aws.amazon.com/serverless/sam/"},"AWS SAM"),", add the following in the ",(0,i.kt)("strong",{parentName:"p"},"Policies:")," section for each function that needs access to your Momento auth token:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'Policies:\n  - Statement:\n      - Effect: "Allow"\n        Action:\n          - "secretsmanager:GetSecretValue"\n        Resource: "<yourSecretArn>"\n')),(0,i.kt)("p",null,"Be sure to replace ",(0,i.kt)("strong",{parentName:"p"},'"',"<",'yourSecretArn>"')," with the Secret ARN you copied from the Secrets Manager console."),(0,i.kt)("p",null,"If you are using other deployment tooling, you can follow similar steps to attach permissions to the IAM role for your Lambda function."),(0,i.kt)("h4",{id:"accessing-the-secret-in-your-lambda-function-code"},"Accessing the secret in your Lambda function code"),(0,i.kt)("p",null,"After you have configured permissions for your Lambda function to access the secret in AWS Secrets Manager, you can now access your Momento authentication token within your Lambda function."),(0,i.kt)("p",null,"To retrieve the secret from Secrets Manager, add code like the following to your application:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'const AWS = require("aws-sdk");\n\nconst getMomentoAuthToken = async () => {\n  const secretsmanager = new AWS.SecretsManager({\n    httpOptions: {\n      connectTimeout: 1000,\n      timeout: 1000,\n    },\n  });\n\n  const response = await secretsmanager\n    .getSecretValue({\n      SecretId: <yourSecretName>,\n    })\n    .promise();\n\n  return JSON.parse(response.SecretString).MOMENTO_AUTH_TOKEN;\n};\n')),(0,i.kt)("p",null,"Be sure to replace ",(0,i.kt)("strong",{parentName:"p"},'"',"<",'yourSecretName>"')," with the name of the secret you used in the Secrets Manager console."),(0,i.kt)("p",null,"This code will create a client for accessing AWS Secrets Manager. Then, it will call the ",(0,i.kt)("inlineCode",{parentName:"p"},"GetSecretValue")," action on the Secrets Manager service. Finally, it will parse the response and return the value for the configured MOMENTO_AUTH_TOKEN."),(0,i.kt)("p",null,"Notice that this will make an external network call, and thus you should optimize your Lambda code around this. Ideally, you are only constructing your SimpleCache object once within a given Lambda function instance, as discussed above in the ",(0,i.kt)("a",{parentName:"p",href:"#heading=h.rkchdfjttru6"},"Connection reuse section"),". Because of this, you should only need to retrieve the Momento authentication token once within a particular function instance."),(0,i.kt)("h2",{id:"package-management"},"Package management"),(0,i.kt)("p",null,"The final piece of practical advice for using Momento in an AWS Lambda function is around package management. We'll first discuss the Lambda compute environment, then we'll discuss specifics around including the Momento SDK within your Lambda function."),(0,i.kt)("h3",{id:"background-2"},"Background"),(0,i.kt)("p",null,"AWS Lambda is a fully-managed, function-based compute environment. You will give Lambda a ZIP file with your function code (or, alternatively, ",(0,i.kt)("a",{parentName:"p",href:"https://aws.amazon.com/blogs/aws/new-for-aws-lambda-container-image-support/"},"a Docker container image"),"), and the Lambda environment will handle running your code in response to events."),(0,i.kt)("p",null,"As an application developer, there are two aspects you need to consider when using third-party dependencies in AWS Lambda."),(0,i.kt)("p",null,"First, you need to ensure that the dependency is included within your function ZIP file. Many deployment tools, including the ",(0,i.kt)("a",{parentName:"p",href:"https://www.serverless.com/framework"},"Serverless Framework"),", ",(0,i.kt)("a",{parentName:"p",href:"https://aws.amazon.com/serverless/sam/"},"AWS SAM"),", ",(0,i.kt)("a",{parentName:"p",href:"https://aws.amazon.com/cdk/"},"AWS CDK"),", and ",(0,i.kt)("a",{parentName:"p",href:"https://arc.codes/docs/en/get-started/why-architect"},"Architect"),", will assist you with dependency management. They will either build the dependencies for you as part of a deployment process, or they will create a ZIP file from the contents of your application directory. Specific details can be found below."),(0,i.kt)("p",null,"Second, you must ensure that your dependencies will work in the AWS Lambda environment. If you are using a ZIP file rather than a container image for your Lambda function, the code itself will be running on top of the Amazon Linux 2 operating system. Most of your function code and dependencies will work the same on your local machine as in the Lambda execution environment. However, certain dependencies must be compiled for specific architectures."),(0,i.kt)("p",null,"The ",(0,i.kt)("a",{parentName:"p",href:"./../how-it-works/momento-concepts#grpc"},"Momento SimpleCache clients use gRPC")," to connect to the Momento service. The gRPC library for Python uses architecture-specific bindings and thus must be compiled for the Amazon Linux 2 execution environment. If you build the dependency directly on your Mac or Windows machine, it won't be compatible with the Lambda execution environment."),(0,i.kt)("p",null,"Below, we will see how to handle both of these problems using popular deployment frameworks."),(0,i.kt)("h3",{id:"application-2"},"Application"),(0,i.kt)("p",null,"Now that we know the background on using dependencies within AWS Lambda, let's see how to use the Momento SDK with different runtimes and deployment tooling."),(0,i.kt)("h4",{id:"nodejs"},"Node.js"),(0,i.kt)("p",null,"If you are using Node.js for your Lambda functions, you don't need to worry about compiling for a specific execution environment. The Momento SDK and all of its dependencies are pure JavaScript and will work across different architectures."),(0,i.kt)("p",null,"To add Momento to your Lambda function, you need to install it and save it to your ",(0,i.kt)("inlineCode",{parentName:"p"},"package.json")," file:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"npm install --save @gomomento/sdk\n")),(0,i.kt)("p",null,"Most of the popular deployment tools will automatically include the installed package in your Lambda function ZIP file."),(0,i.kt)("h4",{id:"python"},"Python"),(0,i.kt)("p",null,"If you are using Python for your Lambda function, you need to ensure to compile the gRPC package for the Amazon Linux 2 execution environment. How you do so depends on your deployment tooling."),(0,i.kt)("p",null,"If you are using the Serverless Framework, you can use the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/serverless/serverless-python-requirements"},"serverless-python-requirements")," plugin to assist in building and managing your Python requirements. The serverless-python-requirements package will integrate with your Python package manager of choice to build your Python dependencies when deploying your Lambda function. Importantly, you can choose to build your dependencies in a Docker container that matches the Lambda execution environment and thus will be built correctly."),(0,i.kt)("p",null,"To configure serverless-python-requirements, be sure to add the following configuration to your ",(0,i.kt)("inlineCode",{parentName:"p"},"serverless.yml")," file:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"plugins:\n  - serverless-python-requirements\n\ncustom:\n  pythonRequirements:\n    dockerizePip: true\n")),(0,i.kt)("p",null,"Be sure to read the rest of the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/serverless/serverless-python-requirements"},"documentation on serverless-python-requirements")," to customize for your specific environment."),(0,i.kt)("p",null,"If you are using AWS SAM, you can use the following command to build your ZIP file properly for the Lambda execution environment:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"sam build --use-container\n")),(0,i.kt)("p",null,"This will ",(0,i.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/serverless-sam-cli-using-build.html#build-zip-archive"},"indicate to SAM that you want to use a Docker image")," that is similar to the Lambda execution environment to build your dependencies."),(0,i.kt)("p",null,"If you are using the AWS CDK, it will ",(0,i.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/cdk/api/v1/docs/aws-lambda-python-readme.html#packaging"},"install all dependencies in a Lambda-compatible Docker container")," based on the Python package management tool of your choice."),(0,i.kt)("h4",{id:"other-languages"},"Other languages"),(0,i.kt)("p",null,"For other languages, you should install the Momento SDK according to the installation instructions. Then, refer to the AWS Lambda documentation for building ZIP files for those languages:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/lambda/latest/dg/java-package.html"},"Lambda Java deployment package"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/lambda/latest/dg/golang-package.html"},"Lambda Golang deployment package"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/lambda/latest/dg/csharp-package.html"},"Lambda C# deployment package")))))}p.isMDXComponent=!0},6100:function(e,t,n){t.Z=n.p+"assets/images/global-momento-client-9b4a270116e96bf47307c56c33d97136.png"},4446:function(e,t,n){t.Z=n.p+"assets/images/global-variable-64a53bfa7276d361ffa1b1ab6ccb5247.png"},2390:function(e,t,n){t.Z=n.p+"assets/images/handler-local-variable-a0bde0b12af7a13240ebe6dbf9a6b3a6.png"},6223:function(e,t,n){t.Z=n.p+"assets/images/lambda-handler-26dc2ee0dffcdc4acfdc3d059b091ed2.png"},3695:function(e,t,n){t.Z=n.p+"assets/images/lambda-pool-c22a1eea76466c7deb1e351dda7ecb09.png"},4488:function(e,t,n){t.Z=n.p+"assets/images/momento-client-module-9a2a079b9c6e77777636aaa4db6221c2.png"},1812:function(e,t,n){t.Z=n.p+"assets/images/momento-client-usage-77c88fbc1b37fd6c1e168158e2c482ad.png"},6018:function(e,t,n){t.Z=n.p+"assets/images/secrets-manager-creation-6f608f64698de5d0a50763c2ef301141.png"},7282:function(e,t,n){t.Z=n.p+"assets/images/secrets-manager-list-secrets-770a46e4bb264356a4e9bd8dd1cf7cf8.png"},9425:function(e,t,n){t.Z=n.p+"assets/images/secrets-manager-name-and-description-f81c4bbf483e60b584845ac96d911bc4.png"},1730:function(e,t,n){t.Z=n.p+"assets/images/secrets-manager-store-new-secret-bcc6b30645e7f1ec290d37ef993ee000.png"}}]);