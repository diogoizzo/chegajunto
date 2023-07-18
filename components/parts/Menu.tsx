import Link from 'next/link';
import { useRouter } from 'next/router';
import { Tooltip } from 'react-tooltip';

export default function Menu({ children }: any) {
   const router = useRouter();
   return (
      <>
         <nav className="lg:hidden flex items-center justify-between p-8 bg-gray-700">
            <div className="w-full xl:w-auto px-2 xl:mr-12">
               <div className="flex items-center justify-between">
                  <Link
                     passHref
                     className="inline-flex items-center h-8 dashboardMobile"
                     href="#"
                  >
                     <img src="/trizzle-assets/logos/trizzle-logo.svg" alt="" />
                  </Link>
                  <div className="xl:hidden">
                     <button className="navbar-burger text-gray-400 hover:text-gray-300 focus:outline-none">
                        <svg
                           width="20"
                           height="12"
                           viewBox="0 0 20 12"
                           fill="none"
                           xmlns="http://www.w3.org/2000/svg"
                        >
                           <title>Mobile menu</title>
                           <path
                              d="M1 2H19C19.2652 2 19.5196 1.89464 19.7071 1.70711C19.8946 1.51957 20 1.26522 20 1C20 0.734784 19.8946 0.48043 19.7071 0.292893C19.5196 0.105357 19.2652 0 19 0H1C0.734784 0 0.48043 0.105357 0.292893 0.292893C0.105357 0.48043 0 0.734784 0 1C0 1.26522 0.105357 1.51957 0.292893 1.70711C0.48043 1.89464 0.734784 2 1 2ZM19 10H1C0.734784 10 0.48043 10.1054 0.292893 10.2929C0.105357 10.4804 0 10.7348 0 11C0 11.2652 0.105357 11.5196 0.292893 11.7071C0.48043 11.8946 0.734784 12 1 12H19C19.2652 12 19.5196 11.8946 19.7071 11.7071C19.8946 11.5196 20 11.2652 20 11C20 10.7348 19.8946 10.4804 19.7071 10.2929C19.5196 10.1054 19.2652 10 19 10ZM19 5H1C0.734784 5 0.48043 5.10536 0.292893 5.29289C0.105357 5.48043 0 5.73478 0 6C0 6.26522 0.105357 6.51957 0.292893 6.70711C0.48043 6.89464 0.734784 7 1 7H19C19.2652 7 19.5196 6.89464 19.7071 6.70711C19.8946 6.51957 20 6.26522 20 6C20 5.73478 19.8946 5.48043 19.7071 5.29289C19.5196 5.10536 19.2652 5 19 5Z"
                              fill="currentColor"
                           ></path>
                        </svg>
                     </button>
                  </div>
               </div>
            </div>
         </nav>
         <div className="hidden lg:block navbar-menu relative z-50">
            <div className="lg:hidden navbar-backdrop fixed top-0 left-0 w-full h-full bg-gray-800 opacity-50"></div>
            <nav className="fixed top-0 left-0 bottom-0 max-w-max flex flex-col h-full py-6 px-4 bg-raisin-black ">
               <Link passHref className="inline-block mb-12 dashBoard" href="/">
                  <img
                     className="h-7 mx-auto"
                     src="/img/logo-only-trizzle.svg"
                     alt=""
                  />
               </Link>
               <Tooltip
                  className="relative z-50"
                  delayShow={600}
                  anchorSelect=".dashBoard"
                  content="Dashboard"
                  place="right-end"
               />
               <div className="mb-6">
                  <ul>
                     <li>
                        <Link
                           passHref
                           className={`flex items-center justify-center calendar w-12 h-12 rounded-xl ${
                              router.pathname === '/compromissos'
                                 ? 'bg-cool-gray-900 text-raisin-black border-2 border-yinmn-blue-200'
                                 : 'bg-none text-cool-gray-500 hover:text-cool-gray-200 hover:bg-gray-800'
                           }  `}
                           href="/compromissos"
                        >
                           <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              fill="currentColor"
                              className="w-6 h-6"
                           >
                              <path d="M12.75 12.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM7.5 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM8.25 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM9.75 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM10.5 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM12.75 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM14.25 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM15 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM16.5 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM15 12.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM16.5 13.5a.75.75 0 100-1.5.75.75 0 000 1.5z" />
                              <path
                                 fillRule="evenodd"
                                 d="M6.75 2.25A.75.75 0 017.5 3v1.5h9V3A.75.75 0 0118 3v1.5h.75a3 3 0 013 3v11.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V7.5a3 3 0 013-3H6V3a.75.75 0 01.75-.75zm13.5 9a1.5 1.5 0 00-1.5-1.5H5.25a1.5 1.5 0 00-1.5 1.5v7.5a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5v-7.5z"
                                 clipRule="evenodd"
                              />
                           </svg>
                        </Link>
                        <Tooltip
                           className="relative z-50"
                           delayShow={600}
                           anchorSelect=".calendar"
                           content="Compromissos"
                           place="right-end"
                        />
                     </li>
                     <li>
                        <Link
                           passHref
                           className={`flex items-center justify-center calendar w-12 h-12 rounded-xl ${
                              router.pathname === '/pacientes'
                                 ? 'bg-cool-gray-900 text-raisin-black border-2 border-yinmn-blue-200'
                                 : 'bg-none text-cool-gray-500 hover:text-cool-gray-200 hover:bg-gray-800'
                           }  `}
                           href="/pacientes"
                        >
                           <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              fill="currentColor"
                              className="w-6 h-6"
                           >
                              <path
                                 fillRule="evenodd"
                                 d="M8.25 6.75a3.75 3.75 0 117.5 0 3.75 3.75 0 01-7.5 0zM15.75 9.75a3 3 0 116 0 3 3 0 01-6 0zM2.25 9.75a3 3 0 116 0 3 3 0 01-6 0zM6.31 15.117A6.745 6.745 0 0112 12a6.745 6.745 0 016.709 7.498.75.75 0 01-.372.568A12.696 12.696 0 0112 21.75c-2.305 0-4.47-.612-6.337-1.684a.75.75 0 01-.372-.568 6.787 6.787 0 011.019-4.38z"
                                 clipRule="evenodd"
                              />
                              <path d="M5.082 14.254a8.287 8.287 0 00-1.308 5.135 9.687 9.687 0 01-1.764-.44l-.115-.04a.563.563 0 01-.373-.487l-.01-.121a3.75 3.75 0 013.57-4.047zM20.226 19.389a8.287 8.287 0 00-1.308-5.135 3.75 3.75 0 013.57 4.047l-.01.121a.563.563 0 01-.373.486l-.115.04c-.567.2-1.156.349-1.764.441z" />
                           </svg>
                        </Link>
                        <Tooltip
                           className="relative z-50"
                           delayShow={600}
                           anchorSelect=".patienties"
                           content="Pacientes"
                           place="right-end"
                        />
                     </li>
                     <li>
                        <Link
                           passHref
                           className={`flex items-center justify-center calendar w-12 h-12 rounded-xl ${
                              router.pathname === '/documentos'
                                 ? 'bg-cool-gray-900 text-raisin-black border-2 border-yinmn-blue-200'
                                 : 'bg-none text-cool-gray-500 hover:text-cool-gray-200 hover:bg-gray-800'
                           }  `}
                           href="/documentos"
                        >
                           <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              fill="currentColor"
                              className="w-6 h-6"
                           >
                              <path
                                 fillRule="evenodd"
                                 d="M5.625 1.5c-1.036 0-1.875.84-1.875 1.875v17.25c0 1.035.84 1.875 1.875 1.875h12.75c1.035 0 1.875-.84 1.875-1.875V12.75A3.75 3.75 0 0016.5 9h-1.875a1.875 1.875 0 01-1.875-1.875V5.25A3.75 3.75 0 009 1.5H5.625zM7.5 15a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5A.75.75 0 017.5 15zm.75 2.25a.75.75 0 000 1.5H12a.75.75 0 000-1.5H8.25z"
                                 clipRule="evenodd"
                              />
                              <path d="M12.971 1.816A5.23 5.23 0 0114.25 5.25v1.875c0 .207.168.375.375.375H16.5a5.23 5.23 0 013.434 1.279 9.768 9.768 0 00-6.963-6.963z" />
                           </svg>
                        </Link>
                        <Tooltip
                           className="relative z-50"
                           delayShow={600}
                           anchorSelect=".docs"
                           content="Documentos"
                           place="right-end"
                        />
                     </li>
                     <li>
                        <Link
                           passHref
                           className={`flex items-center justify-center calendar w-12 h-12 rounded-xl ${
                              router.pathname === '/listadeespera'
                                 ? 'bg-cool-gray-900 text-raisin-black border-2 border-yinmn-blue-200'
                                 : 'bg-none text-cool-gray-500 hover:text-cool-gray-200 hover:bg-gray-800'
                           }  `}
                           href="/listadeespera"
                        >
                           <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              fill="currentColor"
                              className="w-6 h-6"
                           >
                              <path
                                 fillRule="evenodd"
                                 d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 6a.75.75 0 00-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 000-1.5h-3.75V6z"
                                 clipRule="evenodd"
                              />
                           </svg>
                        </Link>
                        <Tooltip
                           className="relative z-50"
                           delayShow={600}
                           anchorSelect=".wait"
                           content="Lista de Espera"
                           place="right-end"
                        />
                     </li>

                     <li>
                        <Link
                           passHref
                           className={`flex items-center justify-center calendar w-12 h-12 rounded-xl ${
                              router.pathname === '/tags'
                                 ? 'bg-cool-gray-900 text-raisin-black border-2 border-yinmn-blue-200'
                                 : 'bg-none text-cool-gray-500 hover:text-cool-gray-200 hover:bg-gray-800'
                           }  `}
                           href="/tags"
                        >
                           <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              fill="currentColor"
                              className="w-6 h-6"
                           >
                              <path
                                 fillRule="evenodd"
                                 d="M5.25 2.25a3 3 0 00-3 3v4.318a3 3 0 00.879 2.121l9.58 9.581c.92.92 2.39 1.186 3.548.428a18.849 18.849 0 005.441-5.44c.758-1.16.492-2.629-.428-3.548l-9.58-9.581a3 3 0 00-2.122-.879H5.25zM6.375 7.5a1.125 1.125 0 100-2.25 1.125 1.125 0 000 2.25z"
                                 clipRule="evenodd"
                              />
                           </svg>
                        </Link>
                        <Tooltip
                           className="relative z-50"
                           delayShow={600}
                           anchorSelect=".tags"
                           content="Tags"
                           place="right-end"
                        />
                     </li>
                     <li>
                        <Link
                           passHref
                           className={`flex items-center justify-center calendar w-12 h-12 rounded-xl ${
                              router.pathname === '/atendimentos'
                                 ? 'bg-cool-gray-900 text-raisin-black border-2 border-yinmn-blue-200'
                                 : 'bg-none text-cool-gray-500 hover:text-cool-gray-200 hover:bg-gray-800'
                           }  `}
                           href="/atendimentos"
                        >
                           <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              fill="currentColor"
                              className="w-6 h-6"
                           >
                              <path d="M4.913 2.658c2.075-.27 4.19-.408 6.337-.408 2.147 0 4.262.139 6.337.408 1.922.25 3.291 1.861 3.405 3.727a4.403 4.403 0 00-1.032-.211 50.89 50.89 0 00-8.42 0c-2.358.196-4.04 2.19-4.04 4.434v4.286a4.47 4.47 0 002.433 3.984L7.28 21.53A.75.75 0 016 21v-4.03a48.527 48.527 0 01-1.087-.128C2.905 16.58 1.5 14.833 1.5 12.862V6.638c0-1.97 1.405-3.718 3.413-3.979z" />
                              <path d="M15.75 7.5c-1.376 0-2.739.057-4.086.169C10.124 7.797 9 9.103 9 10.609v4.285c0 1.507 1.128 2.814 2.67 2.94 1.243.102 2.5.157 3.768.165l2.782 2.781a.75.75 0 001.28-.53v-2.39l.33-.026c1.542-.125 2.67-1.433 2.67-2.94v-4.286c0-1.505-1.125-2.811-2.664-2.94A49.392 49.392 0 0015.75 7.5z" />
                           </svg>
                        </Link>
                        <Tooltip
                           className="relative z-50"
                           delayShow={600}
                           anchorSelect=".due"
                           content="Atendimentos"
                           place="right-end"
                        />
                     </li>
                     <li>
                        <Link
                           passHref
                           className={`flex items-center justify-center calendar w-12 h-12 rounded-xl ${
                              router.pathname === '/eventos'
                                 ? 'bg-cool-gray-900 text-raisin-black border-2 border-yinmn-blue-200'
                                 : 'bg-none text-cool-gray-500 hover:text-cool-gray-200 hover:bg-gray-800'
                           }  `}
                           href="/eventos"
                        >
                           <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              fill="currentColor"
                              className="w-6 h-6"
                           >
                              <path
                                 fillRule="evenodd"
                                 d="M6.75 2.25A.75.75 0 017.5 3v1.5h9V3A.75.75 0 0118 3v1.5h.75a3 3 0 013 3v11.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V7.5a3 3 0 013-3H6V3a.75.75 0 01.75-.75zm13.5 9a1.5 1.5 0 00-1.5-1.5H5.25a1.5 1.5 0 00-1.5 1.5v7.5a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5v-7.5z"
                                 clipRule="evenodd"
                              />
                           </svg>
                        </Link>
                        <Tooltip
                           className="relative z-50"
                           delayShow={600}
                           anchorSelect=".events"
                           content="Eventos"
                           place="right-end"
                        />
                     </li>
                     <li>
                        <Link
                           passHref
                           className={`flex items-center justify-center calendar w-12 h-12 rounded-xl ${
                              router.pathname === '/usuarios'
                                 ? 'bg-cool-gray-900 text-raisin-black border-2 border-yinmn-blue-200'
                                 : 'bg-none text-cool-gray-500 hover:text-cool-gray-200 hover:bg-gray-800'
                           }  `}
                           href="/usuarios"
                        >
                           <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              fill="currentColor"
                              className="w-6 h-6"
                           >
                              <path
                                 fillRule="evenodd"
                                 d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z"
                                 clipRule="evenodd"
                              />
                           </svg>
                        </Link>
                        <Tooltip
                           className="relative z-50"
                           delayShow={600}
                           anchorSelect=".users"
                           content="Usuários"
                           place="right-end"
                        />
                     </li>
                  </ul>
               </div>
               <div className="mt-auto">
                  <Link
                     passHref
                     className="flex items-center justify-center w-12 h-12 rounded-xl profile  text-cool-gray-500 hover:text-cool-gray-200 hover:bg-gray-800"
                     href="#"
                  >
                     <svg
                        width="20"
                        height="22"
                        viewBox="0 0 20 22"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                     >
                        <path
                           d="M13.71 11.7099C14.6904 10.9385 15.406 9.8808 15.7572 8.68382C16.1085 7.48684 16.0779 6.21015 15.6698 5.03135C15.2617 3.85255 14.4963 2.83027 13.4801 2.10674C12.4639 1.3832 11.2474 0.994385 10 0.994385C8.75255 0.994385 7.53611 1.3832 6.51993 2.10674C5.50374 2.83027 4.73834 3.85255 4.33021 5.03135C3.92208 6.21015 3.89151 7.48684 4.24276 8.68382C4.59401 9.8808 5.3096 10.9385 6.29 11.7099C4.61007 12.3829 3.14428 13.4992 2.04889 14.9398C0.953495 16.3804 0.26956 18.0912 0.0699967 19.8899C0.0555513 20.0212 0.0671132 20.1541 0.104022 20.2809C0.140931 20.4078 0.202464 20.5261 0.285108 20.6292C0.452016 20.8374 0.69478 20.9707 0.959997 20.9999C1.22521 21.0291 1.49116 20.9517 1.69932 20.7848C1.90749 20.6179 2.04082 20.3751 2.07 20.1099C2.28958 18.1551 3.22168 16.3497 4.68822 15.0387C6.15475 13.7277 8.0529 13.0029 10.02 13.0029C11.9871 13.0029 13.8852 13.7277 15.3518 15.0387C16.8183 16.3497 17.7504 18.1551 17.97 20.1099C17.9972 20.3556 18.1144 20.5825 18.2991 20.7469C18.4838 20.9113 18.7228 21.0014 18.97 20.9999H19.08C19.3421 20.9697 19.5817 20.8372 19.7466 20.6311C19.9114 20.4251 19.9881 20.1622 19.96 19.8999C19.7595 18.0961 19.0719 16.3809 17.9708 14.9381C16.8698 13.4953 15.3969 12.3794 13.71 11.7099ZM10 10.9999C9.20887 10.9999 8.43551 10.7653 7.77772 10.3258C7.11992 9.88623 6.60723 9.26152 6.30448 8.53061C6.00173 7.79971 5.92251 6.99544 6.07686 6.21952C6.2312 5.4436 6.61216 4.73086 7.17157 4.17145C7.73098 3.61204 8.44371 3.23108 9.21964 3.07674C9.99556 2.9224 10.7998 3.00161 11.5307 3.30436C12.2616 3.60711 12.8863 4.1198 13.3259 4.7776C13.7654 5.4354 14 6.20876 14 6.99988C14 8.06075 13.5786 9.07816 12.8284 9.82831C12.0783 10.5785 11.0609 10.9999 10 10.9999Z"
                           fill="currentColor"
                        ></path>
                     </svg>
                  </Link>
                  <Tooltip
                     className="relative z-50"
                     delayShow={600}
                     anchorSelect=".profile"
                     content="Editar Perfil"
                     place="right-end"
                  />
                  <Link
                     passHref
                     className="flex items-center justify-center w-12 h-12 rounded-xl out  text-cool-gray-500 hover:text-cool-gray-200 hover:bg-gray-800"
                     href="#"
                  >
                     <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                     >
                        <path
                           d="M10.59 11.0001L8.29 13.2901C8.19627 13.3831 8.12188 13.4937 8.07111 13.6155C8.02034 13.7374 7.9942 13.8681 7.9942 14.0001C7.9942 14.1321 8.02034 14.2628 8.07111 14.3847C8.12188 14.5065 8.19627 14.6171 8.29 14.7101C8.38296 14.8038 8.49356 14.8782 8.61542 14.929C8.73728 14.9798 8.86799 15.0059 9 15.0059C9.13201 15.0059 9.26272 14.9798 9.38458 14.929C9.50644 14.8782 9.61704 14.8038 9.71 14.7101L13.71 10.7101C13.801 10.615 13.8724 10.5029 13.92 10.3801C14.02 10.1366 14.02 9.86356 13.92 9.6201C13.8724 9.49735 13.801 9.3852 13.71 9.2901L9.71 5.2901C9.61676 5.19686 9.50607 5.1229 9.38425 5.07244C9.26243 5.02198 9.13186 4.99601 9 4.99601C8.86814 4.99601 8.73757 5.02198 8.61575 5.07244C8.49393 5.1229 8.38324 5.19686 8.29 5.2901C8.19676 5.38334 8.1228 5.49403 8.07234 5.61585C8.02188 5.73767 7.99591 5.86824 7.99591 6.0001C7.99591 6.13196 8.02188 6.26253 8.07234 6.38435C8.1228 6.50617 8.19676 6.61686 8.29 6.7101L10.59 9.0001H1C0.734784 9.0001 0.48043 9.10546 0.292893 9.29299C0.105357 9.48053 0 9.73488 0 10.0001C0 10.2653 0.105357 10.5197 0.292893 10.7072C0.48043 10.8947 0.734784 11.0001 1 11.0001H10.59ZM10 9.96937e-05C8.13109 -0.00824409 6.29724 0.507313 4.70647 1.48829C3.11569 2.46927 1.83165 3.87641 1 5.5501C0.880653 5.78879 0.861015 6.06512 0.945406 6.3183C1.0298 6.57147 1.21131 6.78075 1.45 6.9001C1.68869 7.01945 1.96502 7.03909 2.2182 6.95469C2.47137 6.8703 2.68065 6.68879 2.8 6.4501C3.43219 5.17342 4.39383 4.08872 5.58555 3.30809C6.77727 2.52746 8.15582 2.07922 9.57876 2.00969C11.0017 1.94017 12.4174 2.25188 13.6795 2.91261C14.9417 3.57334 16.0045 4.55913 16.7581 5.7681C17.5118 6.97706 17.9289 8.36535 17.9664 9.78948C18.0039 11.2136 17.6605 12.6219 16.9715 13.8689C16.2826 15.1159 15.2731 16.1563 14.0475 16.8825C12.8219 17.6088 11.4246 17.9946 10 18.0001C8.50888 18.0066 7.04615 17.5925 5.77969 16.8053C4.51323 16.0182 3.49435 14.89 2.84 13.5501C2.72065 13.3114 2.51137 13.1299 2.2582 13.0455C2.00502 12.9611 1.72869 12.9808 1.49 13.1001C1.25131 13.2194 1.0698 13.4287 0.985406 13.6819C0.901015 13.9351 0.920653 14.2114 1.04 14.4501C1.83283 16.0456 3.03752 17.4003 4.52947 18.3741C6.02142 19.348 7.74645 19.9055 9.52612 19.9891C11.3058 20.0727 13.0755 19.6793 14.6521 18.8496C16.2288 18.0199 17.5552 16.7841 18.4941 15.2699C19.433 13.7558 19.9503 12.0182 19.9925 10.2371C20.0347 8.45597 19.6003 6.69589 18.7342 5.13893C17.8682 3.58197 16.6018 2.28467 15.0663 1.38121C13.5307 0.477745 11.7816 0.000936146 10 9.96937e-05Z"
                           fill="currentColor"
                        ></path>
                     </svg>
                  </Link>
                  <Tooltip
                     className="relative z-50"
                     delayShow={600}
                     anchorSelect=".out"
                     content="Sair"
                     place="right-end"
                  />
               </div>
            </nav>
         </div>
         <main className="mx-auto  bg-raisin-black-light min-h-[100vh] w-full">
            <div className="container mx-auto">{children}</div>
         </main>
      </>
   );
}
