export const converTobase64 = (product) => {
	console.log('product ', product);
	// here I extract the data from arrayBuffer
	if (product.image && product.image.data !== 'undefined') {
		const { data } = product.image;
		console.log(data);
		const image = new Buffer.from(data).toString('base64');
		return image;
	}
};
