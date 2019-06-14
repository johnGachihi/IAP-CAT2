import React from "react";
import DatePicker from "react-datepicker/es";
import './css/datepicker-container.css'

export default class MyDatePicker extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            selectedDate: null
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(date) {
        this.setState({
            selectedDate: date
        });
        console.log(date);
    }

    render() {
        return (
            <div className={"customDatePickerWidth"}>
                <DatePicker
                    placeholderText={this.props.placeholder}
                    className={"form-control"}
                    selected={this.state.selectedDate}
                    onChange={this.handleChange}
                />
            </div>
        );
    }
}