import React from 'react'

const Footer = () => {
  return (
    <>
    <footer className="  relative bottom-0 bg-white dark:bg-gray-900 bg-gray-800 text-white p-4 text-center  w-full z-10 ">
    <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
            <div className="mb-6 md:mb-0">
            <a href="https://flowbite.com/" className="flex items-center">
                <img src="./media/icons/whiteicon.jpeg" className="h-10 rounded-full border-2 border-orange-500" alt="Logo" />
                    <span className="self-center text-2xl font-semibold whitespace-nowrap m-5 dark:text-white">FATIH YAVUZ</span>
                </a>
            </div>
            <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                <div>
                    <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Resources</h2>
                    <ul className="text-gray-500 dark:text-gray-400 font-medium">
                        <li className="mb-4">
                            <a href="https://flowbite.com/" className="hover:underline">Flowbite</a>
                        </li>
                        <li>
                            <a href="https://tailwindcss.com/" className="hover:underline">Tailwind CSS</a>
                        </li>
                    </ul>
                </div>
                <div>
                    <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Follow us</h2>
                    <ul className="text-gray-500 dark:text-gray-400 font-medium">
                        <li className="mb-4">
                            <a href="https://github.com/themesberg/flowbite" className="hover:underline ">Github</a>
                        </li>
                        <li>
                            <a href="https://discord.gg/4eeurUVvTy" className="hover:underline">Discord</a>
                        </li>
                    </ul>
                </div>
                <div>
                    <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Legal</h2>
                    <ul className="text-gray-500 dark:text-gray-400 font-medium">
                        <li className="mb-4">
                            <a href="#" className="hover:underline">Privacy Policy</a>
                        </li>
                        <li>
                            <a href="#" className="hover:underline">Terms &amp; Conditions</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
            <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="https://flowbite.com/" className="hover:underline">Flowbite™</a>. All Rights Reserved.
            </span>
            <div className="flex mt-4 sm:justify-center sm:mt-0">
                <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                    <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 8 19">
                        <path fillRule="evenodd" d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z" clipRule="evenodd"/>
                    </svg>
                    <span className="sr-only">Facebook page</span>
                </a>
                <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
                    <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 21 16">
                        <path d="M16.942 1.556a16.3 16.3 0 0 0-4.126-1.3 12.04 12.04 0 0 0-.529 1.1 15.175 15.175 0 0 0-4.573 0 11.585 11.585 0 0 0-.535-1.1 16.274 16.274 0 0 0-4.129 1.3A17.392 17.392 0 0 0 .182 13.218a15.785 15.785 0 0 0 4.963 2.521c.41-.564.773-1.16 1.084-1.785a10.63 10.63 0 0 1-1.706-.83c.143-.106.283-.217.418-.33a11.664 11.664 0 0 0 10.118 0c.137.113.277.224.418.33-.544.328-1.116.606-1.71.832a12.52 12.52 0 0 0 1.084 1.785 16.46 16.46 0 0 0 5.064-2.595 17.286 17.286 0 0 0-2.973-11.59ZM6.678 10.813a1.941 1.941 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.919 1.919 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Zm6.644 0a1.94 1.94 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.918 1.918 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Z"/>
                    </svg>
                    <span className="sr-only">Discord community</span>
                </a>
                <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
                <svg
  className="w-4 h-4"
  aria-hidden="true"
  xmlns="http://www.w3.org/2000/svg"
  fill="currentColor"
  viewBox="0 0 16 16"
>
  <path
    fillRule="evenodd"
    d="M8 0a8 8 0 0 0-2.54 15.586c.4.073.547-.174.547-.387 0-.191-.007-.698-.01-1.37-2.226.482-2.697-1.073-2.697-1.073-.364-.924-.888-1.17-.888-1.17-.727-.497.055-.487.055-.487.803.056 1.226.825 1.226.825.715 1.227 1.873.872 2.328.666.072-.517.28-.872.507-1.072-1.77-.2-3.63-.885-3.63-3.948 0-.872.311-1.585.825-2.143-.083-.2-.358-1.017.078-2.12 0 0 .67-.214 2.2.825a7.677 7.677 0 0 1 2-.27c.682 0 1.37.092 2 .27 1.53-1.04 2.2-.825 2.2-.825.436 1.103.162 1.92.08 2.12.514.558.825 1.271.825 2.143 0 3.07-1.86 3.748-3.64 3.948.286.247.54.736.54 1.487 0 1.073-.01 1.938-.01 2.205 0 .213.146.463.55.385A8 8 0 0 0 8 0z"
    clipRule="evenodd"
  />
</svg>
<span className="sr-only">GitHub page</span>
                </a>
                <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
                <svg
  className="w-4 h-4"
  aria-hidden="true"
  xmlns="http://www.w3.org/2000/svg"
  fill="currentColor"
  viewBox="0 0 16 16"
>
  <path d="M1.146 0C.513 0 0 .513 0 1.146v13.708C0 15.487.513 16 1.146 16H15.85C16.487 16 17 15.487 17 14.854V1.146C17 .513 16.487 0 15.85 0H1.146zm0 1.5h14.608c.35 0 .642.292.642.646v14.608c0 .354-.292.646-.642.646H1.146c-.354 0-.646-.292-.646-.646V2.146c0-.354.292-.646.646-.646zM4.5 4.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm-.21 4.12H4.71v7.03h-3.23v-7.03h3.23zm11.575 7.03h-3.23v-3.67c0-.872-.017-1.99-1.215-1.99-1.217 0-1.404.95-1.404 1.93v3.73h-3.23v-7.03h3.11v1.01h.043c.433-.82 1.49-1.68 3.075-1.68 3.29 0 3.898 2.164 3.898 4.96v6.73z" />
</svg>
<span className="sr-only">LinkedIn page</span>

                </a>
            </div>
        </div>
    </div>
</footer>

    </>
  )
}

export default Footer