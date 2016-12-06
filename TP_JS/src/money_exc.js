function DevisesIncompatibleExc(_d1,_d2) {
	this.d1=_d1; this.d2=_d2;

}

DevisesIncompatibleExc.prototype.toString=function (){
		return "Devises incompatibles : "+this.d1+" vs "+this.d2;
};

function ValueInfZeroExc(_v1){
	this.v1=_v1;
}

ValueInfZeroExc.prototype.toString=function (){
		return "Valeur inférieur à 0 : "+this.v1;
};

function DeviseSupTroisCarExc(_d1){
	this.d1 = _d1;
}

DeviseSupTroisCarExc.prototype.toString=function (){
		return "Devise supérieur à 3 caractères : "+this.d1;
};

function SoustractionInfZeroExc(_v1, _v2){
	this.v1=_v1; this.v2=_v2;
}

SoustractionInfZeroExc.prototype.toString=function (){
		return "Soustraction inférieur à 0 : "+this.v1+"-"+this.v2;
};
