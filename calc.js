var status = 0;
var first = 0;
var token = "";
var second = 0;
var memory = 0;

function btnma_onclick()
{
  var restext = document.getElementById("restext")
  memory += Number(restext.value);
}

function btnms_onclick()
{
  var restext = document.getElementById("restext")
  memory -= Number(restext.value);
}

function btnmc_onclick()
{
  memory = 0;
}

function btnmr_onclick()
{
  var restext = document.getElementById("restext")
  restext.value = memory.toString();
}

function btnback_onclick()
{
  var restext = document.getElementById("restext");
  var expr = restext.value;
  var len = expr.length;
  if(len == 1)
    expr = "0";
  else
    expr = expr.substring(0, expr.length - 1);
  if(expr == "-") expr = "0";
  restext.value = expr;
}

function btnclr_onclick()
{
  var restext = document.getElementById("restext");
  restext.value = "0";
  status = 0;
}

function btnnum_onclick(e)
{
  var restext = document.getElementById("restext");
  var expr = restext.value;
  if(expr == "0") expr = "";
  expr += e.value;
  restext.value = expr;
}

function btnpt_onclick()
{
  var restext = document.getElementById("restext");
  var expr = restext.value;
  if(expr.indexOf(".") != -1)
    return;
  expr += ".";
  restext.value = expr;
}

function btnsign_onclick(e)
{
  if(status == 1)
    btneql_onclick();

  var restext = document.getElementById("restext");
  first = Number(restext.value);
  token = e.value;
  restext.value = "0";
  status = 1;
}

function calculate()
{
    if(token == "+")
	  return first + second;
	else if(token == "-")
	  return first - second;
	else if(token == "*")
	  return first * second;
	else if(token == "/")
	{
	  if(second == "0")
	  {
	    alert("divide by zero");
		return 0;
	  }
	  else
	    return first / second;
	}
	else
	{
	  alert("unknown error");
	  return 0;
	}
}

function btneql_onclick()
{
  if(status == 1)
  {
    var restext = document.getElementById("restext");
	second = Number(restext.value);
	var res = calculate();
	restext.value = res.toString();
	status = 2;
  }
  else if(status == 2)
  {
    var restext = document.getElementById("restext");
	first = Number(restext.value);
	var res = calculate();	
	restext.value = res.toString();
  }
}

function btnmin_onclick()
{
  var restext = document.getElementById("restext");
  var val = Number(restext.value);
  val = -val;
  restext.value = val.toString();
}









