/* @flow */

import { connect } from 'react-redux';
import UsersDisplay from './UsersDisplay.component';
import { fetchUsers } from "../../redux/usersDisplay/actions";

const mapStateToProps = (state) => {
  return {
    products: state.usersDisplay.items,
    loading: state.usersDisplay.loading,
    error: state.usersDisplay.error
  };
};

const mapDispatchToProps = dispatch => ({
  fetchProducts: () => dispatch(fetchUsers()),
});

export default connect(mapStateToProps, mapDispatchToProps)(UsersDisplay);
