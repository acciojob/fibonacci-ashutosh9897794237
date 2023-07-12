function fibonacci(num) {
	int n = 0;
	while (num<20) {
	if(num==0)
		return 0;
	if(num==1)
		return 1;

	return n = fibonacci(num-1)+fibonacci(num-2);
// your code here
	}
}

module.exports = fibonacci;
