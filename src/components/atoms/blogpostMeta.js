import * as React from "react"
import DaysFormate from "./daysFormate";

import "../../css/atoms/blogpostMeta.css"

// const DaysFormate = () => {
export default class BlogpostMeta extends React.Component {

    render() {

        return (
            <div className="blogpost-meta">
                <p><DaysFormate date={this.props.date} /></p>
                <p className="line"></p>
                <p>{this.props.timeToRead} min read</p>
            </div>
        )
    }
}
