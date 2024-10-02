const ReviewForm = ({ handleSubmit, revText, labelText, defaultValue }) => {
    return (
        <form onSubmit={handleSubmit} className="mb-4">
            <label className="block text-gray-300 text-sm font-bold mb-2" htmlFor="reviewTextarea">
                {labelText}
            </label>
            <textarea
                ref={revText}
                id="reviewTextarea"
                rows={3}
                defaultValue={defaultValue}
                className="shadow appearance-none border border-gray-600 rounded w-full py-2 px-3 text-gray-300 leading-tight focus:outline-none focus:shadow-outline bg-gray-800"
                placeholder="Write your review here..."
            />
            <button
                type="submit"
                className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
                Submit
            </button>
        </form>
    );
};

export default ReviewForm;
