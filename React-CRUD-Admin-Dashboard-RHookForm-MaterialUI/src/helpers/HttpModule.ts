import axios from "axios";
import { baseUrl } from "../constants/URLConstants";

const httpModule = axios.create({
   baseURL: baseUrl,
});

export default httpModule;