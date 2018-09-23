export function setstatic(statics) {
    return {
      type: 'setstatic',
      payload: statics
    }
  }

export function setnavigationitem(item) {
    return {
      type: 'setnavigationitem',
      payload: item
    }
  }