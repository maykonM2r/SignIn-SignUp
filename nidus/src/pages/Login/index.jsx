import { Formik, Form, Field, ErrorMessage } from "formik";
import { Container, Tittle, LoginForm, FormField, FormError, Button, Info } from "./styles";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";

export const Login = () => {

    const navigate = useNavigate();
    const handleClickLogin = (values) => {
        navigate('/')
    };

    const validationLogin = yup.object().shape({
        email: yup.string().email('Não é um email válido').required('É necessário informar um e-mail.'),
        password: yup.string().min(6, 'No mínimo 6 caracteres').required('É necessário informar uma senha'),
    });


    return(
        <Container>
            <Tittle>Login</Tittle>
            <Formik initialValues={{}} onSubmit={handleClickLogin} validationSchema={validationLogin} >
                <LoginForm>
                <Form>
                    <FormField>
                        <Field name="email" placeholder="Email"/>
                        <FormError>
                        <ErrorMessage component="span" name="email"/>
                        </FormError>
                    </FormField>
                    <FormField>
                        <Field name="password" placeholder="Senha" type="password"/>
                        <FormError>
                        <ErrorMessage component="span" name="password"/>
                        </FormError>
                    </FormField>
                    <Button type="submit" onClick={handleClickLogin}>Entrar</Button>
                </Form>
                </LoginForm>
            </Formik>
            <Info>Não tem cadastro? <a href="/cadastro">Cadastre-se</a></Info>
        </Container>
    )
};
