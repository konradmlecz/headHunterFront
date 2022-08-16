import {NavigateFunction, Location} from "react-router-dom";
import {GlobalState} from '../context/store'

type Props = {
    navigate: NavigateFunction;
    location: Location;
    state: GlobalState;
}

const pathNamesStudent = ['/student']

const pathNamesHr = ['/hr/available', '/hr/interview', '/cv']

const pathNamesAdmin = ['/hr/available', '/hr/interview', '/cv', '/admin']

export class AuthRouter {
    navigate: NavigateFunction;
    location: Location;
    state: GlobalState;

    constructor({navigate, location, state}: Props) {
        this.navigate = navigate
        this.location = location
        this.state = state
    }

    check() {
        switch (this.state.user.role) {
            case 'hr':
                console.log('ok')
                if (!pathNamesHr.includes(this.location.pathname)) {
                    this.toLogin()

                }
                break;
            case 'admin':
                if (!pathNamesAdmin.includes(this.location.pathname)) {
                    this.toLogin()
                }
                break;
            case 'student':
                if (!pathNamesStudent.includes(this.location.pathname)) {
                    this.toLogin()
                }
                break;
            default:
                this.toLogin()
                break;
        }
    }

    toLogin() {
        this.navigate("/", {replace: true})
    }
}
