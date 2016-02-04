import * as actionTypes from '../actions/parts';

const defaultState = {
  currentPart:{
  },
  management: {
    showResults:false
  },
  history: [
  ],
  results: [
  ]
}

function normalizePart(part){
  var obj = {stators:{},rotors:{}}

  Object.keys(part).map( key => {
    if (key.includes("stator_")){
      obj.stators[key] = part[key]
    }else if(key.includes("rotor_")){
      obj.rotors[key] = part[key]
    }else{
      obj[key] = part[key]
    }
  })

  return obj
}


export default function parts(state = defaultState, action) {
  switch (action.type) {
    case actionTypes.SET_IMG:{}
    case actionTypes.SAVE_PARTS:{
      state.history.push({
        method: "CREATE",
        id:action.res.data.id,
        manufacturer: action.res.data.manufacturer,
        parttype: action.res.data.parttype
      })
      return state;
    }
    case actionTypes.SEARCH_PARTS:{
      action.res.data.forEach( e => {
        state.results.push(normalizePart(e))
      })
      state.management.showResults = true;
      return Object.assign({},state) ;
    }
    case actionTypes.CLOSE_SEARCH_PANEL:{
      state.management.showResults = false;
      return Object.assign({},state) ; 
    }
    case actionTypes.SHOW_PART:{
      state.currentPart = state.results[action.id];
      state.management.showResults = false;
      return Object.assign({},state) ; 
    }
    default:
      return state;
  }
}
