const initialState = {
  isloggedin: false,
  currentStatus: "site",
  currentZone: null,
  currentRow: null,
  statics: null,
  currentDisplay: 'tracker',
  cordssite: [[94,181,105,222,188,252,208,138],[217,133,196,258,377,118,350,72],[353,72,438,22,462,40,383,114]]
};

const simpleReducer = (state = initialState, action) => {
    switch (action.type) {
     case 'login':
      return { ...state, isloggedin: true, email: action.payload }

     case 'logout':
      return { ...state, isloggedin:false }

     case 'setstatic':
      return { ...state, statics: action.payload }

     case 'sitetozone':
      return { ...state, currentStatus: "zone", currentZone: action.payload}

      case 'zonetorow':
      return { ...state, currentStatus: "row", currentRow: action.payload}

      case 'rowtorow':
      return { ...state, currentRow: action.payload}

      case 'zonetosite':
      return { ...state, currentStatus: "site"}

      case 'rowtozone':
      return { ...state, currentStatus: "zone"}

      case 'setnavigationitem':
      return { ...state, currentDisplay: action.payload}

      case 'setzone':
      return { ...state, currentZone: action.payload}

      case 'setrow':
      return { ...state, currentRow: action.payload}
     
    default:
      return state
    }
   }

export default simpleReducer;