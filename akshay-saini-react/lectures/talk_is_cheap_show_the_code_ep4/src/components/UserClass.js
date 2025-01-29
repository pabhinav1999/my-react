import React from "react";

class UserClass extends React.Component {

    constructor(props) {
        super(props);
        console.log( this.props.name + 'constructor of child is called')

        this.state = {
            userInfo: {
                name : 'Dummy name',
                id: 123,
                avatar_url: ''
            }
        }

        // this.state = {
        //     count1: 0,
        //     count2: 1
        // }
    }

    async componentDidMount() {
        console.log(this.props.name + 'component mount of child is called')

        // apis are called in component Did Mount func
        const API_URL = 'https://api.github.com/users/pabhinav1999'
        const resp =  await fetch(API_URL)
        const json = await resp.json()

        this.setState({userInfo: json})
        console.log(json)

    }

    componentDidUpdate() {
        console.log('component updated called')
    }

    componentWillUnmount() {
        console.log('Component Unmounted');
    }

    render() {
        console.log(this.props, 'from Class')
        console.log(this.props.name + 'render of child is called')

        const { name, id, avatar_url } = this.state.userInfo
        // const { count1, count2 } = this.state
        return (
            <div className="userContainer">
                 {/* <button onClick={() => {
                    this.setState( {
                        count1 : this.state.count1 + 1
                    })
                 }}> Increase Count</button> */}
                 {/* <h1> Count1: {count1} </h1> */}
                 {/* <h1> Count2: {count2} </h1> */}
                 <img src={avatar_url}></img>
                 <h3> { name }</h3>
                 <h4> { id } </h4>
                 <h5> Chef</h5>
            </div>
        )
    }
}

export default UserClass