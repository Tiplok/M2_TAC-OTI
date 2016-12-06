var money= (function(){
	function money(v,curr) {
		if(v < 0){
			throw new ValueInfZeroExc(v);
		}
		if(curr){
			if(curr.length > 3){
				throw new DeviseSupTroisCarExc(curr);
			} else {
				curr = curr.toUpperCase();
			}
		}
		this.v=v;
		this.curr= curr;
	}

	money.prototype.getCurrency=function () {
		return this.curr;
	};
	money.prototype.getValue=function () {
		return this.v;
	};
	money.prototype.equals=function (otherM) {
		return (otherM.getValue()==this.getValue() && otherM.getCurrency()==this.getCurrency()) ;
	};
	money.prototype.toString=function toString() {
		return this.getValue()+" ("+this.getCurrency()+")" ;
	};


return money;
})();
