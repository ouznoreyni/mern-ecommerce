import { toast } from 'react-toastify';

const error = (message = 'erreur') =>
	toast.error(message, {
		position: 'top-right',
		autoClose: 5000,
		hideProgressBar: false,
		closeOnClick: true,
		pauseOnHover: true,
		draggable: true,
		progress: undefined,
	});

const notify = { error };
export default notify;
