import { useDispatch } from "react-redux";
import { checkToken } from "../store/reducers/auth";

const Dashboard = () => {
    const dispatch = useDispatch();
    dispatch(checkToken())
    return <main>
        Dashboard
    </main>
}

export default Dashboard