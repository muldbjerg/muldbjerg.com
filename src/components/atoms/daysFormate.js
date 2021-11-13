import * as React from "react"
import dayjs from "dayjs";
import calendar from "dayjs/plugin/calendar";


// const DaysFormate = () => {
export default class DaysFormate extends React.Component {

    render() {

        var blogpostDate = dayjs(this.props.date);
        // console.log(this.props);
        let date;
        dayjs.extend(calendar);

        if (blogpostDate.$y == new Date().getFullYear()) {
            date = blogpostDate.calendar(undefined, {
              sameDay: "[From today]",
              nextDay: blogpostDate.format("MMM D, YYYY"),
              nextWeek: blogpostDate.format("MMM D, YYYY"),
              lastDay: "[From yesterday]",
              lastWeek: '[From last] dddd',
              sameElse: blogpostDate.format('MMM D'),
            });
          } else {
            date = blogpostDate.format("MMM D, YYYY");
          }

        return (
            // <div>{this.props}</div>
            <p>{date}</p>
        )
    }
}

// export default DaysFormate
