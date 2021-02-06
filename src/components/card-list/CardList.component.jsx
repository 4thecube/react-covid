import React from 'react'

import Card  from '../card/Card.component';

import './CardList.styles.scss';

const CardList = ({coronaData}) => {
    console.log({coronaData})
    return (
        <div className="card-list">
            {
                coronaData.ukraine.map(region => {
                    return <Card 
                    confirmed={region.confirmed}
                    recovered={region.recovered}
                    existing={region.existing}
                    region={region.label.uk}
                    deaths={region.deaths}
                    />
                })
            }
        </div>
    )
}

export default CardList
