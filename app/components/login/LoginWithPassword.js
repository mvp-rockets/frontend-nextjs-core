import InputBox from '@/atoms/InputBox'
import React from 'react'
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Button from '@/atoms/Button';
import { signIn } from "next-auth/react"
import { useRouter } from 'next/navigation';

export default function LoginWithPassword() {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: 'onChange',
    resolver: yupResolver(
      yup.object({
        username: yup.string().test('error', 'Username should be only characters and upto 10 digits!', (val) => /^[a-zA-Z\s]{1,10}$/.test(val)).required('Username is required!'),
        password: yup.string().required('Password is required!'),
      })
    )
  });

  return (
    <div className='flex flex-col gap-4 my-2'>
      <InputBox
        id="username"
        name="username"
        dbName="username"
        placeholder="Username"
        register={register}
        type="text"
        variant="Default"
        isError={!!errors["username"]?.message}
        errorMessage={errors["username"]?.message}
      />
      <InputBox
        id="password"
        name="password"
        dbName="password"
        placeholder="Password"
        register={register}
        type="password"
        variant="Default"
        isError={!!errors["password"]?.message}
        errorMessage={errors["password"]?.message}
      />
      <Button
        label={"Login with Password"}
        onClick={async () => {
          handleSubmit((d) => {
            const { password, username } = d;
            signIn('credentials', { redirect: false, password, username }).then((res) => {
              if (!res.error && res.ok && res.status == 200) {
                router.push('/home')
              }
            }).catch(err => {
              console.log('err', err)
            })
          })()
        }}
      />

    </div>
  )
}
