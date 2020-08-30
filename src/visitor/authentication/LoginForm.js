import React, { useState } from "react";
import {
    Button,
    InputAdornment,
    Icon,
    TextField,
    makeStyles,
} from "@material-ui/core";
import { useHistory } from "react-router-dom";
import client from "../../server/api";
import httpStatus from "../../util/httpStatus";

const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
    },
    item: {
        width: "100%",
        margin: 8,
    },
}));

function LoginForm(props) {
    const { handleErrorMessage } = props;
    const classes = useStyles();
    const [identifier, setIdentifier] = useState("");
    const [password, setPassword] = useState("");
    const history = useHistory();

    const canSubmit = () => identifier && password;
    const handleLogin = async () => {
        try {
            const response = await client.createSession(identifier, password);
            const user = JSON.stringify(response.data);
            window.localStorage.setItem("user", user);
        } catch (error) {
            const { response } = error;
            if (response && response.status === httpStatus.BAD_REQUEST) {
                handleErrorMessage(response.data.message);
            } else {
                console.log(response);
                history.push("/error/500");
            }
        }
    };

    return (
        <div className={classes.root}>
            <TextField
                className={classes.item}
                type="text"
                name="username"
                label="Email"
                validations={{
                    minLength: 4,
                }}
                validationErrors={{
                    minLength: "Minimum character length is 4.",
                }}
                InputProps={{
                    endAdornment: (
                        <InputAdornment position="end">
                            <Icon className="text-20" color="action">
                                email
                            </Icon>
                        </InputAdornment>
                    ),
                }}
                variant="outlined"
                required={true}
                value={identifier}
                onChange={(event) => setIdentifier(event.target.value)}
            />

            <TextField
                className={classes.item}
                type="password"
                name="password"
                label="Password"
                validations={{
                    minLength: 4,
                }}
                validationErrors={{
                    minLength: "Minimum character length is 4.",
                }}
                InputProps={{
                    endAdornment: (
                        <InputAdornment position="end">
                            <Icon className="text-20" color="action">
                                vpn_key
                            </Icon>
                        </InputAdornment>
                    ),
                }}
                variant="outlined"
                required={true}
                value={password}
                onChange={(event) => setPassword(event.target.value)}
            />

            <Button
                type="submit"
                variant="contained"
                color="secondary"
                className={classes.item}
                disabled={!canSubmit()}
                onClick={handleLogin}
                value="firebase"
            >
                Login
            </Button>
        </div>
    );
}

export default LoginForm;
