import { Formik, Form, Field, ErrorMessage } from "formik";
import { Container, Tittle, LoginForm, FormField, FormError, Button, Info } from "./styles";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";

export const Cadastro = () => {

    const navigate = useNavigate();
    const handleClickCadastro = (values) => {
        navigate('/login')
    };

    const validationCadastro = yup.object().shape({
        name: yup.string().min(4, 'Deve conter no mínimo 4 letras').required('Campo obrigatório'),
        email: yup.string().email('Não é um email válido').required('Campo obrigatório'),
        password: yup.string().min(6, 'No mínimo 6 caracteres').required('Campo obrigatório'),
        confirmPassword: yup.string().oneOf([yup.ref("password"), null], 'Senha incorreta').required('Confirme sua senha'),
    });

    return(
        <Container>
            <Tittle>Criar Conta</Tittle>
            <Formik initialValues={{}} onSubmit={handleClickCadastro} validationSchema={validationCadastro} >
                <LoginForm>
                <Form>
                    <FormField>
                        <Field name="name" placeholder="Nome"/>
                        <FormError>
                        <ErrorMessage component="span" name="name"/>
                        </FormError>
                    </FormField>
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
                    <FormField>
                        <Field name="confirmPassword" placeholder="Confirmar senha" type="password"/>
                        <FormError>
                        <ErrorMessage component="span" name="confirmPassword"/>
                        </FormError>
                    </FormField>
                    <Button type="submit" onClick={handleClickCadastro}>Cadastrar</Button>
                </Form>
                </LoginForm>
            </Formik>
            <Info>Já tem cadastro? <a href="/login">Faça login</a></Info>
        </Container>
    )
};