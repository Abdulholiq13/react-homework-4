import React from 'react';

const Main = () => {
	const [data, setData] = React.useState([]);
	const [value, setValue] = React.useState('');
	return (
		<div className='container mt-10 flex items-center justify-center flex-col gap-10'>
			<form className='max-w-sm mx-auto flex items-center gap-4 justify-center'>
				<div className='mb-5'>
					<label htmlFor='Name' className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
						Your name
					</label>
					<input
						type='name'
						id='name'
						className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
						value={value}
						required
					/>
				</div>
				<div className='mb-5'>
					<label htmlFor='age' className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
						Your age
					</label>
					<input
						type='age'
						id='age'
						className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
						required
					/>
				</div>
				<button
					type='submit'
					className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
				>
					Submit
				</button>
			</form>
			<div className='flex gap-4 justify-start w-full'>
				<div className='card bg-base-100 w-96 shadow-xl flex items-start justify-center flex-col'>
					<figure className='w-full h-[226px] bg-[#f4f4f4]'></figure>
					<div className='card-body'>
						<h2 className='card-title'>Shoes!</h2>
						<p>Age is </p>
						<div className='card-actions justify-end'>
							<div className='badge badge-outline'>Admin</div>
							<div className='badge badge-outline'>Id:</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Main;
