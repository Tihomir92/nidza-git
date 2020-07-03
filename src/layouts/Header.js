import React from 'react'
import logo from '../images/vegait-logo.svg'
import calendarIcon from '../images/icon-calendar.svg'
import plusIcon from '../images/icon-plus.svg'

const Header = ({takeValues, state, newTask}) => {

    return (
        <header className="header">
            {/* modal */}
            <div className="modal fade" id="myModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalCenterTitle">Create the task</h5>
                        </div>
                        <div className="modal-body">
                            <label htmlFor="title">Title:</label><br />
                            <input onChange={takeValues} className="inputs" name="title" value={state.title} type="text" placeholder="Enter title here..." />
                            <label htmlFor="hours">Hours:</label><br />
                            <input onChange={takeValues} className="inputs" name="hours" value={state.hours} type="number" placeholder="Add hours here..." />
                        </div>
                        <div className="modal-footer">
                           {state.title && state.hours ?
                             <button onClick={newTask} type="button" data-dismiss="modal" className="btn btnCreate">Create</button>
                           :
                             <button type="button" className="btn disabledBtn">Create</button>
                           }
                        </div>
                    </div>
                </div>
            </div>
            {/* /modal */}
            <div className="wrap">
                <span className="btn-icon">
                    <img data-toggle="modal" data-target="#myModal" className="icon icon-plus js-modal-init" src={plusIcon} alt="Add New Item" />
                </span>
                <div className="header-blockquote">
                    <h1 className="header-quote">Happiness is good health and a bad memory</h1>
                    <div className="header-cite">- Ingrid Bergman</div>
                </div>
            </div>
            <div className="header-inner">
                <div className="wrap">
                    <img className="logo" src={logo} alt="VegaIT" />
                    <div className="date-wrap">
                        <img className="icon" src={calendarIcon} alt="Calendar" />
                        <time>02 / 08 / 2019</time>
                    </div>
                </div>
            </div>
        </header>

    )
}

export default Header