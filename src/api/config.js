/**
 *
 */
/* eslint-disable */
const isDev = process.env.NODE_ENV !== 'production';
const devUrl = "http://localhost:8085";
const proUrl = "http://www.kejso.com";
const BASE_URL = isDev?devUrl: proUrl;

export default{
  BASE_URL,
  common:{ //通用的http请求的url信息
    TOP_N_KEYWORD_URL:"/search/topn",
  },
  index:{ //首页的url
  },
  scholar:{//学者页面的url

  },
  "org":{ //机构页面的url

  },
  "field":{ //领域页面的url

  }
}


