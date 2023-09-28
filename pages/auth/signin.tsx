import { signIn } from 'next-auth/react';
import { useRouter } from 'next/router';
import { useRef, useState } from 'react';
import useErrorToast from '../../hooks/useErrorToast';

interface Form {
   email: string;
   password: string;
}

export default function SignIn() {
   const [form, setForm] = useState<Form>({
      email: '',
      password: ''
   });

   const router = useRouter();

   const error = useRef<HTMLDivElement>(null);

   async function handleSubmit(e: any) {
      e.preventDefault();
      e.stopPropagation();
      const { email, password } = form;
      const result = await signIn('credentials', {
         email,
         password,
         redirect: false
      });
      if (result?.ok) {
         router.push('/');
      } else {
         error.current?.classList.remove('hidden');
      }
      console.log(result);
   }

   return (
      <main className="h-[100vh] flex justify-center items-center bg-[url('/img/fundo.svg')] bg-raisin-black-light relative overflow-hidden">
         <div className="container px-4 mx-auto relative">
            <div
               ref={error}
               className="text-xl  p-4 text-white text-center bg-red-300 border border-red-200 hidden rounded-lg mb-3 max-w-2xl mx-auto"
            >
               <div className="flex items-start ">
                  <svg
                     className="h-8 text-red-950 mr-3"
                     xmlns="http://www.w3.org/2000/svg"
                     viewBox="0 0 24 24"
                     id="exclamation-triangle"
                  >
                     <path
                        fill="currentcolor"
                        d="M12,16a1,1,0,1,0,1,1A1,1,0,0,0,12,16Zm10.67,1.47-8.05-14a3,3,0,0,0-5.24,0l-8,14A3,3,0,0,0,3.94,22H20.06a3,3,0,0,0,2.61-4.53Zm-1.73,2a1,1,0,0,1-.88.51H3.94a1,1,0,0,1-.88-.51,1,1,0,0,1,0-1l8-14a1,1,0,0,1,1.78,0l8.05,14A1,1,0,0,1,20.94,19.49ZM12,8a1,1,0,0,0-1,1v4a1,1,0,0,0,2,0V9A1,1,0,0,0,12,8Z"
                     ></path>
                  </svg>
                  <div className="text-left">
                     <h2 className="text-red-950 text-xl font-semibold">
                        Credenciais Inválidas
                     </h2>
                     <p className="text-left text-base text-red-900">
                        Não foi possível efetuar o login no sistema, email ou
                        senha inválidos.
                     </p>
                  </div>
               </div>
            </div>
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
