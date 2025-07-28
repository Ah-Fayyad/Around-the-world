const ShowMessage = ({ message }) => {
  return (
    <div className="flex justify-center items-center min-h-[200px] px-4">
      <p
        role="alert"
        aria-live="polite"
        className="text-2xl font-bold text-center text-gray-700 dark:text-gray-300"
      >
        {message}
      </p>
    </div>
  );
};

export default ShowMessage;
