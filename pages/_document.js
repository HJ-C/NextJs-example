import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {

  render() {
    return (
      <Html lang="ko">
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument

// _app는 레이아웃
// _docu는 서버에서만 랜더링 되고 이벤트는 작동하지 않음, css도 작용x
// 