function max(arg1, arg2) {
	var arg1listLarger = arg1 > arg2;
	if (arg1listLarger)
		return arg1;
	return arg2;
}

function min(arg1, arg2) {
	var arg1Smaller = arg1 < arg2;
	if (arg1Smaller)
		return arg1;
	return arg2;
}