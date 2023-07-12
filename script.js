function fibonacci(num) {
	while (num<20) {
	if(num==0)
		return 0;
	else if(num==1)
		return 1;
else{
	return fibonacci(num-1)+fibonacci(num-2);
// your code here
	}
	}
}

module.exports = fibonacci;
