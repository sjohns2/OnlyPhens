import Form from "../components/Form"

function Login() {
    return (
        <div className="flex basis-1/2 items-center justify-center">
            <Form route="/api/token/" method="login" />
        </div>
    );
}

export default Login