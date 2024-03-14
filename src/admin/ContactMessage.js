const ContactMessage = ({ item }) => {
  return (
    <>
      <div className="w-full p-3 mb-4 bg-slate-400/20 md:text-[1rem] rounded-md hidden md:block">
        <p className="text-[1rem]">{item?.message}</p>
        <p className="text-[0.8rem] font-bold mt-5">
          {item?.email} - {item?.createdAt}
        </p>
      </div>

      {/* mobile ui */}

      <div className="w-full p-3 mb-4 bg-slate-400/20 text-[0.75rem] rounded-md block md:hidden">
        <p className="">{item?.message}</p>
        <p className="text-[0.75rem] font-bold mt-5">
          {item?.email} - {item?.createdAt}
        </p>
      </div>
    </>
  );
};

export default ContactMessage;
