var CheckInputData = function($form) {
  let count = 0;
  let message = "";
  $form.find("input").each((index, item)=>{
    if($(item).val() === "") {
      count++;
      if(message === "") {
        message = $(item).attr("placeholder");
      } else {
        message += " and " + $(item).attr("placeholder");
      }
    }
  });
  if(count > 0) {
    message += (count > 1) ? " are required!" : " is required!";
  }
  return message;
}

exports.CheckInputData = CheckInputData;
