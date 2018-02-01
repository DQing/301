import HTTP_METHOD from './http-method'
import { message } from 'antd'

async function errHandler (res) {
  const body = await res.json()
  message.error(body.message)
  return {status: res.status}
}

export const get = async (url) => {
  try {
    const res = await fetch(url, {
      method: HTTP_METHOD.GET,
      credentials: 'include',
      headers: new Headers({
        'Accept': 'application/json;charset=utf-8'
      })
    });

      if (!res.ok) {
      return errHandler(res)
    }

    const body = await res.json()
    const status = res.status
    return Object.assign({}, {body}, {status})

  } catch (ex) {
    // alert(ex)
    return {status: ex.status}
  }
};
