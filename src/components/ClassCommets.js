import {Component} from "react";
import {comment} from "../Api/axios";
import {render} from "@testing-library/react";
import {Coment} from "./Coment";

class ClassCommets extends Component{
    constructor(props) {
        super(props);
        this.state={comments:[]}
    }
    componentDidMount() {
        comment.then(({data})=>this.setState({comments:data}))
    }
    render() {
        return(
            <div>{console.log(this.state.comments)}
                {this.state.comments.map(value=><Coment key={value.id} value={value}/>)}
            </div>
        )
    }
}



export {ClassCommets};