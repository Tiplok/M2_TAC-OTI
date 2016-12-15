QUnit.module("projetjs", {
	//setup:function(assert){alert("setup projetjs individual QUnit.test");},
	//teardown:function(assert){alert("teardown projetjs individual QUnit.test");}
});

QUnit.test("test nombreAuHasard",function(assert)
{
	assert.expect(2);
	var nombreAuHasardOkay = true;
	for(var i = 0; i < 100; i++){
		if(!(1 <= nombreAuHasard(3) <= 3)){
			nombreAuHasardOkay = false;
		}
	}

	assert.equal(nombreAuHasardOkay, true);

	assert.equal(nombreAuHasard(0), 0);
}
);

QUnit.test("test initTableau",function(assert)
{
	assert.expect(7);
	var monTableau = new Tableau(
	    {
	        conteneurHTML: document.body,
	        nbColonnes: 20,
	        nbLignes: 10,
	        styleCellule : {
	            width : "50px",
	            height : "30px",
	            border : "solid 1px #000000"
	        },
	        styleTable : {
	            border : "solid 1px #000000"
	        }
	    }
	);

	assert.equal(monTableau.conteneurHTML, document.body);
	assert.equal(monTableau.nbColonnes, 20);
	assert.equal(monTableau.nbLignes, 10);

	assert.equal(monTableau.styleCellule.width, "50px");
	assert.equal(monTableau.styleCellule.height, "30px");
	assert.equal(monTableau.styleCellule.border, "solid 1px #000000");

	assert.equal(monTableau.styleTable.border, "solid 1px #000000");

}
);


QUnit.test("test initTableauExceptionsConteneurHTML",function(assert)
{
	assert.expect(1);
	assert.throws(function(assert) {
		var monTableau = new Tableau(
	    {
	        conteneurHTML: "document.body",
	        nbColonnes: 20,
	        nbLignes: 10,
	        styleCellule : {
	            width : "50px",
	            height : "30px",
	            border : "solid 1px #000000"
	        },
	        styleTable : {
	            border : "solid 1px #000000"
	        }
	    }
		);
	}, ParametreInvalideExc, "Paramètre invalide");

}
);

QUnit.test("test initTableauExceptionsConteneurHTML2",function(assert)
{
	assert.expect(1);
	assert.throws(function(assert) {
		var monTableau = new Tableau(
	    {
	        conteneurHTML: 35,
	        nbColonnes: 20,
	        nbLignes: 10,
	        styleCellule : {
	            width : "50px",
	            height : "30px",
	            border : "solid 1px #000000"
	        },
	        styleTable : {
	            border : "solid 1px #000000"
	        }
	    }
		);
	}, ParametreInvalideExc, "Paramètre invalide");

}
);


QUnit.test("test initTableauExceptionsNbColonnes",function(assert)
{
	assert.expect(1);
	assert.throws(function(assert) {
		var monTableau = new Tableau(
	    {
	        conteneurHTML: document.body,
	        nbColonnes: "20a",
	        nbLignes: 10,
	        styleCellule : {
	            width : "50px",
	            height : "30px",
	            border : "solid 1px #000000"
	        },
	        styleTable : {
	            border : "solid 1px #000000"
	        }
	    }
		);
	}, ParametreInvalideExc, "Paramètre invalide");

}
);


QUnit.test("test initTableauExceptionsNbColonnes2",function(assert)
{
	assert.expect(1);
	assert.throws(function(assert) {
		var monTableau = new Tableau(
	    {
	        conteneurHTML: document.body,
	        nbColonnes: "aze",
	        nbLignes: 10,
	        styleCellule : {
	            width : "50px",
	            height : "30px",
	            border : "solid 1px #000000"
	        },
	        styleTable : {
	            border : "solid 1px #000000"
	        }
	    }
		);
	}, ParametreInvalideExc, "Paramètre invalide");

}
);


QUnit.test("test initTableauExceptionsNbLignes",function(assert)
{
	assert.expect(1);
	assert.throws(function(assert) {
		var monTableau = new Tableau(
	    {
	        conteneurHTML: document.body,
	        nbColonnes: 20,
	        nbLignes: document.body,
	        styleCellule : {
	            width : "50px",
	            height : "30px",
	            border : "solid 1px #000000"
	        },
	        styleTable : {
	            border : "solid 1px #000000"
	        }
	    }
		);
	}, ParametreInvalideExc, "Paramètre invalide");

}
);


QUnit.test("test initTableauExceptionsStyleCellule",function(assert)
{
	assert.expect(1);
	assert.throws(function(assert) {
		var monTableau = new Tableau(
	    {
	        conteneurHTML: document.body,
	        nbColonnes: 20,
	        nbLignes: 10,
	        styleCellule : "aze",
	        styleTable : {
	            border : "solid 1px #000000"
	        }
	    }
		);
	}, ParametreInvalideExc, "Paramètre invalide");

}
);

QUnit.test("test initTableauExceptionsStyleCellule2",function(assert)
{
	assert.expect(1);
	assert.throws(function(assert) {
		var monTableau = new Tableau(
	    {
	        conteneurHTML: document.body,
	        nbColonnes: 20,
	        nbLignes: 10,
	        styleCellule : 15,
	        styleTable : {
	            border : "solid 1px #000000"
	        }
	    }
		);
	}, ParametreInvalideExc, "Paramètre invalide");

}
);


QUnit.test("test initTableauExceptionsStyleTable",function(assert)
{
	assert.expect(1);
	assert.throws(function(assert) {
		var monTableau = new Tableau(
	    {
	        conteneurHTML: document.body,
	        nbColonnes: 20,
	        nbLignes: 10,
	        styleCellule : {
	            width : "50px",
	            height : "30px",
	            border : "solid 1px #000000"
	        },
	        styleTable : 35
	    }
		);
	}, ParametreInvalideExc, "Paramètre invalide");

}
);


QUnit.test("test initTableauExceptionsStyleTable2",function(assert)
{
	assert.expect(1);
	assert.throws(function(assert) {
		var monTableau = new Tableau(
	    {
	        conteneurHTML: document.body,
	        nbColonnes: 20,
	        nbLignes: 10,
	        styleCellule : {
	            width : "50px",
	            height : "30px",
	            border : "solid 1px #000000"
	        },
	        styleTable : true
	    }
		);
	}, ParametreInvalideExc, "Paramètre invalide");

}
);
