export const FormInput = ({ name, id,type, value, handleChange, label, placeholder }: any) => {
    return (
      <>
            <div className="mb-6">
            <label
              // className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              {label}
            </label>
            <input
              type={type}
              id={id}
              name={name}
              value={value}
              onChange={handleChange}
              placeholder={placeholder}
              className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:placeholder-gray-400"
              required
            />
          </div>
      </>
    )
  }