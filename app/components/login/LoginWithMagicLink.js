import InputBox from '@/atoms/InputBox'
import React from 'react'
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Button from '@/atoms/Button';
import { signIn } from "next-auth/react"
import { emailRegex } from '@/services/constants.service';

export default function LoginWithMagicLink() {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: 'onChange',
    resolver: yupResolver(
      yup.object({
        email: yup.string().email('Please enter valid email!').test('error', 'Please enter valid email!', (val) => emailRegex.test(val)).required('Email is required!'),
      })
    )
  });

  return (
    <div className='flex flex-col gap-4 my-2'>
      <InputBox
        id="email"
        name="email"
        dbName="email"
        placeholder="Email"
        register={register}
        type="text"
        variant="Default"
        isError={!!errors["email"]?.message}
        errorMessage={errors["email"]?.message}
      />

      <Button
        label={"Login with Magic link"}
        onClick={async () => {
          handleSubmit((d) => {
            const { email } = d;
            signIn('email', { email, callbackUrl: '/home' });
          })()
        }}
      />

    </div>
  )
}
