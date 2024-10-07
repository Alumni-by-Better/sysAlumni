'use client';

import * as React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

import { useForm } from 'react-hook-form';
import { useState, } from 'react';

import FormPassword from './FormPassword';
import Swal from 'sweetalert2';

type FormData = {
  username: string;
  password: string;
};

export default function FormLogin() {
  const [tab, setTab] = useState<'LOGIN' | 'PASSWORD'>('LOGIN');

  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  async function onSubmit(data: FormData) {


    if(data.username=='TeacherAlumni' && data.password=='123'){
      router.push('/teacher')
    }else{
      Swal.fire({
        icon: 'error',
        title: `Erro!`,
        text: `Usuário e/ou senha inválidos.`,
        showConfirmButton: true,
        confirmButtonText: 'OK',
        confirmButtonColor: 'navy',
      })
    }
    
  }


  return (
    <div className="relative flex flex-1 flex-col items-center justify-center ">
      <Image src="/images/logos.png" alt="Logotipo" width={112} height={64} style={{ width: 'auto', height: 'auto' }} priority={true} />

      <h1 className="mt-8 text-2xl font-black sm:text-3xl">
        {tab === 'LOGIN' && 'Painel do professor'}
        {tab === 'PASSWORD' && 'Redefinição de Senha'}
      </h1>

      {tab === 'LOGIN' && (
        <form  className="w-full max-w-sm mt-4  bg-white p-6 rounded" onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-6">
            <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900">
              Usuário
            </label>

            <input
              {...register('username', {
                required: 'Usuário é Obrigatório',
              })}
              type="text"
              className="mt-1text-slate-900 bg-white rounded-md block w-full px-3 h-10 focus:outline-none placeholder:text-slate-400  ring-1 ring-slate-400"
              placeholder="Digite seu usuário"
            />
            {errors?.username && <p className="font-semibold text-red-700 text-xs mt-1">{errors.username.message}</p>}
          </div>

          <div className="mb-6">
            <label htmlFor="password" className="block text-sm font-semibold leading-6 text-gray-900">
              Senha
            </label>

            <input
              {...register('password', {
                required: 'Senha obrigatória',
              })}
              type="password"
              className="mt-1 text-slate-900 bg-white rounded-md block w-full px-3 h-10 focus:outline-none placeholder:text-slate-400 ring-1 ring-slate-400"
              placeholder="Digite sua senha"
            />

            {errors?.password && <p className="font-semibold text-red-700 text-xs mt-1">{errors.password.message}</p>}
          </div>

       

          <button type="submit" disabled={isLoading} className="inline-flex justify-center rounded-lg text-sm font-semibold py-2.5 px-4 bg-slate-800 text-white hover:bg-slate-700 disabled:bg-slate-700 w-full">
            {isLoading && (
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
            )}
            ENTRAR
          </button>

          <button type="button" onClick={() => setTab('PASSWORD')} className="underline text-sm">
            Esqueci a senha
          </button>

        
        </form>
      )}

      {tab === 'PASSWORD' && <FormPassword setTab={setTab} />}
    </div>
  );
}
