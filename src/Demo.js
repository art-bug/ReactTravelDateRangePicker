import React, {Component} from 'react';
import {Container, Row, Button} from 'reactstrap';
import {DateRangePicker} from 'react-dates';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import './Demo.css';

class Demo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showDemoComponent: false,
            showDateRangeButton: true,
            startDate: null,
            endDate: null
        };

        this.clickedDateRangeButton = this.clickedDateRangeButton.bind(this);
        this.travelDays = this.travelDays.bind(this);
        this.setDateRangeButton = this.setDateRangeButton.bind(this);
    }

    clickedDateRangeButton() {
        this.setState({
            showDemoComponent: true,
            showDateRangeButton: false
        });
    }

    setDateRangeButton() {
        this.setState({
            showDemoComponent: false,
            showDateRangeButton: true
        });
    }

    travelDays() {
        return this.state.endDate.diff(this.state.startDate, 'days')
    }

    render() {
        return (
            <Container fluid className="d-flex flex-column align-items-center justify-content-around min-vh-100 vh-100 pl-0 pr-0">
                <Row className="w-100 vh-100 justify-content-center" style={{backgroundColor: "lightskyblue"}}>
                    <h2>TravelDateRangePicker component demo</h2>
                </Row>
                <Row className="align-items-center">
                    { this.state.showDemoComponent &&
                        <DateRangePicker
                          startDate={this.state.startDate} // momentPropTypes.momentObj or null,
                          startDatePlaceholderText="Начальная дата"
                          startDateId="start-date" // PropTypes.string.isRequired,
                          endDate={this.state.endDate} // momentPropTypes.momentObj or null,
                          endDateId="end-date" // PropTypes.string.isRequired,
                          endDatePlaceholderText="Конечная дата"
                          onDatesChange={({ startDate, endDate }) => this.setState({ startDate, endDate })} // PropTypes.func.isRequired,
                          focusedInput={this.state.focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
                          onFocusChange={focusedInput => this.setState({ focusedInput })} // PropTypes.func.isRequired,
                          showClearDates={true}
                        />
                    }
                    { this.state.showDateRangeButton &&
                        <Button onClick={this.clickedDateRangeButton}>Выбрать даты...</Button>
                    }
                </Row>
                <Row className="vh-100 align-items-center">
                    { this.state.startDate && this.state.endDate
                        ? <span>Срок путешествия: {this.travelDays()} дней.</span>
                        : <span>Выберите даты начала и конца путешествия.</span>
                    }
                </Row>
            </Container>
        );
    }
}

export default Demo;
