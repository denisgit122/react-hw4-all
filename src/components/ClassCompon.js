
import {Component} from "react";

import {posts, res} from "../Api/axios";
import {Post} from "./Post";

class ClassCompon extends Component{
    constructor(props) {
        super(props);
        this.state={user:[]}
    }

    componentDidMount() {
        this.setState(posts.then(({data})=>this.setState({user:data})))
    }

    render() {
        return(
            <div>
                {console.log(this.state.user)}
                {this.state.user.map(value => <Post key={value.id} value={value}/>)}


            </div>

        )
    }
}

export {ClassCompon}

