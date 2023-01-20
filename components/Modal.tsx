const Modal = ({ ...props }) => {
  return (
    <div className="absolute bg-black bg-opacity-50 w-full h-full z-10">
      <div className="flex flex-col p-3 w-72 h-auto bg-white gap-3 m-auto relative top-1/4 items-end">
        <button
          onClick={() => props.setIsShow(false)}
          type="button"
          className="w-fit text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
        >
          Close
        </button>
        <img src={props.src} alt="modal" className="w-80" />
      </div>
    </div>
  );
};

export default Modal