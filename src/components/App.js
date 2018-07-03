import React, { Component } from "react";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addReminder, deleteReminder, clearReminders } from '../actions';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      text: ""
    };
  }

  addReminder() {
    this.props.addReminder(this.state.text)
  }

  deleteReminder(id) {
    this.props.deleteReminder(id)
  }

  clearReminders() {
    this.props.clearReminders()
  }

  renderReminders() {
    const { reminders } = this.props
    return (
      <ul className='list-group col-sm-8 mt-2'>
        {
          reminders.map(reminder => {
            return (
              <li key={reminder.id} className='list-group-item'>
                <div className='list-item'>
                  <div>{reminder.text}</div>
                  <div><em>time</em></div>
                </div>
                <div className="list-item delete-button" onClick={() => this.deleteReminder(reminder.id)} >&#x2715;</div>
              </li>
            )
          })
        }
      </ul>
    )
  }

  render() {
    return (
      <div className="App">
        <div className="title">Reminder Pro</div>
        <div className="form-inline">
          <div className="form-group mr-2">
            <input
              type="text"
              className="form-control"
              placeholder="I have to ..."
              onChange={event => this.setState({ text: event.target.value })}
            />
          </div>
          <button
            type="button"
            className="btn btn-success"
            onClick={() => this.addReminder()}
          >
            Add Reminder
          </button>
        </div>
        {this.renderReminders()}
        <div className="btn btn-danger mt-3" onClick={() => this.clearReminders()}>
          Clear Reminders
        </div>
      </div>
    );
  }
}

App.propTypes = {
  reminders: PropTypes.array.isRequired,
  addReminder: PropTypes.func.isRequired,
  deleteReminder: PropTypes.func.isRequired,
  clearReminders: PropTypes.func.isRequired
}

const mapStateToProps = (state) => {
  return {
    reminders: state
  }
}


export default connect(mapStateToProps, { addReminder, deleteReminder, clearReminders })(App);
