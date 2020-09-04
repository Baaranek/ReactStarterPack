import React from 'react';
import styles from './List.scss';
import Hero from '../Hero/Hero.js';
import PropTypes from 'prop-types';
import Column from '../Column/Column.js';
import {settings} from '../../data/dataStore.js';
import Creator from '../Creator/Creator';

class List extends React.Component{

    static propTypes = {
        title: PropTypes.node.isRequired,
        image: PropTypes.string,
        description: PropTypes.node,
        columns: PropTypes.array,
    }

    static defaultProps= { 
        description: settings.defaultListDescription,
    }

    state = {
        columns: this.props.columns || [],
    }

    addColumn(title){
        this.setState(state => (
        {
            columns: [
                ...state.columns,
                {
                    key: state.columns.length ? state.columns[state.columns.length-1].key+1 :0,
                    title,
                    icon: 'list-alt',
                    cards: []
                }
            ]
        }
        ));
    }
       
    render(){
        return(
            <section className={styles.component}>
                <Hero titleText={this.props.title} image={this.props.image}/>
                <div className={styles.description}>
                    {this.props.description}
                </div>
                <div className={styles.columns}>
                    {this.state.columns.map(({key, ...columnProps}) => (
                        <Column key={key} {...columnProps} />
                    ))}
                </div>
                <div className={styles.creator}>
                    <Creator text={settings.columnCreatorText} action={this.addColumn.bind(this)} />
                </div>
            </section>
        )
    }
}

export default List