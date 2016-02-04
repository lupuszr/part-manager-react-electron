import React from 'react';
import {reduxForm} from 'redux-form';
import defaults from './defaults.module.css' 
import style from './Parts.module.css'

class Parts extends React.Component {
  render(){
    const {fields: {
      manufacturer,stators,
      parttype, rotors, 
      rotation, note,
      power, image1,
      voltage, current,
      cosfi,capacity},
      handleSubmit,...actions} = this.props;
      console.log(this.props)
    return(
      <form onSubmit={handleSubmit(actions.savePart)}>
        {/************************************/}
      <div className={"row "}>
        <div className="col-xs-4 ">
          <label htmlFor="manufacturer">Gyártó</label>
        </div>
        <div className="col-xs-8">
          <label htmlFor="stator1">Menetszám státor</label>
        </div>
      </div>

      <div className="row">
        <div className="col-xs-4">
          <input type="text" className={"form-control " + style.partControl}  placeholder="Gyártó" {...manufacturer}/>
        </div>
        {
          Object.keys(stators).map((key,i) => {
            return (
              <div key={i} className="col-xs-1">
                <input type="text" className={"form-control " + style.partControl} key={i} placeholder="" {...stators[key]}/>
              </div>
            )
          })
        }
      </div>
      {/************************************/}
      <div className={"row " + defaults["margin-top-medium"]}>
        <div className="col-xs-4">
          <label htmlFor="type">Tipus</label>
        </div>
        <div className="col-xs-8">
          <label htmlFor="rotor1">Menetszám rotor</label>
        </div>
      </div>

      <div className="row">
        <div className="col-xs-4">
          <input type="text" className={"form-control " + style.partControl} placeholder="Tipus" {...parttype}/>
        </div>
        {
          Object.keys(rotors).map((key,i) => {
            return (
              <div key={i} className="col-xs-1 col-xs-1">
                <input type="text"  className={"form-control " + style.partControl} key={i} placeholder="" {...rotors[key]}/>
              </div>
            )
          })
        }
      </div>
      {/************************************/}
      <div className={"row " + defaults["margin-top-medium"]}>
        <div className="col-xs-4">
          <label htmlFor="rotation">Fordulat</label>
        </div>
        <div className="col-xs-6">
          <label htmlFor="note">Megjegyzés</label>
        </div>
      </div>

      <div className="row">
        <div className="col-xs-4">
          <div className="input-group">
            <input type="text" className={"form-control " + style.partControl} placeholder="Fordulat" {...rotation}/>
            <span className="input-group-addon"><sup>n</sup>&frasl;<sub>min</sub></span>
          </div>
        </div>

        <div className="col-xs-6">
          <textarea rows={4} type="text" className={"form-control " + style.partControl} placeholder="Megjegyzes" {...note}/>
        </div>
      </div>
      {/************************************/}
      <div className={"row " + defaults["margin-top-medium"]}>
        <div className="col-xs-4">
          <label htmlFor="power">Erő</label>
        </div>
        <div className="col-xs-6">
          <label htmlFor="image1">Kép</label>
        </div>
      </div>

      <div className="row">
        <div className="col-xs-4">
          <div className="input-group">
            <input type="text"  className={"form-control " + style.partControl} placeholder="Erő" {...power}/>
            <span className="input-group-addon">kW</span>
          </div>
        </div>

        <div className="col-xs-6">
          <input type='file' {...image1} ></input>  
        </div>
      </div>
      {/************************************/}
      <div className={"row " + defaults["margin-top-medium"]}>
        <div className="col-xs-4">
          <label htmlFor="voltage">Feszültség</label>
        </div>
      </div>

      <div className="row">
        <div className="col-xs-4">
          <div className="input-group">
            <input type="text" className={"form-control " + style.partControl} placeholder="Feszültség" {...voltage}/>
            <span className="input-group-addon">V</span>
          </div>
        </div>
      </div>
      {/************************************/}
      <div className={"row " + defaults["margin-top-medium"]}>
        <div className="col-xs-4">
          <label htmlFor="current">Áramerőség</label>
        </div>
      </div>

      <div className="row">
        <div className="col-xs-4">
          <div className="input-group">
            <input type="text" className={"form-control " + style.partControl} placeholder="Áramerőség" {...current}/>
            <span className="input-group-addon">A</span>
          </div>
        </div>
      </div>
      {/************************************/}
      <div className={"row " + defaults["margin-top-medium"]}>
        <div className="col-xs-4">
          <label htmlFor="cosFI">cos(&phi;)</label>
        </div>
      </div>

      <div className="row">
        <div className="col-xs-4">
          <input type="text" className={"form-control " + style.partControl} placeholder="cos(&phi;)" {...cosfi}/>
        </div>
      </div>
      {/************************************/}
      <div className={"row " + defaults["margin-top-medium"]}>
        <div className="col-xs-4">
          <label htmlFor="capacity">Kapacitás</label>
        </div>
      </div>

      <div className="row">
        <div className="col-xs-4">
          <div className="input-group">
            <input type="text"  className={"form-control " + style.partControl} placeholder="Kapacitás" {...capacity}/>
            <span className="input-group-addon">&micro;F</span>
          </div>
        </div>
      </div>
      {/************************************/}
      
      <div className={"row " + defaults["center"]}>
        <div className="col-xs-12">
          <div className="panel panel-primary">
            <div className="panel-body">
              <div className={"row center " + defaults["center"]}>
                <div className={"col-xs-4 " + defaults.center}>
                  <button type="submit"  className="btn btn-default" >Mentes</button>
                </div>
                <div className="col-xs-4">
                  <button type="button" className="btn btn-default">Torles</button>
                </div>
                <div className="col-xs-4">
                  <button type="button" className="btn btn-default" onClick={e => {actions.search(this.props.values)}}>Kereses</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      </form>
    )
  }
}

Parts = reduxForm({
  form: 'parts',
  fields: ['manufacturer','stators.stator_0','stators.stator_1','stators.stator_2','stators.stator_3','stators.stator_4','stators.stator_5','stators.stator_6','stators.stator_7',
      'parttype', 'rotors.rotor_0', 'rotors.rotor_1', 'rotors.rotor_2', 'rotors.rotor_3', 
      'rotation', 'note',
      'power', 'image1',
      'voltage', 'current',
      'cosfi','capacity']
})(Parts)

export default Parts;

