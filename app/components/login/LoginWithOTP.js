import InputBox from '@/atoms/InputBox'
import React, { useState } from 'react'
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Button from '@/atoms/Button';
import { signIn } from "next-auth/react"
import { useRouter } from 'next/navigation';
import { sendLoginOtp } from '@/services/auth.service';
import { emailRegex } from '@/services/constants.service';

export default function LoginWithOTP() {
  const router = useRouter();
  const [otpSent, setOtpSent] = useState(false);

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

  async function submitHandler(data) {
    const { email, otp } = data;

    if (otpSent) {
      signIn('otp', { redirect: false, email, otp }).then((res) => {
        if (!res.error && res.ok && res.status == 200) {
          router.push('/home')
        }
      }).catch(err => {
        console.log('err', err)
      })
    } else {
      const res = await sendLoginOtp({ email, nextAuthSecretPass: process.env.NEXT_AUTH_SECRET_PASS });
      if (res.status) {
        setOtpSent(true);
      }
    }
  }

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
        disabled={otpSent}
      />
      {
        otpSent &&
        <InputBox
          id="otp"
          name="otp"
          dbName="otp"
          placeholder="OTP"
          register={register}
          type="otp"
          variant="Default"
          isError={!!errors["otp"]?.message}
          errorMessage={errors["otp"]?.message}
        />
      }
      <Button
        label={`${otpSent ? 'Verify' : 'Login with '} OTP`}
        onClick={handleSubmit(submitHandler)}
      />

    </div>
  )
}
