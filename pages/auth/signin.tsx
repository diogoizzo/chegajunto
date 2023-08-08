import { signIn } from 'next-auth/react';
import Link from 'next/link';
import router from 'next/router';
import { FormEvent, useState } from 'react';

interface Form {
   email: string;
   password: string;
}

export default function SignIn() {
   const [form, setForm] = useState<Form>({
      email: '',
      password: ''
   });

   async function handleSubmit(e: any) {
      e.preventDefault();
      e.stopPropagation();
      const { email, password } = form;
      const restul = await signIn('credentials', {
         email,
         password,
         callbackUrl: '/',
         redirect: true
      });
   }

   return (
      <main className="h-[100vh] flex justify-center items-center bg-[url('/img/fundo.svg')] bg-raisin-black-light relative overflow-hidden">
         <div className="container px-4 mx-auto relative">
            <div className="py-12 px-6 md:p-16 border border-raisin-black-lighter shadow-xl shadow-black/30 bg-raisin-black rounded-2xl max-w-2xl mx-auto">
               <div className="text-center mb-8">
                  <h2 className="text-3xl md:text-4xl font-extrabold mb-2 text-cool-gray-200">
                     Entrar
                  </h2>
                  <p className="text-lg font-extrabold leading-7 text-cool-gray-900">
                     Preencha as informações abaixo para entrar na sua conta.
                  </p>
               </div>
               <form onSubmit={handleSubmit}>
                  <div className="mb-6">
                     <label className="block mb-2 font-extrabold text-cool-gray-500">
                        Email
                     </label>
                     <input
                        className="block text-md placeholder:text-gray-700 py-4 px-3 w-full text-sm text-cool-gray-200 placeholder-cool-gray-200 font-medium outline-none bg-transparent border border-raisin-black-lighter hover:border-cool-gray-900 focus-within:border-carolina-blue rounded-lg"
                        type="email"
                        placeholder="seuemail@gmail.com"
                        value={form.email}
                        onChange={(e) =>
                           setForm({ ...form, email: e.target.value })
                        }
                     />
                  </div>
                  <div className="mb-6">
                     <label
                        className="block mb-2 font-extrabold text-cool-gray-500"
                        htmlFor=""
                     >
                        Senha
                     </label>
                     <input
                        className="block text-md placeholder:text-gray-700 py-4 px-3 w-full text-sm text-cool-gray-200 placeholder-cool-gray-200 font-medium outline-none bg-transparent border border-raisin-black-lighter hover:border-cool-gray-900 focus-within:border-carolina-blue rounded-lg"
                        type="password"
                        placeholder="**********"
                        value={form.password}
                        onChange={(e) =>
                           setForm({ ...form, password: e.target.value })
                        }
                     />
                  </div>
                  <button className="inline-flex py-2 px-10 w-full  items-center justify-center shadow-sm shadow-black/40 border-2 border-yinmn-blue-900 text-lg font-bold text-cool-gray-200 bg-yinmn-blue-500 hover:bg-yinmn-blue-200 transition duration-200 rounded-lg">
                     Entrar
                  </button>
               </form>
            </div>
         </div>
      </main>
   );
}
