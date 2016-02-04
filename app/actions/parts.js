import request from 'axios';

export const SAVE_PARTS = 'SAVE_PARTS';
export const SET_IMG = 'SET_IMG'
export const SEARCH_PARTS = 'SEARCH_PARTS'
export const CLOSE_SEARCH_PANEL = 'CLOSE_SEARCH_PANEL'
export const SHOW_PART = 'SHOW_PART'


export function setImg(img){
  return {
    type: SET_IMG,
    img
  }
}

export function savePart(values,dispatch) {
  var values = values;

  Object.keys(values.stators).map((key,i) => {
    values["stator_"+i] = values.stators[key]
  })
  Object.keys(values.rotors).map((key,i) => {
    values["rotor_"+i] = values.rotors[key]
  })

  delete values.stators;
  delete values.rotors;

  return {
    type: SAVE_PARTS,
    promise: request.post('http://localhost:3000/api/parts',values)
  }
}

export function search(values){
  var values = values;

  Object.keys(values.stators).map((key,i) => {
    values["stator_"+i] = values.stators[key]
  })
  Object.keys(values.rotors).map((key,i) => {
    values["rotor_"+i] = values.rotors[key]
  })

  delete values.stators;
  delete values.rotors;

  return {
    type: SEARCH_PARTS,
    promise: request.post('http://localhost:3000/api/search',values)   
  }
}

export function closeSearchPanel(){
  return {
    type: CLOSE_SEARCH_PANEL
  }
}

export function showPart(id){
  return {
    type:SHOW_PART,
    id
  }
}