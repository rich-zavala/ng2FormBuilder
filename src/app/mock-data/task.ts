export let task = {
  "id": "8935a757-3be0-4d70-b009-b7cb2fc76f94",
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
        "visible": false
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
        ]
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
        "visible": false
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
      ]
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
      ]
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
      ]
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
      }
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
      ]
    }
  ],
  "outputs": [
    {
      "name": "statusCode",
      "type": "integer",
      "tags": [
        "Output"
      ]
    },
    {
      "name": "responseBody",
      "type": "complex_object",
      "tags": [
        "Output"
      ]
    },
    {
      "name": "headers",
      "type": "complex_object",
      "tags": [
        "Output"
      ]
    },
    {
      "name": "error",
      "type": "string",
      "tags": [
        "Output"
      ]
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
          "visible": false
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
          ]
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
          "visible": false
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
        ]
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
        ]
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
        ]
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
        }
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
        ]
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
          "visible": false
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
          ]
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
          "visible": false
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
        ]
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
        ]
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
        ]
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
        }
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
        ]
      },
      {
        "name": "queryParams",
        "type": "complex_object",
        "tags": [
          "Input"
        ]
      },
      {
        "name": "pathParams",
        "type": "complex_object",
        "tags": [
          "Input"
        ]
      },
      {
        "name": "headers",
        "type": "complex_object",
        "tags": [
          "Input"
        ]
      },
      {
        "name": "body",
        "type": "complex_object",
        "wi": {
          "visible": false
        },
        "tags": [
          "Input"
        ]
      }
    ],
    "outputs": [
      {
        "name": "statusCode",
        "type": "integer",
        "tags": [
          "Output"
        ]
      },
      {
        "name": "responseBody",
        "type": "complex_object",
        "tags": [
          "Output"
        ]
      },
      {
        "name": "headers",
        "type": "complex_object",
        "tags": [
          "Output"
        ]
      },
      {
        "name": "error",
        "type": "string",
        "tags": [
          "Output"
        ]
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
        ]
      },
      {
        "name": "pathParams",
        "type": "complex_object",
        "tags": [
          "Input"
        ]
      },
      {
        "name": "headers",
        "type": "complex_object",
        "tags": [
          "Input"
        ]
      },
      {
        "name": "body",
        "type": "complex_object",
        "wi": {
          "visible": false
        },
        "tags": [
          "Input"
        ]
      }
    ],
    "outputs": [
      {
        "name": "statusCode",
        "type": "integer",
        "tags": [
          "Output"
        ]
      },
      {
        "name": "responseBody",
        "type": "complex_object",
        "tags": [
          "Output"
        ]
      },
      {
        "name": "headers",
        "type": "complex_object",
        "tags": [
          "Output"
        ]
      },
      {
        "name": "error",
        "type": "string",
        "tags": [
          "Output"
        ]
      }
    ]
  },
  "inputMappings": {},
  "outputMappings": []
};