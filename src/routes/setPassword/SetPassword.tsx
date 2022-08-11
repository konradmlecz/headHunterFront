import React, {useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router-dom";
import {adress} from "../../constant/setting";

export const SetPassword = () => {
    const params = useParams();
    const navigate = useNavigate();
    const [password , setPassword] = useState<string>('')
    const [confirmPassword , setConfirmPassword] = useState<string>('')
    const [check, setCheck] = useState({
        isSuccess: false,
        message: '',
    })

    useEffect(() => {
        (async () => {
            const resCheck = await fetch(`${adress}/user/check/${params.id}/${params.token}`)
            const dataCheck = await resCheck.json()
            await setCheck(dataCheck)
        })()
    }, [])

    const handleSubmit = async (e: any) => {
        await e.preventDefault()
        const resPassword = await fetch(`${adress}/user/setpassword`,{
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                id: params.id,
                token: params.token,
                pwd: password,
            })
        })
        const dataPassword = await resPassword.json();
        if (dataPassword.isSuccess === true){
            navigate("/login", { replace: true })
        }
        else {
            return (
                <h1 style={{
                    paddingTop: "100px"
                }}>
                    {dataPassword.message}
                </h1>
            )
        }
    }

    if (check.isSuccess === false) {
        return (
            <h1 style={{
                paddingTop: "100px"
            }}>
                {check.message}
            </h1>
        )
    }

    return (
        <div style={{
            display: "flex",
            justifyContent: "center",
            width: "100vw",
            height: "100vh",
        }}>
            <form style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",

            }} onSubmit={handleSubmit}>
                <label>Wprowadź hasło:</label>
                <input
                    style={{
                        color:"black"
                    }}
                    type="password"
                    required={true}
                    onChange={e=> setPassword(e.target.value)}
                />
                <label>Potwierdź hasło:</label>
                <input
                    style={{
                        color:"black"
                    }}
                    type="password"
                    required={true}
                    onChange={e=>setConfirmPassword(e.target.value)}
                />
                <button className="btn settingsSubmit" type="submit">Zapisz</button>
            </form>
        </div>
    )
}
