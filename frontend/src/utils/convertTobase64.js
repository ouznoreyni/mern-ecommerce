export const converTobase64 = (product) => {
	// here I extract the data from arrayBuffer
	if (!product) return;
	if (product.image && product.image.data !== 'undefined') {
		const { data } = product.image;
		return new Buffer.from(data).toString('base64');
	}
	if (product.type) {
		return new Buffer.from(product.data).toString('base64');
	}
};
