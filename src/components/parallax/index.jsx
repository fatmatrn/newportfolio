import React from 'react';

const Parallax = () => {
  return (
    <div className="relative bg-cover bg-center bg-no-repeat h-[40vh] bg-[url('/media/bgdata.jpg')] bg-fixed flex justify-center items-center p-20 text-2xl text-white font-bold">
      {/* Sol altta küçük, yarı saydam üçgen */}
      <div className="absolute bottom-0 left-0 w-0 h-0 border-l-[80px] border-l-transparent border-t-[80px] border-t-blue-500 border-r-[80px] border-r-transparent rotate-45 opacity-70"></div>

      <p className="relative z-10  p-5  bg-black bg-opacity-50 rounded-lg">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid laudantium omnis impedit nihil id doloribus quod, mollitia nisi distinctio ratione provident fugit, facere ipsa recusandae exercitationem vitae, facilis labore voluptatem? Sequi modi accusamus perspiciatis delectus sunt dolores corporis a officia at enim sit sapiente, blanditiis vero, odit ea illo, aspernatur explicabo esse dignissimos velit distinctio.
      </p>

      {/* Sağ üstte küçük, yarı saydam üçgen */}
      <div className="absolute top-0 right-0 w-0 h-0 border-l-[80px] border-l-transparent border-t-[80px] border-t-blue-500 border-r-[80px] border-r-transparent rotate-135 opacity-70"></div>
    </div>
  );
};

export default Parallax;
