import React from 'react';
import './UserDisplay.scss';

class UsersDisplay extends React.Component {

  componentDidMount() {
    //call ajax script to make api call only when component has mounted
    this.props.fetchProducts();
  }

  render() {

    //capture and display api req errors if any from action
    if (this.props.error !== null) {
      return <div>Error! {this.props.error.message}</div>;
    }

    // Nice to have - spinner or gif loader
    if (this.props.loading === true) {
      return <div>Loading...</div>;
    }

    return (
      <div className="table-users">
        <h1>Simple API App</h1>
        <div className="header">Users</div>
        {/*only execute following code if data props is nt empty/undefined*/}
        {this.props.products.data !== undefined &&
          <table cellSpacing="0">
              <tr>
                <th>PH Icon</th>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th width="230">Comments</th>
              </tr>
              {this.props.products.data.map((data, i) => {
                return (
                  <tr key={i}>
                    <td><img src="http://lorempixel.com/100/100/people/3" alt="" /></td>
                    <td>{data.name}</td>
                    <td>{data.email}</td>
                    <td>{data.phone}</td>
                    <td>{data.company.bs}</td>
                  </tr>
                )
              })}
          </table>
        }
      </div>
    )
  }
}

export default UsersDisplay;
