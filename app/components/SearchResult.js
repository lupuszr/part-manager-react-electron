import React from 'react'
import styles from './SearchResult.module.css'

const SearchResult = ({results,showResults, ...actions}) => {
  console.log("result is:",results)
  if (showResults){
    return (
      <div className={styles['container']} >
        <div className="container">
          <div className={"row " + styles['panel']}>
            <div className="col-xs-12">
              <div className={styles['closeBtn']} onClick={ e => {actions.closeSearchPanel()}}>
                <span className="glyphicon glyphicon-remove"></span>
              </div>
              <table className="table table-hover">
                <thead>
                  <tr>
                    <th>Manufacturer</th>
                    <th>Part Type</th>   
                    <th>Power</th>
                  </tr>
                </thead>
                <tbody>
                {
                  results.map((result,i) => {
                    return(
                      <tr key={i} onClick={e => {actions.showPart(i)}}>
                        <td>{result.manufacturer}</td>
                        <td>{result.parttype}</td>    
                        <td>{result.power}</td>
                      </tr>
                    )
                  })
                }      
                </tbody>   
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }else{
    return (<div></div>)
  }
}

export default SearchResult;