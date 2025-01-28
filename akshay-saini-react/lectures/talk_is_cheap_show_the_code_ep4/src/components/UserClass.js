import React from "react";

class UserClass extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            count1: 0,
            count2: 1
        }
    }

    render() {
        console.log(this.props, 'from Class')
        const { name, location } = this.props
        const { count1, count2 } = this.state
        return (
            <div className="userContainer">
                 <button onClick={() => {
                    this.setState( {
                        count1 : this.state.count1 + 1
                    })
                 }}> Increase Count</button>
                 <h1> Count1: {count1} </h1>
                 {/* <h1> Count2: {count2} </h1> */}
                 <h3> { name }</h3>
                 <h4> { location } </h4>
                 <h5> Chef</h5>
            </div>
        )
    }
}

export default UserClass