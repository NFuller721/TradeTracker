import { Button, TextField } from '@material-ui/core'

interface Props {
    formValue: {
        apiKey: string,
        secretKey: string
    },
    formChange: () => void
}

export const Login: React.FC<Props> = ({ formValue, formChange }) => (
    <>
        <TextField value={formValue.apiKey} onChange={() => formChange({apiKey: formValue.apiKey})} label="Api Key" />
        <TextField value={formValue.secretKey} onChange={() => formChange({secretKey: formValue.secretKey})} label="Secret Key" />
        <Button>Login</Button>
    </>
)