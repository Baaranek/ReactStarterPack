import React from 'react';
import styles from './Column.scss';
import PropTypes from 'prop-types';
import Card from '../Card/Card';
//import Creator from '../Creator/Creator';
import Icon from '../Icon/Icon';
import { settings } from '../../data/dataStore';

class Column extends React.Component{

    static propTypes = {
      title: PropTypes.node,
      cards: PropTypes.array,
      icon: PropTypes.string,
    }

    static defaultProps = {
      icon: settings.defaultColumnIcon,
    }
    
    render() {
      const { icon, cards, title} = this.props;
      return(
        <section className={styles.component}>
          <h3 className={styles.title}>
          	<span className={styles.icon}>
              <Icon name={icon}/>
              {title}
            </span>
          </h3>
          <div>
            {cards.map(cardData => (
              <Card key={cardData.id} {...cardData} />
            ))}
          </div>
          {/*
          <div className={styles.creator}>
            <Creator text={settings.carCreatorText} action={this.addCard.bind(this)} />
          </div>
          */}
        </section>
      );
    }
}

export default Column;