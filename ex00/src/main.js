function myMegaphone(res) {
  if (res != '') {
    return res.toUpperCase();
  } else {
    return res = "LOUD AND UNBEARABLE FEEDBACK NOISE";
  }    
}

var response = "asd"
response = myMegaphone(response);

console.log(response);

module.exports = myMegaphone;