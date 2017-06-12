export let data = {
  "modelVersion": 0,
  "id": "ocrjadgbwq7zld3q4zftc2f7zuiyos5b",
  "applicationName": "MyTestApp",
  "description": " ",
  "flows": {
    "87bb8723-c3f8-41ca-aa2c-51d14527437a": {
      "_id": "87bb8723-c3f8-41ca-aa2c-51d14527437a",
      "name": "Fake name",
      "description": "Fake description",
      "items": {
        "3e2ec2ab-0cc0-490e-aad0-e50b84adc9c8": {
          "id": "3e2ec2ab-0cc0-490e-aad0-e50b84adc9c8",
          "type": 0,
          "version": "1.0.0",
          "name": "tibco-wi-timer",
          "description": "Simple Timer trigger",
          "title": "TimerTrigger",
          "wi": {
            "visible": true,
            "sections": [
              "Configuration"
            ]
          },
          "triggerType": "tibco-wi-timer",
          "homepage": "git.tibco.com/git/product/ipaas/wi-contrib.git/trigger/general/timer",
          "settings": [],
          "outputs": [],
          "endpoint": {
            "settings": [
              {
                "name": "Repeating",
                "type": "boolean",
                "description": "Indicates whether this flow should run only once or multiple times",
                "value": false,
                "required": true,
                "tags": [
                  "Configuration"
                ]
              },
              {
                "name": "Start Date",
                "type": "string",
                "wi": {
                  "visible": false
                },
                "tags": [
                  "Configuration"
                ]
              },
              {
                "name": "Time Interval",
                "type": "integer",
                "description": "The time interval to start the flow execution",
                "value": 1,
                "required": true,
                "tags": [
                  "Configuration"
                ]
              },
              {
                "name": "Interval Unit",
                "type": "string",
                "required": true,
                "description": "The unit of time interval to start the flow execution",
                "value": "Second",
                "allowed": [
                  "Second",
                  "Minute",
                  "Hour",
                  "Day",
                  "Week"
                ],
                "tags": [
                  "Configuration"
                ]
              }
            ]
          },
          "__schema": {
            "name": "tibco-wi-timer",
            "version": "1.0.0",
            "type": "flogo:trigger",
            "title": "Timer Trigger",
            "description": "Simple Timer trigger",
            "category": "General",
            "wi": {
              "visible": true,
              "sections": [
                "Configuration"
              ]
            },
            "ref": "git.tibco.com/git/product/ipaas/wi-contrib.git/trigger/general/timer",
            "settings": [],
            "endpoint": {
              "settings": [
                {
                  "name": "Repeating",
                  "type": "boolean",
                  "description": "Indicates whether this flow should run only once or multiple times",
                  "value": false,
                  "required": true,
                  "tags": [
                    "Configuration"
                  ]
                },
                {
                  "name": "Start Date",
                  "type": "string",
                  "wi": {
                    "visible": false
                  },
                  "tags": [
                    "Configuration"
                  ]
                },
                {
                  "name": "Time Interval",
                  "type": "integer",
                  "description": "The time interval to start the flow execution",
                  "value": 1,
                  "required": true,
                  "tags": [
                    "Configuration"
                  ]
                },
                {
                  "name": "Interval Unit",
                  "type": "string",
                  "required": true,
                  "description": "The unit of time interval to start the flow execution",
                  "value": "Second",
                  "allowed": [
                    "Second",
                    "Minute",
                    "Hour",
                    "Day",
                    "Week"
                  ],
                  "tags": [
                    "Configuration"
                  ]
                }
              ]
            }
          },
          "attributes": {
            "inputs": []
          },
          "inputMappings": {},
          "outputMappings": []
        },
        "3297f6a0-c00c-4e27-9888-0a25356093aa": {
          "id": "3297f6a0-c00c-4e27-9888-0a25356093aa",
          "type": 1,
          "version": "1.0.0",
          "name": "tibco-wi-log",
          "description": "Simple Log Activity",
          "title": "LogMessage",
          "wi": {
            "visible": true,
            "sections": [
              "Configuration",
              "Input"
            ]
          },
          "activityType": "tibco-wi-log",
          "homepage": "git.tibco.com/git/product/ipaas/wi-contrib.git/activity/general/log",
          "settings": [
            {
              "name": "Log Level",
              "type": "string",
              "required": true,
              "value": "INFO",
              "description": "Set log level",
              "allowed": [
                "INFO",
                "WARN",
                "ERROR",
                "DEBUG"
              ],
              "tags": [
                "Configuration"
              ]
            }
          ],
          "outputs": [],
          "endpoint": {
            "settings": []
          },
          "__schema": {
            "name": "tibco-wi-log",
            "type": "flogo:activity",
            "version": "1.0.0",
            "title": "Log Message",
            "description": "Simple Log Activity",
            "category": "General",
            "wi": {
              "visible": true,
              "sections": [
                "Configuration",
                "Input"
              ]
            },
            "ref": "git.tibco.com/git/product/ipaas/wi-contrib.git/activity/general/log",
            "inputs": [
              {
                "name": "Log Level",
                "type": "string",
                "required": true,
                "value": "INFO",
                "description": "Set log level",
                "allowed": [
                  "INFO",
                  "WARN",
                  "ERROR",
                  "DEBUG"
                ],
                "tags": [
                  "Configuration"
                ]
              },
              {
                "name": "message",
                "type": "string",
                "description": "Message to be printed",
                "tags": [
                  "Input"
                ],
                "mappings": {}
              }
            ]
          },
          "attributes": {
            "inputs": [
              {
                "name": "message",
                "type": "string",
                "description": "Message to be printed",
                "tags": [
                  "Input"
                ],
                "mappings": {}
              }
            ]
          },
          "inputMappings": {},
          "outputMappings": [],
          "activityTitle": "LogMessage1"
        },
        "fd738eaf-2632-491e-87f6-623d53194e5b": {
          "id": "fd738eaf-2632-491e-87f6-623d53194e5b",
          "type": 1,
          "version": "1.0.0",
          "name": "tibco-wi-sendmail",
          "description": "Simple Send Mail Activity",
          "title": "SendMail",
          "wi": {
            "visible": true,
            "sections": [
              "Configuration",
              "Input"
            ]
          },
          "activityType": "tibco-wi-sendmail",
          "homepage": "git.tibco.com/git/product/ipaas/wi-contrib.git/activity/general/sendmail",
          "settings": [
            {
              "name": "Server",
              "type": "string",
              "description": "Host name or IP address for the mail server",
              "required": true,
              "tags": [
                "Configuration"
              ],
              "value": ""
            },
            {
              "name": "Port",
              "type": "integer",
              "required": true,
              "description": "The port used to connect to the mail server",
              "tags": [
                "Configuration"
              ],
              "value": ""
            },
            {
              "name": "Username",
              "description": "The username to use when authenticating to the mail server",
              "tags": [
                "Configuration"
              ],
              "type": "string",
              "required": true,
              "value": ""
            },
            {
              "name": "Password",
              "type": "password",
              "required": true,
              "description": "The password to use when authenticating to the mail server",
              "tags": [
                "Configuration"
              ],
              "value": ""
            }
          ],
          "outputs": [],
          "endpoint": {
            "settings": []
          },
          "__schema": {
            "name": "tibco-wi-sendmail",
            "version": "1.0.0",
            "type": "flogo:activity",
            "title": "Send Mail",
            "description": "Simple Send Mail Activity",
            "category": "General",
            "wi": {
              "visible": true,
              "sections": [
                "Configuration",
                "Input"
              ]
            },
            "ref": "git.tibco.com/git/product/ipaas/wi-contrib.git/activity/general/sendmail",
            "inputs": [
              {
                "name": "Server",
                "type": "string",
                "description": "Host name or IP address for the mail server",
                "required": true,
                "tags": [
                  "Configuration"
                ],
                "value": ""
              },
              {
                "name": "Port",
                "type": "integer",
                "required": true,
                "description": "The port used to connect to the mail server",
                "tags": [
                  "Configuration"
                ],
                "value": ""
              },
              {
                "name": "Username",
                "description": "The username to use when authenticating to the mail server",
                "tags": [
                  "Configuration"
                ],
                "type": "string",
                "required": true,
                "value": ""
              },
              {
                "name": "Password",
                "type": "password",
                "required": true,
                "description": "The password to use when authenticating to the mail server",
                "tags": [
                  "Configuration"
                ],
                "value": ""
              },
              {
                "name": "sender",
                "type": "string",
                "description": "The email address of the sender",
                "tags": [
                  "Input"
                ],
                "value": "",
                "mappings": {}
              },
              {
                "name": "recipients",
                "type": "string",
                "required": true,
                "description": "The comma-separated recipient list for the email e.g. recipient1@example.net,recipient2@example.net",
                "tags": [
                  "Input"
                ],
                "value": "",
                "mappings": {}
              },
              {
                "name": "subject",
                "type": "string",
                "description": "The subject of the email",
                "tags": [
                  "Input"
                ],
                "value": "",
                "mappings": {}
              },
              {
                "name": "message",
                "type": "string",
                "description": "The text of the email message",
                "tags": [
                  "Input"
                ],
                "value": "",
                "mappings": {}
              }
            ]
          },
          "attributes": {
            "inputs": [
              {
                "name": "sender",
                "type": "string",
                "description": "The email address of the sender",
                "tags": [
                  "Input"
                ],
                "value": "",
                "mappings": {}
              },
              {
                "name": "recipients",
                "type": "string",
                "required": true,
                "description": "The comma-separated recipient list for the email e.g. recipient1@example.net,recipient2@example.net",
                "tags": [
                  "Input"
                ],
                "value": "",
                "mappings": {}
              },
              {
                "name": "subject",
                "type": "string",
                "description": "The subject of the email",
                "tags": [
                  "Input"
                ],
                "value": "",
                "mappings": {}
              },
              {
                "name": "message",
                "type": "string",
                "description": "The text of the email message",
                "tags": [
                  "Input"
                ],
                "value": "",
                "mappings": {}
              }
            ]
          },
          "inputMappings": {},
          "outputMappings": [],
          "activityTitle": "SendMail"
        },
        "54533397-fa0c-4994-a8ef-373290f85bc7": {
          "id": "54533397-fa0c-4994-a8ef-373290f85bc7",
          "type": 1,
          "version": "0.0.1",
          "name": "tibco-wi-restinvoke",
          "description": "Simple REST Activity",
          "title": "InvokeRESTService",
          "wi": {
            "visible": true,
            "sections": [
              "Configuration",
              "Input Settings",
              "Input",
              "Output Settings",
              "Output"
            ]
          },
          "activityType": "tibco-wi-restinvoke",
          "homepage": "git.tibco.com/git/product/ipaas/wi-contrib.git/activity/general/rest",
          "settings": [
            {
              "name": "Method",
              "type": "string",
              "required": true,
              "description": "The REST method used for the requests",
              "allowed": [
                "GET",
                "POST",
                "PUT",
                "DELETE"
              ],
              "tags": [
                "Configuration"
              ],
              "value": "GET"
            },
            {
              "name": "Uri",
              "type": "string",
              "description": "The URL of the REST service",
              "required": true,
              "tags": [
                "Configuration"
              ],
              "value": ""
            },
            {
              "name": "Use certificate for verification",
              "description": "Use certificate for secure connection to the server",
              "type": "boolean",
              "required": true,
              "value": false,
              "tags": [
                "Configuration"
              ],
              "wi": {
                "visible": false,
                "readonly": false,
                "valid": true
              }
            },
            {
              "name": "Username",
              "description": "The username for basic authentication",
              "type": "string",
              "wi": {
                "visible": false
              },
              "tags": [
                "Configuration"
              ]
            },
            {
              "name": "Password",
              "description": "The password for basic authentication",
              "type": "password",
              "wi": {
                "visible": false
              },
              "tags": [
                "Configuration"
              ]
            },
            {
              "name": "Server Certificate",
              "description": "Self-signed PEM certificate for secure connection",
              "type": "file",
              "required": true,
              "tags": [
                "Configuration"
              ],
              "wi": {
                "visible": false,
                "allowedExtensions": [
                  ".pem",
                  ".cert",
                  ".cer",
                  ".crt"
                ],
                "readonly": false,
                "valid": true
              }
            },
            {
              "name": "Request Schema",
              "description": "An example JSON data that you want to send to the REST service",
              "type": "any",
              "relatedTo": "inputs:body",
              "tags": [
                "Input Settings"
              ],
              "wi": {
                "visible": false,
                "readonly": false,
                "valid": true
              }
            },
            {
              "name": "Response Schema",
              "description": "An example JSON data that you expect back from the REST service",
              "type": "any",
              "relatedTo": "outputs:responseBody",
              "tags": [
                "Output Settings"
              ]
            },
            {
              "name": "Query Params",
              "description": "The query parameters for requests",
              "type": "schema",
              "schema": "{\"type\":\"array\",\"items\":{\"type\":\"object\",\"properties\":{\"parameterName\":{\"type\":\"string\"},\"type\":{\"type\":{\"enum\":[\"string\",\"number\",\"boolean\"]}},\"required\":{\"type\":{\"enum\":[\"true\",\"false\"]}}}}}",
              "tags": [
                "Input Settings"
              ]
            },
            {
              "name": "metadata:Query Params",
              "type": "schema",
              "description": "The metadata of query parameters",
              "relatedTo": "inputs:queryParams",
              "wi": {
                "visible": false
              },
              "tags": [
                "Input Settings"
              ],
              "value": ""
            },
            {
              "name": "Request Headers",
              "description": "The headers you want to send",
              "type": "schema",
              "schema": "{\"type\":\"array\",\"items\":{\"type\":\"object\",\"properties\":{\"parameterName\":{\"type\":\"string\"},\"type\":{\"type\":{\"enum\":[\"string\",\"number\",\"boolean\"]}},\"required\":{\"type\":{\"enum\":[\"true\",\"false\"]}}}}}",
              "value": "[{\"parameterName\":\"Accept\",\"type\":\"string\",\"repeating\":\"false\",\"required\":\"false\",\"isEditable\":false,\"isHidden\":true},{\"parameterName\":\"Accept-Charset\",\"type\":\"string\",\"repeating\":\"false\",\"required\":\"false\",\"isEditable\":false,\"isHidden\":true},{\"parameterName\":\"Accept-Encoding\",\"type\":\"string\",\"repeating\":\"false\",\"required\":\"false\",\"isEditable\":false,\"isHidden\":true},{\"parameterName\":\"Content-Type\",\"type\":\"string\",\"repeating\":\"false\",\"required\":\"false\",\"isEditable\":false,\"isHidden\":true},{\"parameterName\":\"Content-Length\",\"type\":\"string\",\"repeating\":\"false\",\"required\":\"false\",\"isEditable\":false,\"isHidden\":true},{\"parameterName\":\"Connection\",\"type\":\"string\",\"repeating\":\"false\",\"required\":\"false\",\"isEditable\":false,\"isHidden\":true},{\"parameterName\":\"Cookie\",\"type\":\"string\",\"repeating\":\"false\",\"required\":\"false\",\"isEditable\":false,\"isHidden\":true},{\"parameterName\":\"Pragma\",\"type\":\"string\",\"repeating\":\"false\",\"required\":\"false\",\"isEditable\":false,\"isHidden\":true}]",
              "tags": [
                "Input Settings"
              ]
            },
            {
              "name": "metadata:Request Headers",
              "description": "The metadata for request headers",
              "type": "schema",
              "relatedTo": "inputs:headers",
              "wi": {
                "visible": false
              },
              "tags": [
                "Input Settings"
              ],
              "value": "{\"type\":\"object\",\"properties\":{\"Accept\":{\"required\":\"false\",\"type\":\"string\"},\"Accept-Charset\":{\"required\":\"false\",\"type\":\"string\"},\"Accept-Encoding\":{\"required\":\"false\",\"type\":\"string\"},\"Content-Type\":{\"required\":\"false\",\"type\":\"string\"},\"Content-Length\":{\"required\":\"false\",\"type\":\"string\"},\"Connection\":{\"required\":\"false\",\"type\":\"string\"},\"Cookie\":{\"required\":\"false\",\"type\":\"string\"},\"Pragma\":{\"required\":\"false\",\"type\":\"string\"}},\"required\":[]}"
            },
            {
              "name": "Response Headers",
              "description": "The headers you expect to receive",
              "type": "schema",
              "schema": "{\"type\":\"array\",\"items\":{\"type\":\"object\",\"properties\":{\"parameterName\":{\"type\":\"string\"},\"type\":{\"type\":{\"enum\":[\"string\",\"number\",\"boolean\"]}},\"repeating\":{\"type\":{\"enum\":[\"true\",\"false\"]}},\"required\":{\"type\":{\"enum\":[\"true\",\"false\"]}}}}}",
              "value": "[{\"parameterName\":\"Accept\",\"type\":\"string\",\"repeating\":\"false\",\"required\":\"false\",\"isEditable\":false,\"isHidden\":true},{\"parameterName\":\"Accept-Charset\",\"type\":\"string\",\"repeating\":\"false\",\"required\":\"false\",\"isEditable\":false,\"isHidden\":true},{\"parameterName\":\"Accept-Encoding\",\"type\":\"string\",\"repeating\":\"false\",\"required\":\"false\",\"isEditable\":false,\"isHidden\":true},{\"parameterName\":\"Content-Type\",\"type\":\"string\",\"repeating\":\"false\",\"required\":\"false\",\"isEditable\":false,\"isHidden\":true},{\"parameterName\":\"Content-Length\",\"type\":\"string\",\"repeating\":\"false\",\"required\":\"false\",\"isEditable\":false,\"isHidden\":true},{\"parameterName\":\"Connection\",\"type\":\"string\",\"repeating\":\"false\",\"required\":\"false\",\"isEditable\":false,\"isHidden\":true},{\"parameterName\":\"Cookie\",\"type\":\"string\",\"repeating\":\"false\",\"required\":\"false\",\"isEditable\":false,\"isHidden\":true},{\"parameterName\":\"Pragma\",\"type\":\"string\",\"repeating\":\"false\",\"required\":\"false\",\"isEditable\":false,\"isHidden\":true}]",
              "tags": [
                "Output Settings"
              ]
            },
            {
              "name": "metadata:Response Headers",
              "description": "The metadata for response headers",
              "type": "schema",
              "relatedTo": "outputs:headers",
              "wi": {
                "visible": false
              },
              "tags": [
                "Output Settings"
              ],
              "value": "{\"type\":\"object\",\"properties\":{\"Accept\":{\"required\":\"false\",\"type\":\"string\"},\"Accept-Charset\":{\"required\":\"false\",\"type\":\"string\"},\"Accept-Encoding\":{\"required\":\"false\",\"type\":\"string\"},\"Content-Type\":{\"required\":\"false\",\"type\":\"string\"},\"Content-Length\":{\"required\":\"false\",\"type\":\"string\"},\"Connection\":{\"required\":\"false\",\"type\":\"string\"},\"Cookie\":{\"required\":\"false\",\"type\":\"string\"},\"Pragma\":{\"required\":\"false\",\"type\":\"string\"}},\"required\":[]}"
            },
            {
              "name": "Path Params",
              "description": "The path parameters for request",
              "type": "schema",
              "schema": "{\"type\": \"array\",\"items\": {\"type\": \"object\",\"properties\": {\"parameterName\": {\"type\": \"string\"},\"type\": {\"type\": {\"enum\": [\"string\",\"number\",\"boolean\"]}}}}}",
              "tags": [
                "Configuration"
              ],
              "wi": {
                "visible": false
              },
              "value": "[]"
            },
            {
              "name": "metadata:Path Params",
              "description": "The metadata of path parameters",
              "type": "schema",
              "relatedTo": "inputs:pathParams",
              "wi": {
                "visible": false
              },
              "tags": [
                "Configuration"
              ],
              "value": "{\"type\":\"object\",\"properties\":{}}"
            }
          ],
          "outputs": [
            {
              "name": "statusCode",
              "type": "integer",
              "tags": [
                "Output"
              ],
              "mappings": []
            },
            {
              "name": "responseBody",
              "type": "complex_object",
              "tags": [
                "Output"
              ],
              "mappings": []
            },
            {
              "name": "headers",
              "type": "complex_object",
              "tags": [
                "Output"
              ],
              "mappings": []
            },
            {
              "name": "error",
              "type": "string",
              "tags": [
                "Output"
              ],
              "mappings": []
            }
          ],
          "endpoint": {
            "settings": []
          },
          "__schema": {
            "name": "tibco-wi-restinvoke",
            "version": "0.0.1",
            "type": "flogo:activity",
            "title": "Invoke REST Service",
            "description": "Simple REST Activity",
            "category": "General",
            "wi": {
              "visible": true,
              "sections": [
                "Configuration",
                "Input Settings",
                "Input",
                "Output Settings",
                "Output"
              ]
            },
            "ref": "git.tibco.com/git/product/ipaas/wi-contrib.git/activity/general/rest",
            "settings": [
              {
                "name": "Method",
                "type": "string",
                "required": true,
                "description": "The REST method used for the requests",
                "allowed": [
                  "GET",
                  "POST",
                  "PUT",
                  "DELETE"
                ],
                "tags": [
                  "Configuration"
                ],
                "value": "GET"
              },
              {
                "name": "Uri",
                "type": "string",
                "description": "The URL of the REST service",
                "required": true,
                "tags": [
                  "Configuration"
                ],
                "value": ""
              },
              {
                "name": "Use certificate for verification",
                "description": "Use certificate for secure connection to the server",
                "type": "boolean",
                "required": true,
                "value": false,
                "tags": [
                  "Configuration"
                ],
                "wi": {
                  "visible": false,
                  "readonly": false,
                  "valid": true
                }
              },
              {
                "name": "Username",
                "description": "The username for basic authentication",
                "type": "string",
                "wi": {
                  "visible": false
                },
                "tags": [
                  "Configuration"
                ]
              },
              {
                "name": "Password",
                "description": "The password for basic authentication",
                "type": "password",
                "wi": {
                  "visible": false
                },
                "tags": [
                  "Configuration"
                ]
              },
              {
                "name": "Server Certificate",
                "description": "Self-signed PEM certificate for secure connection",
                "type": "file",
                "required": true,
                "tags": [
                  "Configuration"
                ],
                "wi": {
                  "visible": false,
                  "allowedExtensions": [
                    ".pem",
                    ".cert",
                    ".cer",
                    ".crt"
                  ],
                  "readonly": false,
                  "valid": true
                }
              },
              {
                "name": "Request Schema",
                "description": "An example JSON data that you want to send to the REST service",
                "type": "any",
                "relatedTo": "inputs:body",
                "tags": [
                  "Input Settings"
                ],
                "wi": {
                  "visible": false,
                  "readonly": false,
                  "valid": true
                }
              },
              {
                "name": "Response Schema",
                "description": "An example JSON data that you expect back from the REST service",
                "type": "any",
                "relatedTo": "outputs:responseBody",
                "tags": [
                  "Output Settings"
                ]
              },
              {
                "name": "Query Params",
                "description": "The query parameters for requests",
                "type": "schema",
                "schema": "{\"type\":\"array\",\"items\":{\"type\":\"object\",\"properties\":{\"parameterName\":{\"type\":\"string\"},\"type\":{\"type\":{\"enum\":[\"string\",\"number\",\"boolean\"]}},\"required\":{\"type\":{\"enum\":[\"true\",\"false\"]}}}}}",
                "tags": [
                  "Input Settings"
                ]
              },
              {
                "name": "metadata:Query Params",
                "type": "schema",
                "description": "The metadata of query parameters",
                "relatedTo": "inputs:queryParams",
                "wi": {
                  "visible": false
                },
                "tags": [
                  "Input Settings"
                ],
                "value": ""
              },
              {
                "name": "Request Headers",
                "description": "The headers you want to send",
                "type": "schema",
                "schema": "{\"type\":\"array\",\"items\":{\"type\":\"object\",\"properties\":{\"parameterName\":{\"type\":\"string\"},\"type\":{\"type\":{\"enum\":[\"string\",\"number\",\"boolean\"]}},\"required\":{\"type\":{\"enum\":[\"true\",\"false\"]}}}}}",
                "value": "[{\"parameterName\":\"Accept\",\"type\":\"string\",\"repeating\":\"false\",\"required\":\"false\",\"isEditable\":false,\"isHidden\":true},{\"parameterName\":\"Accept-Charset\",\"type\":\"string\",\"repeating\":\"false\",\"required\":\"false\",\"isEditable\":false,\"isHidden\":true},{\"parameterName\":\"Accept-Encoding\",\"type\":\"string\",\"repeating\":\"false\",\"required\":\"false\",\"isEditable\":false,\"isHidden\":true},{\"parameterName\":\"Content-Type\",\"type\":\"string\",\"repeating\":\"false\",\"required\":\"false\",\"isEditable\":false,\"isHidden\":true},{\"parameterName\":\"Content-Length\",\"type\":\"string\",\"repeating\":\"false\",\"required\":\"false\",\"isEditable\":false,\"isHidden\":true},{\"parameterName\":\"Connection\",\"type\":\"string\",\"repeating\":\"false\",\"required\":\"false\",\"isEditable\":false,\"isHidden\":true},{\"parameterName\":\"Cookie\",\"type\":\"string\",\"repeating\":\"false\",\"required\":\"false\",\"isEditable\":false,\"isHidden\":true},{\"parameterName\":\"Pragma\",\"type\":\"string\",\"repeating\":\"false\",\"required\":\"false\",\"isEditable\":false,\"isHidden\":true}]",
                "tags": [
                  "Input Settings"
                ]
              },
              {
                "name": "metadata:Request Headers",
                "description": "The metadata for request headers",
                "type": "schema",
                "relatedTo": "inputs:headers",
                "wi": {
                  "visible": false
                },
                "tags": [
                  "Input Settings"
                ],
                "value": "{\"type\":\"object\",\"properties\":{\"Accept\":{\"required\":\"false\",\"type\":\"string\"},\"Accept-Charset\":{\"required\":\"false\",\"type\":\"string\"},\"Accept-Encoding\":{\"required\":\"false\",\"type\":\"string\"},\"Content-Type\":{\"required\":\"false\",\"type\":\"string\"},\"Content-Length\":{\"required\":\"false\",\"type\":\"string\"},\"Connection\":{\"required\":\"false\",\"type\":\"string\"},\"Cookie\":{\"required\":\"false\",\"type\":\"string\"},\"Pragma\":{\"required\":\"false\",\"type\":\"string\"}},\"required\":[]}"
              },
              {
                "name": "Response Headers",
                "description": "The headers you expect to receive",
                "type": "schema",
                "schema": "{\"type\":\"array\",\"items\":{\"type\":\"object\",\"properties\":{\"parameterName\":{\"type\":\"string\"},\"type\":{\"type\":{\"enum\":[\"string\",\"number\",\"boolean\"]}},\"repeating\":{\"type\":{\"enum\":[\"true\",\"false\"]}},\"required\":{\"type\":{\"enum\":[\"true\",\"false\"]}}}}}",
                "value": "[{\"parameterName\":\"Accept\",\"type\":\"string\",\"repeating\":\"false\",\"required\":\"false\",\"isEditable\":false,\"isHidden\":true},{\"parameterName\":\"Accept-Charset\",\"type\":\"string\",\"repeating\":\"false\",\"required\":\"false\",\"isEditable\":false,\"isHidden\":true},{\"parameterName\":\"Accept-Encoding\",\"type\":\"string\",\"repeating\":\"false\",\"required\":\"false\",\"isEditable\":false,\"isHidden\":true},{\"parameterName\":\"Content-Type\",\"type\":\"string\",\"repeating\":\"false\",\"required\":\"false\",\"isEditable\":false,\"isHidden\":true},{\"parameterName\":\"Content-Length\",\"type\":\"string\",\"repeating\":\"false\",\"required\":\"false\",\"isEditable\":false,\"isHidden\":true},{\"parameterName\":\"Connection\",\"type\":\"string\",\"repeating\":\"false\",\"required\":\"false\",\"isEditable\":false,\"isHidden\":true},{\"parameterName\":\"Cookie\",\"type\":\"string\",\"repeating\":\"false\",\"required\":\"false\",\"isEditable\":false,\"isHidden\":true},{\"parameterName\":\"Pragma\",\"type\":\"string\",\"repeating\":\"false\",\"required\":\"false\",\"isEditable\":false,\"isHidden\":true}]",
                "tags": [
                  "Output Settings"
                ]
              },
              {
                "name": "metadata:Response Headers",
                "description": "The metadata for response headers",
                "type": "schema",
                "relatedTo": "outputs:headers",
                "wi": {
                  "visible": false
                },
                "tags": [
                  "Output Settings"
                ],
                "value": "{\"type\":\"object\",\"properties\":{\"Accept\":{\"required\":\"false\",\"type\":\"string\"},\"Accept-Charset\":{\"required\":\"false\",\"type\":\"string\"},\"Accept-Encoding\":{\"required\":\"false\",\"type\":\"string\"},\"Content-Type\":{\"required\":\"false\",\"type\":\"string\"},\"Content-Length\":{\"required\":\"false\",\"type\":\"string\"},\"Connection\":{\"required\":\"false\",\"type\":\"string\"},\"Cookie\":{\"required\":\"false\",\"type\":\"string\"},\"Pragma\":{\"required\":\"false\",\"type\":\"string\"}},\"required\":[]}"
              },
              {
                "name": "Path Params",
                "description": "The path parameters for request",
                "type": "schema",
                "schema": "{\"type\": \"array\",\"items\": {\"type\": \"object\",\"properties\": {\"parameterName\": {\"type\": \"string\"},\"type\": {\"type\": {\"enum\": [\"string\",\"number\",\"boolean\"]}}}}}",
                "tags": [
                  "Configuration"
                ],
                "wi": {
                  "visible": false
                },
                "value": "[]"
              },
              {
                "name": "metadata:Path Params",
                "description": "The metadata of path parameters",
                "type": "schema",
                "relatedTo": "inputs:pathParams",
                "wi": {
                  "visible": false
                },
                "tags": [
                  "Configuration"
                ],
                "value": "{\"type\":\"object\",\"properties\":{}}"
              }
            ],
            "inputs": [
              {
                "name": "Method",
                "type": "string",
                "required": true,
                "description": "The REST method used for the requests",
                "allowed": [
                  "GET",
                  "POST",
                  "PUT",
                  "DELETE"
                ],
                "tags": [
                  "Configuration"
                ],
                "value": "GET"
              },
              {
                "name": "Uri",
                "type": "string",
                "description": "The URL of the REST service",
                "required": true,
                "tags": [
                  "Configuration"
                ],
                "value": ""
              },
              {
                "name": "Use certificate for verification",
                "description": "Use certificate for secure connection to the server",
                "type": "boolean",
                "required": true,
                "value": false,
                "tags": [
                  "Configuration"
                ],
                "wi": {
                  "visible": false,
                  "readonly": false,
                  "valid": true
                }
              },
              {
                "name": "Username",
                "description": "The username for basic authentication",
                "type": "string",
                "wi": {
                  "visible": false
                },
                "tags": [
                  "Configuration"
                ]
              },
              {
                "name": "Password",
                "description": "The password for basic authentication",
                "type": "password",
                "wi": {
                  "visible": false
                },
                "tags": [
                  "Configuration"
                ]
              },
              {
                "name": "Server Certificate",
                "description": "Self-signed PEM certificate for secure connection",
                "type": "file",
                "required": true,
                "tags": [
                  "Configuration"
                ],
                "wi": {
                  "visible": false,
                  "allowedExtensions": [
                    ".pem",
                    ".cert",
                    ".cer",
                    ".crt"
                  ],
                  "readonly": false,
                  "valid": true
                }
              },
              {
                "name": "Request Schema",
                "description": "An example JSON data that you want to send to the REST service",
                "type": "any",
                "relatedTo": "inputs:body",
                "tags": [
                  "Input Settings"
                ],
                "wi": {
                  "visible": false,
                  "readonly": false,
                  "valid": true
                }
              },
              {
                "name": "Response Schema",
                "description": "An example JSON data that you expect back from the REST service",
                "type": "any",
                "relatedTo": "outputs:responseBody",
                "tags": [
                  "Output Settings"
                ]
              },
              {
                "name": "Query Params",
                "description": "The query parameters for requests",
                "type": "schema",
                "schema": "{\"type\":\"array\",\"items\":{\"type\":\"object\",\"properties\":{\"parameterName\":{\"type\":\"string\"},\"type\":{\"type\":{\"enum\":[\"string\",\"number\",\"boolean\"]}},\"required\":{\"type\":{\"enum\":[\"true\",\"false\"]}}}}}",
                "tags": [
                  "Input Settings"
                ]
              },
              {
                "name": "metadata:Query Params",
                "type": "schema",
                "description": "The metadata of query parameters",
                "relatedTo": "inputs:queryParams",
                "wi": {
                  "visible": false
                },
                "tags": [
                  "Input Settings"
                ],
                "value": ""
              },
              {
                "name": "Request Headers",
                "description": "The headers you want to send",
                "type": "schema",
                "schema": "{\"type\":\"array\",\"items\":{\"type\":\"object\",\"properties\":{\"parameterName\":{\"type\":\"string\"},\"type\":{\"type\":{\"enum\":[\"string\",\"number\",\"boolean\"]}},\"required\":{\"type\":{\"enum\":[\"true\",\"false\"]}}}}}",
                "value": "[{\"parameterName\":\"Accept\",\"type\":\"string\",\"repeating\":\"false\",\"required\":\"false\",\"isEditable\":false,\"isHidden\":true},{\"parameterName\":\"Accept-Charset\",\"type\":\"string\",\"repeating\":\"false\",\"required\":\"false\",\"isEditable\":false,\"isHidden\":true},{\"parameterName\":\"Accept-Encoding\",\"type\":\"string\",\"repeating\":\"false\",\"required\":\"false\",\"isEditable\":false,\"isHidden\":true},{\"parameterName\":\"Content-Type\",\"type\":\"string\",\"repeating\":\"false\",\"required\":\"false\",\"isEditable\":false,\"isHidden\":true},{\"parameterName\":\"Content-Length\",\"type\":\"string\",\"repeating\":\"false\",\"required\":\"false\",\"isEditable\":false,\"isHidden\":true},{\"parameterName\":\"Connection\",\"type\":\"string\",\"repeating\":\"false\",\"required\":\"false\",\"isEditable\":false,\"isHidden\":true},{\"parameterName\":\"Cookie\",\"type\":\"string\",\"repeating\":\"false\",\"required\":\"false\",\"isEditable\":false,\"isHidden\":true},{\"parameterName\":\"Pragma\",\"type\":\"string\",\"repeating\":\"false\",\"required\":\"false\",\"isEditable\":false,\"isHidden\":true}]",
                "tags": [
                  "Input Settings"
                ]
              },
              {
                "name": "metadata:Request Headers",
                "description": "The metadata for request headers",
                "type": "schema",
                "relatedTo": "inputs:headers",
                "wi": {
                  "visible": false
                },
                "tags": [
                  "Input Settings"
                ],
                "value": "{\"type\":\"object\",\"properties\":{\"Accept\":{\"required\":\"false\",\"type\":\"string\"},\"Accept-Charset\":{\"required\":\"false\",\"type\":\"string\"},\"Accept-Encoding\":{\"required\":\"false\",\"type\":\"string\"},\"Content-Type\":{\"required\":\"false\",\"type\":\"string\"},\"Content-Length\":{\"required\":\"false\",\"type\":\"string\"},\"Connection\":{\"required\":\"false\",\"type\":\"string\"},\"Cookie\":{\"required\":\"false\",\"type\":\"string\"},\"Pragma\":{\"required\":\"false\",\"type\":\"string\"}},\"required\":[]}"
              },
              {
                "name": "Response Headers",
                "description": "The headers you expect to receive",
                "type": "schema",
                "schema": "{\"type\":\"array\",\"items\":{\"type\":\"object\",\"properties\":{\"parameterName\":{\"type\":\"string\"},\"type\":{\"type\":{\"enum\":[\"string\",\"number\",\"boolean\"]}},\"repeating\":{\"type\":{\"enum\":[\"true\",\"false\"]}},\"required\":{\"type\":{\"enum\":[\"true\",\"false\"]}}}}}",
                "value": "[{\"parameterName\":\"Accept\",\"type\":\"string\",\"repeating\":\"false\",\"required\":\"false\",\"isEditable\":false,\"isHidden\":true},{\"parameterName\":\"Accept-Charset\",\"type\":\"string\",\"repeating\":\"false\",\"required\":\"false\",\"isEditable\":false,\"isHidden\":true},{\"parameterName\":\"Accept-Encoding\",\"type\":\"string\",\"repeating\":\"false\",\"required\":\"false\",\"isEditable\":false,\"isHidden\":true},{\"parameterName\":\"Content-Type\",\"type\":\"string\",\"repeating\":\"false\",\"required\":\"false\",\"isEditable\":false,\"isHidden\":true},{\"parameterName\":\"Content-Length\",\"type\":\"string\",\"repeating\":\"false\",\"required\":\"false\",\"isEditable\":false,\"isHidden\":true},{\"parameterName\":\"Connection\",\"type\":\"string\",\"repeating\":\"false\",\"required\":\"false\",\"isEditable\":false,\"isHidden\":true},{\"parameterName\":\"Cookie\",\"type\":\"string\",\"repeating\":\"false\",\"required\":\"false\",\"isEditable\":false,\"isHidden\":true},{\"parameterName\":\"Pragma\",\"type\":\"string\",\"repeating\":\"false\",\"required\":\"false\",\"isEditable\":false,\"isHidden\":true}]",
                "tags": [
                  "Output Settings"
                ]
              },
              {
                "name": "metadata:Response Headers",
                "description": "The metadata for response headers",
                "type": "schema",
                "relatedTo": "outputs:headers",
                "wi": {
                  "visible": false
                },
                "tags": [
                  "Output Settings"
                ],
                "value": "{\"type\":\"object\",\"properties\":{\"Accept\":{\"required\":\"false\",\"type\":\"string\"},\"Accept-Charset\":{\"required\":\"false\",\"type\":\"string\"},\"Accept-Encoding\":{\"required\":\"false\",\"type\":\"string\"},\"Content-Type\":{\"required\":\"false\",\"type\":\"string\"},\"Content-Length\":{\"required\":\"false\",\"type\":\"string\"},\"Connection\":{\"required\":\"false\",\"type\":\"string\"},\"Cookie\":{\"required\":\"false\",\"type\":\"string\"},\"Pragma\":{\"required\":\"false\",\"type\":\"string\"}},\"required\":[]}"
              },
              {
                "name": "Path Params",
                "description": "The path parameters for request",
                "type": "schema",
                "schema": "{\"type\": \"array\",\"items\": {\"type\": \"object\",\"properties\": {\"parameterName\": {\"type\": \"string\"},\"type\": {\"type\": {\"enum\": [\"string\",\"number\",\"boolean\"]}}}}}",
                "tags": [
                  "Configuration"
                ],
                "wi": {
                  "visible": false
                },
                "value": "[]"
              },
              {
                "name": "metadata:Path Params",
                "description": "The metadata of path parameters",
                "type": "schema",
                "relatedTo": "inputs:pathParams",
                "wi": {
                  "visible": false
                },
                "tags": [
                  "Configuration"
                ],
                "value": "{\"type\":\"object\",\"properties\":{}}"
              },
              {
                "name": "queryParams",
                "type": "complex_object",
                "tags": [
                  "Input"
                ],
                "mappings": {}
              },
              {
                "name": "pathParams",
                "type": "complex_object",
                "tags": [
                  "Input"
                ],
                "mappings": {}
              },
              {
                "name": "headers",
                "type": "complex_object",
                "tags": [
                  "Input"
                ],
                "mappings": {}
              },
              {
                "name": "body",
                "type": "complex_object",
                "wi": {
                  "visible": false
                },
                "tags": [
                  "Input"
                ],
                "mappings": {}
              }
            ],
            "outputs": [
              {
                "name": "statusCode",
                "type": "integer",
                "tags": [
                  "Output"
                ],
                "mappings": []
              },
              {
                "name": "responseBody",
                "type": "complex_object",
                "tags": [
                  "Output"
                ],
                "mappings": []
              },
              {
                "name": "headers",
                "type": "complex_object",
                "tags": [
                  "Output"
                ],
                "mappings": []
              },
              {
                "name": "error",
                "type": "string",
                "tags": [
                  "Output"
                ],
                "mappings": []
              }
            ]
          },
          "attributes": {
            "inputs": [
              {
                "name": "queryParams",
                "type": "complex_object",
                "tags": [
                  "Input"
                ],
                "mappings": {}
              },
              {
                "name": "pathParams",
                "type": "complex_object",
                "tags": [
                  "Input"
                ],
                "mappings": {}
              },
              {
                "name": "headers",
                "type": "complex_object",
                "tags": [
                  "Input"
                ],
                "mappings": {}
              },
              {
                "name": "body",
                "type": "complex_object",
                "wi": {
                  "visible": false
                },
                "tags": [
                  "Input"
                ],
                "mappings": {}
              }
            ],
            "outputs": [
              {
                "name": "statusCode",
                "type": "integer",
                "tags": [
                  "Output"
                ],
                "mappings": []
              },
              {
                "name": "responseBody",
                "type": "complex_object",
                "tags": [
                  "Output"
                ],
                "mappings": []
              },
              {
                "name": "headers",
                "type": "complex_object",
                "tags": [
                  "Output"
                ],
                "mappings": []
              },
              {
                "name": "error",
                "type": "string",
                "tags": [
                  "Output"
                ],
                "mappings": []
              }
            ]
          },
          "inputMappings": {},
          "outputMappings": [],
          "activityTitle": "InvokeRESTService"
        },
        "e0a743cb-1659-4591-89ff-f15afc7d299b": {
          "id": "e0a743cb-1659-4591-89ff-f15afc7d299b",
          "type": 1,
          "version": "1.0.0",
          "name": "tibco-wi-reply",
          "description": "Simple HTTP Reply Activity",
          "title": "ReplyToHTTPMessage",
          "wi": {
            "visible": true,
            "sections": [
              "Configuration",
              "Input Settings",
              "Input"
            ]
          },
          "activityType": "tibco-wi-reply",
          "homepage": "git.tibco.com/git/product/ipaas/wi-contrib.git/activity/general/reply",
          "settings": [
            {
              "name": "Reply",
              "description": "Select a reply for the request",
              "allowed": [
                "Success with Data",
                "Error with Message"
              ],
              "type": "string",
              "required": true,
              "value": "Success with Data",
              "tags": [
                "Configuration"
              ]
            },
            {
              "name": "Schema",
              "description": "An example JSON data that you want to return to the caller of your REST flow",
              "relatedTo": "inputs:data",
              "type": "any",
              "tags": [
                "Input Settings"
              ]
            }
          ],
          "outputs": [],
          "endpoint": {
            "settings": []
          },
          "__schema": {
            "name": "tibco-wi-reply",
            "type": "flogo:activity",
            "version": "1.0.0",
            "title": "Reply To HTTP Message",
            "description": "Simple HTTP Reply Activity",
            "category": "General",
            "wi": {
              "visible": true,
              "sections": [
                "Configuration",
                "Input Settings",
                "Input"
              ]
            },
            "ref": "git.tibco.com/git/product/ipaas/wi-contrib.git/activity/general/reply",
            "settings": [
              {
                "name": "Reply",
                "description": "Select a reply for the request",
                "allowed": [
                  "Success with Data",
                  "Error with Message"
                ],
                "type": "string",
                "required": true,
                "value": "Success with Data",
                "tags": [
                  "Configuration"
                ]
              },
              {
                "name": "Schema",
                "description": "An example JSON data that you want to return to the caller of your REST flow",
                "relatedTo": "inputs:data",
                "type": "any",
                "tags": [
                  "Input Settings"
                ]
              }
            ],
            "inputs": [
              {
                "name": "Reply",
                "description": "Select a reply for the request",
                "allowed": [
                  "Success with Data",
                  "Error with Message"
                ],
                "type": "string",
                "required": true,
                "value": "Success with Data",
                "tags": [
                  "Configuration"
                ]
              },
              {
                "name": "Schema",
                "description": "An example JSON data that you want to return to the caller of your REST flow",
                "relatedTo": "inputs:data",
                "type": "any",
                "tags": [
                  "Input Settings"
                ]
              },
              {
                "name": "code",
                "type": "string",
                "required": true,
                "description": "HTTP Status code",
                "value": "200",
                "allowed": [
                  "200",
                  "500"
                ],
                "wi": {
                  "visible": false
                }
              },
              {
                "name": "message",
                "type": "string",
                "required": true,
                "description": "Return message",
                "value": "Ok",
                "tags": [
                  "Input"
                ],
                "wi": {
                  "visible": false
                }
              },
              {
                "name": "data",
                "type": "complex_object",
                "tags": [
                  "Input"
                ]
              }
            ],
            "outputs": []
          },
          "attributes": {
            "inputs": [
              {
                "name": "code",
                "type": "string",
                "required": true,
                "description": "HTTP Status code",
                "value": "200",
                "allowed": [
                  "200",
                  "500"
                ],
                "wi": {
                  "visible": false
                }
              },
              {
                "name": "message",
                "type": "string",
                "required": true,
                "description": "Return message",
                "value": "Ok",
                "tags": [
                  "Input"
                ],
                "wi": {
                  "visible": false
                }
              },
              {
                "name": "data",
                "type": "complex_object",
                "tags": [
                  "Input"
                ]
              }
            ],
            "outputs": []
          },
          "inputMappings": {},
          "outputMappings": [],
          "activityTitle": "ReplyToHTTPMessage"
        }
      },
      "paths": {
        "root": {
          "is": "rootNode"
        },
        "nodes": {
          "rootNode": {
            "id": "rootNode",
            "taskID": "3e2ec2ab-0cc0-490e-aad0-e50b84adc9c8",
            "type": 3,
            "children": [
              "d502c332-f172-4768-a276-698040dee20f"
            ],
            "parents": [],
            "subProc": []
          },
          "Node4Last": {
            "id": "Node4Last",
            "taskID": "3297f6a0-c00c-4e27-9888-0a25356093aa",
            "type": 5,
            "children": [
              "53473ec2-80b6-40d2-97a9-6d71a01c7b71"
            ],
            "parents": [
              "d502c332-f172-4768-a276-698040dee20f"
            ],
            "subProc": []
          },
          "d502c332-f172-4768-a276-698040dee20f": {
            "id": "d502c332-f172-4768-a276-698040dee20f",
            "taskID": "fd738eaf-2632-491e-87f6-623d53194e5b",
            "type": 5,
            "children": [
              "Node4Last"
            ],
            "parents": [
              "rootNode"
            ],
            "subProc": [],
            "__status": {
              "isSelected": false
            }
          },
          "53473ec2-80b6-40d2-97a9-6d71a01c7b71": {
            "id": "53473ec2-80b6-40d2-97a9-6d71a01c7b71",
            "taskID": "54533397-fa0c-4994-a8ef-373290f85bc7",
            "type": 5,
            "children": [
              "633776c5-2b20-48a7-b13e-bde7ebc08d6b"
            ],
            "parents": [
              "Node4Last"
            ],
            "subProc": [],
            "__status": {
              "isSelected": false
            }
          },
          "633776c5-2b20-48a7-b13e-bde7ebc08d6b": {
            "id": "633776c5-2b20-48a7-b13e-bde7ebc08d6b",
            "taskID": "e0a743cb-1659-4591-89ff-f15afc7d299b",
            "type": 5,
            "children": [],
            "parents": [
              "53473ec2-80b6-40d2-97a9-6d71a01c7b71"
            ],
            "subProc": [],
            "__status": {
              "isSelected": true
            }
          }
        }
      }
    }
  },
  "createdTime": 1488330073797,
  "lastUpdatedTime": 1488330079840,
  "_schema": {},
  "appChanges": 46
};
