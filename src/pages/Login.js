import useFetch from "../components/useFetch";
import { useHistory } from 'react-router-dom';

const Login = ({ stateHandler }) => {
    const { data, isLoading, error } = useFetch('http://159.89.224.58/users?username=dickie');
    const history = useHistory();
    const logMe = () => {
        stateHandler({ ...data[0], loggedIn: true, password: "" });
        history.push("/");
    }
    return (
        <div className="home">
            { isLoading && <div> Loading...</div> }
            { error && <div>{ error }</div>}
            { data && <button onClick={ logMe }>Log</button> }
        </div>
    );
}
 
export default Login;