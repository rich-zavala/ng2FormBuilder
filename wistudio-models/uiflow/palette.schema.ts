export const PALETTE = {
    "tibco-log": {
        "name": "tibco-log",
        "version": "0.0.1",
        "title": "Log Activity",
        "description": "Simple Log Activity",
        "homepage": "https://github.com/TIBCOSoftware/flogo-contrib/tree/master/activity/log",
        "inputs": [{
                "name": "message",
                "type": "string",
                "value": "Hello Web Integrator!!!!",
                "uiClass": ""
            },
            {
                "name": "flowInfo",
                "type": "boolean",
                "value": "true",
                "uiClass": ""
            },
            {
                "name": "addToFlow",
                "type": "boolean",
                "value": "true",
                "uiClass": ""
            }
        ],
        "outputs": [{
            "name": "message",
            "type": "string",
            "uiClass": ""
        }]
    },
    "tibco-timer": {
        "name": "tibco-timer",
        "version": "0.0.1",
        "title": "Timer Trigger",
        "description": "Simple Timer trigger",
        "homepage": "https://github.com/TIBCOSoftware/flogo-contrib/tree/master/trigger/timer",
        "settings": [],
        "outputs": [{
                "name": "params",
                "type": "params",
                "uiClass": ""
            },
            {
                "name": "content",
                "type": "object",
                "uiClass": ""
            }
        ],
        "endpoint": {
            "settings": [{
                    "name": "repeating",
                    "type": "boolean",
                    "value": "true",
                    "uiClass": ""
                },
                {
                    "name": "startDate",
                    "type": "string",
                    "uiClass": ""
                },
                {
                    "name": "hours",
                    "type": "string",
                    "uiClass": ""
                },
                {
                    "name": "minutes",
                    "type": "string",
                    "uiClass": ""
                },
                {
                    "name": "seconds",
                    "type": "string",
                    "uiClass": ""
                }
            ]
        }
    },
    "tibco-rest": {
        "description": "Simple REST Trigger",
        "endpoint": {
            "settings": [{
                    "allowed": [
                        "GET",
                        "POST",
                        "PUT",
                        "PATCH",
                        "DELETE"
                    ],
                    "name": "method",
                    "required": true,
                    "type": "string",
                    "uiClass": ""
                },
                {
                    "name": "path",
                    "required": true,
                    "type": "string",
                    "uiClass": ""
                },
                {
                    "name": "autoIdReply",
                    "type": "boolean",
                    "uiClass": ""
                },
                {
                    "name": "useReplyHandler",
                    "type": "boolean",
                    "uiClass": ""
                },
                {
                    "name": "content",
                    "type": "schema:default",
                    "uiClass": ""
                }
            ]
        },
        "homepage": "https://github.com/TIBCOSoftware/flogo-contrib/tree/master/trigger/rest",
        "name": "tibco-rest",
        "outputs": [{
                "name": "pathParams",
                "type": "params",
                "uiClass": ""
            },
            {
                "name": "queryParams",
                "type": "params",
                "uiClass": ""
            },
            {
                "name": "content",
                "type": "complex_object",
                "uiClass": ""
            }
        ],
        "settings": [{
            "name": "port",
            "required": true,
            "type": "integer",
            "uiClass": ""
        }],
        "title": "Receive HTTP Message",
        "version": "0.0.1"
    },
    "tibco-reply": {
        "description": "Simple Reply Activity",
        "homepage": "https://github.com/TIBCOSoftware/flogo-contrib/tree/master/activity/reply",
        "inputs": [{
                "name": "code",
                "required": true,
                "type": "integer"
            },
            {
                "name": "data",
                "type": "any"
            },
            {
                "name": "content",
                "type": "schema:default",
                "uiClass": ""
            }
        ],
        "name": "tibco-reply",
        "outputs": [{
            "name": "content",
            "type": "complex_object",
            "uiClass": ""
        }],
        "title": "Reply To Trigger",
        "version": "0.0.1"
    }
};

export const TRIGGERS = ["tibco-wi-timer", "tibco-wi-rest"];
