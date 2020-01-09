define({ "api": [
  {
    "type": "delete",
    "url": "/user/admin/<uuid>/",
    "title": "Delete admin user",
    "name": "DeleteAdmin",
    "group": "AdminMgmt",
    "version": "0.1.0",
    "permission": [
      {
        "name": "super_admin",
        "title": "Super Admin access only",
        "description": "<p>Only super admin can access this API</p>"
      }
    ],
    "filename": "../backend/user_model/views.py",
    "groupTitle": "AdminMgmt",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "X-Access-Token",
            "description": "<p>access token of the user</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "X-Access-Username",
            "description": "<p>username</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"status\": 200,\n    \"message\": \"\",\n    \"payload\": {}\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "OperationFailed",
            "description": "<p>Operation is unsuccessful</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "InvalidRequest",
            "description": "<p>Request is invalid</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Unauthorized",
            "description": "<p>User is unauthorized</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "PermissionDenied",
            "description": "<p>User does not have permission to access</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"status\": 402,\n    \"message\": \"Operation is unsuccessful.\",\n    \"payload\": {}\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"status\": 400,\n    \"message\": \"Invalid request.\",\n    \"payload\": {}\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"status\": 401,\n    \"message\": \"User is unauthorized.\",\n    \"payload\": {}\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"status\": 403,\n    \"message\": \"Permission denied.\",\n    \"payload\": {}\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/user/admin/",
    "title": "Get admin user list",
    "name": "GetAdminList",
    "group": "AdminMgmt",
    "version": "0.1.0",
    "permission": [
      {
        "name": "super_admin",
        "title": "Super Admin access only",
        "description": "<p>Only super admin can access this API</p>"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "page",
            "description": "<p>Specifies the page number (starting from 1, per page 25 elements)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "payload",
            "description": "<p>Response object</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "payload.page_count",
            "description": "<p>Page count</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "payload.count",
            "description": "<p>Total element count</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "payload.entry",
            "description": "<p>List of AdminUser Object</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "payload.entry.uuid",
            "description": "<p>UUID of AdminUser</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "payload.entry.username",
            "description": "<p>Username of AdminUser</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "payload.entry.email",
            "description": "<p>Email of AdminUser</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "payload.entry.create_time",
            "description": "<p>Date of creation of AdminUser</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"status\": 200,\n    \"message\": \"\",\n    \"payload\": {}\n}",
          "type": "json"
        }
      ]
    },
    "filename": "../backend/user_model/views.py",
    "groupTitle": "AdminMgmt",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "X-Access-Token",
            "description": "<p>access token of the user</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "X-Access-Username",
            "description": "<p>username</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "InvalidRequest",
            "description": "<p>Request is invalid</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Unauthorized",
            "description": "<p>User is unauthorized</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "PermissionDenied",
            "description": "<p>User does not have permission to access</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ServerError",
            "description": "<p>Internal server error</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"status\": 400,\n    \"message\": \"Invalid request.\",\n    \"payload\": {}\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"status\": 401,\n    \"message\": \"User is unauthorized.\",\n    \"payload\": {}\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"status\": 403,\n    \"message\": \"Permission denied.\",\n    \"payload\": {}\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"status\": 500,\n    \"message\": \"Internal server error.\",\n    \"payload\": {}\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/user/admin/",
    "title": "Create an admin user",
    "name": "GetAdminList",
    "group": "AdminMgmt",
    "version": "0.1.0",
    "permission": [
      {
        "name": "super_admin",
        "title": "Super Admin access only",
        "description": "<p>Only super admin can access this API</p>"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>Username of the Admin</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Email of the Admin</p>"
          }
        ]
      }
    },
    "filename": "../backend/user_model/views.py",
    "groupTitle": "AdminMgmt",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "X-Access-Token",
            "description": "<p>access token of the user</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "X-Access-Username",
            "description": "<p>username</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"status\": 200,\n    \"message\": \"\",\n    \"payload\": {}\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "InvalidRequest",
            "description": "<p>Request is invalid</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "OperationFailed",
            "description": "<p>Operation is unsuccessful</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Unauthorized",
            "description": "<p>User is unauthorized</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "PermissionDenied",
            "description": "<p>User does not have permission to access</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ServerError",
            "description": "<p>Internal server error</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"status\": 400,\n    \"message\": \"Invalid request.\",\n    \"payload\": {}\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"status\": 402,\n    \"message\": \"Operation is unsuccessful.\",\n    \"payload\": {}\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"status\": 401,\n    \"message\": \"User is unauthorized.\",\n    \"payload\": {}\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"status\": 403,\n    \"message\": \"Permission denied.\",\n    \"payload\": {}\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"status\": 500,\n    \"message\": \"Internal server error.\",\n    \"payload\": {}\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "put",
    "url": "/user/admin/<uuid>/",
    "title": "Update an admin user",
    "name": "UpdateAdmin",
    "group": "AdminMgmt",
    "version": "0.1.0",
    "permission": [
      {
        "name": "super_admin",
        "title": "Super Admin access only",
        "description": "<p>Only super admin can access this API</p>"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "email",
            "description": "<p>Specifies new email.</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": true,
            "field": "password_reset",
            "description": "<p>Specifies whether to reset password.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    \"email\": \"abc@163.com\",\n    \"password_reset\": true\n}",
          "type": "json"
        }
      ]
    },
    "filename": "../backend/user_model/views.py",
    "groupTitle": "AdminMgmt",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "X-Access-Token",
            "description": "<p>access token of the user</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "X-Access-Username",
            "description": "<p>username</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"status\": 200,\n    \"message\": \"\",\n    \"payload\": {}\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "OperationFailed",
            "description": "<p>Operation is unsuccessful</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "InvalidRequest",
            "description": "<p>Request is invalid</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Unauthorized",
            "description": "<p>User is unauthorized</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "PermissionDenied",
            "description": "<p>User does not have permission to access</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ServerError",
            "description": "<p>Internal server error</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"status\": 402,\n    \"message\": \"Operation is unsuccessful.\",\n    \"payload\": {}\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"status\": 400,\n    \"message\": \"Invalid request.\",\n    \"payload\": {}\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"status\": 401,\n    \"message\": \"User is unauthorized.\",\n    \"payload\": {}\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"status\": 403,\n    \"message\": \"Permission denied.\",\n    \"payload\": {}\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"status\": 500,\n    \"message\": \"Internal server error.\",\n    \"payload\": {}\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/pods/",
    "title": "Get pod list",
    "name": "GetPodList",
    "group": "Monitor",
    "version": "0.1.0",
    "permission": [
      {
        "name": "admin",
        "title": "Admin access only",
        "description": "<p>Only admin user can access this API</p>"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "page",
            "description": "<p>Specifies the page number (starting from 1, per page 25 elements)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "payload",
            "description": "<p>Response object</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "payload.page_count",
            "description": "<p>Page count</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "payload.count",
            "description": "<p>Total element count</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "payload.entry",
            "description": "<p>List of Pod Object</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "payload.entry.pod_id",
            "description": "<p>IP address</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "payload.entry.namespace",
            "description": "<p>Namespace of the pod</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "payload.entry.name",
            "description": "<p>Name of the pod</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "payload.entry.uid",
            "description": "<p>UUID</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "payload.entry.status",
            "description": "<p>Status of the pod, can be [pending, running, success, failed, terminating]</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "payload.entry.node_name",
            "description": "<p>The name of the kubernetes node</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"status\": 200,\n    \"message\": \"\",\n    \"payload\": {}\n}",
          "type": "json"
        }
      ]
    },
    "filename": "../backend/monitor/views.py",
    "groupTitle": "Monitor",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "X-Access-Token",
            "description": "<p>access token of the user</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "X-Access-Username",
            "description": "<p>username</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "InvalidRequest",
            "description": "<p>Request is invalid</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Unauthorized",
            "description": "<p>User is unauthorized</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "PermissionDenied",
            "description": "<p>User does not have permission to access</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ServerError",
            "description": "<p>Internal server error</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"status\": 400,\n    \"message\": \"Invalid request.\",\n    \"payload\": {}\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"status\": 401,\n    \"message\": \"User is unauthorized.\",\n    \"payload\": {}\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"status\": 403,\n    \"message\": \"Permission denied.\",\n    \"payload\": {}\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"status\": 500,\n    \"message\": \"Internal server error.\",\n    \"payload\": {}\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/oauth/user_info/",
    "title": "Get OpenID of user",
    "description": "<p>Get the OpenID compatible info of the user.</p>",
    "name": "GetUserOpenID",
    "group": "OAuth",
    "version": "0.1.0",
    "permission": [
      {
        "name": "admin",
        "title": "Admin access only",
        "description": "<p>Only admin user can access this API</p>"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Bearer-Token",
            "description": "<p>Obtained OAuth bearer token</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "sub",
            "description": "<p>UUID of the user</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Username</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Email</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "picture",
            "description": "<p>Avatar url</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "updated_at",
            "description": "<p>Update time of the user</p>"
          }
        ]
      }
    },
    "filename": "../backend/user_model/views.py",
    "groupTitle": "OAuth"
  },
  {
    "type": "post",
    "url": "/oauth/applications/",
    "title": "Create an OAuth app",
    "name": "CreateOAuthApp",
    "group": "OAuthMgmt",
    "version": "0.1.0",
    "permission": [
      {
        "name": "admin",
        "title": "Admin access only",
        "description": "<p>Only admin user can access this API</p>"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>App name</p>"
          },
          {
            "group": "Parameter",
            "type": "String[]",
            "optional": false,
            "field": "redirect",
            "description": "<p>uris List of allowed redirect uris</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": true,
            "field": "shared",
            "description": "<p>If <code>true</code>, the app is a shared one</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Primary key</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>App name</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "client_id",
            "description": "<p>Allocated OAuth 2.0 <code>client_id</code></p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "client_secret",
            "description": "<p>Allocated OAuth 2.0 <code>client_secret</code></p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"status\": 200,\n    \"message\": \"\",\n    \"payload\": {}\n}",
          "type": "json"
        }
      ]
    },
    "filename": "../backend/user_model/views.py",
    "groupTitle": "OAuthMgmt",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "X-Access-Token",
            "description": "<p>access token of the user</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "X-Access-Username",
            "description": "<p>username</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "InvalidRequest",
            "description": "<p>Request is invalid</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Unauthorized",
            "description": "<p>User is unauthorized</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "PermissionDenied",
            "description": "<p>User does not have permission to access</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ServerError",
            "description": "<p>Internal server error</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"status\": 400,\n    \"message\": \"Invalid request.\",\n    \"payload\": {}\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"status\": 401,\n    \"message\": \"User is unauthorized.\",\n    \"payload\": {}\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"status\": 403,\n    \"message\": \"Permission denied.\",\n    \"payload\": {}\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"status\": 500,\n    \"message\": \"Internal server error.\",\n    \"payload\": {}\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "delete",
    "url": "/oauth/applications/<id>/",
    "title": "Delete OAuth app",
    "description": "<p>Only shared app or the one belongs to the requester can be deleted</p>",
    "name": "DeleteOAuthApp",
    "group": "OAuthMgmt",
    "version": "0.1.0",
    "permission": [
      {
        "name": "admin",
        "title": "Admin access only",
        "description": "<p>Only admin user can access this API</p>"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Primary key of the app</p>"
          }
        ]
      }
    },
    "filename": "../backend/user_model/views.py",
    "groupTitle": "OAuthMgmt",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "X-Access-Token",
            "description": "<p>access token of the user</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "X-Access-Username",
            "description": "<p>username</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"status\": 200,\n    \"message\": \"\",\n    \"payload\": {}\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "OperationFailed",
            "description": "<p>Operation is unsuccessful</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Unauthorized",
            "description": "<p>User is unauthorized</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "PermissionDenied",
            "description": "<p>User does not have permission to access</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ServerError",
            "description": "<p>Internal server error</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"status\": 402,\n    \"message\": \"Operation is unsuccessful.\",\n    \"payload\": {}\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"status\": 401,\n    \"message\": \"User is unauthorized.\",\n    \"payload\": {}\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"status\": 403,\n    \"message\": \"Permission denied.\",\n    \"payload\": {}\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"status\": 500,\n    \"message\": \"Internal server error.\",\n    \"payload\": {}\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/oauth/authorized_tokens/<id>/",
    "title": "Delete an OAuth authorized token",
    "name": "DeleteOAuthToken",
    "group": "OAuthMgmt",
    "version": "0.1.0",
    "permission": [
      {
        "name": "admin",
        "title": "Admin access only",
        "description": "<p>Only admin user can access this API</p>"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Primary key</p>"
          }
        ]
      }
    },
    "filename": "../backend/user_model/views.py",
    "groupTitle": "OAuthMgmt",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "X-Access-Token",
            "description": "<p>access token of the user</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "X-Access-Username",
            "description": "<p>username</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"status\": 200,\n    \"message\": \"\",\n    \"payload\": {}\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "OperationFailed",
            "description": "<p>Operation is unsuccessful</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Unauthorized",
            "description": "<p>User is unauthorized</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "PermissionDenied",
            "description": "<p>User does not have permission to access</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"status\": 402,\n    \"message\": \"Operation is unsuccessful.\",\n    \"payload\": {}\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"status\": 401,\n    \"message\": \"User is unauthorized.\",\n    \"payload\": {}\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"status\": 403,\n    \"message\": \"Permission denied.\",\n    \"payload\": {}\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/oauth/applications/<id>",
    "title": "Get OAuth app detail",
    "name": "GetOAuthAppDetail",
    "group": "OAuthMgmt",
    "version": "0.1.0",
    "permission": [
      {
        "name": "admin",
        "title": "Admin access only",
        "description": "<p>Only admin user can access this API</p>"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Primary key of the app</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Primary key</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Name of the app</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user",
            "description": "<p>Who the app belongs to. Null if the app is a shared one.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "client_id",
            "description": "<p>OAuth 2.0 ClientID</p>"
          },
          {
            "group": "Success 200",
            "type": "String[]",
            "optional": false,
            "field": "redirect_uris",
            "description": "<p>List of allowed redirect uris</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "client_type",
            "description": "<p><code>confidential</code></p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "authorization_grant_type",
            "description": "<p><code>authorization-code</code></p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "client_secret",
            "description": "<p>OAuth 2.0 ClientSecret</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "created",
            "description": "<p>Creation timestamp</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "updated",
            "description": "<p>Update timestamp</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"status\": 200,\n    \"message\": \"\",\n    \"payload\": {}\n}",
          "type": "json"
        }
      ]
    },
    "filename": "../backend/user_model/views.py",
    "groupTitle": "OAuthMgmt",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "X-Access-Token",
            "description": "<p>access token of the user</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "X-Access-Username",
            "description": "<p>username</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "InvalidRequest",
            "description": "<p>Request is invalid</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "OperationFailed",
            "description": "<p>Operation is unsuccessful</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Unauthorized",
            "description": "<p>User is unauthorized</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "PermissionDenied",
            "description": "<p>User does not have permission to access</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ServerError",
            "description": "<p>Internal server error</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"status\": 400,\n    \"message\": \"Invalid request.\",\n    \"payload\": {}\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"status\": 402,\n    \"message\": \"Operation is unsuccessful.\",\n    \"payload\": {}\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"status\": 401,\n    \"message\": \"User is unauthorized.\",\n    \"payload\": {}\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"status\": 403,\n    \"message\": \"Permission denied.\",\n    \"payload\": {}\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"status\": 500,\n    \"message\": \"Internal server error.\",\n    \"payload\": {}\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/oauth/applications/",
    "title": "Get OAuth app list",
    "name": "GetOAuthAppList",
    "group": "OAuthMgmt",
    "version": "0.1.0",
    "permission": [
      {
        "name": "admin",
        "title": "Admin access only",
        "description": "<p>Only admin user can access this API</p>"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "page",
            "description": "<p>Specifies the page number (starting from 1, per page 25 elements)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "payload",
            "description": "<p>Response object</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "payload.page_count",
            "description": "<p>Page count</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "payload.count",
            "description": "<p>Total element count</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "payload.entry",
            "description": "<p>List of OAuthApp Object</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "payload.entry.model",
            "description": "<p>Fixed field, must be <code>oauth2_provider.application</code></p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "payload.entry.pk",
            "description": "<p>Primary key</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "payload.entry.fields",
            "description": "<p>Detailed fields of the app</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "payload.entry.fields.client_id",
            "description": "<p>OAuth 2.0 ClientID</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "payload.entry.fields.user",
            "description": "<p>Who the app belongs to. Null if the app is a shared one.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "payload.entry.redirect_uris",
            "description": "<p>Allowed redirect uris separated by space</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "payload.entry.client_type",
            "description": "<p><code>confidential</code></p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "payload.entry.authorization_grant_type",
            "description": "<p><code>authorization-code</code></p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "payload.entry.client_secret",
            "description": "<p>OAuth 2.0 ClientSecret</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "payload.entry.name",
            "description": "<p>Name of the app</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "payload.entry.skip_authorization",
            "description": "<p>False</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "payload.entry.created",
            "description": "<p>Creation timestamp</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "payload.entry.updated",
            "description": "<p>Update timestamp</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"status\": 200,\n    \"message\": \"\",\n    \"payload\": {}\n}",
          "type": "json"
        }
      ]
    },
    "filename": "../backend/user_model/views.py",
    "groupTitle": "OAuthMgmt",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "X-Access-Token",
            "description": "<p>access token of the user</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "X-Access-Username",
            "description": "<p>username</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "InvalidRequest",
            "description": "<p>Request is invalid</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Unauthorized",
            "description": "<p>User is unauthorized</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "PermissionDenied",
            "description": "<p>User does not have permission to access</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ServerError",
            "description": "<p>Internal server error</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"status\": 400,\n    \"message\": \"Invalid request.\",\n    \"payload\": {}\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"status\": 401,\n    \"message\": \"User is unauthorized.\",\n    \"payload\": {}\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"status\": 403,\n    \"message\": \"Permission denied.\",\n    \"payload\": {}\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"status\": 500,\n    \"message\": \"Internal server error.\",\n    \"payload\": {}\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/oauth/authorized_tokens/",
    "title": "Get OAuth authorized token list",
    "name": "GetOAuthTokenList",
    "group": "OAuthMgmt",
    "version": "0.1.0",
    "permission": [
      {
        "name": "admin",
        "title": "Admin access only",
        "description": "<p>Only admin user can access this API</p>"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "payload",
            "description": "<p>List of OAuthToken Object</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "payload.model",
            "description": "<p>Fixed field, must be <code>oauth2_provider.accesstoken</code></p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "payload.pk",
            "description": "<p>Primary key</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "payload.fields",
            "description": "<p>Detailed fields</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "payload.fields.user",
            "description": "<p>The user primary key that the token belongs to</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "payload.fields.source_refresh_token",
            "description": "<p>RefreshToken</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "payload.fields.token",
            "description": "<p>Token</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "payload.fields.application",
            "description": "<p>Application that the token applies</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "payload.fields.expires",
            "description": "<p>Expiration timestamp</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "payload.fields.scope",
            "description": "<p>OAuth scope</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "payload.fields.created",
            "description": "<p>Creation timestamp</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "payload.fields.updated",
            "description": "<p>Update timestamp</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"status\": 200,\n    \"message\": \"\",\n    \"payload\": {}\n}",
          "type": "json"
        }
      ]
    },
    "filename": "../backend/user_model/views.py",
    "groupTitle": "OAuthMgmt",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "X-Access-Token",
            "description": "<p>access token of the user</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "X-Access-Username",
            "description": "<p>username</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Unauthorized",
            "description": "<p>User is unauthorized</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "PermissionDenied",
            "description": "<p>User does not have permission to access</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"status\": 401,\n    \"message\": \"User is unauthorized.\",\n    \"payload\": {}\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"status\": 403,\n    \"message\": \"Permission denied.\",\n    \"payload\": {}\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "put",
    "url": "/oauth/applications/<id>",
    "title": "Update OAuth app",
    "name": "UpdateOAuthApp",
    "group": "OAuthMgmt",
    "version": "0.1.0",
    "permission": [
      {
        "name": "admin",
        "title": "Admin access only",
        "description": "<p>Only admin user can access this API</p>"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Primary key of the app</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Name of the app</p>"
          },
          {
            "group": "Parameter",
            "type": "String[]",
            "optional": false,
            "field": "redirect_uris",
            "description": "<p>List of allowed redirect uris</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "shared",
            "description": "<p>Whether the app is shared</p>"
          }
        ]
      }
    },
    "filename": "../backend/user_model/views.py",
    "groupTitle": "OAuthMgmt",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "X-Access-Token",
            "description": "<p>access token of the user</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "X-Access-Username",
            "description": "<p>username</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"status\": 200,\n    \"message\": \"\",\n    \"payload\": {}\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "InvalidRequest",
            "description": "<p>Request is invalid</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Unauthorized",
            "description": "<p>User is unauthorized</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "PermissionDenied",
            "description": "<p>User does not have permission to access</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ServerError",
            "description": "<p>Internal server error</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"status\": 400,\n    \"message\": \"Invalid request.\",\n    \"payload\": {}\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"status\": 401,\n    \"message\": \"User is unauthorized.\",\n    \"payload\": {}\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"status\": 403,\n    \"message\": \"Permission denied.\",\n    \"payload\": {}\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"status\": 500,\n    \"message\": \"Internal server error.\",\n    \"payload\": {}\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/oauth/access_token/",
    "title": "Standard OAuth access token url",
    "name": "OAuthAccessToken",
    "group": "OAuth",
    "version": "0.1.0",
    "filename": "../backend/user_model/views.py",
    "groupTitle": "OAuth"
  },
  {
    "type": "get",
    "url": "/oauth/authorize/",
    "title": "Standard OAuth authorize url",
    "name": "OAuthAuthorize",
    "group": "OAuth",
    "version": "0.1.0",
    "filename": "../backend/user_model/views.py",
    "groupTitle": "OAuth"
  },
  {
    "type": "get",
    "url": "/oauth/login/",
    "title": "OAuth login page",
    "name": "OAuthLogin",
    "group": "OAuth",
    "version": "0.1.0",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "/* HTML page for login ... */",
          "type": "html"
        }
      ]
    },
    "filename": "../backend/user_model/views.py",
    "groupTitle": "OAuth"
  },
  {
    "type": "post",
    "url": "/oauth/login/",
    "title": "OAuth login form",
    "name": "OAuthLoginForm",
    "description": "<p>Do not directly POST to this API. Instead, use OAuth login page to pass csrf_token and others.</p>",
    "group": "OAuth",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 302 Found",
          "type": "html"
        }
      ]
    },
    "version": "0.1.0",
    "filename": "../backend/user_model/views.py",
    "groupTitle": "OAuth"
  },
  {
    "type": "get",
    "url": "/oauth/revoke_token/",
    "title": "Standard OAuth revoke token url",
    "name": "OAuthRevokeToken",
    "group": "OAuth",
    "version": "0.1.0",
    "filename": "../backend/user_model/views.py",
    "groupTitle": "OAuth"
  },
  {
    "type": "delete",
    "url": "/registry/repository/<str:repo>/<str:tag>/",
    "title": "Delete an image",
    "name": "DeleteImage",
    "group": "RegistryManager",
    "version": "0.1.0",
    "permission": [
      {
        "name": "admin",
        "title": "Admin access only",
        "description": "<p>Only admin user can access this API</p>"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "payload",
            "description": "<p>Success payload is empty</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"status\": 200,\n    \"message\": \"\",\n    \"payload\": {}\n}",
          "type": "json"
        }
      ]
    },
    "filename": "../backend/registry_manager/views.py",
    "groupTitle": "RegistryManager",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "X-Access-Token",
            "description": "<p>access token of the user</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "X-Access-Username",
            "description": "<p>username</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "OperationFailed",
            "description": "<p>Operation is unsuccessful</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Unauthorized",
            "description": "<p>User is unauthorized</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"status\": 402,\n    \"message\": \"Operation is unsuccessful.\",\n    \"payload\": {}\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"status\": 401,\n    \"message\": \"User is unauthorized.\",\n    \"payload\": {}\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/registry/",
    "title": "Get Repository list",
    "name": "GetRepositories",
    "group": "RegistryManager",
    "version": "0.1.0",
    "permission": [
      {
        "name": "admin",
        "title": "Admin access only",
        "description": "<p>Only admin user can access this API</p>"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "payload",
            "description": "<p>Response Object</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "payload.count",
            "description": "<p>Count of total repositories</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "payload.entry",
            "description": "<p>List of Repositoris</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "payload.entry.Repo",
            "description": "<p>Repository Name</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"status\": 200,\n    \"message\": \"\",\n    \"payload\": {}\n}",
          "type": "json"
        }
      ]
    },
    "filename": "../backend/registry_manager/views.py",
    "groupTitle": "RegistryManager",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "X-Access-Token",
            "description": "<p>access token of the user</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "X-Access-Username",
            "description": "<p>username</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "OperationFailed",
            "description": "<p>Operation is unsuccessful</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Unauthorized",
            "description": "<p>User is unauthorized</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"status\": 402,\n    \"message\": \"Operation is unsuccessful.\",\n    \"payload\": {}\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"status\": 401,\n    \"message\": \"User is unauthorized.\",\n    \"payload\": {}\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "registry/repository/<str:repo>/",
    "title": "Get Tag Lists of the given Repository",
    "name": "GetTags",
    "group": "RegistryManager",
    "version": "0.1.0",
    "permission": [
      {
        "name": "admin",
        "title": "Admin access only",
        "description": "<p>Only admin user can access this API</p>"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "payload",
            "description": "<p>Response Object</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "payload.count",
            "description": "<p>Count of total Tags</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "payload.entry",
            "description": "<p>List of Tags</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "payload.entry.Tag",
            "description": "<p>Tag Name</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "payload.entry.Created",
            "description": "<p>Tag Created Time</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "payload.entry.Entrypoint",
            "description": "<p>Entrypoint of the Tag</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "payload.entry.DockerVersion",
            "description": "<p>Docker Version of the Tag</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "payload.entry.ExposedPorts",
            "description": "<p>Exposed Ports of the Tag</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "payload.entry.Volumes",
            "description": "<p>Volumes of the Tag</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"status\": 200,\n    \"message\": \"\",\n    \"payload\": {}\n}",
          "type": "json"
        }
      ]
    },
    "filename": "../backend/registry_manager/views.py",
    "groupTitle": "RegistryManager",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "X-Access-Token",
            "description": "<p>access token of the user</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "X-Access-Username",
            "description": "<p>username</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "OperationFailed",
            "description": "<p>Operation is unsuccessful</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Unauthorized",
            "description": "<p>User is unauthorized</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"status\": 402,\n    \"message\": \"Operation is unsuccessful.\",\n    \"payload\": {}\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"status\": 401,\n    \"message\": \"User is unauthorized.\",\n    \"payload\": {}\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/registry/repository/upload/",
    "title": "Upload image.tar",
    "name": "UploadImageTar",
    "group": "RegistryManager",
    "version": "0.1.0",
    "permission": [
      {
        "name": "admin",
        "title": "Admin access only",
        "description": "<p>Only admin user can access this API</p>"
      }
    ],
    "parameter": {
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    \"file\": [FILE]，\n    \"repo\": ''\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "The",
            "description": "<p>image.tar file to be uploaded</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "payload",
            "description": "<p>Success payload is empty</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"status\": 200,\n    \"message\": \"\",\n    \"payload\": {}\n}",
          "type": "json"
        }
      ]
    },
    "filename": "../backend/registry_manager/views.py",
    "groupTitle": "RegistryManager",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "X-Access-Token",
            "description": "<p>access token of the user</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "X-Access-Username",
            "description": "<p>username</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ServerError",
            "description": "<p>Internal server error</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "InvalidRequest",
            "description": "<p>Request is invalid</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "OperationFailed",
            "description": "<p>Operation is unsuccessful</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Unauthorized",
            "description": "<p>User is unauthorized</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"status\": 500,\n    \"message\": \"Internal server error.\",\n    \"payload\": {}\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"status\": 400,\n    \"message\": \"Invalid request.\",\n    \"payload\": {}\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"status\": 402,\n    \"message\": \"Operation is unsuccessful.\",\n    \"payload\": {}\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"status\": 401,\n    \"message\": \"User is unauthorized.\",\n    \"payload\": {}\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/registry/history/",
    "title": "Get uploading image list",
    "name": "getImageList",
    "group": "RegistryManager",
    "version": "0.1.0",
    "permission": [
      {
        "name": "admin",
        "title": "Admin access only",
        "description": "<p>Only admin user can access this API</p>"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "payload",
            "description": "<p>Response Object</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "payload.count",
            "description": "<p>Count of total images</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "payload.page_count",
            "description": "<p>Count of total pages</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "payload.entry",
            "description": "<p>List of images</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "payload.entry.name",
            "description": "<p>Filename</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "payload.entry.status",
            "description": "<p>File uploading status</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"status\": 200,\n    \"message\": \"\",\n    \"payload\": {}\n}",
          "type": "json"
        }
      ]
    },
    "filename": "../backend/registry_manager/views.py",
    "groupTitle": "RegistryManager",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "X-Access-Token",
            "description": "<p>access token of the user</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "X-Access-Username",
            "description": "<p>username</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ServerError",
            "description": "<p>Internal server error</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "InvalidRequest",
            "description": "<p>Request is invalid</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "OperationFailed",
            "description": "<p>Operation is unsuccessful</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Unauthorized",
            "description": "<p>User is unauthorized</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "PermissionDenied",
            "description": "<p>User does not have permission to access</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"status\": 500,\n    \"message\": \"Internal server error.\",\n    \"payload\": {}\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"status\": 400,\n    \"message\": \"Invalid request.\",\n    \"payload\": {}\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"status\": 402,\n    \"message\": \"Operation is unsuccessful.\",\n    \"payload\": {}\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"status\": 401,\n    \"message\": \"User is unauthorized.\",\n    \"payload\": {}\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"status\": 403,\n    \"message\": \"Permission denied.\",\n    \"payload\": {}\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/storage/",
    "title": "Create a PVC",
    "name": "CreatePVC",
    "group": "StorageManager",
    "version": "0.1.0",
    "parameter": {
      "examples": [
        {
          "title": "Request-Body-Example:",
          "content": "{\n    \"name\": \"pvc-name\",\n    \"capacity\": \"1Gi\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Name of the PVC</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "capacity",
            "description": "<p>Required capacity for storage</p>"
          }
        ]
      }
    },
    "permission": [
      {
        "name": "admin",
        "title": "Admin access only",
        "description": "<p>Only admin user can access this API</p>"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "payload",
            "description": "<p>Success payload is empty</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"status\": 200,\n    \"message\": \"\",\n    \"payload\": {}\n}",
          "type": "json"
        }
      ]
    },
    "filename": "../backend/storage/views.py",
    "groupTitle": "StorageManager",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "X-Access-Token",
            "description": "<p>access token of the user</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "X-Access-Username",
            "description": "<p>username</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ServerError",
            "description": "<p>Internal server error</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "InvalidRequest",
            "description": "<p>Request is invalid</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "OperationFailed",
            "description": "<p>Operation is unsuccessful</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Unauthorized",
            "description": "<p>User is unauthorized</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "PermissionDenied",
            "description": "<p>User does not have permission to access</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"status\": 500,\n    \"message\": \"Internal server error.\",\n    \"payload\": {}\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"status\": 400,\n    \"message\": \"Invalid request.\",\n    \"payload\": {}\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"status\": 402,\n    \"message\": \"Operation is unsuccessful.\",\n    \"payload\": {}\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"status\": 401,\n    \"message\": \"User is unauthorized.\",\n    \"payload\": {}\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"status\": 403,\n    \"message\": \"Permission denied.\",\n    \"payload\": {}\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/storage/pod/",
    "title": "Create a pod for a PVC",
    "name": "CreatePod",
    "permission": [
      {
        "name": "admin",
        "title": "Admin access only",
        "description": "<p>Only admin user can access this API</p>"
      }
    ],
    "group": "StorageManager",
    "version": "0.1.0",
    "parameter": {
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    \"pvcname\": \"pvc-name\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "pvcname",
            "description": "<p>Name of the target PVC</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "payload",
            "description": "<p>Success payload is empty</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"status\": 200,\n    \"message\": \"\",\n    \"payload\": {}\n}",
          "type": "json"
        }
      ]
    },
    "filename": "../backend/storage/views.py",
    "groupTitle": "StorageManager",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "X-Access-Token",
            "description": "<p>access token of the user</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "X-Access-Username",
            "description": "<p>username</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ServerError",
            "description": "<p>Internal server error</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "InvalidRequest",
            "description": "<p>Request is invalid</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "OperationFailed",
            "description": "<p>Operation is unsuccessful</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Unauthorized",
            "description": "<p>User is unauthorized</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "PermissionDenied",
            "description": "<p>User does not have permission to access</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"status\": 500,\n    \"message\": \"Internal server error.\",\n    \"payload\": {}\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"status\": 400,\n    \"message\": \"Invalid request.\",\n    \"payload\": {}\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"status\": 402,\n    \"message\": \"Operation is unsuccessful.\",\n    \"payload\": {}\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"status\": 401,\n    \"message\": \"User is unauthorized.\",\n    \"payload\": {}\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"status\": 403,\n    \"message\": \"Permission denied.\",\n    \"payload\": {}\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "delete",
    "url": "/storage/",
    "title": "Delete a PVC",
    "name": "DeletePVC",
    "permission": [
      {
        "name": "admin",
        "title": "Admin access only",
        "description": "<p>Only admin user can access this API</p>"
      }
    ],
    "group": "StorageManager",
    "version": "0.1.0",
    "parameter": {
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    \"name\": \"pvc-name\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Name of the PVC to be deleted</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "payload",
            "description": "<p>Success payload is empty</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"status\": 200,\n    \"message\": \"\",\n    \"payload\": {}\n}",
          "type": "json"
        }
      ]
    },
    "filename": "../backend/storage/views.py",
    "groupTitle": "StorageManager",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "X-Access-Token",
            "description": "<p>access token of the user</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "X-Access-Username",
            "description": "<p>username</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ServerError",
            "description": "<p>Internal server error</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "InvalidRequest",
            "description": "<p>Request is invalid</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "OperationFailed",
            "description": "<p>Operation is unsuccessful</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Unauthorized",
            "description": "<p>User is unauthorized</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "PermissionDenied",
            "description": "<p>User does not have permission to access</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"status\": 500,\n    \"message\": \"Internal server error.\",\n    \"payload\": {}\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"status\": 400,\n    \"message\": \"Invalid request.\",\n    \"payload\": {}\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"status\": 402,\n    \"message\": \"Operation is unsuccessful.\",\n    \"payload\": {}\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"status\": 401,\n    \"message\": \"User is unauthorized.\",\n    \"payload\": {}\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"status\": 403,\n    \"message\": \"Permission denied.\",\n    \"payload\": {}\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "delete",
    "url": "/storage/pod/",
    "title": "Delete a pod for a PVC",
    "name": "DeletePod",
    "permission": [
      {
        "name": "admin",
        "title": "Admin access only",
        "description": "<p>Only admin user can access this API</p>"
      }
    ],
    "group": "StorageManager",
    "version": "0.1.0",
    "parameter": {
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    \"pvcname\": \"pvc-name\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "pvcname",
            "description": "<p>Name of the mounted pvc of the pod</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "payload",
            "description": "<p>Success payload is empty</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"status\": 200,\n    \"message\": \"\",\n    \"payload\": {}\n}",
          "type": "json"
        }
      ]
    },
    "filename": "../backend/storage/views.py",
    "groupTitle": "StorageManager",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "X-Access-Token",
            "description": "<p>access token of the user</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "X-Access-Username",
            "description": "<p>username</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ServerError",
            "description": "<p>Internal server error</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "InvalidRequest",
            "description": "<p>Request is invalid</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "OperationFailed",
            "description": "<p>Operation is unsuccessful</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Unauthorized",
            "description": "<p>User is unauthorized</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "PermissionDenied",
            "description": "<p>User does not have permission to access</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"status\": 500,\n    \"message\": \"Internal server error.\",\n    \"payload\": {}\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"status\": 400,\n    \"message\": \"Invalid request.\",\n    \"payload\": {}\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"status\": 402,\n    \"message\": \"Operation is unsuccessful.\",\n    \"payload\": {}\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"status\": 401,\n    \"message\": \"User is unauthorized.\",\n    \"payload\": {}\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"status\": 403,\n    \"message\": \"Permission denied.\",\n    \"payload\": {}\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/storage/",
    "title": "Get PVC list",
    "name": "GetPVCList",
    "group": "StorageManager",
    "permission": [
      {
        "name": "admin",
        "title": "Admin access only",
        "description": "<p>Only admin user can access this API</p>"
      }
    ],
    "version": "0.1.0",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "payload",
            "description": "<p>Response Object</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "payload.count",
            "description": "<p>Count of total PVCs</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "payload.entry",
            "description": "<p>List of PVC</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "payload.entry.name",
            "description": "<p>PVC name</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "payload.entry.capacity",
            "description": "<p>PVC capacity</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"status\": 200,\n    \"message\": \"\",\n    \"payload\": {}\n}",
          "type": "json"
        }
      ]
    },
    "filename": "../backend/storage/views.py",
    "groupTitle": "StorageManager",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "X-Access-Token",
            "description": "<p>access token of the user</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "X-Access-Username",
            "description": "<p>username</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ServerError",
            "description": "<p>Internal server error</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "InvalidRequest",
            "description": "<p>Request is invalid</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Unauthorized",
            "description": "<p>User is unauthorized</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "PermissionDenied",
            "description": "<p>User does not have permission to access</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"status\": 500,\n    \"message\": \"Internal server error.\",\n    \"payload\": {}\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"status\": 400,\n    \"message\": \"Invalid request.\",\n    \"payload\": {}\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"status\": 401,\n    \"message\": \"User is unauthorized.\",\n    \"payload\": {}\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"status\": 403,\n    \"message\": \"Permission denied.\",\n    \"payload\": {}\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "put",
    "url": "/storage/upload_file/",
    "title": "Re-upload cached files",
    "name": "ReuploadCachedFiles",
    "group": "StorageManager",
    "version": "0.1.0",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "payload",
            "description": "<p>Response payload is empty</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"status\": 200,\n    \"message\": \"\",\n    \"payload\": {}\n}",
          "type": "json"
        }
      ]
    },
    "filename": "../backend/storage/views.py",
    "groupTitle": "StorageManager",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "X-Access-Token",
            "description": "<p>access token of the user</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "X-Access-Username",
            "description": "<p>username</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Unauthorized",
            "description": "<p>User is unauthorized</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "PermissionDenied",
            "description": "<p>User does not have permission to access</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"status\": 401,\n    \"message\": \"User is unauthorized.\",\n    \"payload\": {}\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"status\": 403,\n    \"message\": \"Permission denied.\",\n    \"payload\": {}\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/storage/upload_file/",
    "title": "Upload files into a PVC",
    "name": "UploadFile",
    "group": "StorageManager",
    "permission": [
      {
        "name": "admin",
        "title": "Admin access only",
        "description": "<p>Only admin user can access this API</p>"
      }
    ],
    "version": "0.1.0",
    "parameter": {
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    \"file[]\": [FILE1, FILE2, ...],\n    \"pvcName\": \"pvc-name\",\n    \"mountPath\": \"./data/\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "fileDirectory",
            "description": "<p>directory of the file to be uploaded</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "pvcName",
            "description": "<p>name of the target PVC</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "mountPath",
            "description": "<p>target path in storage</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "payload",
            "description": "<p>Success payload is empty</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"status\": 200,\n    \"message\": \"\",\n    \"payload\": {}\n}",
          "type": "json"
        }
      ]
    },
    "filename": "../backend/storage/views.py",
    "groupTitle": "StorageManager",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "X-Access-Token",
            "description": "<p>access token of the user</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "X-Access-Username",
            "description": "<p>username</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ServerError",
            "description": "<p>Internal server error</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "InvalidRequest",
            "description": "<p>Request is invalid</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "OperationFailed",
            "description": "<p>Operation is unsuccessful</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Unauthorized",
            "description": "<p>User is unauthorized</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "PermissionDenied",
            "description": "<p>User does not have permission to access</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"status\": 500,\n    \"message\": \"Internal server error.\",\n    \"payload\": {}\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"status\": 400,\n    \"message\": \"Invalid request.\",\n    \"payload\": {}\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"status\": 402,\n    \"message\": \"Operation is unsuccessful.\",\n    \"payload\": {}\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"status\": 401,\n    \"message\": \"User is unauthorized.\",\n    \"payload\": {}\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"status\": 403,\n    \"message\": \"Permission denied.\",\n    \"payload\": {}\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/storage/upload_file/",
    "title": "Get uploaded file list",
    "name": "getUploadingFileList",
    "group": "StorageManager",
    "permission": [
      {
        "name": "admin",
        "title": "Admin access only",
        "description": "<p>Only admin user can access this API</p>"
      }
    ],
    "version": "0.1.0",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "payload",
            "description": "<p>Response Object</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "payload.count",
            "description": "<p>Count of total files</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "payload.page_count",
            "description": "<p>Count of total pages</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "payload.entry",
            "description": "<p>List of files</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "payload.entry.id",
            "description": "<p>File hash ID</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "payload.entry.name",
            "description": "<p>Filename</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "payload.entry.pvc",
            "description": "<p>Target PVC</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "payload.entry.path",
            "description": "<p>Target path</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "payload.entry.status",
            "description": "<p>File uploading status</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"status\": 200,\n    \"message\": \"\",\n    \"payload\": {}\n}",
          "type": "json"
        }
      ]
    },
    "filename": "../backend/storage/views.py",
    "groupTitle": "StorageManager",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "X-Access-Token",
            "description": "<p>access token of the user</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "X-Access-Username",
            "description": "<p>username</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "InvalidRequest",
            "description": "<p>Request is invalid</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Unauthorized",
            "description": "<p>User is unauthorized</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "PermissionDenied",
            "description": "<p>User does not have permission to access</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"status\": 400,\n    \"message\": \"Invalid request.\",\n    \"payload\": {}\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"status\": 401,\n    \"message\": \"User is unauthorized.\",\n    \"payload\": {}\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"status\": 403,\n    \"message\": \"Permission denied.\",\n    \"payload\": {}\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/task/",
    "title": "Create a task",
    "name": "CreateTask",
    "description": "<p>Create a task corresponding to the given TaskSetting. The task will be automatically run.</p>",
    "group": "Task",
    "version": "0.1.0",
    "permission": [
      {
        "name": "user",
        "title": "User access only",
        "description": "<p>All users can access this API</p>"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "settings_uuid",
            "description": "<p>UUID of TaskSetting</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "payload",
            "description": "<p>Response object</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "payload.uuid",
            "description": "<p>Task uuid</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "payload.status",
            "description": "<p>Task status code, defined as [SCHEDULED = 0, RUNNING = 1, SUCCEEDED = 2, FAILED = 3, DELETING = 4, PENDING = 5, TLE = 6, WAITING = 7]</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "payload.user",
            "description": "<p>Name of the user that the task belongs to</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "payload.settings",
            "description": "<p>Corresponding task setting</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "payload.settings.name",
            "description": "<p>Name of the task setting</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "payload.settings.uuid",
            "description": "<p>UUID of the task setting</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "payload.create_time",
            "description": "<p>Create time</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"status\": 200,\n    \"message\": \"\",\n    \"payload\": {}\n}",
          "type": "json"
        }
      ]
    },
    "filename": "../backend/task_manager/views.py",
    "groupTitle": "Task",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "X-Access-Token",
            "description": "<p>access token of the user</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "X-Access-Username",
            "description": "<p>username</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ServerError",
            "description": "<p>Internal server error</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "InvalidRequest",
            "description": "<p>Request is invalid</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Unauthorized",
            "description": "<p>User is unauthorized</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"status\": 500,\n    \"message\": \"Internal server error.\",\n    \"payload\": {}\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"status\": 400,\n    \"message\": \"Invalid request.\",\n    \"payload\": {}\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"status\": 401,\n    \"message\": \"User is unauthorized.\",\n    \"payload\": {}\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "delete",
    "url": "/task/<uuid>/",
    "title": "Delete task",
    "name": "DeleteTask",
    "group": "Task",
    "version": "0.1.0",
    "permission": [
      {
        "name": "user",
        "title": "User access only",
        "description": "<p>All users can access this API</p>"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "uuid",
            "description": "<p>UUID of the task</p>"
          }
        ]
      }
    },
    "filename": "../backend/task_manager/views.py",
    "groupTitle": "Task",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "X-Access-Token",
            "description": "<p>access token of the user</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "X-Access-Username",
            "description": "<p>username</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"status\": 200,\n    \"message\": \"\",\n    \"payload\": {}\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ServerError",
            "description": "<p>Internal server error</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "InvalidRequest",
            "description": "<p>Request is invalid</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "OperationFailed",
            "description": "<p>Operation is unsuccessful</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Unauthorized",
            "description": "<p>User is unauthorized</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"status\": 500,\n    \"message\": \"Internal server error.\",\n    \"payload\": {}\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"status\": 400,\n    \"message\": \"Invalid request.\",\n    \"payload\": {}\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"status\": 402,\n    \"message\": \"Operation is unsuccessful.\",\n    \"payload\": {}\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"status\": 401,\n    \"message\": \"User is unauthorized.\",\n    \"payload\": {}\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/task/<uuid>/",
    "title": "Get detailed task info",
    "name": "GetTaskInfoDetail",
    "group": "Task",
    "version": "0.1.0",
    "permission": [
      {
        "name": "user",
        "title": "User access only",
        "description": "<p>All users can access this API</p>"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "uuid",
            "description": "<p>UUID of the task</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "payload",
            "description": "<p>Response object</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "payload.uuid",
            "description": "<p>Task uuid</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "payload.status",
            "description": "<p>Task status code, defined as [SCHEDULED = 0, RUNNING = 1, SUCCEEDED = 2, FAILED = 3, DELETING = 4, PENDING = 5, TLE = 6, WAITING = 7]</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "payload.user",
            "description": "<p>Name of the user that the task belongs to</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "payload.settings",
            "description": "<p>Corresponding task setting</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "payload.settings.name",
            "description": "<p>Name of the task setting</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "payload.settings.uuid",
            "description": "<p>UUID of the task setting</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "payload.exit_code",
            "description": "<p>Exit code of the task</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "payload.log",
            "description": "<p>Logs of the task</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "payload.create_time",
            "description": "<p>Create time</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"status\": 200,\n    \"message\": \"\",\n    \"payload\": {}\n}",
          "type": "json"
        }
      ]
    },
    "filename": "../backend/task_manager/views.py",
    "groupTitle": "Task",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "X-Access-Token",
            "description": "<p>access token of the user</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "X-Access-Username",
            "description": "<p>username</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ServerError",
            "description": "<p>Internal server error</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "InvalidRequest",
            "description": "<p>Request is invalid</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "OperationFailed",
            "description": "<p>Operation is unsuccessful</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Unauthorized",
            "description": "<p>User is unauthorized</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"status\": 500,\n    \"message\": \"Internal server error.\",\n    \"payload\": {}\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"status\": 400,\n    \"message\": \"Invalid request.\",\n    \"payload\": {}\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"status\": 402,\n    \"message\": \"Operation is unsuccessful.\",\n    \"payload\": {}\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"status\": 401,\n    \"message\": \"User is unauthorized.\",\n    \"payload\": {}\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/task/",
    "title": "Get task list",
    "name": "GetTaskSettingsList",
    "description": "<p>For user, the API returns tasks belong to him. For admin, the API returns all tasks.</p>",
    "group": "Task",
    "version": "0.1.0",
    "permission": [
      {
        "name": "user",
        "title": "User access only",
        "description": "<p>All users can access this API</p>"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "page",
            "description": "<p>Specifies the page number (starting from 1, per page 25 elements)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "payload",
            "description": "<p>Response object</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "payload.page_count",
            "description": "<p>Page count</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "payload.count",
            "description": "<p>Total element count</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "payload.entry",
            "description": "<p>List of TaskSettings Object</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "payload.entry.uuid",
            "description": "<p>Task uuid</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "payload.entry.status",
            "description": "<p>Task status code, defined as [SCHEDULED = 0, RUNNING = 1, SUCCEEDED = 2, FAILED = 3, DELETING = 4, PENDING = 5, TLE = 6, WAITING = 7, MLE = 8]</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "payload.entry.user",
            "description": "<p>Name of the user that the task belongs to</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "payload.entry.settings",
            "description": "<p>Corresponding task setting</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "payload.entry.settings.name",
            "description": "<p>Name of the task setting</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "payload.entry.settings.uuid",
            "description": "<p>UUID of the task setting</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "payload.entry.create_time",
            "description": "<p>Create time</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"status\": 200,\n    \"message\": \"\",\n    \"payload\": {}\n}",
          "type": "json"
        }
      ]
    },
    "filename": "../backend/task_manager/views.py",
    "groupTitle": "Task",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "X-Access-Token",
            "description": "<p>access token of the user</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "X-Access-Username",
            "description": "<p>username</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ServerError",
            "description": "<p>Internal server error</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "InvalidRequest",
            "description": "<p>Request is invalid</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Unauthorized",
            "description": "<p>User is unauthorized</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"status\": 500,\n    \"message\": \"Internal server error.\",\n    \"payload\": {}\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"status\": 400,\n    \"message\": \"Invalid request.\",\n    \"payload\": {}\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"status\": 401,\n    \"message\": \"User is unauthorized.\",\n    \"payload\": {}\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/task_settings/",
    "title": "Create task settings",
    "name": "CreateTaskSettings",
    "group": "TaskSettings",
    "version": "0.1.0",
    "permission": [
      {
        "name": "admin",
        "title": "Admin access only",
        "description": "<p>Only admin user can access this API</p>"
      }
    ],
    "parameter": {
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    \"name\": \"task_name\",\n    \"description\": \"This is a demo test.\",\n    \"container_config\": {\n            \"image\": \"nginx:latest\",\n            \"persistent_volume\": {\n                    \"name\": \"ceph-pvc\",\n                    \"mount_path\": \"/var/image/\"\n            },\n            \"shell\": \"/bin/bash\",\n            \"commands\": [\"echo hello world\", \"echo $CLOUD_SCHEDULER_USER\"],\n            \"memory_limit\": \"128M\",\n            \"working_path\": \"/home/task/\",\n            \"task_script_path\": \"scripts/\",\n            \"task_initial_file_path\": \"initial/\"\n    },\n    \"time_limit\": 900,\n    \"replica\": 2,\n    \"ttl_interval\": 5,\n    \"max_sharing_users\": 1\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Task name</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>Task description</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "container_config",
            "description": "<p>Detailed container config</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "time_limit",
            "description": "<p>Task time limit</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "replica",
            "description": "<p>Replicas of containers</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "ttl_interval",
            "description": "<p>Health check interval</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "max_sharing_users",
            "description": "<p>Max number of shared users</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "payload",
            "description": "<p>Success payload is empty</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"status\": 200,\n    \"message\": \"\",\n    \"payload\": {}\n}",
          "type": "json"
        }
      ]
    },
    "filename": "../backend/task_manager/views.py",
    "groupTitle": "TaskSettings",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "X-Access-Token",
            "description": "<p>access token of the user</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "X-Access-Username",
            "description": "<p>username</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ServerError",
            "description": "<p>Internal server error</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "InvalidRequest",
            "description": "<p>Request is invalid</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "OperationFailed",
            "description": "<p>Operation is unsuccessful</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Unauthorized",
            "description": "<p>User is unauthorized</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "PermissionDenied",
            "description": "<p>User does not have permission to access</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"status\": 500,\n    \"message\": \"Internal server error.\",\n    \"payload\": {}\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"status\": 400,\n    \"message\": \"Invalid request.\",\n    \"payload\": {}\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"status\": 402,\n    \"message\": \"Operation is unsuccessful.\",\n    \"payload\": {}\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"status\": 401,\n    \"message\": \"User is unauthorized.\",\n    \"payload\": {}\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"status\": 403,\n    \"message\": \"Permission denied.\",\n    \"payload\": {}\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "delete",
    "url": "/task_settings/<string:uuid>/",
    "title": "Delete task settings",
    "name": "DeleteTaskSettings",
    "group": "TaskSettings",
    "version": "0.1.0",
    "permission": [
      {
        "name": "admin",
        "title": "Admin access only",
        "description": "<p>Only admin user can access this API</p>"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "payload",
            "description": "<p>Success payload is empty</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"status\": 200,\n    \"message\": \"\",\n    \"payload\": {}\n}",
          "type": "json"
        }
      ]
    },
    "filename": "../backend/task_manager/views.py",
    "groupTitle": "TaskSettings",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "X-Access-Token",
            "description": "<p>access token of the user</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "X-Access-Username",
            "description": "<p>username</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ServerError",
            "description": "<p>Internal server error</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "InvalidRequest",
            "description": "<p>Request is invalid</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "OperationFailed",
            "description": "<p>Operation is unsuccessful</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Unauthorized",
            "description": "<p>User is unauthorized</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "PermissionDenied",
            "description": "<p>User does not have permission to access</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"status\": 500,\n    \"message\": \"Internal server error.\",\n    \"payload\": {}\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"status\": 400,\n    \"message\": \"Invalid request.\",\n    \"payload\": {}\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"status\": 402,\n    \"message\": \"Operation is unsuccessful.\",\n    \"payload\": {}\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"status\": 401,\n    \"message\": \"User is unauthorized.\",\n    \"payload\": {}\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"status\": 403,\n    \"message\": \"Permission denied.\",\n    \"payload\": {}\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/task_settings/<string:uuid>/",
    "title": "Get detailed task settings",
    "name": "GetTaskSettings",
    "group": "TaskSettings",
    "version": "0.1.0",
    "permission": [
      {
        "name": "admin",
        "title": "Admin access only",
        "description": "<p>Only admin user can access this API</p>"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "payload",
            "description": "<p>Response object</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "payload.uuid",
            "description": "<p>Task uuid</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "payload.name",
            "description": "<p>Task name</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "payload.description",
            "description": "<p>Task description</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "payload.container_config",
            "description": "<p>Detailed container configs</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "payload.time_limit",
            "description": "<p>Task time limit</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "payload.replica",
            "description": "<p>Replicas of containers</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "payload.ttl_interval",
            "description": "<p>Health check interval</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "payload.max_sharing_users",
            "description": "<p>Max number of shared users</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "payload.create_time",
            "description": "<p>Create time of task setting</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"status\": 200,\n    \"message\": \"\",\n    \"payload\": {}\n}",
          "type": "json"
        }
      ]
    },
    "filename": "../backend/task_manager/views.py",
    "groupTitle": "TaskSettings",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "X-Access-Token",
            "description": "<p>access token of the user</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "X-Access-Username",
            "description": "<p>username</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ServerError",
            "description": "<p>Internal server error</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "InvalidRequest",
            "description": "<p>Request is invalid</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "OperationFailed",
            "description": "<p>Operation is unsuccessful</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Unauthorized",
            "description": "<p>User is unauthorized</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "PermissionDenied",
            "description": "<p>User does not have permission to access</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"status\": 500,\n    \"message\": \"Internal server error.\",\n    \"payload\": {}\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"status\": 400,\n    \"message\": \"Invalid request.\",\n    \"payload\": {}\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"status\": 402,\n    \"message\": \"Operation is unsuccessful.\",\n    \"payload\": {}\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"status\": 401,\n    \"message\": \"User is unauthorized.\",\n    \"payload\": {}\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"status\": 403,\n    \"message\": \"Permission denied.\",\n    \"payload\": {}\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/task_settings/",
    "title": "Get task settings list",
    "name": "GetTaskSettingsList",
    "group": "TaskSettings",
    "version": "0.1.0",
    "permission": [
      {
        "name": "user",
        "title": "User access only",
        "description": "<p>All users can access this API</p>"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "order_by",
            "description": "<p>Specifies list order criteria, available options: create_time, name. Use '-' sign to indicate reverse order.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "page",
            "description": "<p>Specifies the page number (starting from 1, per page 25 elements)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "payload",
            "description": "<p>Response object</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "payload.page_count",
            "description": "<p>Page count</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "payload.count",
            "description": "<p>Total element count</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "payload.entry",
            "description": "<p>List of TaskSettings Object</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "payload.entry.uuid",
            "description": "<p>Task uuid</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "payload.entry.name",
            "description": "<p>Task name</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "payload.entry.description",
            "description": "<p>Task description</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": true,
            "field": "payload.entry.container_config",
            "description": "<p>Detailed container config (admin only)</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "payload.entry.time_limit",
            "description": "<p>Task time limit</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": true,
            "field": "payload.entry.replica",
            "description": "<p>Replicas of containers (admin only)</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": true,
            "field": "payload.entry.ttl_interval",
            "description": "<p>Health check interval (admin only)</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": true,
            "field": "payload.max_sharing_users",
            "description": "<p>Max number of shared users (admin only)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "payload.entry.create_time",
            "description": "<p>Create time of task settings</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"status\": 200,\n    \"message\": \"\",\n    \"payload\": {}\n}",
          "type": "json"
        }
      ]
    },
    "filename": "../backend/task_manager/views.py",
    "groupTitle": "TaskSettings",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "X-Access-Token",
            "description": "<p>access token of the user</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "X-Access-Username",
            "description": "<p>username</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ServerError",
            "description": "<p>Internal server error</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "InvalidRequest",
            "description": "<p>Request is invalid</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Unauthorized",
            "description": "<p>User is unauthorized</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"status\": 500,\n    \"message\": \"Internal server error.\",\n    \"payload\": {}\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"status\": 400,\n    \"message\": \"Invalid request.\",\n    \"payload\": {}\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"status\": 401,\n    \"message\": \"User is unauthorized.\",\n    \"payload\": {}\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "put",
    "url": "/task_settings/<string:uuid>/",
    "title": "Update task settings",
    "name": "UpdateTaskSettings",
    "group": "TaskSettings",
    "version": "0.1.0",
    "permission": [
      {
        "name": "admin",
        "title": "Admin access only",
        "description": "<p>Only admin user can access this API</p>"
      }
    ],
    "description": "<p>Leave optional params empty to keep them as the original value</p>",
    "parameter": {
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    \"name\": \"33\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "name",
            "description": "<p>Task name</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "description",
            "description": "<p>Task description</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": true,
            "field": "container_config",
            "description": "<p>Detailed container config</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "time_limit",
            "description": "<p>Task time limit</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "replica",
            "description": "<p>Replicas of containers</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "ttl_interval",
            "description": "<p>Health check interval</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "max_sharing_users",
            "description": "<p>Max number of shared users</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "payload",
            "description": "<p>Success payload is empty</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"status\": 200,\n    \"message\": \"\",\n    \"payload\": {}\n}",
          "type": "json"
        }
      ]
    },
    "filename": "../backend/task_manager/views.py",
    "groupTitle": "TaskSettings",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "X-Access-Token",
            "description": "<p>access token of the user</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "X-Access-Username",
            "description": "<p>username</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ServerError",
            "description": "<p>Internal server error</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "InvalidRequest",
            "description": "<p>Request is invalid</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "OperationFailed",
            "description": "<p>Operation is unsuccessful</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Unauthorized",
            "description": "<p>User is unauthorized</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "PermissionDenied",
            "description": "<p>User does not have permission to access</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"status\": 500,\n    \"message\": \"Internal server error.\",\n    \"payload\": {}\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"status\": 400,\n    \"message\": \"Invalid request.\",\n    \"payload\": {}\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"status\": 402,\n    \"message\": \"Operation is unsuccessful.\",\n    \"payload\": {}\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"status\": 401,\n    \"message\": \"User is unauthorized.\",\n    \"payload\": {}\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"status\": 403,\n    \"message\": \"Permission denied.\",\n    \"payload\": {}\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/user/",
    "title": "Get user info",
    "name": "GetUserInfo",
    "group": "User",
    "version": "0.1.0",
    "permission": [
      {
        "name": "user",
        "title": "User access only",
        "description": "<p>All users can access this API</p>"
      }
    ],
    "description": "<p>Get the detailed info of current user</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "payload",
            "description": "<p>Response object</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "payload.username",
            "description": "<p>Username</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "payload.email",
            "description": "<p>Email of current user</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "payload.create_time",
            "description": "<p>Creation time of current user</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "payload.uuid",
            "description": "<p>UUID of current user</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"status\": 200,\n    \"message\": \"\",\n    \"payload\": {}\n}",
          "type": "json"
        }
      ]
    },
    "filename": "../backend/user_model/views.py",
    "groupTitle": "User",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "X-Access-Token",
            "description": "<p>access token of the user</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "X-Access-Username",
            "description": "<p>username</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "InvalidRequest",
            "description": "<p>Request is invalid</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Unauthorized",
            "description": "<p>User is unauthorized</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"status\": 400,\n    \"message\": \"Invalid request.\",\n    \"payload\": {}\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"status\": 401,\n    \"message\": \"User is unauthorized.\",\n    \"payload\": {}\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/user_space/<str:uuid>/",
    "title": "Create file/directory in user space",
    "description": "<p>Create a text file or directory in user space. Existing file will be overridden.</p>",
    "name": "CreateItemUserSpace",
    "group": "UserSpace",
    "version": "0.1.0",
    "permission": [
      {
        "name": "user",
        "title": "User access only",
        "description": "<p>All users can access this API</p>"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "file",
            "description": "<p>Filename</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "path",
            "description": "<p>Path</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "content",
            "description": "<p>File content (text only)</p>"
          }
        ]
      }
    },
    "filename": "../backend/user_space/views.py",
    "groupTitle": "UserSpace",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "X-Access-Token",
            "description": "<p>access token of the user</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "X-Access-Username",
            "description": "<p>username</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"status\": 200,\n    \"message\": \"\",\n    \"payload\": {}\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "InvalidRequest",
            "description": "<p>Request is invalid</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "OperationFailed",
            "description": "<p>Operation is unsuccessful</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Unauthorized",
            "description": "<p>User is unauthorized</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ServerError",
            "description": "<p>Internal server error</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"status\": 400,\n    \"message\": \"Invalid request.\",\n    \"payload\": {}\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"status\": 402,\n    \"message\": \"Operation is unsuccessful.\",\n    \"payload\": {}\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"status\": 401,\n    \"message\": \"User is unauthorized.\",\n    \"payload\": {}\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"status\": 500,\n    \"message\": \"Internal server error.\",\n    \"payload\": {}\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "delete",
    "url": "/user_space/<str:uuid>/",
    "title": "Delete file/directory in user space",
    "name": "DeleteItemUserSpace",
    "group": "UserSpace",
    "version": "0.1.0",
    "permission": [
      {
        "name": "user",
        "title": "User access only",
        "description": "<p>All users can access this API</p>"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "file",
            "description": "<p>Filename</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "path",
            "description": "<p>Path</p>"
          }
        ]
      }
    },
    "filename": "../backend/user_space/views.py",
    "groupTitle": "UserSpace",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "X-Access-Token",
            "description": "<p>access token of the user</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "X-Access-Username",
            "description": "<p>username</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"status\": 200,\n    \"message\": \"\",\n    \"payload\": {}\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "InvalidRequest",
            "description": "<p>Request is invalid</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "OperationFailed",
            "description": "<p>Operation is unsuccessful</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Unauthorized",
            "description": "<p>User is unauthorized</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ServerError",
            "description": "<p>Internal server error</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"status\": 400,\n    \"message\": \"Invalid request.\",\n    \"payload\": {}\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"status\": 402,\n    \"message\": \"Operation is unsuccessful.\",\n    \"payload\": {}\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"status\": 401,\n    \"message\": \"User is unauthorized.\",\n    \"payload\": {}\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"status\": 500,\n    \"message\": \"Internal server error.\",\n    \"payload\": {}\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/user_space/<str:uuid>/",
    "title": "Get file/directory in user space",
    "description": "<p>Get the content of a file, or list a dir in user space. <code>file</code> and <code>path</code> parameter may not be used together. If the user enters user space for the first time, the content in <code>initial</code> folder of the task will be copied.</p>",
    "name": "GetItemUserSpace",
    "group": "UserSpace",
    "version": "0.1.0",
    "permission": [
      {
        "name": "user",
        "title": "User access only",
        "description": "<p>All users can access this API</p>"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "file",
            "description": "<p>Filename</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "path",
            "description": "<p>Path</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": true,
            "field": "base64",
            "description": "<p>Return base64 encoded binary contents</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "payload",
            "description": "<p>Response payload. Can either be string of file content (when <code>file</code> is present) or list of file and path names (when <code>path</code> is present). The path name is followed by a trailing slash.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"status\": 200,\n    \"message\": \"\",\n    \"payload\": [\"Dockerfile\", \"path_a/\", \"path_b/\"]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "../backend/user_space/views.py",
    "groupTitle": "UserSpace",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "X-Access-Token",
            "description": "<p>access token of the user</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "X-Access-Username",
            "description": "<p>username</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "InvalidRequest",
            "description": "<p>Request is invalid</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "OperationFailed",
            "description": "<p>Operation is unsuccessful</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Unauthorized",
            "description": "<p>User is unauthorized</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ServerError",
            "description": "<p>Internal server error</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"status\": 400,\n    \"message\": \"Invalid request.\",\n    \"payload\": {}\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"status\": 402,\n    \"message\": \"Operation is unsuccessful.\",\n    \"payload\": {}\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"status\": 401,\n    \"message\": \"User is unauthorized.\",\n    \"payload\": {}\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"status\": 500,\n    \"message\": \"Internal server error.\",\n    \"payload\": {}\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/vnc/<str:uuid>/",
    "title": "Get VNC pod",
    "description": "<p>Get a VNC pod where user can edit files in user space in a GUI environment. Typically, the full VNC url can be <code>wss://vnc_host:vnc_port/url_path</code>. Only secure socket it supported to ensure security.</p>",
    "name": "GetVNCPod",
    "group": "UserSpace",
    "version": "0.1.0",
    "permission": [
      {
        "name": "user",
        "title": "User access only",
        "description": "<p>All users can access this API</p>"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "payload",
            "description": "<p>Payload object</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "payload.url_path",
            "description": "<p>WebSocket URL path for VNC</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "payload.vnc_password",
            "description": "<p>VNC password</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "payload.deployment_name",
            "description": "<p>Kubernetes deployment name</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "payload.vnc_host",
            "description": "<p>WebSocket host for VNC</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "payload.vnc_port",
            "description": "<p>WebSocket port for VNC</p>"
          }
        ]
      }
    },
    "filename": "../backend/user_space/views.py",
    "groupTitle": "UserSpace",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "X-Access-Token",
            "description": "<p>access token of the user</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "X-Access-Username",
            "description": "<p>username</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "InvalidRequest",
            "description": "<p>Request is invalid</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "OperationFailed",
            "description": "<p>Operation is unsuccessful</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Unauthorized",
            "description": "<p>User is unauthorized</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ServerError",
            "description": "<p>Internal server error</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"status\": 400,\n    \"message\": \"Invalid request.\",\n    \"payload\": {}\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"status\": 402,\n    \"message\": \"Operation is unsuccessful.\",\n    \"payload\": {}\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"status\": 401,\n    \"message\": \"User is unauthorized.\",\n    \"payload\": {}\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"status\": 500,\n    \"message\": \"Internal server error.\",\n    \"payload\": {}\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/user_space/<str:uuid>/reset/",
    "title": "Reset user space",
    "description": "<p>Reset user space, copy initial task files into it</p>",
    "name": "ResetUserSpace",
    "group": "UserSpace",
    "version": "0.1.0",
    "permission": [
      {
        "name": "user",
        "title": "User access only",
        "description": "<p>All users can access this API</p>"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": true,
            "field": "purge",
            "description": "<p>Whether to clean all changes made by the user. If <code>true</code>, user changes will be dropped and then initial files get copied, otherwise initial files overwrite user changes only if necessary.</p>"
          }
        ]
      }
    },
    "filename": "../backend/user_space/views.py",
    "groupTitle": "UserSpace",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"status\": 200,\n    \"message\": \"\",\n    \"payload\": {}\n}",
          "type": "json"
        }
      ]
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "X-Access-Token",
            "description": "<p>access token of the user</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "X-Access-Username",
            "description": "<p>username</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "InvalidRequest",
            "description": "<p>Request is invalid</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "OperationFailed",
            "description": "<p>Operation is unsuccessful</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Unauthorized",
            "description": "<p>User is unauthorized</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ServerError",
            "description": "<p>Internal server error</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"status\": 400,\n    \"message\": \"Invalid request.\",\n    \"payload\": {}\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"status\": 402,\n    \"message\": \"Operation is unsuccessful.\",\n    \"payload\": {}\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"status\": 401,\n    \"message\": \"User is unauthorized.\",\n    \"payload\": {}\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"status\": 500,\n    \"message\": \"Internal server error.\",\n    \"payload\": {}\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "put",
    "url": "/user_space/<str:uuid>/",
    "title": "Update file/directory in user space",
    "description": "<p>Rename file/directory, or change the content of the file. <code>file</code> operation may not be mixed with <code>path</code> operation. <code>old_file</code> and <code>file</code> together means move/rename the file, and the same applies to <code>old_path</code> and <code>path</code>. Adding a <code>content</code> param with <code>file</code> present will change the content of that file.</p>",
    "name": "UpdateItemUserSpace",
    "group": "UserSpace",
    "version": "0.1.0",
    "permission": [
      {
        "name": "user",
        "title": "User access only",
        "description": "<p>All users can access this API</p>"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "old_file",
            "description": "<p>Old file name</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "file",
            "description": "<p>New file name</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "content",
            "description": "<p>File content (text only)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "old_path",
            "description": "<p>Old path name</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "path",
            "description": "<p>New path name</p>"
          }
        ]
      }
    },
    "filename": "../backend/user_space/views.py",
    "groupTitle": "UserSpace",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "X-Access-Token",
            "description": "<p>access token of the user</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "X-Access-Username",
            "description": "<p>username</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"status\": 200,\n    \"message\": \"\",\n    \"payload\": {}\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "InvalidRequest",
            "description": "<p>Request is invalid</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "OperationFailed",
            "description": "<p>Operation is unsuccessful</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Unauthorized",
            "description": "<p>User is unauthorized</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ServerError",
            "description": "<p>Internal server error</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"status\": 400,\n    \"message\": \"Invalid request.\",\n    \"payload\": {}\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"status\": 402,\n    \"message\": \"Operation is unsuccessful.\",\n    \"payload\": {}\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"status\": 401,\n    \"message\": \"User is unauthorized.\",\n    \"payload\": {}\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"status\": 500,\n    \"message\": \"Internal server error.\",\n    \"payload\": {}\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "delete",
    "url": "/user/",
    "title": "Delete user",
    "name": "UserDelete",
    "group": "User",
    "version": "0.1.0",
    "permission": [
      {
        "name": "user",
        "title": "User access only",
        "description": "<p>All users can access this API</p>"
      }
    ],
    "description": "<p>Delete current user if there is no associated task, otherwise fail</p>",
    "filename": "../backend/user_model/views.py",
    "groupTitle": "User",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "X-Access-Token",
            "description": "<p>access token of the user</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "X-Access-Username",
            "description": "<p>username</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"status\": 200,\n    \"message\": \"\",\n    \"payload\": {}\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "OperationFailed",
            "description": "<p>Operation is unsuccessful</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "InvalidRequest",
            "description": "<p>Request is invalid</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Unauthorized",
            "description": "<p>User is unauthorized</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"status\": 402,\n    \"message\": \"Operation is unsuccessful.\",\n    \"payload\": {}\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"status\": 400,\n    \"message\": \"Invalid request.\",\n    \"payload\": {}\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"status\": 401,\n    \"message\": \"User is unauthorized.\",\n    \"payload\": {}\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/user/login/",
    "title": "User login",
    "name": "UserLogin",
    "group": "User",
    "version": "0.1.0",
    "permission": [
      {
        "name": "user",
        "title": "User access only",
        "description": "<p>All users can access this API</p>"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>Specifies the username as the unique identification.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Specifies the password.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    \"username\": \"123456\",\n    \"password\": \"123456\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "payload",
            "description": "<p>Response object</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "payload.username",
            "description": "<p>Username</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "payload.token",
            "description": "<p>Total element count</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "payload.avatar",
            "description": "<p>Avatar source of user.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "payload.permission",
            "description": "<p>User permission, must be one of [user, admin, super]</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"status\": 200,\n    \"message\": \"\",\n    \"payload\": {}\n}",
          "type": "json"
        }
      ]
    },
    "filename": "../backend/user_model/views.py",
    "groupTitle": "User",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "OperationFailed",
            "description": "<p>Operation is unsuccessful</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "InvalidRequest",
            "description": "<p>Request is invalid</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ServerError",
            "description": "<p>Internal server error</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"status\": 402,\n    \"message\": \"Operation is unsuccessful.\",\n    \"payload\": {}\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"status\": 400,\n    \"message\": \"Invalid request.\",\n    \"payload\": {}\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"status\": 500,\n    \"message\": \"Internal server error.\",\n    \"payload\": {}\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/user/logout/",
    "title": "User logout",
    "name": "UserLogout",
    "group": "User",
    "version": "0.1.0",
    "permission": [
      {
        "name": "user",
        "title": "User access only",
        "description": "<p>All users can access this API</p>"
      }
    ],
    "filename": "../backend/user_model/views.py",
    "groupTitle": "User",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "X-Access-Token",
            "description": "<p>access token of the user</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "X-Access-Username",
            "description": "<p>username</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"status\": 200,\n    \"message\": \"\",\n    \"payload\": {}\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "OperationFailed",
            "description": "<p>Operation is unsuccessful</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "InvalidRequest",
            "description": "<p>Request is invalid</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Unauthorized",
            "description": "<p>User is unauthorized</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"status\": 402,\n    \"message\": \"Operation is unsuccessful.\",\n    \"payload\": {}\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"status\": 400,\n    \"message\": \"Invalid request.\",\n    \"payload\": {}\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"status\": 401,\n    \"message\": \"User is unauthorized.\",\n    \"payload\": {}\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/user/",
    "title": "User sign up (for plain user)",
    "name": "UserSignUp",
    "group": "User",
    "version": "0.1.0",
    "permission": [
      {
        "name": "user",
        "title": "User access only",
        "description": "<p>All users can access this API</p>"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>Specifies the username as the unique identification.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Specifies the password.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Specifies the email.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    \"username\": \"123456\",\n    \"password\": \"123456\",\n    \"email\": \"abc@163.com\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "../backend/user_model/views.py",
    "groupTitle": "User",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"status\": 200,\n    \"message\": \"\",\n    \"payload\": {}\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "OperationFailed",
            "description": "<p>Operation is unsuccessful</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "InvalidRequest",
            "description": "<p>Request is invalid</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ServerError",
            "description": "<p>Internal server error</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"status\": 402,\n    \"message\": \"Operation is unsuccessful.\",\n    \"payload\": {}\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"status\": 400,\n    \"message\": \"Invalid request.\",\n    \"payload\": {}\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"status\": 500,\n    \"message\": \"Internal server error.\",\n    \"payload\": {}\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "put",
    "url": "/user/",
    "title": "Update user info",
    "name": "UserUpdate",
    "group": "User",
    "version": "0.1.0",
    "permission": [
      {
        "name": "user",
        "title": "User access only",
        "description": "<p>All users can access this API</p>"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "email",
            "description": "<p>Specifies new email.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "password",
            "description": "<p>Specifies new password.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    \"email\": \"abc@163.com\",\n    \"password\": \"123456\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "../backend/user_model/views.py",
    "groupTitle": "User",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "X-Access-Token",
            "description": "<p>access token of the user</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "X-Access-Username",
            "description": "<p>username</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"status\": 200,\n    \"message\": \"\",\n    \"payload\": {}\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "OperationFailed",
            "description": "<p>Operation is unsuccessful</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "InvalidRequest",
            "description": "<p>Request is invalid</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ServerError",
            "description": "<p>Internal server error</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Unauthorized",
            "description": "<p>User is unauthorized</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"status\": 402,\n    \"message\": \"Operation is unsuccessful.\",\n    \"payload\": {}\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"status\": 400,\n    \"message\": \"Invalid request.\",\n    \"payload\": {}\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"status\": 500,\n    \"message\": \"Internal server error.\",\n    \"payload\": {}\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"status\": 401,\n    \"message\": \"User is unauthorized.\",\n    \"payload\": {}\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "websocket",
    "url": "/terminals/",
    "title": "WebSSH portal for admin",
    "description": "<p>After WebSocket connection is established, client must write <code>username@token</code> string to socket for authentication, and then SSH traffic will be permitted.</p>",
    "name": "WebSSHAdmin",
    "group": "WebSocket",
    "version": "0.1.0",
    "permission": [
      {
        "name": "admin",
        "title": "Admin access only",
        "description": "<p>Only admin user can access this API</p>"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "pod",
            "description": "<p>Pod name</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "namespace",
            "description": "<p>Pod namespace</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "shell",
            "description": "<p>Shell to use. Must be one of [/bin/sh, /bin/bash, /bin/zsh, /bin/csh, /bin/ksh, /bin/fish]</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "cols",
            "description": "<p>Shell columns</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "rows",
            "description": "<p>Shell rows</p>"
          }
        ]
      }
    },
    "filename": "../backend/wsocket/views.py",
    "groupTitle": "WebSocket"
  },
  {
    "type": "websocket",
    "url": "/user_terminals/",
    "title": "WebSSH portal for user",
    "name": "WebSSHUser",
    "group": "WebSocket",
    "version": "0.1.0",
    "permission": [
      {
        "name": "user",
        "title": "User access only",
        "description": "<p>All users can access this API</p>"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Identity",
            "description": "<p>Base64 encoded JSON string. The JSON object must contain <code>username</code>, <code>token</code> for auth, and a proper <code>uuid</code> of TaskSettings</p>"
          }
        ]
      }
    },
    "filename": "../backend/wsocket/views.py",
    "groupTitle": "WebSocket"
  }
] });
