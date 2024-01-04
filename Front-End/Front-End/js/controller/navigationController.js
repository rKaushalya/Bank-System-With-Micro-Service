
initUI();
function initUI() {
  clearAll();
  $("#homeContent").css('display','block');
  setTheLastView();
}

function clearAll() {
  $("#homeContent,#MyMoneyContent,#paymentContent").css("display","none");
}

function saveLastView(clickedId) {
  switch (clickedId){
    case "homeContent":
      localStorage.setItem("view","HOME");
      break;
    case "MyMoneyContent":
      localStorage.setItem("view","MONEY");
      break;
    case "paymentContent":
      localStorage.setItem("view","PAYMENT");
      break;
  }
}

function setTheLastView() {
  let view = localStorage.getItem("view");
  switch (view){
    case "HOME":
      setView($("#homeContent"));
      break;
    case "MONEY":
      setView($("#MyMoneyContent"));
      break;
    case "PAYMENT":
      setView($("#paymentContent"));
      break;
    default:
      setView($("#homeContent"));
  }
}

function setView(viewOB) {
  clearAll();
  viewOB.css('display','block');
  saveLastView(viewOB.get(0).id);
}

$("#lnkHome").click(function () {
  setView($("#homeContent"));
});
$("#lnkMyMoney").click(function () {
  setView($("#MyMoneyContent"));
});
$("#lnkPayment").click(function () {
  setView($("#paymentContent"));
});
