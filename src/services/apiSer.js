import axios from "axios";

import {base} from "../configs";

const apiSer=axios.create({baseURL:base})

export {apiSer}
