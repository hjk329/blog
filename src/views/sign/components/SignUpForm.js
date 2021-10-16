import React from 'react';
import styled from 'styled-components';
import {useForm} from "react-hook-form";
import {isEmail, isPassword} from "../../../lib/validation";
import SignMessage from "./SignMessage";

const SignUpForm = ({signUp}) => {

  const {register, handleSubmit, watch, formState: {errors}} = useForm();

  const onSubmit = (data) => signUp(data)

  return (
    <Container>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormGroup>
          <Label htmlFor="email">이메일</Label>
          <Input {...register('email', {
            required: true,
            validate: {
              isEmail : (v) => isEmail(v)
            }})}
          />
          <SignMessage type={errors.email?.type}/>
        </FormGroup>

        <FormGroup>
          <Label htmlFor="password">비밀번호</Label>
          <Input {...register('password', {
            required: true,
            validate: {
              isPassword: (v) => isPassword(v)
            }
          })} />
          <SignMessage type={errors.password?.type}/>
        </FormGroup>

        <FormGroup>
          <Label htmlFor="confirmPassword">비밀번호 다시 입력</Label>
          <Input {...register('confirmPassword', {
            required: true,
            validate: {
              confirm: (v) => v === watch('password')
            }
          })} />
          <SignMessage type={errors.confirmPassword?.type}/>
        </FormGroup>

        <ButtonLogin>회원 가입</ButtonLogin>
      </form>
    </Container>
  )
}

const Container = styled.div`
  max-width: 400px;
  margin: 88px auto;
`;

const FormGroup = styled.div`
  margin-bottom: 30px;
`;

const Label = styled.label`
  display: block;
  font-size: 16px;
  color: #555;
  margin-bottom: 18px;
`;

const Input = styled.input`
  display: block;
  height: 40px;
  border: 1px solid #ddd;
  border-radius: 3px;
  width: 100%;
  padding: 8px;
  background: transparent;
  outline: 0;
`;

const ButtonLogin = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 40px;
  background: rgb(137, 119, 173);
  color: #fff;
  font-size: 14px;
  border-radius: 3px;
  outline: 0;
  border: 0;
  cursor: pointer;
`;

export default SignUpForm;
