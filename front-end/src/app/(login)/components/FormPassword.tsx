'use client';

import React, { Dispatch, SetStateAction, useState } from 'react';
import { useForm } from 'react-hook-form';

import Swal from 'sweetalert2';

type FormData = {
  email: string;
};

type DataProps = {
  setTab: Dispatch<SetStateAction<'LOGIN' | 'PASSWORD'>>;
};

export type Response = {
  return: string;
  message: string;
};

export default function FormPassword({ setTab }: DataProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();


  async function onSubmit(data:any) {
    Swal.fire({
      icon: 'info',
      title: `Link Enviado!`,
      text: `Função para redefinir a senha`,
      showConfirmButton: true,
      confirmButtonText: 'OK',
      confirmButtonColor: 'blue',
    }).then((result) => {
      if (result.isConfirmed) {
        setTab('LOGIN');
      }
    });
  }

  return (
    <form className="w-full max-w-sm mt-4  bg-white p-6 rounded" onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-6">
        <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900">
          Email
        </label>

        <input
          {...register('email', {
            required: 'Email obrigatório',
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
              message: 'Email inválido',
            },
          })}
          type="text"
          className="mt-1 appearance-none text-slate-900 bg-white rounded-md block w-full px-3 h-10 focus:outline-none placeholder:text-slate-400  ring-1 ring-slate-400"
          placeholder="Digite seu email"
        />
        {errors?.email && <p className="font-semibold text-red-700 text-xs mt-1">{errors.email.message}</p>}
      </div>

      <button
        type="submit"
        className="inline-flex  justify-center rounded-lg text-sm font-semibold py-2.5 px-4 bg-slate-800 text-white hover:bg-slate-700 w-full">
       
        ENVIAR
      </button>

      <button type="button" onClick={() => setTab('LOGIN')} className="underline text-sm">
        Voltar
      </button>

    </form>
  );
}
