function createRequestTypes(base) {
  const requestType = {};
  [REQUEST, SUCCESS, FAILURE].forEach(type => requestType[type] = `${base}_${type}`);
  return requestType;
}

export const ROOT_URL     = '/cms/api/v1';
export const POST_PATH    = '/posts';
export const AUTHOR_PATH  = '/authors';
export const SITE_PATH  = '/site';
export const PROJECT_PATH = '/projects';
export const TWITTER_PATH = '/services/twitter';
export const TEST_DOMAIN  = 'http://localhost:80';

const REQUEST = 'REQUEST';
const SUCCESS = 'SUCCESS';
const FAILURE = 'FAILURE';

export const FETCH_POSTS        = createRequestTypes('FETCH_POSTS');
export const FETCH_POST         = createRequestTypes('FETCH_POST');
export const FETCH_NEW_POST     = createRequestTypes('FETCH_NEW_POST');
export const SAVE_POST          = createRequestTypes('SAVE_POST');
export const TOGGLE_POST        = createRequestTypes('TOGGLE_POST');
export const FETCH_POST_FORM    = createRequestTypes('FETCH_POST_FORM');

export const FETCH_AUTHOR       = createRequestTypes('FETCH_AUTHOR');
export const UPDATE_AUTHOR      = createRequestTypes('UPDATE_AUTHOR');

export const FETCH_PROJECTS     = createRequestTypes('FETCH_PROJECTS');
export const FETCH_PROJECT      = createRequestTypes('FETCH_PROJECT');
export const FETCH_NEW_PROJECT  = createRequestTypes('FETCH_NEW_PROJECT');
export const SAVE_PROJECT       = createRequestTypes('SAVE_PROJECT');
export const TOGGLE_PROJECT     = createRequestTypes('TOGGLE_PROJECT');

export const SIGN_OUT           = createRequestTypes('SIGN_OUT');
export const AUTH               = createRequestTypes('AUTH');
export const FETCH_TWEET        = createRequestTypes('FETCH_TWEET');


export const FETCH_ITEMS        = 'FETCH_ITEMS';
export const CREATE_ITEM        = 'CREATE_ITEM';
export const UPDATE_ITEM        = 'UPDATE_ITEM';
export const DELETE_ITEM        = 'DELETE_ITEM';
export const MOVE_ITEM_TOP      = 'MOVE_ITEM_TOP';
export const MOVE_ITEM_UP       = 'MOVE_ITEM_UP';
export const MOVE_ITEM_DOWN     = 'MOVE_ITEM_DOWN';
export const MOVE_ITEM_BOTTOM   = 'MOVE_ITEM_BOTTOM';

export const FETCH_SOCIAL_ACCOUNTS = 'FETCH_SOCIAL_ACCOUNTS';
export const CREATE_SOCIAL_ACCOUNT = 'CREATE_SOCIAL_ACCOUNT';
export const UPDATE_SOCIAL_ACCOUNT = 'UPDATE_SOCIAL_ACCOUNT';
export const DELETE_SOCIAL_ACCOUNT = 'DELETE_SOCIAL_ACCOUNT';

export const FETCH_TAGS = 'FETCH_TAGS';
export const CREATE_TAG = 'CREATE_TAG';
export const DELETE_TAG = 'DELETE_TAG';

export const TARGET_TYPES = {
  TWITTER: {
    NAME: "ItemTwitter",
    LABEL: "Twitter",
    IMAGE: "data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTguMS4xLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDYxMiA2MTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDYxMiA2MTI7IiB4bWw6c3BhY2U9InByZXNlcnZlIiB3aWR0aD0iMTZweCIgaGVpZ2h0PSIxNnB4Ij4KPGc+Cgk8Zz4KCQk8cGF0aCBkPSJNNjEyLDExNi4yNThjLTIyLjUyNSw5Ljk4MS00Ni42OTQsMTYuNzUtNzIuMDg4LDE5Ljc3MmMyNS45MjktMTUuNTI3LDQ1Ljc3Ny00MC4xNTUsNTUuMTg0LTY5LjQxMSAgICBjLTI0LjMyMiwxNC4zNzktNTEuMTY5LDI0LjgyLTc5Ljc3NSwzMC40OGMtMjIuOTA3LTI0LjQzNy01NS40OS0zOS42NTgtOTEuNjMtMzkuNjU4Yy02OS4zMzQsMC0xMjUuNTUxLDU2LjIxNy0xMjUuNTUxLDEyNS41MTMgICAgYzAsOS44MjgsMS4xMDksMTkuNDI3LDMuMjUxLDI4LjYwNkMxOTcuMDY1LDIwNi4zMiwxMDQuNTU2LDE1Ni4zMzcsNDIuNjQxLDgwLjM4NmMtMTAuODIzLDE4LjUxLTE2Ljk4LDQwLjA3OC0xNi45OCw2My4xMDEgICAgYzAsNDMuNTU5LDIyLjE4MSw4MS45OTMsNTUuODM1LDEwNC40NzljLTIwLjU3NS0wLjY4OC0zOS45MjYtNi4zNDgtNTYuODY3LTE1Ljc1NnYxLjU2OGMwLDYwLjgwNiw0My4yOTEsMTExLjU1NCwxMDAuNjkzLDEyMy4xMDQgICAgYy0xMC41MTcsMi44My0yMS42MDcsNC4zOTgtMzMuMDgsNC4zOThjLTguMTA3LDAtMTUuOTQ3LTAuODAzLTIzLjYzNC0yLjMzM2MxNS45ODUsNDkuOTA3LDYyLjMzNiw4Ni4xOTksMTE3LjI1Myw4Ny4xOTQgICAgYy00Mi45NDcsMzMuNjU0LTk3LjA5OSw1My42NTUtMTU1LjkxNiw1My42NTVjLTEwLjEzNCwwLTIwLjExNi0wLjYxMi0yOS45NDQtMS43MjFjNTUuNTY3LDM1LjY4MSwxMjEuNTM2LDU2LjQ4NSwxOTIuNDM4LDU2LjQ4NSAgICBjMjMwLjk0OCwwLDM1Ny4xODgtMTkxLjI5MSwzNTcuMTg4LTM1Ny4xODhsLTAuNDIxLTE2LjI1M0M1NzMuODcyLDE2My41MjYsNTk1LjIxMSwxNDEuNDIyLDYxMiwxMTYuMjU4eiIgZmlsbD0iIzAwMDAwMCIvPgoJPC9nPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+Cjwvc3ZnPgo="
  },
  IMAGE: {
    NAME: "ItemImage",
    LABEL: "Image",
    IMAGE: "data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMS4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDQ5MS44NTggNDkxLjg1OCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNDkxLjg1OCA0OTEuODU4OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgd2lkdGg9IjE2cHgiIGhlaWdodD0iMTZweCI+CjxnPgoJPGc+CgkJPHBhdGggZD0iTTAsOTIuMjIzdjMwNy40MTFoNDkxLjg1OFY5Mi4yMjNIMHogTTk4LjM3MiwxMjkuMTE0YzIwLjM3NCwwLDM2Ljg4OSwxNi41MTcsMzYuODg5LDM2Ljg4OXMtMTYuNTE1LDM2Ljg4OS0zNi44ODksMzYuODg5ICAgIGMtMjAuMzczLDAtMzYuODg5LTE2LjUxNy0zNi44ODktMzYuODg5QzYxLjQ4MiwxNDUuNjI5LDc3Ljk5OSwxMjkuMTE0LDk4LjM3MiwxMjkuMTE0eiBNMjMzLjYzMiwzNjIuNzQ1SDEzNS4yNkgzNi44ODkgICAgbDk4LjM3Mi0xNDcuNTU3bDU0LjAzNSw4MS4wNTFsMTA1LjgxOS0xMzAuMjM3bDE1OS44NTQsMTk2Ljc0M0gyMzMuNjMyeiIgZmlsbD0iIzAwMDAwMCIvPgoJPC9nPgoJPGc+Cgk8L2c+Cgk8Zz4KCTwvZz4KCTxnPgoJPC9nPgoJPGc+Cgk8L2c+Cgk8Zz4KCTwvZz4KCTxnPgoJPC9nPgoJPGc+Cgk8L2c+Cgk8Zz4KCTwvZz4KCTxnPgoJPC9nPgoJPGc+Cgk8L2c+Cgk8Zz4KCTwvZz4KCTxnPgoJPC9nPgoJPGc+Cgk8L2c+Cgk8Zz4KCTwvZz4KCTxnPgoJPC9nPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+Cjwvc3ZnPgo"
  },
  LINK: {
    NAME: "link",
    LABEL: "Link",
    IMAGE: "data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTYuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgd2lkdGg9IjE2cHgiIGhlaWdodD0iMTZweCIgdmlld0JveD0iMCAwIDQ1Ny4wMyA0NTcuMDMiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQ1Ny4wMyA0NTcuMDM7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPGc+Cgk8cGF0aCBkPSJNNDIxLjUxMiwyMDcuMDc0bC04NS43OTUsODUuNzY3Yy00Ny4zNTIsNDcuMzgtMTI0LjE2OSw0Ny4zOC0xNzEuNTI5LDBjLTcuNDYtNy40MzktMTMuMjk2LTE1LjgyMS0xOC40MjEtMjQuNDY1ICAgbDM5Ljg2NC0zOS44NjFjMS44OTUtMS45MTEsNC4yMzUtMy4wMDYsNi40NzEtNC4yOTZjMi43NTYsOS40MTYsNy41NjcsMTguMzMsMTQuOTcyLDI1LjczNmMyMy42NDgsMjMuNjY3LDYyLjEyOCwyMy42MzQsODUuNzYyLDAgICBsODUuNzY4LTg1Ljc2NWMyMy42NjYtMjMuNjY0LDIzLjY2Ni02Mi4xMzUsMC04NS43ODFjLTIzLjYzNS0yMy42NDYtNjIuMTA1LTIzLjY0Ni04NS43NjgsMGwtMzAuNDk5LDMwLjUzMiAgIGMtMjQuNzUtOS42MzctNTEuNDE1LTEyLjIyOC03Ny4zNzMtOC40MjRsNjQuOTkxLTY0Ljk4OWM0Ny4zOC00Ny4zNzEsMTI0LjE3Ny00Ny4zNzEsMTcxLjU1NywwICAgQzQ2OC44NjksODIuODk3LDQ2OC44NjksMTU5LjcwNiw0MjEuNTEyLDIwNy4wNzR6IE0xOTQuNzA4LDM0OC4xMDRsLTMwLjUyMSwzMC41MzJjLTIzLjY0NiwyMy42MzQtNjIuMTI4LDIzLjYzNC04NS43NzgsMCAgIGMtMjMuNjQ4LTIzLjY2Ny0yMy42NDgtNjIuMTM4LDAtODUuNzk1bDg1Ljc3OC04NS43NjdjMjMuNjY1LTIzLjY2Miw2Mi4xMjEtMjMuNjYyLDg1Ljc2NywwICAgYzcuMzg4LDcuMzksMTIuMjA0LDE2LjMwMiwxNC45ODYsMjUuNzA2YzIuMjQ5LTEuMzA3LDQuNTYtMi4zNjksNi40NTQtNC4yNjZsMzkuODYxLTM5Ljg0NSAgIGMtNS4wOTItOC42NzgtMTAuOTU4LTE3LjAzLTE4LjQyMS0yNC40NzdjLTQ3LjM0OC00Ny4zNzEtMTI0LjE3Mi00Ny4zNzEtMTcxLjU0MywwTDM1LjUyNiwyNDkuOTYgICBjLTQ3LjM2Niw0Ny4zODUtNDcuMzY2LDEyNC4xNzIsMCwxNzEuNTUzYzQ3LjM3MSw0Ny4zNTYsMTI0LjE3Nyw0Ny4zNTYsMTcxLjU0NywwbDY1LjAwOC02NS4wMDMgICBDMjQ2LjEwOSwzNjAuMzM2LDIxOS40MzcsMzU3LjcyMywxOTQuNzA4LDM0OC4xMDR6IiBmaWxsPSIjMDAwMDAwIi8+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPC9zdmc+Cg=="
  },
  QUOTE: {
    NAME: "quote",
    LABEL: "Quote",
    IMAGE: "data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTYuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgd2lkdGg9IjE2cHgiIGhlaWdodD0iMTZweCIgdmlld0JveD0iMCAwIDUxMi41IDUxMi41IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIuNSA1MTIuNTsiIHhtbDpzcGFjZT0icHJlc2VydmUiPgo8Zz4KCTxwYXRoIGQ9Ik0xMTIuNSwyMDguMjVjNjEuODU2LDAsMTEyLDUwLjE0NSwxMTIsMTEycy01MC4xNDQsMTEyLTExMiwxMTJzLTExMi01MC4xNDUtMTEyLTExMmwtMC41LTE2ICAgYzAtMTIzLjcxMiwxMDAuMjg4LTIyNCwyMjQtMjI0djY0Yy00Mi43MzcsMC04Mi45MTcsMTYuNjQzLTExMy4xMzcsNDYuODYzYy01LjgxNyw1LjgxOC0xMS4xMjYsMTIuMDA4LTE1LjkxNSwxOC41MSAgIEMxMDAuNjY3LDIwOC43MjMsMTA2LjUyOCwyMDguMjUsMTEyLjUsMjA4LjI1eiBNNDAwLjUsMjA4LjI1YzYxLjg1NSwwLDExMiw1MC4xNDUsMTEyLDExMnMtNTAuMTQ1LDExMi0xMTIsMTEyICAgcy0xMTItNTAuMTQ1LTExMi0xMTJsLTAuNS0xNmMwLTEyMy43MTIsMTAwLjI4Ny0yMjQsMjI0LTIyNHY2NGMtNDIuNzM2LDAtODIuOTE4LDE2LjY0My0xMTMuMTM3LDQ2Ljg2MyAgIGMtNS44MTgsNS44MTgtMTEuMTI3LDEyLjAwOC0xNS45MTYsMTguNTFDMzg4LjY2NiwyMDguNzIzLDM5NC41MjcsMjA4LjI1LDQwMC41LDIwOC4yNXoiIGZpbGw9IiMwMDAwMDAiLz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8L3N2Zz4K"
  },
  HEADING: {
    NAME: "heading",
    LABEL: "Heading",
    IMAGE: "data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0ZWQgYnkgSWNvTW9vbi5pbyAtLT4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4KPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIHdpZHRoPSIxNnB4IiBoZWlnaHQ9IjE2cHgiIHZpZXdCb3g9IjAgMCAxNiAxNiI+CjxwYXRoIGZpbGw9IiMwMDAwMDAiIGQ9Ik0xMSAwdjdoLTZ2LTdoLTN2MTZoM3YtN2g2djdoM3YtMTZ6Ii8+Cjwvc3ZnPgo="
  },
  SUB_HEADING: {
    NAME: "subHeading",
    LABEL: "SubHeading",
    IMAGE: "data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTYuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgd2lkdGg9IjE2cHgiIGhlaWdodD0iMTZweCIgdmlld0JveD0iMCAwIDk0LjYzIDk0LjYzIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA5NC42MyA5NC42MzsiIHhtbDpzcGFjZT0icHJlc2VydmUiPgo8Zz4KCTxwYXRoIGQ9Ik05My45NDksOTEuNzkyTDU5Ljg2MSwxLjI5NUM1OS41NjgsMC41MTYsNTguODIyLDAsNTcuOTg5LDBIMzcuNTIyYy0wLjgyNywwLTEuNTY4LDAuNTA5LTEuODY2LDEuMjhMMC42ODYsOTEuOTEgICBjLTAuMjM3LDAuNjE1LTAuMTU2LDEuMzA4LDAuMjE2LDEuODUyYzAuMzczLDAuNTQzLDAuOTksMC44NjgsMS42NDksMC44NjhoMTcuMjY4YzAuODM1LDAsMS41ODMtMC41MjEsMS44NzUtMS4zMDRsNy43ODItMjAuOTIgICBINjQuMzdsNy4xOTksMjAuNzQ2YzAuMjc5LDAuODA2LDEuMDM4LDEuMzQ1LDEuODkxLDEuMzQ1aDE4LjYxOWMwLjY1NSwwLDEuMjcxLTAuMzIyLDEuNjQ1LTAuODYyICAgQzk0LjA5OCw5My4wOTYsOTQuMTgxLDkyLjQwNiw5My45NDksOTEuNzkyeiBNNTkuMjc3LDU3LjEyNkgzNC43NzVsMTIuNjM4LTM4LjA5OEw1OS4yNzcsNTcuMTI2eiIgZmlsbD0iIzAwMDAwMCIvPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+Cjwvc3ZnPgo="
  },
  TEXT: {
    NAME: "ItemText",
    LABEL: "Text",
    IMAGE: "data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTYuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgd2lkdGg9IjE2cHgiIGhlaWdodD0iMTZweCIgdmlld0JveD0iMCAwIDMxOS42MzQgMzE5LjYzNSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMzE5LjYzNCAzMTkuNjM1OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CjxnPgoJPGc+CgkJPHBhdGggZD0iTTMxOC43NjUsOS44ODhjLTAuMDYzLTUuNDc5LTQuNTIxLTkuODg4LTEwLTkuODg4SDEwLjgzYy01LjUyMywwLTEwLDQuNDc4LTEwLDEwdjU1YzAsNS41MjIsNC40NzcsMTAsMTAsMTBoMjIuNTk2ICAgIGMzLjAzOSwwLDUuOTEyLTEuMzgxLDcuODA5LTMuNzUzTDU4LjIzMiw1MGg3MS41OTJ2MjU5LjYzNWMwLDUuNTIxLDQuNDc3LDEwLDEwLDEwaDQwYzUuNTIxLDAsMTAtNC40NzksMTAtMTBWNTAuMDAxaDcxLjUxNCAgICBsMTcuMDgsMjEuMjYzYzEuODk4LDIuMzYzLDQuNzY5LDMuNzM3LDcuNzk5LDMuNzM3aDIyLjU4OGMyLjY2LDAsNS4yMTItMS4wNjEsNy4wODktMi45NDZjMS44NzctMS44ODUsMi45MjYtNC40NDEsMi45MTEtNy4xMDIgICAgTDMxOC43NjUsOS44ODh6IiBmaWxsPSIjMDAwMDAwIi8+Cgk8L2c+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPC9zdmc+Cg=="
  },
  EDIT_BOX: "EditBox"
};
