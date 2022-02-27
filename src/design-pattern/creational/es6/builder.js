'use strict';

/*
빌더 (Builder)
- 작게 분리된 인스턴스를 건축하듯이 조합하여 객체를 생성한다.
- 객체의 생성 과정과 표현 방법을 분리하고 있어, 동일한 객체 생성에서도 서로 다른 결과를
만들어 낼 수 있다.
*/

class Request {
  constructor() {
    this.url = '';
    this.method = '';
    this.payload = {};
  }
}

class RequestBuilder {
  constructor() {
    this.request = new Request();
  }

  forUrl(url) {
    this.request.url = url;
    return this;
  }

  useMethod(method) {
    this.request.method = method;
    return this;
  }

  payload(payload) {
    this.request.payload = payload;
    return this;
  }

  build() {
    return this.request;
  }
}

export default RequestBuilder;
