import React from 'react'
import style from './Parts.module.css'
import defaults from './defaults.module.css' 



const Management = ({part,...actions}) => {
  console.log("part manage")
  console.log(...part)
  return (
    <div className={"row " + defaults["center"]}>
      <div className="col-xs-12">
        <div className="panel panel-primary">
          <div className="panel-body">
            <div className={"row center " + defaults["center"]}>
              <div className={"col-xs-4 " + defaults.center}>
                <button type="button" className="btn btn-default" onClick={e => {actions.savePart(part)}}>Mentes</button>
              </div>
              <div className="col-xs-4">
                <button type="button" className="btn btn-default">Torles</button>
              </div>
              <div className="col-xs-4">
                <button type="button" className="btn btn-default" onClick={e => {actions.search(part)}}>Kereses</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {console.log(actions.parts.management.showResults)}
    </div>
  );
}

export default Management;