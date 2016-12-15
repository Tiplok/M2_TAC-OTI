function ParametreInvalideExc(_p1) {
	this.p1=_p1;

}

ParametreInvalideExc.prototype.toString=function (){
		return "Paramètre invalide : "+this.p1;
};
