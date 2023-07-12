function fibonacci(num) {
	while (num<20) {
	if(num==0)
		return 0;
	if(num==1)
		return 1;

	return fibonacci(num-1)+fibonacci(num-2);
// your code here
	}
}

module.exports = fibonacci;
