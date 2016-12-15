QUnit.module("cellule", {
//	setup:function(){alert("setup moneyOps individual test");},
//	teardown:function(){alert("teardown moneyOps individual test");}
});

QUnit.test("test_clickCelluleAvecEntier", function(assert)
{
  	    assert.expect(5);
        var fixture="";
        fixture+=("<table>");
        fixture+=("<tr id=\"tr-test\">");
        fixture+=("</tr>");
        fixture+=("</table>");


        var fixtureNode=document.getElementById("qunit-fixture");
        fixtureNode.innerHTML=fixture;

        var c = new CelluleAvecEntier({style : {width: "50px", height: "30px", border: "solid 1px #000000"}, baliseMere: document.getElementById("tr-test")});
        c.handleEvent("click");
        assert.equal(c.texte,"2");

        c.handleEvent("click");
        assert.equal(c.texte,"3");

        c.handleEvent("click");
        assert.equal(c.texte,"4");

        c.handleEvent("click");
        assert.equal(c.texte,"5");

        c.handleEvent("click");
        assert.equal(c.texte,"6");
}
);

// Le test de click sur la cellule avec prompt sera mieux à faire avec Selenium IDE par exemple

QUnit.test("test_clickCelluleColoree", function(assert)
{
  	    assert.expect(12);
        var fixture="";
        fixture+=("<table>");
        fixture+=("<tr id=\"tr-test\">");
        fixture+=("</tr>");
        fixture+=("</table>");


        var fixtureNode=document.getElementById("qunit-fixture");
        fixtureNode.innerHTML=fixture;

        var c = new CelluleColoree({style : {width: "50px", height: "30px", border: "solid 1px #000000"}, baliseMere: document.getElementById("tr-test")});
        c.handleEvent("click");
        assert.equal(c.couleur,210);

        c.handleEvent("click");
        assert.equal(c.couleur,190);

        c.handleEvent("click");
        assert.equal(c.couleur,170);

        c.handleEvent("click");
        assert.equal(c.couleur,150);

        c.handleEvent("click");
        assert.equal(c.couleur,130);

        c.handleEvent("click");
        assert.equal(c.couleur,110);

        c.handleEvent("click");
        assert.equal(c.couleur,90);

        c.handleEvent("click");
        assert.equal(c.couleur,70);

        c.handleEvent("click");
        assert.equal(c.couleur,50);

        c.handleEvent("click");
        assert.equal(c.couleur,30);

        c.handleEvent("click");
        assert.equal(c.couleur,10);

        c.handleEvent("click");
        assert.equal(c.couleur,10);
}
);
