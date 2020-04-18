import React from 'react';
import cx from 'classnames';
import styles from './Card.module.css';
import CountUp from 'react-countup';

const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {

    if (!confirmed) {

        return 'Loading'
    }
    return (
        <div className="card-deck col-lg-11 mx-auto">
            <div className="card">
                <div className={styles.infected}>
                    <div className="card-header font-weight-bold">Infected</div>
                    <div className="card-body text-secondary">
                        <h5 className="card-title font-weight-bold"> <CountUp start={0} end={confirmed.value} duration={2.5} separator="," /></h5>
                        <p className="card-text">{new Date(lastUpdate).toDateString()}</p>
                        <p className="card-text">Number of active cases of COVID-19.</p>
                    </div>

                </div>

            </div>
            <div className="card">
                <div className={styles.recovered}>
                    <div className="card-header font-weight-bold">Recovered</div>
                    <div className="card-body text-secondary">
                        <h5 className="card-title font-weight-bold"> <CountUp start={0} end={recovered.value} duration={2.5} separator="," /></h5>
                        <p className="card-text">{new Date(lastUpdate).toDateString()}</p>
                        <p className="card-text">Number of recoveries from COVID-19.</p>
                    </div>
                </div>
            </div>
            <div className="card">
                <div className={styles.deaths}>
                    <div className="card-header font-weight-bold">Deaths</div>
                    <div className="card-body text-secondary">
                        <h5 className="card-title font-weight-bold"> <CountUp start={0} end={deaths.value} duration={2.5} separator="," /></h5>
                        <p className="card-text">{new Date(lastUpdate).toDateString()}</p>
                        <p className="card-text">Number of deaths caused by COVID-19.</p>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Cards