import List from './List';
import { connect } from 'react-redux';
import {createActionAddColumn, getColumnsForList } from '../../redux/columnRedux';

const mapStateToProps = (state, props) => ({
  columns: getColumnsForList(state, props.id),
});

const mapDispatchToProps = (dispatch, props) => ({
  addColumn: title => dispatch(createActionAddColumn)({
    listId: props.id,
    title,
  }),
});

export default connect(mapStateToProps, mapDispatchToProps)(List);