function fibonacci(num) {
	if(num<1)
		return num;
	if(num==1)
		return 2;

	return((4*fibonacci(num-1))+(num-2));
// your code here
}

module.exports = fibonacci;
