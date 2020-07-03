import React from 'react'

const Main = ({ listOfTasks }) => {

    return (
        <main className="main">
            <div className="wrap">
                {listOfTasks.length ?
                  listOfTasks.map(task => (
                    <div key={task._id} className="item-row">
                        <div className="check-flag">
                            <span className="small-text-label">Title</span>
                            <span className="small-text-label hours">Hours</span>
                            <span className="check-flag-label">{task.title}</span>
                            <span className="hours-box">{task.hours}</span>
                      </div>
                    </div>
                    ))
                 :
                   null
                }
                <div className="total align-right">
                    <label className="total-label">Total:</label>
                    <input className="total-input" type="text" value="" readOnly />
                </div>

            </div>
        </main>
    )
}

export default Main