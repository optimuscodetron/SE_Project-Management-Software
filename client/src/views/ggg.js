import { GoogleLogin } from 'react-google-login';
const clientid = "495965121219-65gvv679mrctt1ksda4048jtmu4r1to4.apps.googleusercontent.com";
function login() {
    const onSuccess = (res) => {
        console.log("Login Success! Current User: ", res.profileObj);
    }
    const onFailure = (res) => {
        console.log("login Failed res: ", res);
    }
    return (
        <div id="siginbutton">
            <GoogleLogin
                clientId={clientid}
                buttonText='Login with Google'
                onSuccess={onSuccess}
                onFailure={onFailure}
                cookiePolicy={'single_host_origin'}
                isSignedIn={true}
            />
        </div>

    )
}