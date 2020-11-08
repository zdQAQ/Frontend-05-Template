let CALLBACKS = new Map()
let REACTIVITIES = new Map()
let USED_REACTIVITIES = []

function effect(callback) {
  // callbacks.push(callback)
  USED_REACTIVITIES = []
  callback()
  console.log(USED_REACTIVITIES)

  for (let reactivity of USED_REACTIVITIES) {
    if (!CALLBACKS.has(reactivity[0])) {
      CALLBACKS.set(reactivity[0], new Map())
    }
    if (!CALLBACKS.get(reactivity[0]).has(reactivity[1])) {
      CALLBACKS.get(reactivity[0]).set(reactivity[1], [])
    }
    CALLBACKS.get(reactivity[0]).get(reactivity[1]).push(callback)
  }
}

function reactive(object) {
  if (REACTIVITIES.has(object)) {
    return REACTIVITIES.get(object)
  }
  let proxy = new Proxy(object, {
    set(obj, prop, val) {
      obj[prop] = val
      if (CALLBACKS.get(obj)) {
        if (CALLBACKS.get(obj).get(prop)) {
          for (let callback of CALLBACKS.get(obj).get(prop)) {
            callback()
          }
        }
      }

      return obj[prop]
    },
    get(obj, prop) {
      USED_REACTIVITIES.push([obj, prop])
      if (typeof prop === 'object') {
        return reactive(obj[prop])
      }
      return obj[prop]
    }
  })
  REACTIVITIES.set(object, proxy)
  return proxy
}